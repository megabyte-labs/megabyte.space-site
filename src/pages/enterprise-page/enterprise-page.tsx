import { Component, h, Host, Prop } from '@stencil/core'
import {
  ResponsiveContainer,
  Heading,
  Button,
  PrismicRichText,
  PrismicResponsiveImage,
  Paragraph,
} from '@ionic-internal/ionic-ds'
import { State } from '@stencil/core/internal'

@Component({
  tag: 'enterprise-page',
  styleUrl: 'enterprise-page.scss',
  scoped: true
})
export class EnterprisePage {
  @Prop() data: any
  @State() ebookModalOpen = false;

  render() {
    const {
      Top,
      Native,
      // Ebook,
      MicroFrontends,
      // Approach,
      Plugins,
      // Security,
      // Delivery,
      SupportGuidance,
      Features,
      Demo,
      Editions,
    } = this

    return (
      <Host>
        <meta-tags
          page-title={`Enterprise-grade open-source solutions`}
          description={'Learn about the enterprise-grade support and solutions that we offer. Find out how to amplify your business with our services.'}
        />
        <enterprise-subnav />
        <Top />
        <Native />
        {/* <Ebook /> */}
        {/* <Approach /> */}
        <MicroFrontends />
        <Plugins />
        {/* <Security /> */}
        {/* <Delivery /> */}
        <SupportGuidance />
        <Features />
        <Editions />
        <Demo />
        <capacitor-site-footer />
      </Host>
    )
  }

  Top = () => {
    const { top } = this.data
    const { title, text, cta_1, background } = top[0]

    return (
      <section id="top">
        <PrismicResponsiveImage image={background} class="background" />
        <ResponsiveContainer>
          <div class="heading-group">
            <Heading level={1}>{title}</Heading>
            <Paragraph level={2}>{text}</Paragraph>
            <div class="cta-row">
              <Button anchor href="#demo" kind="round">
                {cta_1}
                <span class="arrow"> -&gt;</span>
              </Button>
              {/* <a href="https://ionic.io/contact/sales" class="link btn-link">
                {cta_2}
                <span class="arrow"> -&gt;</span>
              </a> */}
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Companies = () => {
    const { companies } = this.data

    const companies__list = [
      ['nationwide', '34x42'],
      ['target', '31x42'],
      ['burger-king', '32x36'],
      ['home-depot', '34x34'],
      ['nbc', '51x30'],
      ['microsoft', '35x35'],
      ['amtrak', '58x25'],
      ['general-electric', '35x35'],
    ]

    return (
      <section id="companies">
        <ResponsiveContainer>
          <Heading level={2}>{companies}</Heading>
          <div class="logos">
            <div class="row1">
              {companies__list.slice(0, 4).map((stats, i) => (
                <webp-image
                  width={stats[1].split('x')[0]}
                  height={stats[1].split('x')[1]}
                  src={`./assets-enterprise-page/companies/${i}@2x.png`}
                  loading="lazy"
                  alt={`${stats[0]} logo`}
                />
              ))}
            </div>
            <div class="row2">
              {companies__list.slice(0, 4).map((stats, i) => (
                <webp-image
                  width={stats[1].split('x')[0]}
                  height={stats[1].split('x')[1]}
                  src={`./assets-enterprise-page/companies/${i + companies__list.length / 2
                    }@2x.png`}
                  loading="lazy"
                  alt={`${stats[0]} logo`}
                />
              ))}
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Native = () => {
    const { native, native__list } = this.data
    const { supertext, title, subtext } = native[0]

    const icons = [
      ['Three blocks with up arrow', '64x64'],
      ['Clock icon with up arrow', '64x64'],
      ['Fingerprint icon with lock symbol', '64x64'],
    ]

    return (
      <ResponsiveContainer id="native" as="section">
        <div class="heading-group">
          <p class="ui-heading-6">
            <sup>{supertext}</sup>
          </p>
          <PrismicRichText richText={title} />
          <Paragraph level={2}>{subtext}</Paragraph>
        </div>
        <ul class="list">
          {native__list.map(({ title, text }, i) => (
            <li key={icons[i][0]}>
              <webp-image
                width={icons[i][1].split('x')[0]}
                height={icons[i][1].split('x')[1]}
                src={`https://megabyte.space/assets/img/enterprise/enterprise-overview-${i}.png`}
                loading="lazy"
              />
              <Heading level={4} as="h3">
                {title}
              </Heading>
              <Paragraph leading="prose">{text}</Paragraph>
            </li>
          ))}
        </ul>
      </ResponsiveContainer>
    )
  };

  Ebook = () => {
    const { ebook } = this.data
    const { text, cta, background, book } = ebook[0]

    return (
      <section id="ebook">
        <ResponsiveContainer>
          <site-modal
            open={this.ebookModalOpen}
            onModalClose={() => (this.ebookModalOpen = false)}
          >
            <Heading level={2}>
              Free Megabyte Labs eBook
            </Heading>
            <Paragraph>
              Fill out and submit the form below to get your free copy of <strong>Open-Source, Cross-OS Workstations with Megabyte Labs</strong> sent to your e-mail.
            </Paragraph>
            <capacitor-hubspot-form formId="df7c28cd-d123-4ea2-aa2c-d7cb304fd398" />
          </site-modal>
          <div class="wrapper">
            <PrismicResponsiveImage image={background} class="background" />
            <div class="content">
              <div class="image-wrapper">
                <PrismicResponsiveImage image={book} />
              </div>
              <div class="heading-group">
                <PrismicRichText paragraphLevel={1} richText={text} />
                <Button
                  kind="round"
                  size="md"
                  onClick={() => (this.ebookModalOpen = true)}
                >
                  {cta} <span class="arrow"> -&gt;</span>
                </Button>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Approach = () => {
    const {
      approach,
      approach_traditional,
      approach_traditional__list,
      approach_web,
      approach_web__list,
    } = this.data
    const { supertext, title } = approach[0]

    return (
      <section id="approach">
        <ResponsiveContainer>
          <div class="heading-group">
            <p class="ui-heading-6">
              <sup>{supertext}</sup>
            </p>
            <PrismicRichText richText={title} />
          </div>
          <div class="split">
            <article class="traditional column">
              <Heading>{approach_traditional[0]['title']}</Heading>
              <Paragraph>{approach_traditional[0]['text']}</Paragraph>
              <PrismicResponsiveImage
                image={approach_traditional[0]['image']}
              />
              <div class="list">
                <Heading level={4}>
                  {approach_traditional[0]['subtitle']}
                </Heading>
                <ul>
                  {approach_traditional__list.map(({ text, icon }) => (
                    <li>
                      <PrismicResponsiveImage image={icon} />
                      <Paragraph>{text}</Paragraph>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            <article class="web column">
              <Heading>{approach_web[0]['title']}</Heading>
              <Paragraph>{approach_web[0]['text']}</Paragraph>
              <PrismicResponsiveImage image={approach_web[0]['image']} />
              <div class="list">
                <Heading level={4}>{approach_web[0]['subtitle']}</Heading>
                <ul>
                  {approach_web__list.map(({ text, icon }) => (
                    <li>
                      <PrismicResponsiveImage image={icon} />
                      <Paragraph>{text}</Paragraph>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  MicroFrontends = () => {
    const { micro_frontends } = this.data
    const { supertext, title, subtext, image } = micro_frontends[0]

    return (
      <section id="micro-frontends">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="image-wrapper">
              <PrismicResponsiveImage image={image} />
            </div>
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <PrismicRichText richText={subtext} paragraphLevel={2} />
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Plugins = () => {
    const { plugins } = this.data
    const { supertext, title, subtext, image } = plugins[0]

    return (
      <section id="plugins">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <Paragraph level={2}>{subtext}</Paragraph>
            </div>
            <div class="image-wrapper">
              <PrismicResponsiveImage image={image} />
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Security = () => {
    const { security } = this.data
    const { supertext, title, subtext, image } = security[0]

    return (
      <section id="security">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="image-wrapper">
              <PrismicResponsiveImage image={image} />
            </div>
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <PrismicRichText richText={subtext} paragraphLevel={2} />
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Delivery = () => {
    const { delivery } = this.data
    const { supertext, title, subtext, image } = delivery[0]

    return (
      <section id="delivery">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <PrismicRichText richText={subtext} paragraphLevel={2} />
            </div>
            <div class="image-wrapper">
              <PrismicResponsiveImage image={image} />
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  SupportGuidance = () => {
    const { support_guidance } = this.data

    return (
      <section id="support-guidance">
        <ResponsiveContainer>
          <div class="wrapper">
            {support_guidance.map(({ image, title, text }) => (
              <article>
                <PrismicResponsiveImage image={image} />
                <Heading level={3}>{title}</Heading>
                <Paragraph level={2}>{text}</Paragraph>
              </article>
            ))}
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Features = () => {
    const { features, features__list } = this.data
    const { supertext, title, subtext } = features[0]

    return (
      <section id="features">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <PrismicRichText richText={subtext} paragraphLevel={2} />
            </div>
            <ul>
              {features__list.map(({ icon, title, text }) => (
                <li>
                  <div class="image-wrapper">
                    <PrismicResponsiveImage image={icon} />
                  </div>
                  <div>
                    <Heading level={4} as="h3">
                      {title}
                    </Heading>
                    <Paragraph>{text}</Paragraph>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Editions = () => {
    const { editions } = this.data
    const { supertext, title, paragraph_1, paragraph_2, cta_1, image } = editions[0]

    return (
      <section id="editions">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <PrismicRichText richText={paragraph_1} paragraphLevel={2} />
              <PrismicRichText richText={paragraph_2} paragraphLevel={2} />
              <div class="cta-row">
                <Button href="#demo" anchor kind="round">
                  {cta_1}
                  <span class="arrow"> -&gt;</span>
                </Button>
                {/* <a href="https://ionic.io/contact/sales" class="link btn-link">
                  {cta_2}
                  <span class="arrow"> -&gt;</span>
                </a> */}
              </div>
            </div>
            <div class="image-wrapper">
              <PrismicResponsiveImage image={image} />
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Demo = () => {
    const { demo } = this.data
    const { supertext, title } = demo[0]

    return (
      <section id="demo">
        <ResponsiveContainer>
          <div class="heading-group">
            <p class="ui-heading-6">
              <sup>{supertext}</sup>
            </p>
            <Heading level={2}>{title}</Heading>
          </div>
          <capacitor-hubspot-form formId="a24b8d44-bc52-414d-b194-3652c7bab375" />
        </ResponsiveContainer>
      </section>
    )
  };
}
