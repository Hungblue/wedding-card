import { PiHeartStraightFill } from 'react-icons/pi';

interface DividerProps {
  className?: string;
}

export default function Divider({ className = '' }: DividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 py-8 ${className}`}>
      <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary-light sm:w-24" />
      <PiHeartStraightFill className="text-lg text-primary" />
      <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary-light sm:w-24" />
    </div>
  );
}
