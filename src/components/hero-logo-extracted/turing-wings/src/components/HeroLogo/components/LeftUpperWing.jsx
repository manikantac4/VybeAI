import LogoPiece from './LogoPiece';
import { LEFT_UPPER_WING_PATH } from '../utils/paths';
import { ORIGINS, TIMING } from '../utils/constants';

export default function LeftUpperWing({ controls }) {
  return (
    <LogoPiece
      d={LEFT_UPPER_WING_PATH}
      origin={ORIGINS.leftUpperWing}
      delay={TIMING.leftUpperWing}
      controls={controls}
    />
  );
}
