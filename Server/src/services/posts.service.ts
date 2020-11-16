import * as bcrypt from "bcrypt";
import { CreatePostDto } from "../dtos/posts.dto";
import HttpException from "../exceptions/HttpException";
import { Post } from "../interfaces/posts.interface";
import postModel from "../models/posts.model";
import { isEmptyObject } from "../utils/util";

class PostService {
  public posts = postModel;

  public async findAllPost(): Promise<Post[]> {
    const posts: Post[] = await this.posts.findAll();
    return posts;
  }

  public async findpostById(postId: number): Promise<Post> {
    const findpost: Post = await this.posts.findByPk(postId);
    if (!findpost) throw new HttpException(409, "You're not post");

    return findpost;
  }

  public async createpost(postData: CreatePostDto): Promise<Post> {
    if (isEmptyObject(postData))
      throw new HttpException(400, "You're not postData");

    // const findpost: Post = await this.posts.findOne({
    //   where: { email: postData.email },
    // });
    // if (findpost)
    //   throw new HttpException(
    //     409,
    //     `You're email ${postData.email} already exists`
    //   );

    const createPostData: Post = await this.posts.create({
      ...postData,
    });

    return createPostData;
  }

  public async updatePost(postId: number, postData: Post): Promise<Post> {
    if (isEmptyObject(postData))
      throw new HttpException(400, "You're not postData");

    const updatePost: Post = await this.posts.update(
      { ...postData },
      { where: { id: postId } }
    );
    if (!updatePost) throw new HttpException(409, "You're not post");

    return updatePost;
  }

  public async deletePostData(postId: number): Promise<Post> {
    const deletePost: Post = await this.posts.destroy({
      where: { id: postId },
    });
    if (!deletePost) throw new HttpException(409, "You're not post");

    return deletePost;
  }
}

export default PostService;
