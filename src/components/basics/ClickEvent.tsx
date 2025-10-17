import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, MousePointerClick, Trophy } from "lucide-react";

const ClickEvent = () => {
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState("Click the button to start!");
  const [isAnimating, setIsAnimating] = useState(false);

  const messages = [
    "Great job! Keep clicking! 🎉",
    "You're on fire! 🔥",
    "Amazing! You're a natural! ⭐",
    "Fantastic! Keep it up! 💪",
    "Incredible! You're unstoppable! 🚀",
    "Phenomenal! You're a pro! 🏆",
    "Outstanding! Keep going! ✨",
    "Magnificent! You rock! 🎸",
    "Spectacular! Don't stop! 🌟",
    "Legendary! You're the best! 👑"
  ];

  const handleClick = () => {
    setIsAnimating(true);
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    const messageIndex = (newCount - 1) % messages.length;
    setMessage(messages[messageIndex]);
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleReset = () => {
    setClickCount(0);
    setMessage("Click the button to start!");
    setIsAnimating(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background p-6">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 text-primary">
            <Sparkles className="w-8 h-8 animate-pulse-glow" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Event Handler Demo
            </h1>
            <Sparkles className="w-8 h-8 animate-pulse-glow" />
          </div>
          <p className="text-muted-foreground text-lg">
            Experience interactive React event handling with style
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <Trophy className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-semibold text-foreground">Click Counter</h2>
              <Trophy className="w-6 h-6 text-accent" />
            </div>
            
            <div className="relative">
              <div 
                className={`text-7xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent transition-all duration-300 ${
                  isAnimating ? "scale-125" : "scale-100"
                }`}
              >
                {clickCount}
              </div>
              {clickCount > 0 && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-ping" />
              )}
            </div>
          </div>

          <div 
            className={`mb-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 via-primary-glow/10 to-accent/10 border border-primary/20 transition-all duration-500 ${
              isAnimating ? "animate-bounce-subtle" : ""
            }`}
          >
            <p className="text-xl text-center font-medium text-foreground">
              {message}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleClick}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary via-primary-glow to-accent text-primary-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MousePointerClick className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Click Me!
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            {clickCount > 0 && (
              <Button
                onClick={handleReset}
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-8 py-6 rounded-xl border-2 border-border hover:border-primary hover:bg-secondary transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in"
              >
                Reset
              </Button>
            )}
          </div>

          {clickCount >= 10 && (
            <div className="mt-6 p-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg border border-accent/30 animate-fade-in">
              <p className="text-center text-sm font-medium text-foreground flex items-center justify-center gap-2">
                <Trophy className="w-5 h-5 text-accent animate-bounce-subtle" />
                Achievement Unlocked: 10+ clicks!
                <Trophy className="w-5 h-5 text-accent animate-bounce-subtle" />
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground animate-fade-in">
          <p>Built with React State & Event Handlers</p>
        </div>
      </div>
    </div>
  );
};

export default ClickEvent;
