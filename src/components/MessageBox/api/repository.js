import GlobalConfig from "../../../globalConfig/globalConfig";

export const getAllConversationsByReceiver = {
  method: "GET",
  headers: GlobalConfig.getHeaders(["JSON"]),
};

export const getAllConversationsBySender = {
  method: "GET",
  headers: GlobalConfig.getHeaders(["JSON"]),
};

export const getByQueryId = {
  method: "GET",
  headers: GlobalConfig.getHeaders(["JSON"]),
};

export const markMessageRead = {
  method: "POST",
  url : `${GlobalConfig.API_ROOT}admin/conversation/markread`,
  headers: GlobalConfig.getHeaders(["JSON"]),
};





