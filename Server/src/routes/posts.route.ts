import { Router } from "express";
import PostController from "../controllers/posts.constroller";
import { CreatePostDto } from "../dtos/posts.dto";
import Route from "../interfaces/routes.interface";
import validationMiddleware from "../middlewares/validation.middleware";
class PostRoute implements Route {
  public path = "/posts";
  public router = Router();
  public PostController = new PostController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.PostController.getPosts);
    this.router.get(`${this.path}/:id(\\d+)`, this.PostController.getPostById);
    this.router.post(
      `${this.path}`,
      validationMiddleware(CreatePostDto),
      this.PostController.createPost
    );
    this.router.put(
      `${this.path}/:id(\\d+)`,
      validationMiddleware(CreatePostDto, true),
      this.PostController.updatePost
    );
    this.router.delete(
      `${this.path}/:id(\\d+)`,
      this.PostController.deletePost
    );
  }
}

export default PostRoute;
