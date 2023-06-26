import styled from "styled-components";

export const MedFontText11 = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
`;

export const BoldFontText11 = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 700;
`;
export const RedButtonClass = styled.button`
  padding: 3px 10px;
  height: 31px;
  background: #e70a4e;
  border-radius: 8px;
  font-size: 11px;
  border: none;
  color: #ffffff;
`;
export const WhiteButtonClass = styled.button`
  height: 30.5px;
  padding: 3px 10px;
  border: 0.5px solid #e70a4e;
  border-radius: 8px;
  background: #ffffff;
  color: #e70a4e;
`;
export const LabelCentered = styled.label`
  display: flex;
  flex-direction: row;
  gap: 5px;
  font-weight: 600;
  font-size: 11px;
  align-items: center;
  cursor: pointer;
`;

export const InvisibleFileUploader = styled.input`
  display: none;
`;
