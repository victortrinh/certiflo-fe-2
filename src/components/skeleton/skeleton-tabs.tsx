import { Skeleton } from '@components/skeleton/skeleton';

export const SkeletonTabs = () => (
  <div className="tabs">
    <ul>
      <li>
        <a>
          <Skeleton height="1rem" width="80px" borderRadius="24px" />
        </a>
      </li>
      <li>
        <a>
          <Skeleton height="1rem" width="80px" borderRadius="24px" />
        </a>
      </li>
      <li>
        <a>
          <Skeleton height="1rem" width="80px" borderRadius="24px" />
        </a>
      </li>
    </ul>
  </div>
);
