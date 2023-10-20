import { httpAxios } from "@/helper/httpHelper";

export async function  addTask(task){
  const result= await httpAxios.post("/api/task",task)
  .then((response) => response.data);
  return result;
  

}

export async function getTaskOfUser(userId){

  const result= await httpAxios.get(`/api/users/${userId}/task`)
  .then((response) => response.data);
  return result;
  
}


export async function deleteTask(taskId){

  const result= await httpAxios.delete(`/api/task/${taskId}`)
  .then((response) => response.data);
  return result;
  
}