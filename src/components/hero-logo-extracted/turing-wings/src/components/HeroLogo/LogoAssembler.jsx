import { motion } from 'framer-motion';
import LogoDefs from './components/LogoDefs';
import CenterMark from './components/CenterMark';
import LeftUpperWing from './components/LeftUpperWing';
import RightUpperWing from './components/RightUpperWing';
import LeftLowerWing from './components/LeftLowerWing';
import RightLowerWing from './components/RightLowerWing';
import ShineSweep from './components/ShineSweep';
import { VIEWBOX, CENTER_MARK_PATH, LEFT_UPPER_WING_PATH, RIGHT_UPPER_WING_PATH, LEFT_LOWER_WING_PATH, RIGHT_LOWER_WING_PATH } from './utils/paths';

export default function LogoAssembler({ controls, groupRef, shineRef }) {
  return (
    <svg viewBox={VIEWBOX} width="100%" height="100%" style={{ overflow: 'visible' }}>
      <LogoDefs />

      {/* Static silhouette mask so the shine sweep is clipped to metal only */}
      <mask id="tw-silhouette">
        <path d={CENTER_MARK_PATH} fill="#fff" />
        <path d={LEFT_UPPER_WING_PATH} fill="#fff" />
        <path d={RIGHT_UPPER_WING_PATH} fill="#fff" />
        <path d={LEFT_LOWER_WING_PATH} fill="#fff" />
        <path d={RIGHT_LOWER_WING_PATH} fill="#fff" />
      </mask>

      <motion.g ref={groupRef}>
        <LeftUpperWing controls={controls} />
        <RightUpperWing controls={controls} />
        <LeftLowerWing controls={controls} />
        <RightLowerWing controls={controls} />
        <CenterMark controls={controls} />

        <g mask="url(#tw-silhouette)">
          <ShineSweep ref={shineRef} />
        </g>
      </motion.g>
    </svg>
  );
}
