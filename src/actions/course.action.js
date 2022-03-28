import { courseConstants } from "../constaint";
import { usersServices } from "../services";
import { cookiesUtil } from "../utilities";
import { courseService } from "../services";

export const courseAction = {
    getAllCourse
};


function getAllCourse(){
    return (dispatch)=>{
        dispatch(request())
        console.log("Course Action get all has called")

        courseService.getAll().then(
            (courses)=>{
                dispatch(success(courses))
                console.log("course đã trả ve72 nè: ",{courses})
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})
                console.log("course đã trả ve72 nè: ",{error})

            }
        )

        





        function request() {
            return { type: courseConstants.GET_COURSES_REQUEST };
          }
          function success(courses) {
            return {type: courseConstants.GET_COURSES_SUCCESS, courses };
          }
          function failure(error) {
            return { type: courseConstants.GET_COURSES_FAILURE, error };
          }
    }
}