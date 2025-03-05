import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Riki Rose',
  description: 'Welcome to my world.',
}

export default function Page({
  params,
}: {
  params: { slug: string }
}) {
    const { slug } = params;
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Events</h1>
      <BlogPosts />
    </section>
  )
}
