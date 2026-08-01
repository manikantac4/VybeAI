import LogoPiece from './LogoPiece';
import { RIGHT_UPPER_WING_PATH } from '../utils/paths';
import { ORIGINS, TIMING } from '../utils/constants';

export default function RightUpperWing({ controls }) {
  return (
    <LogoPiece
      d={RIGHT_UPPER_WING_PATH}
      origin={ORIGINS.rightUpperWing}
      delay={TIMING.rightUpperWing}
      controls={controls}
    />
  );
}
