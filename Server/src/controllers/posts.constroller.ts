import { NextFunction, Request, Response } from "express";
import { CreatePostDto } from "../dtos/posts.dto";
import { Post } from "../interfaces/posts.interface";
import PostService from "../services/posts.service";

class PostsController {
  public PostService = new PostService();

  public getPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllPostsData: Post[] = await this.PostService.findAllPost();
      res.status(200).json({ data: findAllPostsData, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };

  public getPostById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const postId: number = Number(req.params.id);

    try {
      const findOnePostData: Post = await this.PostService.findPostById(postId);
      res.status(200).json({ data: findOnePostData, message: "findOne" });
    } catch (error) {
      next(error);
    }
  };

  public createPost = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const postData: CreatePostDto = req.body;

    try {
      const createPostData: Post = await this.PostService.createPost(postData);
      res.status(201).json({ data: createPostData, message: "created" });
    } catch (error) {
      next(error);
      console.log("but why?");
    }
  };

  public updatePost = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const postId: number = Number(req.params.id);
    const postData: Post = req.body;

    try {
      const updatePostData: Post = await this.PostService.updatePost(
        postId,
        postData
      );
      res.status(200).json({ data: updatePostData, message: "updated" });
    } catch (error) {
      next(error);
    }
  };

  public deletePost = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const postId: number = Number(req.params.id);

    try {
      const deletePostData: Post = await this.PostService.deletePostData(
        postId
      );
      res.status(200).json({ data: deletePostData, message: "deleted" });
    } catch (error) {
      next(error);
    }
  };
}

export default PostsController;
