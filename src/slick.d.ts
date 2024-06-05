// src/types/slick.d.ts
declare module 'slick-carousel';

interface JQuery {
  slick(options?: any): JQuery;
  slick(method: string, ...args: any[]): JQuery;
}