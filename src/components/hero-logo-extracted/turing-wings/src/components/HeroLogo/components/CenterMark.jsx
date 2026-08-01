import LogoPiece from './LogoPiece';
import { CENTER_MARK_PATH } from '../utils/paths';
import { ORIGINS, TIMING } from '../utils/constants';

export default function CenterMark({ controls }) {
  return (
    <LogoPiece
      d={CENTER_MARK_PATH}
      origin={ORIGINS.centerMark}
      delay={TIMING.centerMark}
      controls={controls}
    />
  );
}
