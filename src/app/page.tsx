import { TweetProps } from "@/types";
import TweetForm from "@/components/TweetForm";
import TweetPreview from "@/components/TweetPreview";
import { cn } from "@/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const initialTweet: TweetProps = {
  avatar: "",
  name: "",
  username: "",
  verified: true,
  body: "",
  image: "",
  publishedTime: "",
  publishedDate: "",
  viewsCount: 0,
  repostsCount: 0,
  quotesCount: 10,
  likesCount: 10,
  bookmarksCount: 0,
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <div
          className={cn(
            "flex flex-col items-center gap-4 py-4",
            "lg:flex-row lg:items-start lg:justify-around lg:px-4"
          )}
        >
          <TweetForm />
          <TweetPreview {...initialTweet} />
        </div>
      </main>
      <Footer />
    </>
  );
}
