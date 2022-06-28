import classNames from 'classnames';
import { Config } from 'tailwindcss';

interface LoadingProps {
  tailwindClasses?: string;
}

export default function Loading({ tailwindClasses }: LoadingProps) {
  return (
    <div
      className={classNames('bg-gray-600 animate-pulse', {
        'h-full': !tailwindClasses,
        [tailwindClasses as string]: tailwindClasses,
      })}
    />
  );
}
