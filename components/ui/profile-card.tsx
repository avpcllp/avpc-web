'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ProfileCardProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  profileUrl?: string;
  isVerified?: boolean;
  metricOne?: string;
  metricTwo?: string;
  className?: string;
}

export function ProfileCard(props: ProfileCardProps) {
  const {
    name = 'Michael Chen',
    title = 'Senior Software Engineer',
    description = 'Profile summary goes here.',
    imageUrl =
      'https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    profileUrl = '#',
    isVerified = true,
    metricOne = 'CA',
    metricTwo = 'Partner',
    className
  } = props;

  return (
    <article
      className={cn(
        'mx-auto w-full max-w-[330px] rounded-[28px] border border-[#e7e7e7] bg-[#f3f3f3] p-3 shadow-[0_18px_40px_-26px_rgba(0,0,0,0.35)]',
        className
      )}
    >
      <div className="overflow-hidden rounded-[24px] border border-white/90">
        <div className="aspect-[4/3] bg-[#dde1e4]">
          <Image
            src={imageUrl}
            alt={name}
            width={360}
            height={270}
            className="h-full w-full object-cover object-top"
            draggable={false}
            priority={false}
          />
        </div>
      </div>

      <div className="px-2 pb-2 pt-5">
        <div className="flex items-center gap-2">
          <h3 className="text-[28px] font-semibold leading-none tracking-[-0.03em] text-[#121212]">{name}</h3>
          {isVerified ? (
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#16a34a] text-[14px] font-bold text-white">
              ✓
            </span>
          ) : null}
        </div>

        <p className="mt-3 text-lg leading-[1.35] text-[#454545]">{title}</p>
        <p className="mt-1 min-h-[120px] text-[14px] leading-[1.5] text-[#5a5a5a]">{description}</p>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-[#474747]">
            <span className="rounded-full bg-white px-3 py-1">{metricOne}</span>
            <span className="rounded-full bg-white px-3 py-1">{metricTwo}</span>
          </div>
          <Link
            href={profileUrl}
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#121212] shadow-[0_4px_14px_-10px_rgba(0,0,0,0.5)]"
          >
            View +
          </Link>
        </div>
      </div>
    </article>
  );
}
