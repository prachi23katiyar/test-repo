// import {AxiosService} from "../../../services/apiService";
// import GlobalConfig from "../../../globalConfig/globalConfig";
//
// import {
//     getAllConversationsByReceiver,
//     getAllConversationsBySender,
//     getByQueryId,
//     markMessageRead
//
// } from "./repository";
//
//
class MessageBoxServices {
    // getAllConversationsByReceiver(param) {
    //     getAllConversationsByReceiver.url = `${GlobalConfig.API_ROOT}admin/conversation/queries/receiver/${param}`;
    //     const api = new AxiosService(getAllConversationsByReceiver);
    //     return api.doAjaxPost();
    // }
    //
    // getAllConversationsBySender(param) {
    //     getAllConversationsBySender.url = `${GlobalConfig.API_ROOT}admin/conversation/queries/sender/${param}`;
    //     const api = new AxiosService(getAllConversationsBySender);
    //     return api.doAjaxPost();
    // }
    //
    // getByQueryId(param) {
    //     getByQueryId.url = `${GlobalConfig.API_ROOT}admin/conversation/queryid/${param}`;
    //     const api = new AxiosService(getByQueryId);
    //     return api.doAjaxPost();
    // }
    //
    // markMessageRead(params) {
    //     markMessageRead.params = params;
    //     const api = new AxiosService(markMessageRead);
    //     return api.doAjaxPost();
    // }

}
//
export const MessageBoxService = new MessageBoxServices();
