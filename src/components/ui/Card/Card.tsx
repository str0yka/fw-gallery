import { forwardRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import clsx from 'clsx';

import s from './Card.module.scss';

interface CardProps extends React.ComponentProps<'article'> {
  name: string;
  date: string;
  artist: string;
  location: string;
  imageUrl: string;
}

export const Card = forwardRef<React.ComponentRef<'article'>, CardProps>(
  ({ name, date, artist, location, imageUrl, className, ...props }, ref) => (
    <article
      ref={ref}
      className={clsx(s['card-container'], className)}
      {...props}
    >
      <LazyLoadImage
        className={s.image}
        src={imageUrl}
        alt={name}
        effect="black-and-white"
        width={392}
        height={260}
      />
      <div className={s['info-container']}>
        <div className={clsx(s.info, s.primary)}>
          <h2 className={s.title}>{name}</h2>
          <p className={s.description}>{date}</p>
        </div>
        <div className={clsx(s.info, s.secondary)}>
          <h2 className={s.title}>{artist}</h2>
          <p className={s.description}>{location}</p>
        </div>
      </div>
    </article>
  ),
);
