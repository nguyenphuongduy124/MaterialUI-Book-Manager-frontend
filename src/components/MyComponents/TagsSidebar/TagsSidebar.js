import React from 'react';
import { randomRange } from '../../../services/functions';
import './TagsSidebar.scss';
const tags = [
  'i7 6700K',
  'rtx 2070 super',
  'Windows 10 Pro',
  'CPUs',
  'DDR4',
  'Laptops',
  'Cell',
  'Phones',
  'Monitors Gaming',
  'Laptops',
  'Power Supplies',
  'AMD Ryzen CPUs',
  'NAS',
  'RAM',
  'Motherboards Gaming',
  'Mice',
  'Keyboards',
  'NVIDIA',
  'Computer Case',
  'M.2SSD',
  'Tax Software',
  'B450 Motherboards',
];

function TagsSidebar(props) {
  return (
    <div className="TagsSidebar">
      <div className="TagsSidebar__inner">
        {tags.map((tag, idx) => {
          let random = randomRange(1, 3);
          let classSize = 'size-14';
          if (random === 2) {
            classSize = 'size-20';
          } else if (random === 3) {
            classSize = 'size-26';
          }
          return (
            <a href="#." className={classSize} key={idx}>
              {tag}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default TagsSidebar;
