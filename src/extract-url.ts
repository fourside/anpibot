import urlRegex from 'url-regex';

const regex = new RegExp(urlRegex(), 'gm');

export default function extractUrl(body: string): string {
  const result = body.match(regex);
  if (result === null) {
    return '';
  }
  return result[0];
}

