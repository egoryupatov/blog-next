import Image from "next/image";
import Button from "@/components/Button/Button";
import { transformDate } from "@/utils/transformDate";
import { IPost } from "@/types/post.type";
import Link from "next/link";

interface PostProps {
  post: IPost;
}

export default function Post(props: PostProps) {
  return (
    <article className="post">
      <div className="post_header">
        <div className="post_header_left">
          <div className="post_header_avatar">
            <Image
              src={`${props.post.category.avatar}`}
              alt={"user avatar"}
              width={"36"}
              height={"36"}
              className="avatar"
            />
          </div>
          <div className="post_header_info">
            <div className="post_header_info_category">
              <Link href={`/category/${props.post.category.id}`}>
                {props.post.category.name}
              </Link>
            </div>
            <div className="post_header_info_publish">
              <div className="post_header_info_publish_login">
                <Link href={`/user/${props.post.user.id}`}>
                  {props.post.user.login}
                </Link>
              </div>
              <div className="post_header_info_publish_date">
                {transformDate(props.post.publishDate)}
              </div>
            </div>
          </div>
        </div>
        <div className="post_header_right">
          <Button text={"Подписаться"} style={"btn_subscribe"} />
        </div>
      </div>
      <div className="post_content">
        <div className="post_content_title">{props.post.title}</div>

        <div className="post_content_description">{props.post.description}</div>
        <div className="post_content_image">
          <Image
            src={`${props.post.image}`}
            alt={"preview"}
            width={"640"}
            height={"100"}
            className={"post_content_image_img"}
          />
        </div>
        <div
          className="post_content_text"
          dangerouslySetInnerHTML={{
            __html: `${props.post.text}`,
          }}
        />
      </div>
      <div className="post_views">20 000 просмотров</div>
      <div className="post_footer">
        <div className="post_footer_left">
          <div className="post_footer_left_item">
            <div className="post_footer_left_item_like">
              <Image
                src={"/like.svg"}
                alt={"likes"}
                width={"20"}
                height={"20"}
              />
            </div>
            <div className="post_footer_left_item_count">
              {props.post.likes}
            </div>
          </div>
          <div className="post_footer_left_item">
            <div className="post_footer_left_item_comment">
              <Image
                src={"/comment.svg"}
                alt={"comments"}
                width={"20"}
                height={"20"}
              />
            </div>
            <div className="post_footer_left_item_count">
              {props.post.comments}
            </div>
          </div>
        </div>
        <div className="post_footer_right">
          <div className="post_footer_right_item">
            <Image
              src={"/download.svg"}
              alt={"likes"}
              width={"20"}
              height={"20"}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
