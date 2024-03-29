import { Fragment, h } from '@stencil/core'
import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from 'ionic-ds-no-fonts'
export const ProductLinkBlink = () => {
  return (
    <Fragment>
      <ResponsiveContainer id="getting-started" as="section">
        <article class="step">
          <sup class="ui-heading-6">01</sup>
          <div class="heading-group">
            <Heading level={3} id="install">
              Provision Fedora.
            </Heading>
            <Paragraph>
              Interactively provision Fedora with a feature-packed terminal, slick theme, and a configurable list of software.
            </Paragraph>
          </div>
          <div class="code-panel">
            <code-snippet
              language="shell-session"
              code={`
bash <(curl -sSL https://install.doctor/start)
`}
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">02</sup>
          <div class="heading-group">
            <Heading level={3}>Launch web services.</Heading>
            <div class="platforms">
              <webp-image
                loading="lazy"
                src="/assets/img/landing/docker-swarm.png"
                alt="Docker Swarm"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/landing/kubesphere.png"
                alt="KubeSphere"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/landing/tailscale.png"
                alt="Tailscale"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/landing/cloudflare.png"
                alt="CloudFlare"
                class="vm-icon"
                width="37"
                height="37"
              />
            </div>
            <Paragraph>
              Launch a suite of web services via Docker Swarm and KubeSphere. Access all your machines over a VPN subnet (via Tailscale) and host SSO-protected web apps (via CloudFlare Teams).
            </Paragraph>
          </div>
          <div class="code-panel">
            <code-snippet
              language="shell-session"
              code={`
run setup:webapps
`}
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">03</sup>
          <div class="heading-group">
            <Heading level={3}>
              Launch and provision VMs.
            </Heading>
            <div class="platforms">
              <webp-image
                loading="lazy"
                src="/assets/img/landing/hyperv.png"
                alt="Hyper-V"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/landing/parallels.png"
                alt="Parallels"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/landing/qemu.png"
                alt="QEMU"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/landing/virtualbox.png"
                alt="VirtualBox"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/landing/vmware.png"
                alt="VMWare"
                class="vm-icon"
                width="37"
                height="37"
              />
            </div>
            <Paragraph>
              Create Archlinux, CentOS, Debian, Fedora, macOS, Ubuntu, and Windows VMs using almost any virtualization platform. Create disposable environments, improve security, and run macOS / Windows.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/landing/logging-graphic.png"
              alt="Monitoring / Logging graphic"
              class="vm-icon"
            />
          </div>
        </article>
      </ResponsiveContainer>
    </Fragment>
  )
}
