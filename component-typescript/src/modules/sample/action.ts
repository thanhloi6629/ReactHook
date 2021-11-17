export const types = {
    SET_NAME: 'sample/SET_NAME' as const,
}
export const setName = (payload: string) => ({
    type: types.SET_NAME,
    payload,
})

type Actions = (ReturnType<typeof setName>);
export default Actions;