import { rankingConstants } from "../constaint";
import { rankingService } from "../services/ranking.services";
export const rankingActions = {
    changePagination,
}


function changePagination(page){
    return (dispatch)=>{
        dispatch(request())
        function request() {
            return { type: rankingConstants.CHANGE_PAGINATION_REQUEST , page: page};
        }
    }
}