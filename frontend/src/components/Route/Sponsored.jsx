import React from "react";
import { styles } from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} bg-white py-10 hidden sm:block mb-12 px-5 rounded-xl`}
    >
      <div className="flex justify-between w-full items-center">
        <div className="flex items-start">
          <img
            src="data:image/png;base64,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"
            alt=""
            style={{ width: "150px", ObjectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAnFBMVEX///8Ap+DvSSN9wUL3uhZwb3BzcnP//fj4/f72sQAAot6Ny+z61Y/2tgAAm9z5+flramv6zsjZ68xxvCjuOQD1nZC225vuMgDtIAB2vjNpuRGFhIXl5eViYWKQj5CZmZnAwMCvr6/T09NXVlelpKW4t7jLyst8e3zc3NwAltv604b84t7t9ufrAAD0lopZswAAj9m+4fT858BIR0hhs+C0AAADsUlEQVR4nO2YabebNhBAlTaa7E/TPY0kJBAgku7N//9vnZEw3kLyeLZz3jmd+8EyDKCLNBqwlRIEQRAEQRAEQRAEQRCE6/PdOr8p9fv369zSyvzxyxpv/1Tq53c/rPHXTbXefrPGjz+R1q/frvFOtERLtERLtERLtERLtERLtERLtETrq2k9zl/Vj/Q/iMfK83WMUs8+w02t/r5b4/0rpT68WOeWXs/vnqzxkrRev3m6hmiJlmiJlmiJlmiJlmiJlmiJlmiJ1tfTev9yjTvWevFmjZtqmVfr/KPUv69X+XDTPyEEQRBujRuG0TzgNOYT227oriBlckJE9+UDT89rIGe/vx1jcwZLVhr99qudXT0goH+QlgbAdtkePYC2pcXhYi2+ymgmY1yM27W0XYbL6qpFo+8fkBIn9Kgbbged+s1aGnCXR87TFmvR14ullAq6DnmPBxNyTy1tNYZ5s0XaqlrX4BIt32VIdcJc1tAha7kQmnpAbHzyMBgVQxhUqxONrBmtT0n384iOmQ6xZcQPI03IdIuBqG17/6xgLbe7KTUixrFqARZVZ70mMDsaSewHT3dByxV12avLaaFseR6PfSQqlZATlQrE3NqNWp2fk54Sy8WqlYFT3iTqIvTBAmlpyJR3tLRoTHXoe2rSSPlMize0fW55oVCk2UVykwFyY+3c9hu1FK3jiYfG66COtAJ1M/JhkUcLtHa03AcEXw7nNDScQDxQXITbo4gxHKLGUG711NzbatYasCR94Bk61Jqom6XYs1ZJpgQY68mew41e8nmJuBK5LOUd1XTwJeHp81ArUpFeDqVV2pjaJcy5DtwtjSjU+TmNXKpVz4+eL3Ko1eNSOopWqYm8Jub5oNN6ZSijtW/ceeRirdFTOebUOdPaV+c1LTXRagWE6fpaCgEG1Dw0x1oHpXWn1XnI81TZuduJHsmQDiP5KpPI+QzgxxOt6DnnTrRMquuW8MuKiJSd7ixysZYjq5reh1r0WdNcTWbRojHSaGpvPGkTfzeWtE4ji1Y7P7I3a/F6qnl0VLdaenTboYuhVPlZq8Oyc6SnvI8k1ETneiqgx5FR7bUivyZ1w9ZyqkrG1MV9pMUPFuCnB2vpWYtTu+wsBcs0iN6jxvE0stfiuUDfbNCy6WPN0pRqdg8pAZeg9NFUheS9T1SY+pR2M9HZsjOXRGrL9/nd6CiimjS/Z3W00294Jt7HfJrO373M1E1LL26azKcje1x3jRc4QRAEQRAEQRAEQRAE4f/Lf6Kgs0iIfrkRAAAAAElFTkSuQmCC"
            alt=""
            style={{ width: "150px", ObjectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            src="data:image/png;base64,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"
            alt=""
            style={{ width: "150px", ObjectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
          src="data:image/jpeg;base64,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"
            alt=""
            style={{ width: "150px", ObjectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            src="data:image/png;base64,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"
            alt=""
            style={{ width: "150px", ObjectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
