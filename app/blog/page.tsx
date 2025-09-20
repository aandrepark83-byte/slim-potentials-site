import { Heading } from "../../common/heading";
import { Section } from "../../common/section-wrapper";
import { SearchContent as Search } from "../../common/search";
import { SearchHitsProvider } from "../../context/search-hits-context";
import { type AvatarFragment, avatarFragment } from "../../lib/basehub/fragments";

import { BlogpostCard, blogpostCardFragment } from "./_components/blogpost-card";
import { PageView } from "../../components/page-view";
import type { Metadata } from "next";
import { basehub } from "basehub";
import { notFound } from "next/navigation";

import "../../basehub.config";

export const dynamic = "force-static";
export const revalidate = 30;

export const generateMetadata = async (): Promise<Metadata | undefined> => {
  // Fallback metadata when BaseHub is not available
  if (!process.env.BASEHUB_TOKEN) {
    return {
      title: "Blog - Slim Potentials",
      description: "Wellness tips and insights from Slim Potentials",
    };
  }

  try {
    const data = await basehub().query({
      site: {
        blog: {
          metadata: {
            title: true,
            description: true,
          },
        },
      },
    });

    return {
      title: data.site.blog.metadata.title ?? undefined,
      description: data.site.blog.metadata.description ?? undefined,
    };
  } catch (error) {
    console.warn("Failed to fetch blog metadata from BaseHub:", error);
    return {
      title: "Blog - Slim Potentials",
      description: "Wellness tips and insights from Slim Potentials",
    };
  }
};

export default async function BlogPage() {
  // If no BaseHub token, show placeholder content
  if (!process.env.BASEHUB_TOKEN) {
    return (
      <Section className="gap-16">
        <div className="grid grid-cols-1 gap-5 self-stretch md:grid-cols-2">
          <Heading align="left">
            <h2>Blog</h2>
          </Heading>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Our blog is currently being set up. Check back soon for wellness tips, ingredient spotlights, and health insights from the Slim Potentials team.
            </p>
            <p className="text-muted-foreground">
              In the meantime, explore our <a href="/#products" className="text-primary hover:underline">premium gummy supplements</a> designed to support your wellness journey.
            </p>
          </div>
        </div>
      </Section>
    );
  }

  try {
    const {
      _componentInstances: { blogPost },
      site: { blog, generalEvents },
      collections: { authors },
    } = await basehub().query({
      _componentInstances: {
        blogPost: {
          _searchKey: true,
        },
      },
      collections: {
        authors: {
          items: {
            _id: true,
            image: avatarFragment,
          },
        },
      },
      site: {
        generalEvents: { ingestKey: true },
        blog: {
          _analyticsKey: true,
          mainTitle: true,
          featuredPosts: blogpostCardFragment,
          listTitle: true,
          posts: {
            __args: { orderBy: "publishedAt__DESC" },
            items: blogpostCardFragment,
          },
        },
      },
    });

    const { posts } = blog;

    if (posts.items.length === 0) {
      notFound();
    }

    return (
      <Section className="gap-16">
        <PageView ingestKey={generalEvents.ingestKey} />
        <div className="grid grid-cols-1 gap-5 self-stretch md:grid-cols-2">
          <Heading align="left">
            <h2>{blog.mainTitle}</h2>
          </Heading>
          <SearchHitsProvider
            authorsAvatars={authors.items.reduce((acc: Record<string, AvatarFragment>, author) => {
              acc[author._id] = author.image;

              return acc;
            }, {})}
          >
            <Search _searchKey={blogPost._searchKey} />
          </SearchHitsProvider>
          {blog.featuredPosts?.slice(0, 3).map((post) => (
            <BlogpostCard key={post._id} type="card" {...post} />
          ))}
        </div>
        <div className="w-full space-y-3">
          <Heading align="left">
            <h3 className="!text-xl lg:!text-2xl">{blog.listTitle}</h3>
          </Heading>
          <div className="-mx-4 flex flex-col self-stretch">
            {posts.items.map((post) => (
              <BlogpostCard key={post._id} {...post} className="-mx-4" />
            ))}
          </div>
        </div>
      </Section>
    );
  } catch (error) {
    console.warn("Failed to load blog content from BaseHub:", error);
    return (
      <Section className="gap-16">
        <div className="grid grid-cols-1 gap-5 self-stretch md:grid-cols-2">
          <Heading align="left">
            <h2>Blog</h2>
          </Heading>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              We're experiencing technical difficulties loading our blog content. Please try again later.
            </p>
            <p className="text-muted-foreground">
              In the meantime, explore our <a href="/#products" className="text-primary hover:underline">premium gummy supplements</a> designed to support your wellness journey.
            </p>
          </div>
        </div>
      </Section>
    );
  }
}
