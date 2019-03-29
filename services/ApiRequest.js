import Axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const ApiRequest = async url =>
  await Axios.get(publicRuntimeConfig.apiUrl + url);
