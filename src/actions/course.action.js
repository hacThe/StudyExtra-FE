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
                console.log(courses.data)
                dispatch(success(courses.data))
            },
            (error)=>{
                dispatch(failure(error.toString()))
                console.log({error})

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