export interface LDtkSchema {
  description: string;
  title: string;
  $schema: string;
  $ref: string;
  version: string;
  LdtkJsonRoot: LdtkJsonRoot;
  otherTypes: OtherTypes;
}

export interface LdtkJsonRoot {
  description: string;
  title: string;
  required: string[];
  properties: Properties;
  type: string[];
}

export interface Properties {
  backupLimit: BackupLimit;
  defaultEntityWidth: DefaultEntityWidth;
  backupOnSave: BackupOnSave;
  worldGridWidth: WorldGridWidth;
  iid: Iid;
  defaultLevelBgColor: DefaultLevelBgColor;
  bgColor: BgColor;
  worlds: Worlds;
  toc: Toc;
  nextUid: NextUid;
  imageExportMode: ImageExportMode;
  identifierStyle: IdentifierStyle;
  defaultPivotY: DefaultPivotY;
  dummyWorldIid: DummyWorldIid;
  customCommands: CustomCommands;
  worldGridHeight: WorldGridHeight;
  appBuildId: AppBuildId;
  defaultGridSize: DefaultGridSize;
  worldLayout: WorldLayout;
  flags: Flags;
  levelNamePattern: LevelNamePattern;
  exportPng: ExportPng;
  defaultLevelWidth: DefaultLevelWidth;
  pngFilePattern: PngFilePattern;
  __FORCED_REFS: ForcedRefs;
  exportTiled: ExportTiled;
  defs: Defs;
  levels: Levels;
  jsonVersion: JsonVersion;
  defaultEntityHeight: DefaultEntityHeight;
  defaultPivotX: DefaultPivotX;
  defaultLevelHeight: DefaultLevelHeight;
  simplifiedExport: SimplifiedExport;
  externalLevels: ExternalLevels;
  tutorialDesc: TutorialDesc;
  minifyJson: MinifyJson;
  exportLevelBg: ExportLevelBg;
  backupRelPath: BackupRelPath;
}

export interface BackupLimit {
  description: string;
  type: string[];
}

export interface DefaultEntityWidth {
  description: string;
  type: string[];
}

export interface BackupOnSave {
  description: string;
  type: string[];
}

export interface WorldGridWidth {
  description: string;
  type: string[];
}

export interface Iid {
  description: string;
  type: string[];
}

export interface DefaultLevelBgColor {
  description: string;
  type: string[];
}

export interface BgColor {
  description: string;
  type: string[];
}

export interface Worlds {
  description: string;
  items: Items;
  type: string[];
}

export interface Items {
  $ref: string;
}

export interface Toc {
  description: string;
  items: Items2;
  type: string[];
}

export interface Items2 {
  $ref: string;
}

export interface NextUid {
  description: string;
  type: string[];
}

export interface ImageExportMode {
  description: string;
  enum: string[];
}

export interface IdentifierStyle {
  description: string;
  enum: string[];
}

export interface DefaultPivotY {
  description: string;
  type: string[];
}

export interface DummyWorldIid {
  description: string;
  type: string[];
}

export interface CustomCommands {
  description: string;
  items: Items3;
  type: string[];
}

export interface Items3 {
  $ref: string;
}

export interface WorldGridHeight {
  description: string;
  type: string[];
}

export interface AppBuildId {
  description: string;
  type: string[];
}

export interface DefaultGridSize {
  description: string;
  type: string[];
}

export interface WorldLayout {
  description: string;
  enum: string | undefined[];
}

export interface Flags {
  description: string;
  items: Items4;
  type: string[];
}

export interface Items4 {
  enum: string[];
}

export interface LevelNamePattern {
  description: string;
  type: string[];
}

export interface ExportPng {
  description: string;
  type: string[];
}

export interface DefaultLevelWidth {
  description: string;
  type: string[];
}

export interface PngFilePattern {
  description: string;
  type: string[];
}

export interface ForcedRefs {
  description: string;
  properties: Properties2;
  type: string[];
}

export interface Properties2 {
  TilesetRect: TilesetRect;
  FieldInstance: FieldInstance;
  EntityInstance: EntityInstance;
  Definitions: Definitions;
  EnumTagValue: EnumTagValue;
  AutoRuleDef: AutoRuleDef;
  FieldDef: FieldDef;
  CustomCommand: CustomCommand;
  EntityDef: EntityDef;
  AutoLayerRuleGroup: AutoLayerRuleGroup;
  IntGridValueGroupDef: IntGridValueGroupDef;
  IntGridValueInstance: IntGridValueInstance;
  TocInstanceData: TocInstanceData;
  NeighbourLevel: NeighbourLevel;
  LayerInstance: LayerInstance;
  World: World;
  EntityReferenceInfos: EntityReferenceInfos;
  TileCustomMetadata: TileCustomMetadata;
  TilesetDef: TilesetDef;
  EnumDefValues: EnumDefValues;
  Tile: Tile;
  LayerDef: LayerDef;
  LevelBgPosInfos: LevelBgPosInfos;
  Level: Level;
  TableOfContentEntry: TableOfContentEntry;
  EnumDef: EnumDef;
  GridPoint: GridPoint;
  IntGridValueDef: IntGridValueDef;
}

export interface TilesetRect {
  $ref: string;
}

export interface FieldInstance {
  $ref: string;
}

export interface EntityInstance {
  $ref: string;
}

export interface Definitions {
  $ref: string;
}

export interface EnumTagValue {
  $ref: string;
}

export interface AutoRuleDef {
  $ref: string;
}

export interface FieldDef {
  $ref: string;
}

export interface CustomCommand {
  $ref: string;
}

export interface EntityDef {
  $ref: string;
}

export interface AutoLayerRuleGroup {
  $ref: string;
}

export interface IntGridValueGroupDef {
  $ref: string;
}

export interface IntGridValueInstance {
  $ref: string;
}

export interface TocInstanceData {
  $ref: string;
}

export interface NeighbourLevel {
  $ref: string;
}

export interface LayerInstance {
  $ref: string;
}

export interface World {
  $ref: string;
}

export interface EntityReferenceInfos {
  $ref: string;
}

export interface TileCustomMetadata {
  $ref: string;
}

export interface TilesetDef {
  $ref: string;
}

export interface EnumDefValues {
  $ref: string;
}

export interface Tile {
  $ref: string;
}

export interface LayerDef {
  $ref: string;
}

export interface LevelBgPosInfos {
  $ref: string;
}

export interface Level {
  $ref: string;
}

export interface TableOfContentEntry {
  $ref: string;
}

export interface EnumDef {
  $ref: string;
}

export interface GridPoint {
  $ref: string;
}

export interface IntGridValueDef {
  $ref: string;
}

export interface ExportTiled {
  description: string;
  type: string[];
}

export interface Defs {
  description: string;
  $ref: string;
}

export interface Levels {
  description: string;
  items: Items5;
  type: string[];
}

export interface Items5 {
  $ref: string;
}

export interface JsonVersion {
  description: string;
  type: string[];
}

export interface DefaultEntityHeight {
  description: string;
  type: string[];
}

export interface DefaultPivotX {
  description: string;
  type: string[];
}

export interface DefaultLevelHeight {
  description: string;
  type: string[];
}

export interface SimplifiedExport {
  description: string;
  type: string[];
}

export interface ExternalLevels {
  description: string;
  type: string[];
}

export interface TutorialDesc {
  description: string;
  type: string[];
}

export interface MinifyJson {
  description: string;
  type: string[];
}

export interface ExportLevelBg {
  description: string;
  type: string[];
}

export interface BackupRelPath {
  description: string;
  type: string[];
}

export interface OtherTypes {
  TilesetRect: TilesetRect2;
  FieldInstance: FieldInstance2;
  EntityInstance: EntityInstance2;
  Definitions: Definitions2;
  EnumTagValue: EnumTagValue2;
  AutoRuleDef: AutoRuleDef2;
  FieldDef: FieldDef2;
  CustomCommand: CustomCommand2;
  EntityDef: EntityDef2;
  AutoLayerRuleGroup: AutoLayerRuleGroup2;
  IntGridValueGroupDef: IntGridValueGroupDef2;
  IntGridValueInstance: IntGridValueInstance2;
  TocInstanceData: TocInstanceData2;
  NeighbourLevel: NeighbourLevel2;
  LayerInstance: LayerInstance2;
  World: World2;
  EntityReferenceInfos: EntityReferenceInfos2;
  TileCustomMetadata: TileCustomMetadata2;
  TilesetDef: TilesetDef2;
  EnumDefValues: EnumDefValues2;
  Tile: Tile4;
  LayerDef: LayerDef2;
  LevelBgPosInfos: LevelBgPosInfos2;
  Level: Level2;
  TableOfContentEntry: TableOfContentEntry2;
  EnumDef: EnumDef2;
  GridPoint: GridPoint2;
  IntGridValueDef: IntGridValueDef2;
}

export interface TilesetRect2 {
  description: string;
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties3;
  type: string[];
}

export interface Properties3 {
  tilesetUid: TilesetUid;
  h: H;
  x: X;
  y: Y;
  w: W;
}

export interface TilesetUid {
  description: string;
  type: string[];
}

export interface H {
  description: string;
  type: string[];
}

export interface X {
  description: string;
  type: string[];
}

export interface Y {
  description: string;
  type: string[];
}

export interface W {
  description: string;
  type: string[];
}

export interface FieldInstance2 {
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties4;
  type: string[];
}

export interface Properties4 {
  __type: Type;
  defUid: DefUid;
  __identifier: Identifier;
  __tile: Tile2;
  realEditorValues: RealEditorValues;
  __value: Value;
}

export interface Type {
  description: string;
  type: string[];
}

export interface DefUid {
  description: string;
  type: string[];
}

export interface Identifier {
  description: string;
  type: string[];
}

export interface Tile2 {
  description: string;
  oneOf: OneOf[];
}

export interface OneOf {
  type?: string[];
  $ref?: string;
}

export interface RealEditorValues {
  description: string;
  items: Items6;
  type: string[];
}

export interface Items6 {}

export interface Value {
  description: string;
}

export interface EntityInstance2 {
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties5;
  type: string[];
}

export interface Properties5 {
  iid: Iid2;
  defUid: DefUid2;
  __identifier: Identifier2;
  __tile: Tile3;
  px: Px;
  __worldX: WorldX;
  __worldY: WorldY;
  __smartColor: SmartColor;
  __grid: Grid;
  __pivot: Pivot;
  fieldInstances: FieldInstances;
  height: Height;
  __tags: Tags;
  width: Width;
}

export interface Iid2 {
  description: string;
  type: string[];
}

export interface DefUid2 {
  description: string;
  type: string[];
}

export interface Identifier2 {
  description: string;
  type: string[];
}

export interface Tile3 {
  description: string;
  oneOf: OneOf2[];
}

export interface OneOf2 {
  type?: string[];
  $ref?: string;
}

export interface Px {
  description: string;
  items: Items7;
  type: string[];
}

export interface Items7 {
  type: string[];
}

export interface WorldX {
  description: string;
  type: string[];
}

export interface WorldY {
  description: string;
  type: string[];
}

export interface SmartColor {
  description: string;
  type: string[];
}

export interface Grid {
  description: string;
  items: Items8;
  type: string[];
}

export interface Items8 {
  type: string[];
}

export interface Pivot {
  description: string;
  items: Items9;
  type: string[];
}

export interface Items9 {
  type: string[];
}

export interface FieldInstances {
  description: string;
  items: Items10;
  type: string[];
}

export interface Items10 {
  $ref: string;
}

export interface Height {
  description: string;
  type: string[];
}

export interface Tags {
  description: string;
  items: Items11;
  type: string[];
}

export interface Items11 {
  type: string[];
}

export interface Width {
  description: string;
  type: string[];
}

export interface Definitions2 {
  description: string;
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties6;
  type: string[];
}

export interface Properties6 {
  tilesets: Tilesets;
  layers: Layers;
  levelFields: LevelFields;
  enums: Enums;
  entities: Entities;
  externalEnums: ExternalEnums;
}

export interface Tilesets {
  description: string;
  items: Items12;
  type: string[];
}

export interface Items12 {
  $ref: string;
}

export interface Layers {
  description: string;
  items: Items13;
  type: string[];
}

export interface Items13 {
  $ref: string;
}

export interface LevelFields {
  description: string;
  items: Items14;
  type: string[];
}

export interface Items14 {
  $ref: string;
}

export interface Enums {
  description: string;
  items: Items15;
  type: string[];
}

export interface Items15 {
  $ref: string;
}

export interface Entities {
  description: string;
  items: Items16;
  type: string[];
}

export interface Items16 {
  $ref: string;
}

export interface ExternalEnums {
  description: string;
  items: Items17;
  type: string[];
}

export interface Items17 {
  $ref: string;
}

export interface EnumTagValue2 {
  description: string;
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties7;
  type: string[];
}

export interface Properties7 {
  tileIds: TileIds;
  enumValueId: EnumValueId;
}

export interface TileIds {
  description: string;
  items: Items18;
  type: string[];
}

export interface Items18 {
  type: string[];
}

export interface EnumValueId {
  description: string;
  type: string[];
}

export interface AutoRuleDef2 {
  description: string;
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties8;
  type: string[];
}

export interface Properties8 {
  flipX: FlipX;
  pivotX: PivotX;
  perlinActive: PerlinActive;
  tileRectsIds: TileRectsIds;
  perlinScale: PerlinScale;
  outOfBoundsValue: OutOfBoundsValue;
  pattern: Pattern;
  tileRandomXMin: TileRandomXmin;
  checker: Checker;
  perlinOctaves: PerlinOctaves;
  tileIds: TileIds2;
  alpha: Alpha;
  tileXOffset: TileXoffset;
  invalidated: Invalidated;
  xModulo: XModulo;
  size: Size;
  chance: Chance;
  breakOnMatch: BreakOnMatch;
  tileYOffset: TileYoffset;
  uid: Uid;
  perlinSeed: PerlinSeed;
  yOffset: YOffset;
  tileRandomYMax: TileRandomYmax;
  tileRandomYMin: TileRandomYmin;
  tileMode: TileMode;
  flipY: FlipY;
  tileRandomXMax: TileRandomXmax;
  pivotY: PivotY;
  yModulo: YModulo;
  active: Active;
  xOffset: XOffset;
}

export interface FlipX {
  description: string;
  type: string[];
}

export interface PivotX {
  description: string;
  type: string[];
}

export interface PerlinActive {
  description: string;
  type: string[];
}

export interface TileRectsIds {
  description: string;
  items: Items19;
  type: string[];
}

export interface Items19 {
  items: Items20;
  type: string[];
}

export interface Items20 {
  type: string[];
}

export interface PerlinScale {
  description: string;
  type: string[];
}

export interface OutOfBoundsValue {
  description: string;
  type: string[];
}

export interface Pattern {
  description: string;
  items: Items21;
  type: string[];
}

export interface Items21 {
  type: string[];
}

export interface TileRandomXmin {
  description: string;
  type: string[];
}

export interface Checker {
  description: string;
  enum: string[];
}

export interface PerlinOctaves {
  description: string;
  type: string[];
}

export interface TileIds2 {
  description: string;
  items: Items22;
  type: string[];
}

export interface Items22 {
  type: string[];
}

export interface Alpha {
  description: string;
  type: string[];
}

export interface TileXoffset {
  description: string;
  type: string[];
}

export interface Invalidated {
  description: string;
  type: string[];
}

export interface XModulo {
  description: string;
  type: string[];
}

export interface Size {
  description: string;
  type: string[];
}

export interface Chance {
  description: string;
  type: string[];
}

export interface BreakOnMatch {
  description: string;
  type: string[];
}

export interface TileYoffset {
  description: string;
  type: string[];
}

export interface Uid {
  description: string;
  type: string[];
}

export interface PerlinSeed {
  description: string;
  type: string[];
}

export interface YOffset {
  description: string;
  type: string[];
}

export interface TileRandomYmax {
  description: string;
  type: string[];
}

export interface TileRandomYmin {
  description: string;
  type: string[];
}

export interface TileMode {
  description: string;
  enum: string[];
}

export interface FlipY {
  description: string;
  type: string[];
}

export interface TileRandomXmax {
  description: string;
  type: string[];
}

export interface PivotY {
  description: string;
  type: string[];
}

export interface YModulo {
  description: string;
  type: string[];
}

export interface Active {
  description: string;
  type: string[];
}

export interface XOffset {
  description: string;
  type: string[];
}

export interface FieldDef2 {
  description: string;
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties9;
  type: string[];
}

export interface Properties9 {
  acceptFileTypes: AcceptFileTypes;
  editorDisplayScale: EditorDisplayScale;
  searchable: Searchable;
  useForSmartColor: UseForSmartColor;
  editorShowInWorld: EditorShowInWorld;
  allowedRefs: AllowedRefs;
  editorAlwaysShow: EditorAlwaysShow;
  arrayMinLength: ArrayMinLength;
  editorTextSuffix: EditorTextSuffix;
  min: Min;
  __type: Type2;
  editorDisplayMode: EditorDisplayMode;
  editorDisplayColor: EditorDisplayColor;
  canBeNull: CanBeNull;
  autoChainRef: AutoChainRef;
  doc: Doc;
  allowedRefsEntityUid: AllowedRefsEntityUid;
  tilesetUid: TilesetUid2;
  allowedRefTags: AllowedRefTags;
  symmetricalRef: SymmetricalRef;
  uid: Uid2;
  editorTextPrefix: EditorTextPrefix;
  isArray: IsArray;
  exportToToc: ExportToToc;
  editorDisplayPos: EditorDisplayPos;
  textLanguageMode: TextLanguageMode;
  max: Max;
  allowOutOfLevelRef: AllowOutOfLevelRef;
  editorCutLongValues: EditorCutLongValues;
  defaultOverride: DefaultOverride;
  editorLinkStyle: EditorLinkStyle;
  regex: Regex;
  type: Type3;
  identifier: Identifier3;
  arrayMaxLength: ArrayMaxLength;
}

export interface AcceptFileTypes {
  description: string;
  items: Items23;
  type: string[];
}

export interface Items23 {
  type: string[];
}

export interface EditorDisplayScale {
  description: string;
  type: string[];
}

export interface Searchable {
  description: string;
  type: string[];
}

export interface UseForSmartColor {
  description: string;
  type: string[];
}

export interface EditorShowInWorld {
  description: string;
  type: string[];
}

export interface AllowedRefs {
  description: string;
  enum: string[];
}

export interface EditorAlwaysShow {
  description: string;
  type: string[];
}

export interface ArrayMinLength {
  description: string;
  type: string[];
}

export interface EditorTextSuffix {
  description: string;
  type: string[];
}

export interface Min {
  description: string;
  type: string[];
}

export interface Type2 {
  description: string;
  type: string[];
}

export interface EditorDisplayMode {
  description: string;
  enum: string[];
}

export interface EditorDisplayColor {
  description: string;
  type: string[];
}

export interface CanBeNull {
  description: string;
  type: string[];
}

export interface AutoChainRef {
  description: string;
  type: string[];
}

export interface Doc {
  description: string;
  type: string[];
}

export interface AllowedRefsEntityUid {
  description: string;
  type: string[];
}

export interface TilesetUid2 {
  description: string;
  type: string[];
}

export interface AllowedRefTags {
  description: string;
  items: Items24;
  type: string[];
}

export interface Items24 {
  type: string[];
}

export interface SymmetricalRef {
  description: string;
  type: string[];
}

export interface Uid2 {
  description: string;
  type: string[];
}

export interface EditorTextPrefix {
  description: string;
  type: string[];
}

export interface IsArray {
  description: string;
  type: string[];
}

export interface ExportToToc {
  description: string;
  type: string[];
}

export interface EditorDisplayPos {
  description: string;
  enum: string[];
}

export interface TextLanguageMode {
  description: string;
  enum: string | undefined[];
}

export interface Max {
  description: string;
  type: string[];
}

export interface AllowOutOfLevelRef {
  description: string;
  type: string[];
}

export interface EditorCutLongValues {
  description: string;
  type: string[];
}

export interface DefaultOverride {
  description: string;
}

export interface EditorLinkStyle {
  description: string;
  enum: string[];
}

export interface Regex {
  description: string;
  type: string[];
}

export interface Type3 {
  description: string;
  type: string[];
}

export interface Identifier3 {
  description: string;
  type: string[];
}

export interface ArrayMaxLength {
  description: string;
  type: string[];
}

export interface CustomCommand2 {
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties10;
  type: string[];
}

export interface Properties10 {
  when: When;
  command: Command;
}

export interface When {
  description: string;
  enum: string[];
}

export interface Command {
  description: string;
  type: string[];
}

export interface EntityDef2 {
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties11;
  type: string[];
}

export interface Properties11 {
  tileId: TileId;
  showName: ShowName;
  tilesetId: TilesetId;
  maxHeight: MaxHeight;
  limitScope: LimitScope;
  pivotX: PivotX2;
  maxCount: MaxCount;
  allowOutOfBounds: AllowOutOfBounds;
  hollow: Hollow;
  minHeight: MinHeight;
  keepAspectRatio: KeepAspectRatio;
  color: Color;
  minWidth: MinWidth;
  tileRect: TileRect;
  doc: Doc2;
  fieldDefs: FieldDefs;
  tileRenderMode: TileRenderMode;
  limitBehavior: LimitBehavior;
  tileOpacity: TileOpacity;
  nineSliceBorders: NineSliceBorders;
  resizableX: ResizableX;
  uiTileRect: UiTileRect;
  uid: Uid3;
  lineOpacity: LineOpacity;
  maxWidth: MaxWidth;
  resizableY: ResizableY;
  exportToToc: ExportToToc2;
  fillOpacity: FillOpacity;
  height: Height2;
  identifier: Identifier4;
  pivotY: PivotY2;
  renderMode: RenderMode;
  tags: Tags2;
  width: Width2;
}

export interface TileId {
  description: string;
  type: string[];
}

export interface ShowName {
  description: string;
  type: string[];
}

export interface TilesetId {
  description: string;
  type: string[];
}

export interface MaxHeight {
  description: string;
  type: string[];
}

export interface LimitScope {
  description: string;
  enum: string[];
}

export interface PivotX2 {
  description: string;
  type: string[];
}

export interface MaxCount {
  description: string;
  type: string[];
}

export interface AllowOutOfBounds {
  description: string;
  type: string[];
}

export interface Hollow {
  description: string;
  type: string[];
}

export interface MinHeight {
  description: string;
  type: string[];
}

export interface KeepAspectRatio {
  description: string;
  type: string[];
}

export interface Color {
  description: string;
  type: string[];
}

export interface MinWidth {
  description: string;
  type: string[];
}

export interface TileRect {
  description: string;
  oneOf: OneOf3[];
}

export interface OneOf3 {
  type?: string[];
  $ref?: string;
}

export interface Doc2 {
  description: string;
  type: string[];
}

export interface FieldDefs {
  description: string;
  items: Items25;
  type: string[];
}

export interface Items25 {
  $ref: string;
}

export interface TileRenderMode {
  description: string;
  enum: string[];
}

export interface LimitBehavior {
  description: string;
  enum: string[];
}

export interface TileOpacity {
  description: string;
  type: string[];
}

export interface NineSliceBorders {
  description: string;
  items: Items26;
  type: string[];
}

export interface Items26 {
  type: string[];
}

export interface ResizableX {
  description: string;
  type: string[];
}

export interface UiTileRect {
  description: string;
  oneOf: OneOf4[];
}

export interface OneOf4 {
  type?: string[];
  $ref?: string;
}

export interface Uid3 {
  description: string;
  type: string[];
}

export interface LineOpacity {
  description: string;
  type: string[];
}

export interface MaxWidth {
  description: string;
  type: string[];
}

export interface ResizableY {
  description: string;
  type: string[];
}

export interface ExportToToc2 {
  description: string;
  type: string[];
}

export interface FillOpacity {
  description: string;
  type: string[];
}

export interface Height2 {
  description: string;
  type: string[];
}

export interface Identifier4 {
  description: string;
  type: string[];
}

export interface PivotY2 {
  description: string;
  type: string[];
}

export interface RenderMode {
  description: string;
  enum: string[];
}

export interface Tags2 {
  description: string;
  items: Items27;
  type: string[];
}

export interface Items27 {
  type: string[];
}

export interface Width2 {
  description: string;
  type: string[];
}

export interface AutoLayerRuleGroup2 {
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties12;
  type: string[];
}

export interface Properties12 {
  name: Name;
  collapsed: Collapsed;
  biomeRequirementMode: BiomeRequirementMode;
  color: Color2;
  isOptional: IsOptional;
  icon: Icon;
  usesWizard: UsesWizard;
  uid: Uid4;
  requiredBiomeValues: RequiredBiomeValues;
  active: Active2;
  rules: Rules;
}

export interface Name {
  description: string;
  type: string[];
}

export interface Collapsed {
  description: string;
  type: string[];
}

export interface BiomeRequirementMode {
  description: string;
  type: string[];
}

export interface Color2 {
  description: string;
  type: string[];
}

export interface IsOptional {
  description: string;
  type: string[];
}

export interface Icon {
  description: string;
  oneOf: OneOf5[];
}

export interface OneOf5 {
  type?: string[];
  $ref?: string;
}

export interface UsesWizard {
  description: string;
  type: string[];
}

export interface Uid4 {
  description: string;
  type: string[];
}

export interface RequiredBiomeValues {
  description: string;
  items: Items28;
  type: string[];
}

export interface Items28 {
  type: string[];
}

export interface Active2 {
  description: string;
  type: string[];
}

export interface Rules {
  description: string;
  items: Items29;
  type: string[];
}

export interface Items29 {
  $ref: string;
}

export interface IntGridValueGroupDef2 {
  description: string;
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties13;
  type: string[];
}

export interface Properties13 {
  color: Color3;
  uid: Uid5;
  identifier: Identifier5;
}

export interface Color3 {
  description: string;
  type: string[];
}

export interface Uid5 {
  description: string;
  type: string[];
}

export interface Identifier5 {
  description: string;
  type: string[];
}

export interface IntGridValueInstance2 {
  description: string;
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties14;
  type: string[];
}

export interface Properties14 {
  v: V;
  coordId: CoordId;
}

export interface V {
  description: string;
  type: string[];
}

export interface CoordId {
  description: string;
  type: string[];
}

export interface TocInstanceData2 {
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties15;
  type: string[];
}

export interface Properties15 {
  worldX: WorldX2;
  widPx: WidPx;
  worldY: WorldY2;
  heiPx: HeiPx;
  fields: Fields;
  iids: Iids;
}

export interface WorldX2 {
  description: string;
  type: string[];
}

export interface WidPx {
  description: string;
  type: string[];
}

export interface WorldY2 {
  description: string;
  type: string[];
}

export interface HeiPx {
  description: string;
  type: string[];
}

export interface Fields {
  description: string;
}

export interface Iids {
  description: string;
  $ref: string;
}

export interface NeighbourLevel2 {
  description: string;
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties16;
  type: string[];
}

export interface Properties16 {
  levelIid: LevelIid;
  levelUid: LevelUid;
  dir: Dir;
}

export interface LevelIid {
  description: string;
  type: string[];
}

export interface LevelUid {
  description: string;
  type: string[];
}

export interface Dir {
  description: string;
  type: string[];
}

export interface LayerInstance2 {
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties17;
  type: string[];
}

export interface Properties17 {
  __cHei: CHei;
  pxOffsetX: PxOffsetX;
  __tilesetRelPath: TilesetRelPath;
  iid: Iid3;
  levelId: LevelId;
  __type: Type4;
  autoLayerTiles: AutoLayerTiles;
  optionalRules: OptionalRules;
  __identifier: Identifier6;
  __gridSize: GridSize;
  __pxTotalOffsetY: PxTotalOffsetY;
  intGridCsv: IntGridCsv;
  overrideTilesetUid: OverrideTilesetUid;
  visible: Visible;
  entityInstances: EntityInstances;
  __opacity: Opacity;
  seed: Seed;
  layerDefUid: LayerDefUid;
  __pxTotalOffsetX: PxTotalOffsetX;
  __cWid: CWid;
  pxOffsetY: PxOffsetY;
  __tilesetDefUid: TilesetDefUid;
  gridTiles: GridTiles;
  intGrid: IntGrid;
}

export interface CHei {
  description: string;
  type: string[];
}

export interface PxOffsetX {
  description: string;
  type: string[];
}

export interface TilesetRelPath {
  description: string;
  type: string[];
}

export interface Iid3 {
  description: string;
  type: string[];
}

export interface LevelId {
  description: string;
  type: string[];
}

export interface Type4 {
  description: string;
  type: string[];
}

export interface AutoLayerTiles {
  description: string;
  items: Items30;
  type: string[];
}

export interface Items30 {
  $ref: string;
}

export interface OptionalRules {
  description: string;
  items: Items31;
  type: string[];
}

export interface Items31 {
  type: string[];
}

export interface Identifier6 {
  description: string;
  type: string[];
}

export interface GridSize {
  description: string;
  type: string[];
}

export interface PxTotalOffsetY {
  description: string;
  type: string[];
}

export interface IntGridCsv {
  description: string;
  items: Items32;
  type: string[];
}

export interface Items32 {
  type: string[];
}

export interface OverrideTilesetUid {
  description: string;
  type: string[];
}

export interface Visible {
  description: string;
  type: string[];
}

export interface EntityInstances {
  description: string;
  items: Items33;
  type: string[];
}

export interface Items33 {
  $ref: string;
}

export interface Opacity {
  description: string;
  type: string[];
}

export interface Seed {
  description: string;
  type: string[];
}

export interface LayerDefUid {
  description: string;
  type: string[];
}

export interface PxTotalOffsetX {
  description: string;
  type: string[];
}

export interface CWid {
  description: string;
  type: string[];
}

export interface PxOffsetY {
  description: string;
  type: string[];
}

export interface TilesetDefUid {
  description: string;
  type: string[];
}

export interface GridTiles {
  description: string;
  items: Items34;
  type: string[];
}

export interface Items34 {
  $ref: string;
}

export interface IntGrid {
  description: string;
  items: Items35;
  type: string[];
}

export interface Items35 {
  $ref: string;
}

export interface World2 {
  description: string;
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties18;
  type: string[];
}

export interface Properties18 {
  worldGridWidth: WorldGridWidth2;
  iid: Iid4;
  worldGridHeight: WorldGridHeight2;
  worldLayout: WorldLayout2;
  defaultLevelWidth: DefaultLevelWidth2;
  levels: Levels2;
  defaultLevelHeight: DefaultLevelHeight2;
  identifier: Identifier7;
}

export interface WorldGridWidth2 {
  description: string;
  type: string[];
}

export interface Iid4 {
  description: string;
  type: string[];
}

export interface WorldGridHeight2 {
  description: string;
  type: string[];
}

export interface WorldLayout2 {
  description: string;
  enum: string | undefined[];
}

export interface DefaultLevelWidth2 {
  description: string;
  type: string[];
}

export interface Levels2 {
  description: string;
  items: Items36;
  type: string[];
}

export interface Items36 {
  $ref: string;
}

export interface DefaultLevelHeight2 {
  description: string;
  type: string[];
}

export interface Identifier7 {
  description: string;
  type: string[];
}

export interface EntityReferenceInfos2 {
  description: string;
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties19;
  type: string[];
}

export interface Properties19 {
  worldIid: WorldIid;
  entityIid: EntityIid;
  layerIid: LayerIid;
  levelIid: LevelIid2;
}

export interface WorldIid {
  description: string;
  type: string[];
}

export interface EntityIid {
  description: string;
  type: string[];
}

export interface LayerIid {
  description: string;
  type: string[];
}

export interface LevelIid2 {
  description: string;
  type: string[];
}

export interface TileCustomMetadata2 {
  description: string;
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties20;
  type: string[];
}

export interface Properties20 {
  tileId: TileId2;
  data: Data;
}

export interface TileId2 {
  description: string;
  type: string[];
}

export interface Data {
  description: string;
  type: string[];
}

export interface TilesetDef2 {
  description: string;
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties21;
  type: string[];
}

export interface Properties21 {
  cachedPixelData: CachedPixelData;
  __cHei: CHei2;
  pxHei: PxHei;
  customData: CustomData;
  tagsSourceEnumUid: TagsSourceEnumUid;
  uid: Uid6;
  padding: Padding;
  enumTags: EnumTags;
  pxWid: PxWid;
  __cWid: CWid2;
  spacing: Spacing;
  identifier: Identifier8;
  savedSelections: SavedSelections;
  tags: Tags3;
  embedAtlas: EmbedAtlas;
  relPath: RelPath;
  tileGridSize: TileGridSize;
}

export interface CachedPixelData {
  description: string;
  type: string[];
}

export interface CHei2 {
  description: string;
  type: string[];
}

export interface PxHei {
  description: string;
  type: string[];
}

export interface CustomData {
  description: string;
  items: Items37;
  type: string[];
}

export interface Items37 {
  $ref: string;
}

export interface TagsSourceEnumUid {
  description: string;
  type: string[];
}

export interface Uid6 {
  description: string;
  type: string[];
}

export interface Padding {
  description: string;
  type: string[];
}

export interface EnumTags {
  description: string;
  items: Items38;
  type: string[];
}

export interface Items38 {
  $ref: string;
}

export interface PxWid {
  description: string;
  type: string[];
}

export interface CWid2 {
  description: string;
  type: string[];
}

export interface Spacing {
  description: string;
  type: string[];
}

export interface Identifier8 {
  description: string;
  type: string[];
}

export interface SavedSelections {
  description: string;
  items: Items39;
  type: string[];
}

export interface Items39 {
  type: string[];
}

export interface Tags3 {
  description: string;
  items: Items40;
  type: string[];
}

export interface Items40 {
  type: string[];
}

export interface EmbedAtlas {
  description: string;
  enum: string | undefined[];
}

export interface RelPath {
  description: string;
  type: string[];
}

export interface TileGridSize {
  description: string;
  type: string[];
}

export interface EnumDefValues2 {
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties22;
  type: string[];
}

export interface Properties22 {
  tileId: TileId3;
  color: Color4;
  tileRect: TileRect2;
  id: Id;
  __tileSrcRect: TileSrcRect;
}

export interface TileId3 {
  description: string;
  type: string[];
}

export interface Color4 {
  description: string;
  type: string[];
}

export interface TileRect2 {
  description: string;
  oneOf: OneOf6[];
}

export interface OneOf6 {
  type?: string[];
  $ref?: string;
}

export interface Id {
  description: string;
  type: string[];
}

export interface TileSrcRect {
  description: string;
  items: Items41;
  type: string[];
}

export interface Items41 {
  type: string[];
}

export interface Tile4 {
  description: string;
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties23;
  type: string[];
}

export interface Properties23 {
  t: T;
  d: D;
  px: Px2;
  a: A;
  f: F;
  src: Src;
}

export interface T {
  description: string;
  type: string[];
}

export interface D {
  description: string;
  items: Items42;
  type: string[];
}

export interface Items42 {
  type: string[];
}

export interface Px2 {
  description: string;
  items: Items43;
  type: string[];
}

export interface Items43 {
  type: string[];
}

export interface A {
  description: string;
  type: string[];
}

export interface F {
  description: string;
  type: string[];
}

export interface Src {
  description: string;
  items: Items44;
  type: string[];
}

export interface Items44 {
  type: string[];
}

export interface LayerDef2 {
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties24;
  type: string[];
}

export interface Properties24 {
  pxOffsetX: PxOffsetX2;
  tilePivotX: TilePivotX;
  uiFilterTags: UiFilterTags;
  displayOpacity: DisplayOpacity;
  parallaxFactorY: ParallaxFactorY;
  hideInList: HideInList;
  __type: Type5;
  guideGridHei: GuideGridHei;
  uiColor: UiColor;
  doc: Doc3;
  tilesetDefUid: TilesetDefUid2;
  canSelectWhenInactive: CanSelectWhenInactive;
  useAsyncRender: UseAsyncRender;
  autoSourceLayerDefUid: AutoSourceLayerDefUid;
  autoTilesetDefUid: AutoTilesetDefUid;
  parallaxScaling: ParallaxScaling;
  renderInWorldView: RenderInWorldView;
  intGridValuesGroups: IntGridValuesGroups;
  inactiveOpacity: InactiveOpacity;
  uid: Uid7;
  excludedTags: ExcludedTags;
  hideFieldsWhenInactive: HideFieldsWhenInactive;
  intGridValues: IntGridValues;
  autoRuleGroups: AutoRuleGroups;
  type: Type6;
  identifier: Identifier9;
  guideGridWid: GuideGridWid;
  requiredTags: RequiredTags;
  pxOffsetY: PxOffsetY2;
  tilePivotY: TilePivotY;
  biomeFieldUid: BiomeFieldUid;
  gridSize: GridSize2;
  parallaxFactorX: ParallaxFactorX;
  autoTilesKilledByOtherLayerUid: AutoTilesKilledByOtherLayerUid;
}

export interface PxOffsetX2 {
  description: string;
  type: string[];
}

export interface TilePivotX {
  description: string;
  type: string[];
}

export interface UiFilterTags {
  description: string;
  items: Items45;
  type: string[];
}

export interface Items45 {
  type: string[];
}

export interface DisplayOpacity {
  description: string;
  type: string[];
}

export interface ParallaxFactorY {
  description: string;
  type: string[];
}

export interface HideInList {
  description: string;
  type: string[];
}

export interface Type5 {
  description: string;
  type: string[];
}

export interface GuideGridHei {
  description: string;
  type: string[];
}

export interface UiColor {
  description: string;
  type: string[];
}

export interface Doc3 {
  description: string;
  type: string[];
}

export interface TilesetDefUid2 {
  description: string;
  type: string[];
}

export interface CanSelectWhenInactive {
  description: string;
  type: string[];
}

export interface UseAsyncRender {
  description: string;
  type: string[];
}

export interface AutoSourceLayerDefUid {
  description: string;
  type: string[];
}

export interface AutoTilesetDefUid {
  description: string;
  type: string[];
}

export interface ParallaxScaling {
  description: string;
  type: string[];
}

export interface RenderInWorldView {
  description: string;
  type: string[];
}

export interface IntGridValuesGroups {
  description: string;
  items: Items46;
  type: string[];
}

export interface Items46 {
  $ref: string;
}

export interface InactiveOpacity {
  description: string;
  type: string[];
}

export interface Uid7 {
  description: string;
  type: string[];
}

export interface ExcludedTags {
  description: string;
  items: Items47;
  type: string[];
}

export interface Items47 {
  type: string[];
}

export interface HideFieldsWhenInactive {
  description: string;
  type: string[];
}

export interface IntGridValues {
  description: string;
  items: Items48;
  type: string[];
}

export interface Items48 {
  $ref: string;
}

export interface AutoRuleGroups {
  description: string;
  items: Items49;
  type: string[];
}

export interface Items49 {
  $ref: string;
}

export interface Type6 {
  description: string;
  enum: string[];
}

export interface Identifier9 {
  description: string;
  type: string[];
}

export interface GuideGridWid {
  description: string;
  type: string[];
}

export interface RequiredTags {
  description: string;
  items: Items50;
  type: string[];
}

export interface Items50 {
  type: string[];
}

export interface PxOffsetY2 {
  description: string;
  type: string[];
}

export interface TilePivotY {
  description: string;
  type: string[];
}

export interface BiomeFieldUid {
  description: string;
  type: string[];
}

export interface GridSize2 {
  description: string;
  type: string[];
}

export interface ParallaxFactorX {
  description: string;
  type: string[];
}

export interface AutoTilesKilledByOtherLayerUid {
  description: string;
  type: string[];
}

export interface LevelBgPosInfos2 {
  description: string;
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties25;
  type: string[];
}

export interface Properties25 {
  cropRect: CropRect;
  scale: Scale;
  topLeftPx: TopLeftPx;
}

export interface CropRect {
  description: string;
  items: Items51;
  type: string[];
}

export interface Items51 {
  type: string[];
}

export interface Scale {
  description: string;
  items: Items52;
  type: string[];
}

export interface Items52 {
  type: string[];
}

export interface TopLeftPx {
  description: string;
  items: Items53;
  type: string[];
}

export interface Items53 {
  type: string[];
}

export interface Level2 {
  description: string;
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties26;
  type: string[];
}

export interface Properties26 {
  __neighbours: Neighbours;
  __bgColor: BgColor2;
  worldX: WorldX3;
  externalRelPath: ExternalRelPath;
  useAutoIdentifier: UseAutoIdentifier;
  iid: Iid5;
  bgColor: BgColor3;
  bgPos: BgPos;
  pxHei: PxHei2;
  worldY: WorldY3;
  __bgPos: BgPos2;
  uid: Uid8;
  __smartColor: SmartColor2;
  fieldInstances: FieldInstances2;
  pxWid: PxWid2;
  identifier: Identifier10;
  bgPivotY: BgPivotY;
  bgPivotX: BgPivotX;
  layerInstances: LayerInstances;
  bgRelPath: BgRelPath;
  worldDepth: WorldDepth;
}

export interface Neighbours {
  description: string;
  items: Items54;
  type: string[];
}

export interface Items54 {
  $ref: string;
}

export interface BgColor2 {
  description: string;
  type: string[];
}

export interface WorldX3 {
  description: string;
  type: string[];
}

export interface ExternalRelPath {
  description: string;
  type: string[];
}

export interface UseAutoIdentifier {
  description: string;
  type: string[];
}

export interface Iid5 {
  description: string;
  type: string[];
}

export interface BgColor3 {
  description: string;
  type: string[];
}

export interface BgPos {
  description: string;
  enum: string | undefined[];
}

export interface PxHei2 {
  description: string;
  type: string[];
}

export interface WorldY3 {
  description: string;
  type: string[];
}

export interface BgPos2 {
  description: string;
  oneOf: OneOf7[];
}

export interface OneOf7 {
  type?: string[];
  $ref?: string;
}

export interface Uid8 {
  description: string;
  type: string[];
}

export interface SmartColor2 {
  description: string;
  type: string[];
}

export interface FieldInstances2 {
  description: string;
  items: Items55;
  type: string[];
}

export interface Items55 {
  $ref: string;
}

export interface PxWid2 {
  description: string;
  type: string[];
}

export interface Identifier10 {
  description: string;
  type: string[];
}

export interface BgPivotY {
  description: string;
  type: string[];
}

export interface BgPivotX {
  description: string;
  type: string[];
}

export interface LayerInstances {
  description: string;
  items: Items56;
  type: string[];
}

export interface Items56 {
  $ref: string;
}

export interface BgRelPath {
  description: string;
  type: string[];
}

export interface WorldDepth {
  description: string;
  type: string[];
}

export interface TableOfContentEntry2 {
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties27;
  type: string[];
}

export interface Properties27 {
  identifier: Identifier11;
  instancesData: InstancesData;
  instances: Instances;
}

export interface Identifier11 {
  description: string;
  type: string[];
}

export interface InstancesData {
  description: string;
  items: Items57;
  type: string[];
}

export interface Items57 {
  $ref: string;
}

export interface Instances {
  description: string;
  items: Items58;
  type: string[];
}

export interface Items58 {
  $ref: string;
}

export interface EnumDef2 {
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties28;
  type: string[];
}

export interface Properties28 {
  externalFileChecksum: ExternalFileChecksum;
  externalRelPath: ExternalRelPath2;
  uid: Uid9;
  values: Values;
  iconTilesetUid: IconTilesetUid;
  identifier: Identifier12;
  tags: Tags4;
}

export interface ExternalFileChecksum {
  description: string;
  type: string[];
}

export interface ExternalRelPath2 {
  description: string;
  type: string[];
}

export interface Uid9 {
  description: string;
  type: string[];
}

export interface Values {
  description: string;
  items: Items59;
  type: string[];
}

export interface Items59 {
  $ref: string;
}

export interface IconTilesetUid {
  description: string;
  type: string[];
}

export interface Identifier12 {
  description: string;
  type: string[];
}

export interface Tags4 {
  description: string;
  items: Items60;
  type: string[];
}

export interface Items60 {
  type: string[];
}

export interface GridPoint2 {
  description: string;
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties29;
  type: string[];
}

export interface Properties29 {
  cy: Cy;
  cx: Cx;
}

export interface Cy {
  description: string;
  type: string[];
}

export interface Cx {
  description: string;
  type: string[];
}

export interface IntGridValueDef2 {
  description: string;
  title: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties30;
  type: string[];
}

export interface Properties30 {
  tile: Tile5;
  color: Color5;
  identifier: Identifier13;
  value: Value2;
  groupUid: GroupUid;
}

export interface Tile5 {
  description: string;
  oneOf: OneOf8[];
}

export interface OneOf8 {
  type?: string[];
  $ref?: string;
}

export interface Color5 {
  description: string;
  type: string[];
}

export interface Identifier13 {
  description: string;
  type: string[];
}

export interface Value2 {
  description: string;
  type: string[];
}

export interface GroupUid {
  description: string;
  type: string[];
}
