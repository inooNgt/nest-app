export function request(url: string, opts?: any): any {
  if (!opts) opts = {};
  if (!opts.headers) opts.headers = {};
  opts.headers["Content-Type"] = `application/json; charset=UTF-8`;
  const remoteUrl = `http://127.0.0.1:3001${url}`;
  return new Promise((resolve, reject) => {
    fetch(remoteUrl, opts)
      .then((res: any) => res.json())
      .then((res) => {
        console.log("resolve", res);
        if (res.statusCode === 200) {
          resolve(res);
        } else {
          reject({
            statusCode: res.statusCode,
            message: res.message,
          });
          window.Message.error(res.message);
        }
      })
      .catch((e) => {
        console.log("catch", e);
        reject(e);
        window.Message.error(e.message);
      });
  });
}
