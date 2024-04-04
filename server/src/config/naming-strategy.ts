import { DefaultNamingStrategy } from 'typeorm';

export class MyNamingStrategy extends DefaultNamingStrategy {
  tableName(targetName: string, userSpecifiedName: string | undefined): string {
    if (userSpecifiedName) return userSpecifiedName;
    return parseName(targetName);
  }
  columnName(propertyName: string, customName: string): string {
    if (customName) return customName;
    return parseName(propertyName);
  }
}
function parseName(targetName: string): string {
  if (!targetName) return '';
  let str: string = '';
  for (let i = 0; i < targetName.length; ++i) {
    const code = targetName[i];
    if (code >= 'A' && code <= 'Z') {
      if (i != 0) {
        str = str.concat('_');
      }
      str = str.concat(code.toLocaleLowerCase());
    } else {
      str = str.concat(code);
    }
  }
  return str;
}
