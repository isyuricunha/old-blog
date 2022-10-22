const title = 'From The Desk, by Yuri Cunha';
const titleTemplate = '%s';
const description =
  'Um blog sobre tecnologia, desenvolvimento e inovação. Escrito por Yuri Cunha.';

const SEO = {
  title,
  titleTemplate,
  description,
  canonical: 'https://www.blog.garotogordo.codes/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.blog.garotogordo.codes/',
    title,
    description,
    images: [
      {
        url: '/public/avatar.jpg',
        alt: title,
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    handle: '@isyuricunha',
    site: '@isyuricunha',
    cardType: 'summary_large_image'
  }
};

export default SEO;
