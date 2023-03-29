export const SUCCESS_ADD_CONTENT = 'Thêm  thông tin bài khảo sát thành công';
export const SUCCESS_EDIT_CONTENT = 'Cập nhật thông tin bài khảo sát thành công';

export const SUCCESS_ADD_IMAGE = 'Thêm ảnh thành công';
export const SUCCESS_LOGIN = 'Đăng nhập thành công';
export const SUCCESS_UPLOAD = 'Upload thành công';
export const SUCCESS_DELETE = 'Xóa thành công';

export const ERROR_UPLOAD_FILE = (value: number) => `Vui lòng chọn ảnh dưới ${value} MB`;
export const ERROR_NO_QUESTIONID = 'BE chưa trả questionID sau khi lưu nên chưa thể lưu ảnh';
export const ERROR_SERVER = 'Lỗi server';
export const ERROR_NOT_FOUND_API = 'Không có dữ liệu';
export const ERROR_EXPIRED_TOKEN = 'Đã hết thời hạn truy cập. Vui lòng Đăng nhập lại';
export const ERROR_EXPIRED_ACCOUNT = 'Tài khoản chưa được kích hoạt hoặc bị khóa!';
export const ERROR_EMPTY_FIELD = 'Không bỏ trống trường này';
export const ERROR_DELETE_EXIST_QUESTION = 'Không thể xóa câu hỏi đang dùng trong bài khảo sát';

export const VALIDATE_BEGIN_DATE = 'Vui lòng chọn ngày bắt đầu';
export const VALIDATE_END_DATE = 'Vui lòng chọn ngày kết thúc';
export const VALIDATE_BEGIN_DATE_LIMITATION = 'Chọn ngày bắt đầu nhỏ hơn ngày kết thúc';
export const VALIDATE_END_DATE_LIMITATION = 'Chọn ngày kết thúc lớn hơn ngày bắt đầu';
export const VALIDATE_TEXT_LIMITATION = (value: number) => `Không nhập quá ${value} ký tự`;

export const VALIDATE_QUESTION_CONTENT = 'Vui lòng nhập nội dung câu hỏi';
export const VALIDATE_ANSWER_CONTENT = 'Vui lòng nhập nội dung câu trả lời';
export const VALIDATE_QUESTION = 'Vui lòng nhập đủ nội dung cần thiết';
export const VALIDATE_DELETE_ROW = (value: number) => `Cần ít nhất ${value} trường`;

export const SURVEY_ERROR_FULFILL_REQUIREMENTS =
  'Vui lòng hoàn thành "Thông tin chung" và ấn "Lưu"';
export const SURVEY_ERROR_ADD_QUESTION_EXISTED = 'Câu hỏi này đã được nhập';

export const SUCCESS_CHANGE_STATUS_DEFAULT = 'Thay đổi trạng thái bài khảo sát thành công';
export const SUCCESS_LOCK_SURVEY_STATUS = 'Khoá bài khảo sát thành công';
export const SUCCESS_PUBLISH_SURVEY_STATUS = 'Phát hành bài khảo sát thành công';
export const SUCCESS_DRAFT_SURVEY_STATUS = 'Soạn thảo bài khảo sát thành công';
export const SUCCESS_CHANGE_SURVEY_STATUS_FUNC = (status: string) =>
  `Đổi trạng thái ${status} thành công`;

export const SUCCESS_SUBMIT_SURVEY = 'Gửi bài khảo sát thành công';
export const ERROR_EMPTY_ANSWER_SURVEY = 'Vui lòng trả lời câu hỏi này';
export const ERROR_NO_ANSWER_SUBMIT =
  'Vui lòng trả lời các câu hỏi có dấu * trước khi nhấn nút gửi ';
export const ERROR_SUBMIT_SURVEY = 'Có lỗi xảy ra không thể gửi bài khảo sát';

export const SUCCESS_COPY_SURVEY = 'Sao chép bài khảo sát thành công';
export const ERROR_COPY_LINK = 'Sao chép thất bại';

export const SUCCESS_EXPORT_EXCEL = 'Xuất excel thành công';
export const ERROR_EXPORT_EXCEL_NO_DATA = 'Không có dữ liệu để xuất excel';

export const ERROR_CHANGE_TAB_3_4 = 'Vui lòng hoàn thành "Nội dung" và "Danh sách thành viên"';

export const ERROR_NO_PEOPLE_DO_SURVEY = 'Chưa có người làm khảo sát nào';

export const ERROR_SEND_SMS = 'Gửi tin nhắn thất bại';
export const SUCCESS_SEND_SMS = 'Gửi tin nhắn thành công';

export const ERROR_GET_CLIENT_INFO = 'Lấy thông tin trình duyệt thất bại';

export const ERROR_NO_FILE_SAVED_RESPONSE = 'No files have been saved';
export const ERROR_NO_FILE_SAVED = 'Chưa có file nào được lưu trữ';

export const WARNING_EDIT_SURVEY_IN_MODAL =
  'Bài khảo sát này đã được phát hành. Nếu điều chỉnh có thể ảnh hưởng đến kết quả khảo sát. Bạn có muốn tiếp tục không?';

export const ERROR_NO_ANSWER_QUESTION_TYPE10 =
  'Vui lòng trả hoàn thành câu hỏi người được đánh giá';

export const ERROR_NO_PERMISSION_VIEW_SURVEY_RESULT =
  'Bạn không được phân quyền để xem nội dung này';
export const ERROR_BONUS_CODE =
  'Số lượng nhận thưởng an toàn phải nhỏ hơn hoặc bằng số lượng nhận thưởng tối đa';

export const ERROR_SAVE_EVALUATED_QUESTION = 'Không có người được đánh giá được chọn';

export const CONFIRM_DELETE_MODAL = 'Bạn có chắc muốn xóa?';

export const CONFIRM_PUBLISH_ANSWER =
  'Nếu chọn Có, người làm khảo sát sẽ thấy toàn bộ kết quả khảo sát của bài khảo sát này. Bạn có đồng ý công khai kết quả khảo sát không?';

export const ERROR_UPDATE_QUESTION_EXIST_IN_SURVEY =
  'Không thể chỉnh sửa câu hỏi đã nằm trong bài khảo sát';

export const ERROR_UPDATE_QUESTION_IN_SURVEY_PUBLISH =
  'Câu hỏi này và tất cả dữ liệu phản hồi được thu thập trước đó cho nó sẽ bị xóa vĩnh viễn. Bạn có muốn tiếp tục không?';

export const WARNING_UPDATE_QUESTION_IN_SURVEY =
  'Bài khảo sát đã phát hành, nếu sửa thì dữ liệu phản hồi được thu thập trước đó cho nó sẽ bị thay đổi. Bạn có muốn tiếp tục không';

export const CONFIRM_PUBLISH_SURVEY = 'Bạn có muốn chuyển trạng thái thành Phát hành hay không ?';
export const CONFIRM_DRAFTING_SURVEY =
  'Bạn có muốn quay trở lại trạng thái Đang soạn thảo hay không ?';

export const ERROR_UPLOAD_EXCEL_QUESTION = 'Có lỗi hệ thống, không thể upload excel vào lúc này';

export const ERROR_NOT_COMPLETED_EVALUATED_QUESTION =
  "Vui lòng hoàn thành câu hỏi 'Người được đánh giá' ở tab 'Nội dung và bấm lưu'";

export const WARNING_EXIT_EDIT_SURVEY = 'Bạn có muốn lưu các thông tin thay đổi không ?';

export const SUCCESS_EXIT_AND_SAVE_SURVEY = 'Cập nhật thông tin bài khảo sát thành công';

export const SUCCESS_ADD_QUESTION_CONTENT = 'Thêm  thông tin câu hỏi thành công';
export const SUCCESS_EDIT_QUESTION_CONTENT = 'Cập nhật thông tin câu hỏi thành công';

export const NO_DATA_IN_TABLE = 'Không có dữ liệu';
export const NO_PERMISSION_VIEW_TABLE = 'Bạn không có quyền xem danh sách này';

export const EXCEED_MAX_LENGTH_INPUT_TEXT = (fieldInput = 'chữ', maxLength = 255) =>
  `Vui lòng nhập độ dài ${fieldInput} nhỏ hơn ${maxLength} kí tự`;

export const NO_PEOPLE_NO_DO_SURVEY =
  'Danh sách chưa hoàn thành bài khảo sát đang không có dữ liệu';

export const ERROR_NOT_COMPLETED_SURVEY = 'Vui lòng hoàn thành thông tin bài khảo sát';

export const ERROR_NO_QUESTION_VALID_UPLOAD = 'Không có câu hỏi nào hợp lệ để upload';

export const ERROR_MOVE_TO_EVALUATED_QUESTION =
  'Không thể di chuyển tới câu hỏi "người được đánh giá"';

export const ERROR_NUMBER_ORDER_QUESTION = 'Vui lòng nhập số nguyên dương';

export const ERROR_NO_VALUE_IN_ORDER_QUESTION = 'Vui lòng nhập thứ tự câu hỏi';

export const ERROR_EXCEED_NUMBER_ORDER_QUESTION = (maxNumber: string) =>
  `Vui lòng nhập thứ tự câu hỏi nhỏ hơn hoặc bằng ${maxNumber}`;
export const ERROR_CHECK_QUESTION_UPLOAD = 'Phát hiện file có sự thay đổi. Vui lòng chọn lại file';

export const SUCCESS_DELETE_QUESTION_IN_SURVEY = 'Xoá câu hỏi trong bài khảo sát thành công';

export const SUCCESS_MOVE_QUESTION_IN_SURVEY = (index: number) =>
  `Di chuyển câu hỏi tới vị trí thứ ${index} thành công`;

export const SUCCESS_MOVE_SECTION_IN_SURVEY = 'Di chuyển mục thành công';

export const ERROR_NOTIFY_WHEN_FIELD_INPUT_NOT_VALID =
  'Nhập thiếu/sai các trường thông tin bắt buộc';

export const ERROR_SELECT_FIELD_INPUT_NOT_VALID = (fieldName: string) =>
  `Vui lòng chọn ${fieldName} hợp lệ`;

export const ERROR_TEXT_FIELD_INPUT_NOT_VALID = (fieldName: string) =>
  `Vui lòng nhập ${fieldName} hợp lệ`;

export const ERROR_NO_CATEGORY_MATRIX_LIST_VALUE = (index: number) =>
  `Vui lòng nhập danh mục cho cột ${index}`;
