export function request(url: string, opts?: any): any {
  if (!opts) opts = {};
  if (!opts.headers) opts.headers = {};
  opts.headers["Content-Type"] = `application/json; charset=UTF-8`;
  const remoteUrl = `http://127.0.0.1:3001${url}`;
  return fetch(remoteUrl, opts).then((res: any) => res.json());
}
