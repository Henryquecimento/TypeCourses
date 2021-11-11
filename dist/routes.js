"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourse = void 0;
var CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function CreateCourse(request, response) {
    CreateCourseService_1.default.execute({
        name: "NodeJS",
        duration: 10,
        educator: "Henryque"
    });
    CreateCourseService_1.default.execute({
        name: "Elixir",
        educator: "Felype"
    });
    return response.json({ message: "Proccess finished!" });
}
exports.CreateCourse = CreateCourse;
