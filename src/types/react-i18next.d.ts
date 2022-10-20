import "react-i18next";

import common from "translations/pt-BR/common.json";
import screen from "translations/pt-BR/screen.json";

declare module "react-i18next" {
  interface Resources {
    common: typeof common;
    screen: typeof screen;
  }
}
