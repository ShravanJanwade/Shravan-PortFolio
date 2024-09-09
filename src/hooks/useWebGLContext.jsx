import { useEffect } from "react";

const useWebGLContext = (canvasRef) => {
  useEffect(() => {
    const canvas = canvasRef.current?.domElement;

    const handleContextLost = (event) => {
      console.warn("WebGL context lost for canvas:", canvasRef.current);
      event.preventDefault();
    };

    const handleContextRestored = () => {
      console.log("WebGL context restored for canvas:", canvasRef.current);
    };

    canvas?.addEventListener("webglcontextlost", handleContextLost);
    canvas?.addEventListener("webglcontextrestored", handleContextRestored);

    return () => {
      canvas?.removeEventListener("webglcontextlost", handleContextLost);
      canvas?.removeEventListener(
        "webglcontextrestored",
        handleContextRestored
      );
    };
  }, [canvasRef]);
};
export default useWebGLContext;
