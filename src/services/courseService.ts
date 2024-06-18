import api from "./api";

export type EpisodeType = {
    id:number;
    name: string ;
    synopsis : string;
    order : number ;
    videoUrl: string;
    secondsLong: number ;
}

export type CourseType = {
    id : number ;
    name: string ;
    thumbnailUrl : string ;
    synopsis : string;
    episodes?:EpisodeType [];
}

const courseService = {
    getNewestCourses : async () =>{
        const res = await api.get('/courses/newest').catch((error) =>{
            return error.response;
        })
        return res;
    },
    getFeaturedCourse : async() => {
        const token = sessionStorage.getItem("onebitflix-token");
        const res = await api.get("/courses/featured",{
            headers :{
                Authorization : `Bearer ${token}`,
            }
        }).catch((error)=>{
            return error.response
        });
            return res
    },
    addToFav: async (courseId:number | string ) => {
        const token = sessionStorage.getItem("onebitflix-token");

        const res = await api.post ("/favorites",{courseId},{
            headers:{
                Authorization : `Bearer ${token}`
        }
        }).catch(error =>{
            return error.response;
        });
            return res 
    },
    removeFav: async (courseId:number | string) =>{
        const token = sessionStorage.getItem("onebitflix-token");

        const res = await api. delete ("/favorites",{
            headers:{
                Authorization : `Bearer ${token}`
            },
            data:{courseId},
        }).catch((error)=>{
            return error.response
        }); return res
    },
    getFavCourses : async() =>{
        const token = sessionStorage.getItem("onebitflix-token");

        const res = await api.get("/favorites",{
            headers:{
                Authorization : `Bearer ${token}`},
        })
        .catch((error)=>{
            return error.response
        });return res
    }
}

export default courseService