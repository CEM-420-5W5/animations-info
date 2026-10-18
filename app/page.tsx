"use client";

import { Button } from "@/components/ui/button";
import { CarreAvecFleche } from "@/components/CarreAvecFleche";

export default function Home() {

  const ANIMATION_DURATION_MS = 1000;

  const toutAnimer = async () => {
    await animerTranslate();
    await animerRotation();
    await animerScale();
    await animerColor();
    await animerOpacity();

  };

  const animer = async (elementId:string, keyframes: Keyframe[]) => {
    const element = document.getElementById(elementId);

    let animation = element?.animate(keyframes, { duration: ANIMATION_DURATION_MS });
    await animation?.finished;
  };

  const animerRotation = async () => {
    const rotationKeyframes: Keyframe[] = [
      { transform: 'rotate(180deg)' }
    ];

    await animer(`rotate`, rotationKeyframes);
  };

  const animerTranslate = async () => {
    const translationKeyframes: Keyframe[] = [
      { transform: 'translateX(0%)' },
      { transform: 'translateX(100%)' },
      { transform: 'translateX(0%)' }
    ];

    await animer(`translate`, translationKeyframes);
  };

  const animerScale = async () => {
    const scaleKeyframes: Keyframe[] = [
      { transform: 'scale(1)' },
      { transform: 'scale(1.5)' },
      { transform: 'scale(1)' }
    ];

    await animer(`scale`, scaleKeyframes);
  };

  const animerColor = async () => {
    const colorKeyframes: Keyframe[] = [
      { backgroundColor: 'blue' },
      { backgroundColor: 'yellow' },
      { backgroundColor: 'blue' }
    ];

    await animer(`color`, colorKeyframes);
  };

  const animerOpacity = async () => {
    const opacityKeyframes: Keyframe[] = [
      { opacity: 1 },
      { opacity: 0 },
      { opacity: 1 }
    ];

    await animer(`opacity`, opacityKeyframes);
  };

  const bounceMe = () => {
    // Bounce animation logic
  };

  return (
    <div>
      <div className="p-2">
        <h1 className="mb-8">Animations</h1>
        <Button className="mr-2" onClick={toutAnimer}>Tout Animer</Button>
        <Button onClick={bounceMe}>Bounce</Button>
        <CarreAvecFleche id="translate" />
        <CarreAvecFleche id="rotate" />
        <CarreAvecFleche id="scale" />
        <CarreAvecFleche id="color" />
        <CarreAvecFleche id="opacity" />
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
