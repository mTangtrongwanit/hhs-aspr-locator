/**
 * Card Tooltip
 *
 * Tooltip component for displaying services provided on a card.
 */

// #region ========================= IMPORTS ===================================
// #region ------------ 3rd-Party Components / Libraries -----------------------
import { useTranslation } from "react-i18next";
// #endregion --------- 3rd-Party Components / Libraries -----------------------
// #region -------------- Custom Components / Utilities ------------------------
import {
  StyledIcon,
  StyledTooltip,
  StyledTriggerButton,
} from "./Tooltip.styles";
import { useConfiguration } from "@/contexts/ConfigurationContext";
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import { type Props } from "./Tooltip.types";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENT ==============================
const Tooltip = ({ category, children }: Props) => {
  // #region ------------------ Hooks (Resources) ------------------------------
  /** Application configuration */
  const config = useConfiguration();
  const { t } = useTranslation();

  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region ----------------------- Render ------------------------------------
  const categoryIcon = config.categories.find(
    ({ key }) => key === category,
  )?.icon;
  return (
    <StyledTooltip.Provider>
      <StyledTooltip.Root>
        <StyledTooltip.Trigger asChild>
          <StyledTriggerButton
            aria-label={t(
              "Service Provider Card.Selected Category List Label",
              {
                category: t(`Category Names.${category}`),
              },
            )}
          >
            {categoryIcon && (
              <StyledIcon
                dangerouslySetInnerHTML={{ __html: categoryIcon }}
              ></StyledIcon>
            )}
          </StyledTriggerButton>
        </StyledTooltip.Trigger>
        <StyledTooltip.Content className="TooltipContent" sideOffset={5}>
          {children}
          <StyledTooltip.Arrow className="TooltipArrow" />
        </StyledTooltip.Content>
      </StyledTooltip.Root>
    </StyledTooltip.Provider>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default Tooltip;
// #endregion ================ EXPORTED COMPONENT ==============================
