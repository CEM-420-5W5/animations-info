"use client";

import { Button } from "@/components/ui/button";

export default function Home() {

  const shakeMe = async () => {
    const element = document.getElementById(`carreBleu`);

    if (!element) return;

    const keyframes: Keyframe[] = [
      { transform: 'translateY(0%)' },
      { transform: 'translateY(10%)' },
      { transform: 'translateY(-50%)' },
      { transform: 'translateY(0%)' }
    ];

    const ANIMATION_DURATION_MS = 500;
    let animation = element.animate(keyframes, { duration: ANIMATION_DURATION_MS, easing: 'ease-in-out' });

  };

  const bounceMe = () => {
    // Bounce animation logic
  };

  return (
    <div>
      <div className="p-2">
        <h1 className="mb-8">Animations</h1>
        <Button className="mr-2" onClick={shakeMe}>Shake</Button>
        <Button onClick={bounceMe}>Bounce</Button>
        <div id="carreBleu" className="h-24 w-24 bg-blue-500 m-5"></div>
      </div>
      <div className="p-2">
        <Button className="mr-2">Shake2</Button>
        <Button >Bounce</Button>
        <div className="h-24 w-24 bg-red-500 m-5"></div>
      </div>
      <div className="flex min-h-svh items-center justify-center">
        <Button>Click me</Button>
      </div>
    </div>
  );
}
