import dateFormat from "@/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function SingeBlog() {
  const tempTags = "SpaceX,Nasa,Exploration";
  const tempHtml = `<p>Demo Content</p>`
  return (
    <section>
      <div className="flex items-center gap-4 flex-col">
        <Image
        className="rounded border w-[90%] md:w-[700px]  "
          src="/thumbnails/dreams.png"
          width={500}
          height={250}
          alt="Page Title"
        ></Image>
        <div className="meta-of-a-blog space-y-2">
          <div className="flex gap-2 items-center">
            <Calendar className="text-gray-400 size-4" />
            <p className="text-gray-400">
              Created on : {dateFormat(new Date())}
            </p>
          </div>
          <div className="text-xs flex items-center gap-2">
            <p>Category:</p>
            <p className="badge bg-gray-600/30 border border-gray-700 w-fit px-2 py-1 rounded">
              Space exploration
            </p>
          </div>
          <div className="text-xs flex items-center gap-2">
            <p>Tags:</p>
            {tempTags.split(",").map((tag) => (
              <p className="badge  bg-gray-600/30 border border-gray-700 w-fit px-[4px] py-[2px] rounded">
                {tag}
              </p>
            ))}
          </div>
          {/* <div className="content" dangerouslySetInnerHTML={{__html:tempHtml}}></div>  */}
        </div>
          <p className="text-sm w-[90%] md:w-2/3 text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus omnis, ex, nam expedita animi magnam dolore voluptatem beatae aliquid labore at odio quod voluptate culpa ad similique nobis quibusdam, optio ipsum explicabo error quasi praesentium laudantium. Voluptas, itaque. Illo a eius consectetur eum, velit itaque saepe pariatur! Laboriosam, non dolore? Eius, harum, quod, velit sequi illo temporibus adipisci autem eligendi quam hic voluptas. A porro aut doloremque, esse enim dolorem ullam cumque earum vitae architecto deleniti, nulla quasi possimus. Excepturi enim ut consequuntur incidunt iste adipisci quas tenetur, quod officia optio nulla error dolorem ipsum odit corrupti sint! Corrupti modi repellendus dolorum totam accusamus ratione atque sint dicta obcaecati rem temporibus perferendis minus fugit laboriosam voluptatem consectetur dolor veniam, laborum laudantium dignissimos nam magni aliquam officia? Optio repellat porro maiores quas explicabo. Necessitatibus voluptate cum vitae, odio quo a accusantium at facilis impedit, quibusdam harum illo sint cumque vel autem ipsa molestiae et cupiditate in officia sed temporibus. Maxime quod pariatur minus eligendi iste at repellendus possimus! Id illum cum fuga. Consequuntur quis vitae maxime ratione, atque molestiae quibusdam obcaecati excepturi laudantium, quasi minima dolor nulla tenetur, eum sit tempora adipisci? At illum eaque, alias ratione ad minus architecto porro.</p>

      </div>
    </section>
  );
}
