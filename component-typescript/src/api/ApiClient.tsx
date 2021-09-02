import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { stringify } from 'qs';
import { getLocalStorage } from 'utility/browserStorageUtil';

const domainUrl = 'http://localhost:8080';
// const domainUrl = process.env.REACT_APP_API_BASE_URL;
type QueryObject = {[key: string]: string|number|boolean}




export default class ApiClient {
  /**
   * @param url リクエストURL
   * @param params GETパラメータ
   */
  static async get(url: string, params: object, query?: undefined|{[key: string] : string}|string,
    ): Promise<AxiosResponse> {
    let requestUrl = query ? `${url}?${stringify(query)}` : url;
    if(typeof query === 'string'){
      requestUrl = `${url}?${query}`;
    }
    const response = await axios.get(domainUrl + requestUrl, {
      params,
      headers: await this.getHeaders(),
       // validateStatus,
      // @see https://github.com/axios/axios/issues/86#issuecomment-311788525
      data: {},
    })
    return response;
  }


  private static async getHeaders(contentType : string = 'application/x-www-form-urlencoded') {
    return {
      'Content-Type': contentType,
        authorization: await this.getToken(),
    };
  }

  private static async getToken() {
    const accessToken = getLocalStorage('accessToken');

    return `Bearer ${accessToken}`;
  }


  
  static async post(url: string, query: QueryObject, params: any, appendUrl?: string): Promise<AxiosResponse> {
    const requestUrl = `${url}?${stringify(query)}${appendUrl || ''}`;

    const config : AxiosRequestConfig = {
      headers: await this.getHeaders(),
      // validateStatus,
    };

    const param = this.convertToPostData(params, undefined, undefined);
    const response = await axios.post(domainUrl + requestUrl, param, config);
    return response;
  }

  private static convertToPostData(obj: any, form: any, namespace: any) {
    const fd = form || new URLSearchParams();
    let formKey;

    for (const property in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(property)) {
        if (namespace) {
          if (!isNaN(Number(property))) {
            formKey = `${namespace}[${property}]`;
          } else {
            formKey = `${namespace}.${property}`;
          }
        } else {
          formKey = property;
        }

        if (obj[property] instanceof Date) {
          fd.append(formKey, obj[property].toISOString());
        } else if (typeof obj[property] === 'object'
                && !(obj[property] instanceof File)
                && !(obj[property] instanceof Blob)) {
          this.convertToPostData(obj[property], fd, formKey);
        } else {
          fd.append(formKey, obj[property]);
        }
      }
    }
    return fd;
  }


  
  static async postFile(
    url: string, query: QueryObject, fileKey: string, file: File,
  ): Promise<AxiosResponse> {
    const requestUrl = `${url}?${stringify(query)}`;

    const config : AxiosRequestConfig = {
      headers: await this.getHeaders(),
      // validateStatus,
    };

    const formData = new FormData();
    formData.append(fileKey, file);
    const response = await axios.post(domainUrl + requestUrl, formData, config);
    return response;
  }

/**
   * DELETE
   *
   * @param url
   * @param params
   */
 static async delete(url: string, params: any): Promise<AxiosResponse> {
  const requestUrl = `${url}?${stringify(params)}`;

  const config : AxiosRequestConfig = {
    headers: await this.getHeaders(),
    // validateStatus,
  };


  const response = await axios.delete(domainUrl + requestUrl, config);
  return response;
}

}



