import { Component, Host, h, Prop } from '@stencil/core'

import {
  Heading,
  Paragraph,
  ResponsiveContainer,
} from '@ionic-internal/ionic-ds'
import { BlogData } from 'src/data.server/blog'
import Helmet from '@stencil/helmet'

@Component({
  tag: 'blog-page',
  styleUrl: 'blog-page.scss',
  scoped: true,
})
export class BlogPage {
  @Prop() data: BlogData[]

  Helmet = () => (
    <Helmet>
      <title>Megabyte Labs Blog</title>
      <meta name="description" content={'Megabyte Labs Blog'} />
      <meta name="twitter:description" content={`Megabyte Labs Blog`} />
      <meta
        name="twitter:image"
        content="https://megabyte.space/assets/img/og.png"
      />
      <meta
        property="og:image"
        content="https://megabyte.space/assets/img/og.png"
      />
    </Helmet>
  );

  render() {
    if (!this.data) console.error('No blog posts received')

    return (
      <Host>
        {/* <blog-subnav breadcrumbs={[['Blog', '/blog']]} /> */}
        <Helmet />
        <ResponsiveContainer>
          <div class="heading-group">
            <Heading level={2} as="h1">
              Megabyte Labs Blog
            </Heading>
            <Paragraph level={2}>
              Articles by the Megabyte Labs team and community
            </Paragraph>
          </div>
          <div class="content">
            {this.data?.map((d, i) => (
              <article key={i}>
                <blog-post data={d} preview={true} />
              </article>
            ))}
            {/* <blog-pagination rssIcon /> */}
          </div>
        </ResponsiveContainer>
        <capacitor-site-footer />
      </Host>
    )
  }
}
