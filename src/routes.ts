import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";


export function CreateCourse(request: Request, response: Response) {

  CreateCourseService.execute({
    name: "NodeJS",
    duration: 10,
    educator: "Henryque"
  });

  CreateCourseService.execute({
    name: "Elixir",
    educator: "Felype"
  });

  return response.json({message: "Proccess finished!"})
}