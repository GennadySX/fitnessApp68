/*
 * @author GennadySX
 * @created at 2022
 **/

/**
 * Для читабельного оторажения данных в консоле
 * @param msg
 * @param obj
 * @param prettier
 */
export const consolePrettier = (msg: string, obj: any, prettier?: boolean) => {
  console.log(msg, prettier ? JSON.stringify(obj, null, 50) : obj)
}
