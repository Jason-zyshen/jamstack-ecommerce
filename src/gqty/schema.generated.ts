/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey } from "gqty"

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: string
  Hex: any
  /** Raw JSON value */
  Json: any
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any
  RGBAHue: any
  RGBATransparency: any
  /** Slate-compatible RichText AST */
  RichTextAST: any
}

export interface AssetConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: AssetWhereUniqueInput
}

export interface AssetCreateInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>
  fileName: Scalars["String"]
  handle: Scalars["String"]
  height?: InputMaybe<Scalars["Float"]>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>
  mimeType?: InputMaybe<Scalars["String"]>
  productImages?: InputMaybe<ProductCreateManyInlineInput>
  size?: InputMaybe<Scalars["Float"]>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  width?: InputMaybe<Scalars["Float"]>
}

export interface AssetCreateLocalizationDataInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>
  fileName: Scalars["String"]
  handle: Scalars["String"]
  height?: InputMaybe<Scalars["Float"]>
  mimeType?: InputMaybe<Scalars["String"]>
  size?: InputMaybe<Scalars["Float"]>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  width?: InputMaybe<Scalars["Float"]>
}

export interface AssetCreateLocalizationInput {
  /** Localization input */
  data: AssetCreateLocalizationDataInput
  locale: Locale
}

export interface AssetCreateLocalizationsInput {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
}

export interface AssetCreateManyInlineInput {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
}

export interface AssetCreateOneInlineInput {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
}

/** Identifies documents */
export interface AssetManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  productImages_every?: InputMaybe<ProductWhereInput>
  productImages_none?: InputMaybe<ProductWhereInput>
  productImages_some?: InputMaybe<ProductWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum AssetOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  fileName_ASC = "fileName_ASC",
  fileName_DESC = "fileName_DESC",
  handle_ASC = "handle_ASC",
  handle_DESC = "handle_DESC",
  height_ASC = "height_ASC",
  height_DESC = "height_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  mimeType_ASC = "mimeType_ASC",
  mimeType_DESC = "mimeType_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  size_ASC = "size_ASC",
  size_DESC = "size_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
  width_ASC = "width_ASC",
  width_DESC = "width_DESC",
}

/** Transformations for Assets */
export interface AssetTransformationInput {
  document?: InputMaybe<DocumentTransformationInput>
  image?: InputMaybe<ImageTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars["Boolean"]>
}

export interface AssetUpdateInput {
  fileName?: InputMaybe<Scalars["String"]>
  handle?: InputMaybe<Scalars["String"]>
  height?: InputMaybe<Scalars["Float"]>
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>
  mimeType?: InputMaybe<Scalars["String"]>
  productImages?: InputMaybe<ProductUpdateManyInlineInput>
  size?: InputMaybe<Scalars["Float"]>
  width?: InputMaybe<Scalars["Float"]>
}

export interface AssetUpdateLocalizationDataInput {
  fileName?: InputMaybe<Scalars["String"]>
  handle?: InputMaybe<Scalars["String"]>
  height?: InputMaybe<Scalars["Float"]>
  mimeType?: InputMaybe<Scalars["String"]>
  size?: InputMaybe<Scalars["Float"]>
  width?: InputMaybe<Scalars["Float"]>
}

export interface AssetUpdateLocalizationInput {
  data: AssetUpdateLocalizationDataInput
  locale: Locale
}

export interface AssetUpdateLocalizationsInput {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>
}

export interface AssetUpdateManyInlineInput {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>
}

export interface AssetUpdateManyInput {
  fileName?: InputMaybe<Scalars["String"]>
  height?: InputMaybe<Scalars["Float"]>
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>
  mimeType?: InputMaybe<Scalars["String"]>
  size?: InputMaybe<Scalars["Float"]>
  width?: InputMaybe<Scalars["Float"]>
}

export interface AssetUpdateManyLocalizationDataInput {
  fileName?: InputMaybe<Scalars["String"]>
  height?: InputMaybe<Scalars["Float"]>
  mimeType?: InputMaybe<Scalars["String"]>
  size?: InputMaybe<Scalars["Float"]>
  width?: InputMaybe<Scalars["Float"]>
}

export interface AssetUpdateManyLocalizationInput {
  data: AssetUpdateManyLocalizationDataInput
  locale: Locale
}

export interface AssetUpdateManyLocalizationsInput {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>
}

export interface AssetUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: AssetUpdateManyInput
  /** Document search */
  where: AssetWhereInput
}

export interface AssetUpdateOneInlineInput {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars["Boolean"]>
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>
}

export interface AssetUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: AssetUpdateInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

export interface AssetUpsertInput {
  /** Create document if it didn't exist */
  create: AssetCreateInput
  /** Update document if it exists */
  update: AssetUpdateInput
}

export interface AssetUpsertLocalizationInput {
  create: AssetCreateLocalizationDataInput
  locale: Locale
  update: AssetUpdateLocalizationDataInput
}

export interface AssetUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: AssetUpsertInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export interface AssetWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export interface AssetWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  fileName?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars["String"]>
  handle?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars["String"]>
  height?: InputMaybe<Scalars["Float"]>
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars["Float"]>
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars["Float"]>
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars["Float"]>
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars["Float"]>
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars["Float"]>
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  mimeType?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars["String"]>
  productImages_every?: InputMaybe<ProductWhereInput>
  productImages_none?: InputMaybe<ProductWhereInput>
  productImages_some?: InputMaybe<ProductWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  size?: InputMaybe<Scalars["Float"]>
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars["Float"]>
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars["Float"]>
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars["Float"]>
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars["Float"]>
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars["Float"]>
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
  width?: InputMaybe<Scalars["Float"]>
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars["Float"]>
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars["Float"]>
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars["Float"]>
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars["Float"]>
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars["Float"]>
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface AssetWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Asset record uniquely */
export interface AssetWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>
}

export interface CategoryConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: CategoryWhereUniqueInput
}

export interface CategoryCreateInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars["String"]>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<CategoryCreateLocalizationsInput>
  /** name input for default locale (en) */
  name: Scalars["String"]
  products?: InputMaybe<ProductCreateManyInlineInput>
  /** slug input for default locale (en) */
  slug: Scalars["String"]
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export interface CategoryCreateLocalizationDataInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>
  description?: InputMaybe<Scalars["String"]>
  name: Scalars["String"]
  slug: Scalars["String"]
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export interface CategoryCreateLocalizationInput {
  /** Localization input */
  data: CategoryCreateLocalizationDataInput
  locale: Locale
}

export interface CategoryCreateLocalizationsInput {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<CategoryCreateLocalizationInput>>
}

export interface CategoryCreateManyInlineInput {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>
  /** Create and connect multiple existing Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>
}

export interface CategoryCreateOneInlineInput {
  /** Connect one existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>
}

/** Identifies documents */
export interface CategoryManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<CategoryWhereStageInput>
  documentInStages_none?: InputMaybe<CategoryWhereStageInput>
  documentInStages_some?: InputMaybe<CategoryWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  products_every?: InputMaybe<ProductWhereInput>
  products_none?: InputMaybe<ProductWhereInput>
  products_some?: InputMaybe<ProductWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum CategoryOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  description_ASC = "description_ASC",
  description_DESC = "description_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  name_ASC = "name_ASC",
  name_DESC = "name_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  slug_ASC = "slug_ASC",
  slug_DESC = "slug_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export interface CategoryUpdateInput {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars["String"]>
  /** Manage document localizations */
  localizations?: InputMaybe<CategoryUpdateLocalizationsInput>
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars["String"]>
  products?: InputMaybe<ProductUpdateManyInlineInput>
  /** slug input for default locale (en) */
  slug?: InputMaybe<Scalars["String"]>
}

export interface CategoryUpdateLocalizationDataInput {
  description?: InputMaybe<Scalars["String"]>
  name?: InputMaybe<Scalars["String"]>
  slug?: InputMaybe<Scalars["String"]>
}

export interface CategoryUpdateLocalizationInput {
  data: CategoryUpdateLocalizationDataInput
  locale: Locale
}

export interface CategoryUpdateLocalizationsInput {
  /** Localizations to create */
  create?: InputMaybe<Array<CategoryCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<CategoryUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<CategoryUpsertLocalizationInput>>
}

export interface CategoryUpdateManyInlineInput {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryConnectInput>>
  /** Create and connect multiple Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>
  /** Delete multiple Category documents */
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>
  /** Disconnect multiple Category documents */
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Category documents */
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>
  /** Update multiple Category documents */
  update?: InputMaybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Category documents */
  upsert?: InputMaybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>
}

export interface CategoryUpdateManyInput {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars["String"]>
  /** Optional updates to localizations */
  localizations?: InputMaybe<CategoryUpdateManyLocalizationsInput>
}

export interface CategoryUpdateManyLocalizationDataInput {
  description?: InputMaybe<Scalars["String"]>
}

export interface CategoryUpdateManyLocalizationInput {
  data: CategoryUpdateManyLocalizationDataInput
  locale: Locale
}

export interface CategoryUpdateManyLocalizationsInput {
  /** Localizations to update */
  update?: InputMaybe<Array<CategoryUpdateManyLocalizationInput>>
}

export interface CategoryUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: CategoryUpdateManyInput
  /** Document search */
  where: CategoryWhereInput
}

export interface CategoryUpdateOneInlineInput {
  /** Connect existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>
  /** Delete currently connected Category document */
  delete?: InputMaybe<Scalars["Boolean"]>
  /** Disconnect currently connected Category document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
  /** Update single Category document */
  update?: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>
  /** Upsert single Category document */
  upsert?: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>
}

export interface CategoryUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: CategoryUpdateInput
  /** Unique document search */
  where: CategoryWhereUniqueInput
}

export interface CategoryUpsertInput {
  /** Create document if it didn't exist */
  create: CategoryCreateInput
  /** Update document if it exists */
  update: CategoryUpdateInput
}

export interface CategoryUpsertLocalizationInput {
  create: CategoryCreateLocalizationDataInput
  locale: Locale
  update: CategoryUpdateLocalizationDataInput
}

export interface CategoryUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: CategoryUpsertInput
  /** Unique document search */
  where: CategoryWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export interface CategoryWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export interface CategoryWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>
  documentInStages_every?: InputMaybe<CategoryWhereStageInput>
  documentInStages_none?: InputMaybe<CategoryWhereStageInput>
  documentInStages_some?: InputMaybe<CategoryWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  name?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>
  products_every?: InputMaybe<ProductWhereInput>
  products_none?: InputMaybe<ProductWhereInput>
  products_some?: InputMaybe<ProductWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface CategoryWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CategoryWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Category record uniquely */
export interface CategoryWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>
}

export interface CollectionConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: CollectionWhereUniqueInput
}

export interface CollectionCreateInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars["String"]>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<CollectionCreateLocalizationsInput>
  /** name input for default locale (en) */
  name: Scalars["String"]
  products?: InputMaybe<ProductCreateManyInlineInput>
  /** slug input for default locale (en) */
  slug: Scalars["String"]
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export interface CollectionCreateLocalizationDataInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>
  description?: InputMaybe<Scalars["String"]>
  name: Scalars["String"]
  slug: Scalars["String"]
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export interface CollectionCreateLocalizationInput {
  /** Localization input */
  data: CollectionCreateLocalizationDataInput
  locale: Locale
}

export interface CollectionCreateLocalizationsInput {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<CollectionCreateLocalizationInput>>
}

export interface CollectionCreateManyInlineInput {
  /** Connect multiple existing Collection documents */
  connect?: InputMaybe<Array<CollectionWhereUniqueInput>>
  /** Create and connect multiple existing Collection documents */
  create?: InputMaybe<Array<CollectionCreateInput>>
}

export interface CollectionCreateOneInlineInput {
  /** Connect one existing Collection document */
  connect?: InputMaybe<CollectionWhereUniqueInput>
  /** Create and connect one Collection document */
  create?: InputMaybe<CollectionCreateInput>
}

/** Identifies documents */
export interface CollectionManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<CollectionWhereStageInput>
  documentInStages_none?: InputMaybe<CollectionWhereStageInput>
  documentInStages_some?: InputMaybe<CollectionWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  products_every?: InputMaybe<ProductWhereInput>
  products_none?: InputMaybe<ProductWhereInput>
  products_some?: InputMaybe<ProductWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum CollectionOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  description_ASC = "description_ASC",
  description_DESC = "description_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  name_ASC = "name_ASC",
  name_DESC = "name_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  slug_ASC = "slug_ASC",
  slug_DESC = "slug_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export interface CollectionUpdateInput {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars["String"]>
  /** Manage document localizations */
  localizations?: InputMaybe<CollectionUpdateLocalizationsInput>
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars["String"]>
  products?: InputMaybe<ProductUpdateManyInlineInput>
  /** slug input for default locale (en) */
  slug?: InputMaybe<Scalars["String"]>
}

export interface CollectionUpdateLocalizationDataInput {
  description?: InputMaybe<Scalars["String"]>
  name?: InputMaybe<Scalars["String"]>
  slug?: InputMaybe<Scalars["String"]>
}

export interface CollectionUpdateLocalizationInput {
  data: CollectionUpdateLocalizationDataInput
  locale: Locale
}

export interface CollectionUpdateLocalizationsInput {
  /** Localizations to create */
  create?: InputMaybe<Array<CollectionCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<CollectionUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<CollectionUpsertLocalizationInput>>
}

export interface CollectionUpdateManyInlineInput {
  /** Connect multiple existing Collection documents */
  connect?: InputMaybe<Array<CollectionConnectInput>>
  /** Create and connect multiple Collection documents */
  create?: InputMaybe<Array<CollectionCreateInput>>
  /** Delete multiple Collection documents */
  delete?: InputMaybe<Array<CollectionWhereUniqueInput>>
  /** Disconnect multiple Collection documents */
  disconnect?: InputMaybe<Array<CollectionWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Collection documents */
  set?: InputMaybe<Array<CollectionWhereUniqueInput>>
  /** Update multiple Collection documents */
  update?: InputMaybe<Array<CollectionUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Collection documents */
  upsert?: InputMaybe<Array<CollectionUpsertWithNestedWhereUniqueInput>>
}

export interface CollectionUpdateManyInput {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars["String"]>
  /** Optional updates to localizations */
  localizations?: InputMaybe<CollectionUpdateManyLocalizationsInput>
}

export interface CollectionUpdateManyLocalizationDataInput {
  description?: InputMaybe<Scalars["String"]>
}

export interface CollectionUpdateManyLocalizationInput {
  data: CollectionUpdateManyLocalizationDataInput
  locale: Locale
}

export interface CollectionUpdateManyLocalizationsInput {
  /** Localizations to update */
  update?: InputMaybe<Array<CollectionUpdateManyLocalizationInput>>
}

export interface CollectionUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: CollectionUpdateManyInput
  /** Document search */
  where: CollectionWhereInput
}

export interface CollectionUpdateOneInlineInput {
  /** Connect existing Collection document */
  connect?: InputMaybe<CollectionWhereUniqueInput>
  /** Create and connect one Collection document */
  create?: InputMaybe<CollectionCreateInput>
  /** Delete currently connected Collection document */
  delete?: InputMaybe<Scalars["Boolean"]>
  /** Disconnect currently connected Collection document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
  /** Update single Collection document */
  update?: InputMaybe<CollectionUpdateWithNestedWhereUniqueInput>
  /** Upsert single Collection document */
  upsert?: InputMaybe<CollectionUpsertWithNestedWhereUniqueInput>
}

export interface CollectionUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: CollectionUpdateInput
  /** Unique document search */
  where: CollectionWhereUniqueInput
}

export interface CollectionUpsertInput {
  /** Create document if it didn't exist */
  create: CollectionCreateInput
  /** Update document if it exists */
  update: CollectionUpdateInput
}

export interface CollectionUpsertLocalizationInput {
  create: CollectionCreateLocalizationDataInput
  locale: Locale
  update: CollectionUpdateLocalizationDataInput
}

export interface CollectionUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: CollectionUpsertInput
  /** Unique document search */
  where: CollectionWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export interface CollectionWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export interface CollectionWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>
  documentInStages_every?: InputMaybe<CollectionWhereStageInput>
  documentInStages_none?: InputMaybe<CollectionWhereStageInput>
  documentInStages_some?: InputMaybe<CollectionWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  name?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>
  products_every?: InputMaybe<ProductWhereInput>
  products_none?: InputMaybe<ProductWhereInput>
  products_some?: InputMaybe<ProductWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface CollectionWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CollectionWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Collection record uniquely */
export interface CollectionWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export interface ColorInput {
  hex?: InputMaybe<Scalars["Hex"]>
  rgba?: InputMaybe<RGBAInput>
}

export interface ConnectPositionInput {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars["ID"]>
  /** Connect document before specified document */
  before?: InputMaybe<Scalars["ID"]>
  /** Connect document at last position */
  end?: InputMaybe<Scalars["Boolean"]>
  /** Connect document at first position */
  start?: InputMaybe<Scalars["Boolean"]>
}

export interface CurrencyConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: CurrencyWhereUniqueInput
}

export interface CurrencyCreateInput {
  code: Scalars["String"]
  createdAt?: InputMaybe<Scalars["DateTime"]>
  default: Scalars["Boolean"]
  rate: Scalars["Float"]
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export interface CurrencyCreateManyInlineInput {
  /** Connect multiple existing Currency documents */
  connect?: InputMaybe<Array<CurrencyWhereUniqueInput>>
  /** Create and connect multiple existing Currency documents */
  create?: InputMaybe<Array<CurrencyCreateInput>>
}

export interface CurrencyCreateOneInlineInput {
  /** Connect one existing Currency document */
  connect?: InputMaybe<CurrencyWhereUniqueInput>
  /** Create and connect one Currency document */
  create?: InputMaybe<CurrencyCreateInput>
}

/** Identifies documents */
export interface CurrencyManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CurrencyWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CurrencyWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CurrencyWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  code?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  code_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  default?: InputMaybe<Scalars["Boolean"]>
  /** All values that are not equal to given value. */
  default_not?: InputMaybe<Scalars["Boolean"]>
  documentInStages_every?: InputMaybe<CurrencyWhereStageInput>
  documentInStages_none?: InputMaybe<CurrencyWhereStageInput>
  documentInStages_some?: InputMaybe<CurrencyWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  rate?: InputMaybe<Scalars["Float"]>
  /** All values greater than the given value. */
  rate_gt?: InputMaybe<Scalars["Float"]>
  /** All values greater than or equal the given value. */
  rate_gte?: InputMaybe<Scalars["Float"]>
  /** All values that are contained in given list. */
  rate_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  /** All values less than the given value. */
  rate_lt?: InputMaybe<Scalars["Float"]>
  /** All values less than or equal the given value. */
  rate_lte?: InputMaybe<Scalars["Float"]>
  /** All values that are not equal to given value. */
  rate_not?: InputMaybe<Scalars["Float"]>
  /** All values that are not contained in given list. */
  rate_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum CurrencyOrderByInput {
  code_ASC = "code_ASC",
  code_DESC = "code_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  default_ASC = "default_ASC",
  default_DESC = "default_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  rate_ASC = "rate_ASC",
  rate_DESC = "rate_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export interface CurrencyUpdateInput {
  code?: InputMaybe<Scalars["String"]>
  default?: InputMaybe<Scalars["Boolean"]>
  rate?: InputMaybe<Scalars["Float"]>
}

export interface CurrencyUpdateManyInlineInput {
  /** Connect multiple existing Currency documents */
  connect?: InputMaybe<Array<CurrencyConnectInput>>
  /** Create and connect multiple Currency documents */
  create?: InputMaybe<Array<CurrencyCreateInput>>
  /** Delete multiple Currency documents */
  delete?: InputMaybe<Array<CurrencyWhereUniqueInput>>
  /** Disconnect multiple Currency documents */
  disconnect?: InputMaybe<Array<CurrencyWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Currency documents */
  set?: InputMaybe<Array<CurrencyWhereUniqueInput>>
  /** Update multiple Currency documents */
  update?: InputMaybe<Array<CurrencyUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Currency documents */
  upsert?: InputMaybe<Array<CurrencyUpsertWithNestedWhereUniqueInput>>
}

export interface CurrencyUpdateManyInput {
  rate?: InputMaybe<Scalars["Float"]>
}

export interface CurrencyUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: CurrencyUpdateManyInput
  /** Document search */
  where: CurrencyWhereInput
}

export interface CurrencyUpdateOneInlineInput {
  /** Connect existing Currency document */
  connect?: InputMaybe<CurrencyWhereUniqueInput>
  /** Create and connect one Currency document */
  create?: InputMaybe<CurrencyCreateInput>
  /** Delete currently connected Currency document */
  delete?: InputMaybe<Scalars["Boolean"]>
  /** Disconnect currently connected Currency document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
  /** Update single Currency document */
  update?: InputMaybe<CurrencyUpdateWithNestedWhereUniqueInput>
  /** Upsert single Currency document */
  upsert?: InputMaybe<CurrencyUpsertWithNestedWhereUniqueInput>
}

export interface CurrencyUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: CurrencyUpdateInput
  /** Unique document search */
  where: CurrencyWhereUniqueInput
}

export interface CurrencyUpsertInput {
  /** Create document if it didn't exist */
  create: CurrencyCreateInput
  /** Update document if it exists */
  update: CurrencyUpdateInput
}

export interface CurrencyUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: CurrencyUpsertInput
  /** Unique document search */
  where: CurrencyWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export interface CurrencyWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export interface CurrencyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CurrencyWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CurrencyWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CurrencyWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  code?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  code_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  default?: InputMaybe<Scalars["Boolean"]>
  /** All values that are not equal to given value. */
  default_not?: InputMaybe<Scalars["Boolean"]>
  documentInStages_every?: InputMaybe<CurrencyWhereStageInput>
  documentInStages_none?: InputMaybe<CurrencyWhereStageInput>
  documentInStages_some?: InputMaybe<CurrencyWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  rate?: InputMaybe<Scalars["Float"]>
  /** All values greater than the given value. */
  rate_gt?: InputMaybe<Scalars["Float"]>
  /** All values greater than or equal the given value. */
  rate_gte?: InputMaybe<Scalars["Float"]>
  /** All values that are contained in given list. */
  rate_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  /** All values less than the given value. */
  rate_lt?: InputMaybe<Scalars["Float"]>
  /** All values less than or equal the given value. */
  rate_lte?: InputMaybe<Scalars["Float"]>
  /** All values that are not equal to given value. */
  rate_not?: InputMaybe<Scalars["Float"]>
  /** All values that are not contained in given list. */
  rate_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface CurrencyWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CurrencyWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CurrencyWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CurrencyWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CurrencyWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Currency record uniquely */
export interface CurrencyWhereUniqueInput {
  code?: InputMaybe<Scalars["String"]>
  default?: InputMaybe<Scalars["Boolean"]>
  id?: InputMaybe<Scalars["ID"]>
}

export enum DocumentFileTypes {
  doc = "doc",
  docx = "docx",
  html = "html",
  jpg = "jpg",
  odp = "odp",
  ods = "ods",
  odt = "odt",
  pdf = "pdf",
  png = "png",
  ppt = "ppt",
  pptx = "pptx",
  svg = "svg",
  txt = "txt",
  webp = "webp",
  xls = "xls",
  xlsx = "xlsx",
}

export interface DocumentOutputInput {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>
}

/** Transformations for Documents */
export interface DocumentTransformationInput {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  clip = "clip",
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  crop = "crop",
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  max = "max",
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  scale = "scale",
}

export interface ImageResizeInput {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars["Int"]>
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars["Int"]>
}

/** Transformations for Images */
export interface ImageTransformationInput {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>
}

/** Locale system enumeration */
export enum Locale {
  de = "de",
  /** System locale */
  en = "en",
}

/** Input for a geolocation point with latitude and longitude */
export interface LocationInput {
  latitude: Scalars["Float"]
  longitude: Scalars["Float"]
}

export interface OrderConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: OrderWhereUniqueInput
}

export interface OrderCreateInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>
  email: Scalars["String"]
  orderItems?: InputMaybe<OrderItemCreateManyInlineInput>
  stripeCheckoutId: Scalars["String"]
  total: Scalars["Int"]
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export interface OrderCreateManyInlineInput {
  /** Connect multiple existing Order documents */
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>
  /** Create and connect multiple existing Order documents */
  create?: InputMaybe<Array<OrderCreateInput>>
}

export interface OrderCreateOneInlineInput {
  /** Connect one existing Order document */
  connect?: InputMaybe<OrderWhereUniqueInput>
  /** Create and connect one Order document */
  create?: InputMaybe<OrderCreateInput>
}

export interface OrderItemConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: OrderItemWhereUniqueInput
}

export interface OrderItemCreateInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>
  order?: InputMaybe<OrderCreateOneInlineInput>
  product?: InputMaybe<ProductCreateOneInlineInput>
  quantity: Scalars["Int"]
  total: Scalars["Int"]
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export interface OrderItemCreateManyInlineInput {
  /** Connect multiple existing OrderItem documents */
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>
  /** Create and connect multiple existing OrderItem documents */
  create?: InputMaybe<Array<OrderItemCreateInput>>
}

export interface OrderItemCreateOneInlineInput {
  /** Connect one existing OrderItem document */
  connect?: InputMaybe<OrderItemWhereUniqueInput>
  /** Create and connect one OrderItem document */
  create?: InputMaybe<OrderItemCreateInput>
}

/** Identifies documents */
export interface OrderItemManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderItemWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderItemWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderItemWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<OrderItemWhereStageInput>
  documentInStages_none?: InputMaybe<OrderItemWhereStageInput>
  documentInStages_some?: InputMaybe<OrderItemWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  order?: InputMaybe<OrderWhereInput>
  product?: InputMaybe<ProductWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  quantity?: InputMaybe<Scalars["Int"]>
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars["Int"]>
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars["Int"]>
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars["Int"]>
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars["Int"]>
  /** All values that are not equal to given value. */
  quantity_not?: InputMaybe<Scalars["Int"]>
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  total?: InputMaybe<Scalars["Int"]>
  /** All values greater than the given value. */
  total_gt?: InputMaybe<Scalars["Int"]>
  /** All values greater than or equal the given value. */
  total_gte?: InputMaybe<Scalars["Int"]>
  /** All values that are contained in given list. */
  total_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** All values less than the given value. */
  total_lt?: InputMaybe<Scalars["Int"]>
  /** All values less than or equal the given value. */
  total_lte?: InputMaybe<Scalars["Int"]>
  /** All values that are not equal to given value. */
  total_not?: InputMaybe<Scalars["Int"]>
  /** All values that are not contained in given list. */
  total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum OrderItemOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  quantity_ASC = "quantity_ASC",
  quantity_DESC = "quantity_DESC",
  total_ASC = "total_ASC",
  total_DESC = "total_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export interface OrderItemUpdateInput {
  order?: InputMaybe<OrderUpdateOneInlineInput>
  product?: InputMaybe<ProductUpdateOneInlineInput>
  quantity?: InputMaybe<Scalars["Int"]>
  total?: InputMaybe<Scalars["Int"]>
}

export interface OrderItemUpdateManyInlineInput {
  /** Connect multiple existing OrderItem documents */
  connect?: InputMaybe<Array<OrderItemConnectInput>>
  /** Create and connect multiple OrderItem documents */
  create?: InputMaybe<Array<OrderItemCreateInput>>
  /** Delete multiple OrderItem documents */
  delete?: InputMaybe<Array<OrderItemWhereUniqueInput>>
  /** Disconnect multiple OrderItem documents */
  disconnect?: InputMaybe<Array<OrderItemWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing OrderItem documents */
  set?: InputMaybe<Array<OrderItemWhereUniqueInput>>
  /** Update multiple OrderItem documents */
  update?: InputMaybe<Array<OrderItemUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple OrderItem documents */
  upsert?: InputMaybe<Array<OrderItemUpsertWithNestedWhereUniqueInput>>
}

export interface OrderItemUpdateManyInput {
  quantity?: InputMaybe<Scalars["Int"]>
  total?: InputMaybe<Scalars["Int"]>
}

export interface OrderItemUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: OrderItemUpdateManyInput
  /** Document search */
  where: OrderItemWhereInput
}

export interface OrderItemUpdateOneInlineInput {
  /** Connect existing OrderItem document */
  connect?: InputMaybe<OrderItemWhereUniqueInput>
  /** Create and connect one OrderItem document */
  create?: InputMaybe<OrderItemCreateInput>
  /** Delete currently connected OrderItem document */
  delete?: InputMaybe<Scalars["Boolean"]>
  /** Disconnect currently connected OrderItem document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
  /** Update single OrderItem document */
  update?: InputMaybe<OrderItemUpdateWithNestedWhereUniqueInput>
  /** Upsert single OrderItem document */
  upsert?: InputMaybe<OrderItemUpsertWithNestedWhereUniqueInput>
}

export interface OrderItemUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: OrderItemUpdateInput
  /** Unique document search */
  where: OrderItemWhereUniqueInput
}

export interface OrderItemUpsertInput {
  /** Create document if it didn't exist */
  create: OrderItemCreateInput
  /** Update document if it exists */
  update: OrderItemUpdateInput
}

export interface OrderItemUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: OrderItemUpsertInput
  /** Unique document search */
  where: OrderItemWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export interface OrderItemWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export interface OrderItemWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderItemWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderItemWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderItemWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<OrderItemWhereStageInput>
  documentInStages_none?: InputMaybe<OrderItemWhereStageInput>
  documentInStages_some?: InputMaybe<OrderItemWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  order?: InputMaybe<OrderWhereInput>
  product?: InputMaybe<ProductWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  quantity?: InputMaybe<Scalars["Int"]>
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars["Int"]>
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars["Int"]>
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars["Int"]>
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars["Int"]>
  /** All values that are not equal to given value. */
  quantity_not?: InputMaybe<Scalars["Int"]>
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  total?: InputMaybe<Scalars["Int"]>
  /** All values greater than the given value. */
  total_gt?: InputMaybe<Scalars["Int"]>
  /** All values greater than or equal the given value. */
  total_gte?: InputMaybe<Scalars["Int"]>
  /** All values that are contained in given list. */
  total_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** All values less than the given value. */
  total_lt?: InputMaybe<Scalars["Int"]>
  /** All values less than or equal the given value. */
  total_lte?: InputMaybe<Scalars["Int"]>
  /** All values that are not equal to given value. */
  total_not?: InputMaybe<Scalars["Int"]>
  /** All values that are not contained in given list. */
  total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface OrderItemWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderItemWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderItemWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderItemWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<OrderItemWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References OrderItem record uniquely */
export interface OrderItemWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>
}

/** Identifies documents */
export interface OrderManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<OrderWhereStageInput>
  documentInStages_none?: InputMaybe<OrderWhereStageInput>
  documentInStages_some?: InputMaybe<OrderWhereStageInput>
  email?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  orderItems_every?: InputMaybe<OrderItemWhereInput>
  orderItems_none?: InputMaybe<OrderItemWhereInput>
  orderItems_some?: InputMaybe<OrderItemWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  stripeCheckoutId?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  stripeCheckoutId_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  stripeCheckoutId_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  stripeCheckoutId_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  stripeCheckoutId_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  stripeCheckoutId_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  stripeCheckoutId_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  stripeCheckoutId_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  stripeCheckoutId_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  stripeCheckoutId_starts_with?: InputMaybe<Scalars["String"]>
  total?: InputMaybe<Scalars["Int"]>
  /** All values greater than the given value. */
  total_gt?: InputMaybe<Scalars["Int"]>
  /** All values greater than or equal the given value. */
  total_gte?: InputMaybe<Scalars["Int"]>
  /** All values that are contained in given list. */
  total_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** All values less than the given value. */
  total_lt?: InputMaybe<Scalars["Int"]>
  /** All values less than or equal the given value. */
  total_lte?: InputMaybe<Scalars["Int"]>
  /** All values that are not equal to given value. */
  total_not?: InputMaybe<Scalars["Int"]>
  /** All values that are not contained in given list. */
  total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum OrderOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  email_ASC = "email_ASC",
  email_DESC = "email_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  stripeCheckoutId_ASC = "stripeCheckoutId_ASC",
  stripeCheckoutId_DESC = "stripeCheckoutId_DESC",
  total_ASC = "total_ASC",
  total_DESC = "total_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export interface OrderUpdateInput {
  email?: InputMaybe<Scalars["String"]>
  orderItems?: InputMaybe<OrderItemUpdateManyInlineInput>
  stripeCheckoutId?: InputMaybe<Scalars["String"]>
  total?: InputMaybe<Scalars["Int"]>
}

export interface OrderUpdateManyInlineInput {
  /** Connect multiple existing Order documents */
  connect?: InputMaybe<Array<OrderConnectInput>>
  /** Create and connect multiple Order documents */
  create?: InputMaybe<Array<OrderCreateInput>>
  /** Delete multiple Order documents */
  delete?: InputMaybe<Array<OrderWhereUniqueInput>>
  /** Disconnect multiple Order documents */
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Order documents */
  set?: InputMaybe<Array<OrderWhereUniqueInput>>
  /** Update multiple Order documents */
  update?: InputMaybe<Array<OrderUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Order documents */
  upsert?: InputMaybe<Array<OrderUpsertWithNestedWhereUniqueInput>>
}

export interface OrderUpdateManyInput {
  email?: InputMaybe<Scalars["String"]>
  stripeCheckoutId?: InputMaybe<Scalars["String"]>
  total?: InputMaybe<Scalars["Int"]>
}

export interface OrderUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: OrderUpdateManyInput
  /** Document search */
  where: OrderWhereInput
}

export interface OrderUpdateOneInlineInput {
  /** Connect existing Order document */
  connect?: InputMaybe<OrderWhereUniqueInput>
  /** Create and connect one Order document */
  create?: InputMaybe<OrderCreateInput>
  /** Delete currently connected Order document */
  delete?: InputMaybe<Scalars["Boolean"]>
  /** Disconnect currently connected Order document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
  /** Update single Order document */
  update?: InputMaybe<OrderUpdateWithNestedWhereUniqueInput>
  /** Upsert single Order document */
  upsert?: InputMaybe<OrderUpsertWithNestedWhereUniqueInput>
}

export interface OrderUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: OrderUpdateInput
  /** Unique document search */
  where: OrderWhereUniqueInput
}

export interface OrderUpsertInput {
  /** Create document if it didn't exist */
  create: OrderCreateInput
  /** Update document if it exists */
  update: OrderUpdateInput
}

export interface OrderUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: OrderUpsertInput
  /** Unique document search */
  where: OrderWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export interface OrderWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export interface OrderWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<OrderWhereStageInput>
  documentInStages_none?: InputMaybe<OrderWhereStageInput>
  documentInStages_some?: InputMaybe<OrderWhereStageInput>
  email?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  orderItems_every?: InputMaybe<OrderItemWhereInput>
  orderItems_none?: InputMaybe<OrderItemWhereInput>
  orderItems_some?: InputMaybe<OrderItemWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  stripeCheckoutId?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  stripeCheckoutId_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  stripeCheckoutId_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  stripeCheckoutId_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  stripeCheckoutId_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  stripeCheckoutId_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  stripeCheckoutId_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  stripeCheckoutId_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  stripeCheckoutId_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  stripeCheckoutId_starts_with?: InputMaybe<Scalars["String"]>
  total?: InputMaybe<Scalars["Int"]>
  /** All values greater than the given value. */
  total_gt?: InputMaybe<Scalars["Int"]>
  /** All values greater than or equal the given value. */
  total_gte?: InputMaybe<Scalars["Int"]>
  /** All values that are contained in given list. */
  total_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** All values less than the given value. */
  total_lt?: InputMaybe<Scalars["Int"]>
  /** All values less than or equal the given value. */
  total_lte?: InputMaybe<Scalars["Int"]>
  /** All values that are not equal to given value. */
  total_not?: InputMaybe<Scalars["Int"]>
  /** All values that are not contained in given list. */
  total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface OrderWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<OrderWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Order record uniquely */
export interface OrderWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>
}

export enum ProductColor {
  BLACK = "BLACK",
  PINK = "PINK",
  PURPLE = "PURPLE",
}

export interface ProductColorVariantConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ProductColorVariantWhereUniqueInput
}

export interface ProductColorVariantCreateInput {
  color: ProductColor
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ProductColorVariantCreateLocalizationsInput>
  /** name input for default locale (en) */
  name: Scalars["String"]
  product?: InputMaybe<ProductCreateOneInlineInput>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export interface ProductColorVariantCreateLocalizationDataInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>
  name: Scalars["String"]
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export interface ProductColorVariantCreateLocalizationInput {
  /** Localization input */
  data: ProductColorVariantCreateLocalizationDataInput
  locale: Locale
}

export interface ProductColorVariantCreateLocalizationsInput {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ProductColorVariantCreateLocalizationInput>>
}

export interface ProductColorVariantCreateManyInlineInput {
  /** Connect multiple existing ProductColorVariant documents */
  connect?: InputMaybe<Array<ProductColorVariantWhereUniqueInput>>
  /** Create and connect multiple existing ProductColorVariant documents */
  create?: InputMaybe<Array<ProductColorVariantCreateInput>>
}

export interface ProductColorVariantCreateOneInlineInput {
  /** Connect one existing ProductColorVariant document */
  connect?: InputMaybe<ProductColorVariantWhereUniqueInput>
  /** Create and connect one ProductColorVariant document */
  create?: InputMaybe<ProductColorVariantCreateInput>
}

/** Identifies documents */
export interface ProductColorVariantManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductColorVariantWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductColorVariantWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductColorVariantWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  color?: InputMaybe<ProductColor>
  /** All values that are contained in given list. */
  color_in?: InputMaybe<Array<InputMaybe<ProductColor>>>
  /** All values that are not equal to given value. */
  color_not?: InputMaybe<ProductColor>
  /** All values that are not contained in given list. */
  color_not_in?: InputMaybe<Array<InputMaybe<ProductColor>>>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ProductColorVariantWhereStageInput>
  documentInStages_none?: InputMaybe<ProductColorVariantWhereStageInput>
  documentInStages_some?: InputMaybe<ProductColorVariantWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  product?: InputMaybe<ProductWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ProductColorVariantOrderByInput {
  color_ASC = "color_ASC",
  color_DESC = "color_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  name_ASC = "name_ASC",
  name_DESC = "name_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export interface ProductColorVariantUpdateInput {
  color?: InputMaybe<ProductColor>
  /** Manage document localizations */
  localizations?: InputMaybe<ProductColorVariantUpdateLocalizationsInput>
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars["String"]>
  product?: InputMaybe<ProductUpdateOneInlineInput>
}

export interface ProductColorVariantUpdateLocalizationDataInput {
  name?: InputMaybe<Scalars["String"]>
}

export interface ProductColorVariantUpdateLocalizationInput {
  data: ProductColorVariantUpdateLocalizationDataInput
  locale: Locale
}

export interface ProductColorVariantUpdateLocalizationsInput {
  /** Localizations to create */
  create?: InputMaybe<Array<ProductColorVariantCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<ProductColorVariantUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<ProductColorVariantUpsertLocalizationInput>>
}

export interface ProductColorVariantUpdateManyInlineInput {
  /** Connect multiple existing ProductColorVariant documents */
  connect?: InputMaybe<Array<ProductColorVariantConnectInput>>
  /** Create and connect multiple ProductColorVariant documents */
  create?: InputMaybe<Array<ProductColorVariantCreateInput>>
  /** Delete multiple ProductColorVariant documents */
  delete?: InputMaybe<Array<ProductColorVariantWhereUniqueInput>>
  /** Disconnect multiple ProductColorVariant documents */
  disconnect?: InputMaybe<Array<ProductColorVariantWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ProductColorVariant documents */
  set?: InputMaybe<Array<ProductColorVariantWhereUniqueInput>>
  /** Update multiple ProductColorVariant documents */
  update?: InputMaybe<
    Array<ProductColorVariantUpdateWithNestedWhereUniqueInput>
  >
  /** Upsert multiple ProductColorVariant documents */
  upsert?: InputMaybe<
    Array<ProductColorVariantUpsertWithNestedWhereUniqueInput>
  >
}

export interface ProductColorVariantUpdateManyInput {
  color?: InputMaybe<ProductColor>
  /** Optional updates to localizations */
  localizations?: InputMaybe<ProductColorVariantUpdateManyLocalizationsInput>
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars["String"]>
}

export interface ProductColorVariantUpdateManyLocalizationDataInput {
  name?: InputMaybe<Scalars["String"]>
}

export interface ProductColorVariantUpdateManyLocalizationInput {
  data: ProductColorVariantUpdateManyLocalizationDataInput
  locale: Locale
}

export interface ProductColorVariantUpdateManyLocalizationsInput {
  /** Localizations to update */
  update?: InputMaybe<Array<ProductColorVariantUpdateManyLocalizationInput>>
}

export interface ProductColorVariantUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: ProductColorVariantUpdateManyInput
  /** Document search */
  where: ProductColorVariantWhereInput
}

export interface ProductColorVariantUpdateOneInlineInput {
  /** Connect existing ProductColorVariant document */
  connect?: InputMaybe<ProductColorVariantWhereUniqueInput>
  /** Create and connect one ProductColorVariant document */
  create?: InputMaybe<ProductColorVariantCreateInput>
  /** Delete currently connected ProductColorVariant document */
  delete?: InputMaybe<Scalars["Boolean"]>
  /** Disconnect currently connected ProductColorVariant document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
  /** Update single ProductColorVariant document */
  update?: InputMaybe<ProductColorVariantUpdateWithNestedWhereUniqueInput>
  /** Upsert single ProductColorVariant document */
  upsert?: InputMaybe<ProductColorVariantUpsertWithNestedWhereUniqueInput>
}

export interface ProductColorVariantUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: ProductColorVariantUpdateInput
  /** Unique document search */
  where: ProductColorVariantWhereUniqueInput
}

export interface ProductColorVariantUpsertInput {
  /** Create document if it didn't exist */
  create: ProductColorVariantCreateInput
  /** Update document if it exists */
  update: ProductColorVariantUpdateInput
}

export interface ProductColorVariantUpsertLocalizationInput {
  create: ProductColorVariantCreateLocalizationDataInput
  locale: Locale
  update: ProductColorVariantUpdateLocalizationDataInput
}

export interface ProductColorVariantUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: ProductColorVariantUpsertInput
  /** Unique document search */
  where: ProductColorVariantWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export interface ProductColorVariantWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export interface ProductColorVariantWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductColorVariantWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductColorVariantWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductColorVariantWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  color?: InputMaybe<ProductColor>
  /** All values that are contained in given list. */
  color_in?: InputMaybe<Array<InputMaybe<ProductColor>>>
  /** All values that are not equal to given value. */
  color_not?: InputMaybe<ProductColor>
  /** All values that are not contained in given list. */
  color_not_in?: InputMaybe<Array<InputMaybe<ProductColor>>>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ProductColorVariantWhereStageInput>
  documentInStages_none?: InputMaybe<ProductColorVariantWhereStageInput>
  documentInStages_some?: InputMaybe<ProductColorVariantWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  name?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>
  product?: InputMaybe<ProductWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface ProductColorVariantWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductColorVariantWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductColorVariantWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductColorVariantWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProductColorVariantWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References ProductColorVariant record uniquely */
export interface ProductColorVariantWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>
}

export interface ProductConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ProductWhereUniqueInput
}

export interface ProductCreateInput {
  categories?: InputMaybe<CategoryCreateManyInlineInput>
  collections?: InputMaybe<CollectionCreateManyInlineInput>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** description input for default locale (en) */
  description: Scalars["String"]
  images?: InputMaybe<AssetCreateManyInlineInput>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ProductCreateLocalizationsInput>
  /** name input for default locale (en) */
  name: Scalars["String"]
  orderItems?: InputMaybe<OrderItemCreateManyInlineInput>
  /** price input for default locale (en) */
  price: Scalars["Int"]
  reviews?: InputMaybe<ReviewCreateManyInlineInput>
  /** slug input for default locale (en) */
  slug: Scalars["String"]
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  variants?: InputMaybe<ProductVariantsCreateManyInlineInput>
}

export interface ProductCreateLocalizationDataInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>
  description: Scalars["String"]
  name: Scalars["String"]
  price: Scalars["Int"]
  slug: Scalars["String"]
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export interface ProductCreateLocalizationInput {
  /** Localization input */
  data: ProductCreateLocalizationDataInput
  locale: Locale
}

export interface ProductCreateLocalizationsInput {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ProductCreateLocalizationInput>>
}

export interface ProductCreateManyInlineInput {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>
  /** Create and connect multiple existing Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>
}

export interface ProductCreateOneInlineInput {
  /** Connect one existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>
}

/** Identifies documents */
export interface ProductManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  categories_every?: InputMaybe<CategoryWhereInput>
  categories_none?: InputMaybe<CategoryWhereInput>
  categories_some?: InputMaybe<CategoryWhereInput>
  collections_every?: InputMaybe<CollectionWhereInput>
  collections_none?: InputMaybe<CollectionWhereInput>
  collections_some?: InputMaybe<CollectionWhereInput>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ProductWhereStageInput>
  documentInStages_none?: InputMaybe<ProductWhereStageInput>
  documentInStages_some?: InputMaybe<ProductWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  images_every?: InputMaybe<AssetWhereInput>
  images_none?: InputMaybe<AssetWhereInput>
  images_some?: InputMaybe<AssetWhereInput>
  orderItems_every?: InputMaybe<OrderItemWhereInput>
  orderItems_none?: InputMaybe<OrderItemWhereInput>
  orderItems_some?: InputMaybe<OrderItemWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  reviews_every?: InputMaybe<ReviewWhereInput>
  reviews_none?: InputMaybe<ReviewWhereInput>
  reviews_some?: InputMaybe<ReviewWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ProductOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  description_ASC = "description_ASC",
  description_DESC = "description_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  name_ASC = "name_ASC",
  name_DESC = "name_DESC",
  price_ASC = "price_ASC",
  price_DESC = "price_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  slug_ASC = "slug_ASC",
  slug_DESC = "slug_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export enum ProductSize {
  LARGE = "LARGE",
  MEDIUM = "MEDIUM",
  SMALL = "SMALL",
  XL = "XL",
  XS = "XS",
}

export interface ProductSizeColorVariantConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ProductSizeColorVariantWhereUniqueInput
}

export interface ProductSizeColorVariantCreateInput {
  color: ProductColor
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ProductSizeColorVariantCreateLocalizationsInput>
  /** name input for default locale (en) */
  name: Scalars["String"]
  product?: InputMaybe<ProductCreateOneInlineInput>
  size: ProductSize
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export interface ProductSizeColorVariantCreateLocalizationDataInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>
  name: Scalars["String"]
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export interface ProductSizeColorVariantCreateLocalizationInput {
  /** Localization input */
  data: ProductSizeColorVariantCreateLocalizationDataInput
  locale: Locale
}

export interface ProductSizeColorVariantCreateLocalizationsInput {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ProductSizeColorVariantCreateLocalizationInput>>
}

export interface ProductSizeColorVariantCreateManyInlineInput {
  /** Connect multiple existing ProductSizeColorVariant documents */
  connect?: InputMaybe<Array<ProductSizeColorVariantWhereUniqueInput>>
  /** Create and connect multiple existing ProductSizeColorVariant documents */
  create?: InputMaybe<Array<ProductSizeColorVariantCreateInput>>
}

export interface ProductSizeColorVariantCreateOneInlineInput {
  /** Connect one existing ProductSizeColorVariant document */
  connect?: InputMaybe<ProductSizeColorVariantWhereUniqueInput>
  /** Create and connect one ProductSizeColorVariant document */
  create?: InputMaybe<ProductSizeColorVariantCreateInput>
}

/** Identifies documents */
export interface ProductSizeColorVariantManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductSizeColorVariantWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductSizeColorVariantWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductSizeColorVariantWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  color?: InputMaybe<ProductColor>
  /** All values that are contained in given list. */
  color_in?: InputMaybe<Array<InputMaybe<ProductColor>>>
  /** All values that are not equal to given value. */
  color_not?: InputMaybe<ProductColor>
  /** All values that are not contained in given list. */
  color_not_in?: InputMaybe<Array<InputMaybe<ProductColor>>>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ProductSizeColorVariantWhereStageInput>
  documentInStages_none?: InputMaybe<ProductSizeColorVariantWhereStageInput>
  documentInStages_some?: InputMaybe<ProductSizeColorVariantWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  product?: InputMaybe<ProductWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  size?: InputMaybe<ProductSize>
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<ProductSize>>>
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<ProductSize>
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<ProductSize>>>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ProductSizeColorVariantOrderByInput {
  color_ASC = "color_ASC",
  color_DESC = "color_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  name_ASC = "name_ASC",
  name_DESC = "name_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  size_ASC = "size_ASC",
  size_DESC = "size_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export interface ProductSizeColorVariantUpdateInput {
  color?: InputMaybe<ProductColor>
  /** Manage document localizations */
  localizations?: InputMaybe<ProductSizeColorVariantUpdateLocalizationsInput>
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars["String"]>
  product?: InputMaybe<ProductUpdateOneInlineInput>
  size?: InputMaybe<ProductSize>
}

export interface ProductSizeColorVariantUpdateLocalizationDataInput {
  name?: InputMaybe<Scalars["String"]>
}

export interface ProductSizeColorVariantUpdateLocalizationInput {
  data: ProductSizeColorVariantUpdateLocalizationDataInput
  locale: Locale
}

export interface ProductSizeColorVariantUpdateLocalizationsInput {
  /** Localizations to create */
  create?: InputMaybe<Array<ProductSizeColorVariantCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<ProductSizeColorVariantUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<ProductSizeColorVariantUpsertLocalizationInput>>
}

export interface ProductSizeColorVariantUpdateManyInlineInput {
  /** Connect multiple existing ProductSizeColorVariant documents */
  connect?: InputMaybe<Array<ProductSizeColorVariantConnectInput>>
  /** Create and connect multiple ProductSizeColorVariant documents */
  create?: InputMaybe<Array<ProductSizeColorVariantCreateInput>>
  /** Delete multiple ProductSizeColorVariant documents */
  delete?: InputMaybe<Array<ProductSizeColorVariantWhereUniqueInput>>
  /** Disconnect multiple ProductSizeColorVariant documents */
  disconnect?: InputMaybe<Array<ProductSizeColorVariantWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ProductSizeColorVariant documents */
  set?: InputMaybe<Array<ProductSizeColorVariantWhereUniqueInput>>
  /** Update multiple ProductSizeColorVariant documents */
  update?: InputMaybe<
    Array<ProductSizeColorVariantUpdateWithNestedWhereUniqueInput>
  >
  /** Upsert multiple ProductSizeColorVariant documents */
  upsert?: InputMaybe<
    Array<ProductSizeColorVariantUpsertWithNestedWhereUniqueInput>
  >
}

export interface ProductSizeColorVariantUpdateManyInput {
  color?: InputMaybe<ProductColor>
  /** Optional updates to localizations */
  localizations?: InputMaybe<ProductSizeColorVariantUpdateManyLocalizationsInput>
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars["String"]>
  size?: InputMaybe<ProductSize>
}

export interface ProductSizeColorVariantUpdateManyLocalizationDataInput {
  name?: InputMaybe<Scalars["String"]>
}

export interface ProductSizeColorVariantUpdateManyLocalizationInput {
  data: ProductSizeColorVariantUpdateManyLocalizationDataInput
  locale: Locale
}

export interface ProductSizeColorVariantUpdateManyLocalizationsInput {
  /** Localizations to update */
  update?: InputMaybe<Array<ProductSizeColorVariantUpdateManyLocalizationInput>>
}

export interface ProductSizeColorVariantUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: ProductSizeColorVariantUpdateManyInput
  /** Document search */
  where: ProductSizeColorVariantWhereInput
}

export interface ProductSizeColorVariantUpdateOneInlineInput {
  /** Connect existing ProductSizeColorVariant document */
  connect?: InputMaybe<ProductSizeColorVariantWhereUniqueInput>
  /** Create and connect one ProductSizeColorVariant document */
  create?: InputMaybe<ProductSizeColorVariantCreateInput>
  /** Delete currently connected ProductSizeColorVariant document */
  delete?: InputMaybe<Scalars["Boolean"]>
  /** Disconnect currently connected ProductSizeColorVariant document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
  /** Update single ProductSizeColorVariant document */
  update?: InputMaybe<ProductSizeColorVariantUpdateWithNestedWhereUniqueInput>
  /** Upsert single ProductSizeColorVariant document */
  upsert?: InputMaybe<ProductSizeColorVariantUpsertWithNestedWhereUniqueInput>
}

export interface ProductSizeColorVariantUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: ProductSizeColorVariantUpdateInput
  /** Unique document search */
  where: ProductSizeColorVariantWhereUniqueInput
}

export interface ProductSizeColorVariantUpsertInput {
  /** Create document if it didn't exist */
  create: ProductSizeColorVariantCreateInput
  /** Update document if it exists */
  update: ProductSizeColorVariantUpdateInput
}

export interface ProductSizeColorVariantUpsertLocalizationInput {
  create: ProductSizeColorVariantCreateLocalizationDataInput
  locale: Locale
  update: ProductSizeColorVariantUpdateLocalizationDataInput
}

export interface ProductSizeColorVariantUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: ProductSizeColorVariantUpsertInput
  /** Unique document search */
  where: ProductSizeColorVariantWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export interface ProductSizeColorVariantWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export interface ProductSizeColorVariantWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductSizeColorVariantWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductSizeColorVariantWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductSizeColorVariantWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  color?: InputMaybe<ProductColor>
  /** All values that are contained in given list. */
  color_in?: InputMaybe<Array<InputMaybe<ProductColor>>>
  /** All values that are not equal to given value. */
  color_not?: InputMaybe<ProductColor>
  /** All values that are not contained in given list. */
  color_not_in?: InputMaybe<Array<InputMaybe<ProductColor>>>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ProductSizeColorVariantWhereStageInput>
  documentInStages_none?: InputMaybe<ProductSizeColorVariantWhereStageInput>
  documentInStages_some?: InputMaybe<ProductSizeColorVariantWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  name?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>
  product?: InputMaybe<ProductWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  size?: InputMaybe<ProductSize>
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<ProductSize>>>
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<ProductSize>
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<ProductSize>>>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface ProductSizeColorVariantWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductSizeColorVariantWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductSizeColorVariantWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductSizeColorVariantWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProductSizeColorVariantWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References ProductSizeColorVariant record uniquely */
export interface ProductSizeColorVariantWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>
}

export interface ProductSizeVariantConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ProductSizeVariantWhereUniqueInput
}

export interface ProductSizeVariantCreateInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ProductSizeVariantCreateLocalizationsInput>
  /** name input for default locale (en) */
  name: Scalars["String"]
  product?: InputMaybe<ProductCreateOneInlineInput>
  size: ProductSize
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export interface ProductSizeVariantCreateLocalizationDataInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>
  name: Scalars["String"]
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export interface ProductSizeVariantCreateLocalizationInput {
  /** Localization input */
  data: ProductSizeVariantCreateLocalizationDataInput
  locale: Locale
}

export interface ProductSizeVariantCreateLocalizationsInput {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ProductSizeVariantCreateLocalizationInput>>
}

export interface ProductSizeVariantCreateManyInlineInput {
  /** Connect multiple existing ProductSizeVariant documents */
  connect?: InputMaybe<Array<ProductSizeVariantWhereUniqueInput>>
  /** Create and connect multiple existing ProductSizeVariant documents */
  create?: InputMaybe<Array<ProductSizeVariantCreateInput>>
}

export interface ProductSizeVariantCreateOneInlineInput {
  /** Connect one existing ProductSizeVariant document */
  connect?: InputMaybe<ProductSizeVariantWhereUniqueInput>
  /** Create and connect one ProductSizeVariant document */
  create?: InputMaybe<ProductSizeVariantCreateInput>
}

/** Identifies documents */
export interface ProductSizeVariantManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductSizeVariantWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductSizeVariantWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductSizeVariantWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ProductSizeVariantWhereStageInput>
  documentInStages_none?: InputMaybe<ProductSizeVariantWhereStageInput>
  documentInStages_some?: InputMaybe<ProductSizeVariantWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  product?: InputMaybe<ProductWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  size?: InputMaybe<ProductSize>
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<ProductSize>>>
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<ProductSize>
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<ProductSize>>>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ProductSizeVariantOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  name_ASC = "name_ASC",
  name_DESC = "name_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  size_ASC = "size_ASC",
  size_DESC = "size_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export interface ProductSizeVariantUpdateInput {
  /** Manage document localizations */
  localizations?: InputMaybe<ProductSizeVariantUpdateLocalizationsInput>
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars["String"]>
  product?: InputMaybe<ProductUpdateOneInlineInput>
  size?: InputMaybe<ProductSize>
}

export interface ProductSizeVariantUpdateLocalizationDataInput {
  name?: InputMaybe<Scalars["String"]>
}

export interface ProductSizeVariantUpdateLocalizationInput {
  data: ProductSizeVariantUpdateLocalizationDataInput
  locale: Locale
}

export interface ProductSizeVariantUpdateLocalizationsInput {
  /** Localizations to create */
  create?: InputMaybe<Array<ProductSizeVariantCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<ProductSizeVariantUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<ProductSizeVariantUpsertLocalizationInput>>
}

export interface ProductSizeVariantUpdateManyInlineInput {
  /** Connect multiple existing ProductSizeVariant documents */
  connect?: InputMaybe<Array<ProductSizeVariantConnectInput>>
  /** Create and connect multiple ProductSizeVariant documents */
  create?: InputMaybe<Array<ProductSizeVariantCreateInput>>
  /** Delete multiple ProductSizeVariant documents */
  delete?: InputMaybe<Array<ProductSizeVariantWhereUniqueInput>>
  /** Disconnect multiple ProductSizeVariant documents */
  disconnect?: InputMaybe<Array<ProductSizeVariantWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ProductSizeVariant documents */
  set?: InputMaybe<Array<ProductSizeVariantWhereUniqueInput>>
  /** Update multiple ProductSizeVariant documents */
  update?: InputMaybe<Array<ProductSizeVariantUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple ProductSizeVariant documents */
  upsert?: InputMaybe<Array<ProductSizeVariantUpsertWithNestedWhereUniqueInput>>
}

export interface ProductSizeVariantUpdateManyInput {
  /** Optional updates to localizations */
  localizations?: InputMaybe<ProductSizeVariantUpdateManyLocalizationsInput>
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars["String"]>
  size?: InputMaybe<ProductSize>
}

export interface ProductSizeVariantUpdateManyLocalizationDataInput {
  name?: InputMaybe<Scalars["String"]>
}

export interface ProductSizeVariantUpdateManyLocalizationInput {
  data: ProductSizeVariantUpdateManyLocalizationDataInput
  locale: Locale
}

export interface ProductSizeVariantUpdateManyLocalizationsInput {
  /** Localizations to update */
  update?: InputMaybe<Array<ProductSizeVariantUpdateManyLocalizationInput>>
}

export interface ProductSizeVariantUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: ProductSizeVariantUpdateManyInput
  /** Document search */
  where: ProductSizeVariantWhereInput
}

export interface ProductSizeVariantUpdateOneInlineInput {
  /** Connect existing ProductSizeVariant document */
  connect?: InputMaybe<ProductSizeVariantWhereUniqueInput>
  /** Create and connect one ProductSizeVariant document */
  create?: InputMaybe<ProductSizeVariantCreateInput>
  /** Delete currently connected ProductSizeVariant document */
  delete?: InputMaybe<Scalars["Boolean"]>
  /** Disconnect currently connected ProductSizeVariant document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
  /** Update single ProductSizeVariant document */
  update?: InputMaybe<ProductSizeVariantUpdateWithNestedWhereUniqueInput>
  /** Upsert single ProductSizeVariant document */
  upsert?: InputMaybe<ProductSizeVariantUpsertWithNestedWhereUniqueInput>
}

export interface ProductSizeVariantUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: ProductSizeVariantUpdateInput
  /** Unique document search */
  where: ProductSizeVariantWhereUniqueInput
}

export interface ProductSizeVariantUpsertInput {
  /** Create document if it didn't exist */
  create: ProductSizeVariantCreateInput
  /** Update document if it exists */
  update: ProductSizeVariantUpdateInput
}

export interface ProductSizeVariantUpsertLocalizationInput {
  create: ProductSizeVariantCreateLocalizationDataInput
  locale: Locale
  update: ProductSizeVariantUpdateLocalizationDataInput
}

export interface ProductSizeVariantUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: ProductSizeVariantUpsertInput
  /** Unique document search */
  where: ProductSizeVariantWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export interface ProductSizeVariantWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export interface ProductSizeVariantWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductSizeVariantWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductSizeVariantWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductSizeVariantWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ProductSizeVariantWhereStageInput>
  documentInStages_none?: InputMaybe<ProductSizeVariantWhereStageInput>
  documentInStages_some?: InputMaybe<ProductSizeVariantWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  name?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>
  product?: InputMaybe<ProductWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  size?: InputMaybe<ProductSize>
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<ProductSize>>>
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<ProductSize>
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<ProductSize>>>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface ProductSizeVariantWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductSizeVariantWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductSizeVariantWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductSizeVariantWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProductSizeVariantWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References ProductSizeVariant record uniquely */
export interface ProductSizeVariantWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>
}

export interface ProductUpdateInput {
  categories?: InputMaybe<CategoryUpdateManyInlineInput>
  collections?: InputMaybe<CollectionUpdateManyInlineInput>
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars["String"]>
  images?: InputMaybe<AssetUpdateManyInlineInput>
  /** Manage document localizations */
  localizations?: InputMaybe<ProductUpdateLocalizationsInput>
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars["String"]>
  orderItems?: InputMaybe<OrderItemUpdateManyInlineInput>
  /** price input for default locale (en) */
  price?: InputMaybe<Scalars["Int"]>
  reviews?: InputMaybe<ReviewUpdateManyInlineInput>
  /** slug input for default locale (en) */
  slug?: InputMaybe<Scalars["String"]>
  variants?: InputMaybe<ProductVariantsUpdateManyInlineInput>
}

export interface ProductUpdateLocalizationDataInput {
  description?: InputMaybe<Scalars["String"]>
  name?: InputMaybe<Scalars["String"]>
  price?: InputMaybe<Scalars["Int"]>
  slug?: InputMaybe<Scalars["String"]>
}

export interface ProductUpdateLocalizationInput {
  data: ProductUpdateLocalizationDataInput
  locale: Locale
}

export interface ProductUpdateLocalizationsInput {
  /** Localizations to create */
  create?: InputMaybe<Array<ProductCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<ProductUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<ProductUpsertLocalizationInput>>
}

export interface ProductUpdateManyInlineInput {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductConnectInput>>
  /** Create and connect multiple Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>
  /** Delete multiple Product documents */
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>
  /** Disconnect multiple Product documents */
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Product documents */
  set?: InputMaybe<Array<ProductWhereUniqueInput>>
  /** Update multiple Product documents */
  update?: InputMaybe<Array<ProductUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Product documents */
  upsert?: InputMaybe<Array<ProductUpsertWithNestedWhereUniqueInput>>
}

export interface ProductUpdateManyInput {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars["String"]>
  /** Optional updates to localizations */
  localizations?: InputMaybe<ProductUpdateManyLocalizationsInput>
  /** price input for default locale (en) */
  price?: InputMaybe<Scalars["Int"]>
}

export interface ProductUpdateManyLocalizationDataInput {
  description?: InputMaybe<Scalars["String"]>
  price?: InputMaybe<Scalars["Int"]>
}

export interface ProductUpdateManyLocalizationInput {
  data: ProductUpdateManyLocalizationDataInput
  locale: Locale
}

export interface ProductUpdateManyLocalizationsInput {
  /** Localizations to update */
  update?: InputMaybe<Array<ProductUpdateManyLocalizationInput>>
}

export interface ProductUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: ProductUpdateManyInput
  /** Document search */
  where: ProductWhereInput
}

export interface ProductUpdateOneInlineInput {
  /** Connect existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>
  /** Delete currently connected Product document */
  delete?: InputMaybe<Scalars["Boolean"]>
  /** Disconnect currently connected Product document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
  /** Update single Product document */
  update?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>
  /** Upsert single Product document */
  upsert?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>
}

export interface ProductUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: ProductUpdateInput
  /** Unique document search */
  where: ProductWhereUniqueInput
}

export interface ProductUpsertInput {
  /** Create document if it didn't exist */
  create: ProductCreateInput
  /** Update document if it exists */
  update: ProductUpdateInput
}

export interface ProductUpsertLocalizationInput {
  create: ProductCreateLocalizationDataInput
  locale: Locale
  update: ProductUpdateLocalizationDataInput
}

export interface ProductUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: ProductUpsertInput
  /** Unique document search */
  where: ProductWhereUniqueInput
}

export interface ProductVariantsConnectInput {
  ProductColorVariant?: InputMaybe<ProductColorVariantConnectInput>
  ProductSizeColorVariant?: InputMaybe<ProductSizeColorVariantConnectInput>
  ProductSizeVariant?: InputMaybe<ProductSizeVariantConnectInput>
}

export interface ProductVariantsCreateInput {
  ProductColorVariant?: InputMaybe<ProductColorVariantCreateInput>
  ProductSizeColorVariant?: InputMaybe<ProductSizeColorVariantCreateInput>
  ProductSizeVariant?: InputMaybe<ProductSizeVariantCreateInput>
}

export interface ProductVariantsCreateManyInlineInput {
  /** Connect multiple existing ProductVariants documents */
  connect?: InputMaybe<Array<ProductVariantsWhereUniqueInput>>
  /** Create and connect multiple existing ProductVariants documents */
  create?: InputMaybe<Array<ProductVariantsCreateInput>>
}

export interface ProductVariantsCreateOneInlineInput {
  /** Connect one existing ProductVariants document */
  connect?: InputMaybe<ProductVariantsWhereUniqueInput>
  /** Create and connect one ProductVariants document */
  create?: InputMaybe<ProductVariantsCreateInput>
}

export interface ProductVariantsUpdateInput {
  ProductColorVariant?: InputMaybe<ProductColorVariantUpdateInput>
  ProductSizeColorVariant?: InputMaybe<ProductSizeColorVariantUpdateInput>
  ProductSizeVariant?: InputMaybe<ProductSizeVariantUpdateInput>
}

export interface ProductVariantsUpdateManyInlineInput {
  /** Connect multiple existing ProductVariants documents */
  connect?: InputMaybe<Array<ProductVariantsConnectInput>>
  /** Create and connect multiple ProductVariants documents */
  create?: InputMaybe<Array<ProductVariantsCreateInput>>
  /** Delete multiple ProductVariants documents */
  delete?: InputMaybe<Array<ProductVariantsWhereUniqueInput>>
  /** Disconnect multiple ProductVariants documents */
  disconnect?: InputMaybe<Array<ProductVariantsWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ProductVariants documents */
  set?: InputMaybe<Array<ProductVariantsWhereUniqueInput>>
  /** Update multiple ProductVariants documents */
  update?: InputMaybe<Array<ProductVariantsUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple ProductVariants documents */
  upsert?: InputMaybe<Array<ProductVariantsUpsertWithNestedWhereUniqueInput>>
}

export interface ProductVariantsUpdateManyWithNestedWhereInput {
  ProductColorVariant?: InputMaybe<ProductColorVariantUpdateManyWithNestedWhereInput>
  ProductSizeColorVariant?: InputMaybe<ProductSizeColorVariantUpdateManyWithNestedWhereInput>
  ProductSizeVariant?: InputMaybe<ProductSizeVariantUpdateManyWithNestedWhereInput>
}

export interface ProductVariantsUpdateOneInlineInput {
  /** Connect existing ProductVariants document */
  connect?: InputMaybe<ProductVariantsWhereUniqueInput>
  /** Create and connect one ProductVariants document */
  create?: InputMaybe<ProductVariantsCreateInput>
  /** Delete currently connected ProductVariants document */
  delete?: InputMaybe<Scalars["Boolean"]>
  /** Disconnect currently connected ProductVariants document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
  /** Update single ProductVariants document */
  update?: InputMaybe<ProductVariantsUpdateWithNestedWhereUniqueInput>
  /** Upsert single ProductVariants document */
  upsert?: InputMaybe<ProductVariantsUpsertWithNestedWhereUniqueInput>
}

export interface ProductVariantsUpdateWithNestedWhereUniqueInput {
  ProductColorVariant?: InputMaybe<ProductColorVariantUpdateWithNestedWhereUniqueInput>
  ProductSizeColorVariant?: InputMaybe<ProductSizeColorVariantUpdateWithNestedWhereUniqueInput>
  ProductSizeVariant?: InputMaybe<ProductSizeVariantUpdateWithNestedWhereUniqueInput>
}

export interface ProductVariantsUpsertWithNestedWhereUniqueInput {
  ProductColorVariant?: InputMaybe<ProductColorVariantUpsertWithNestedWhereUniqueInput>
  ProductSizeColorVariant?: InputMaybe<ProductSizeColorVariantUpsertWithNestedWhereUniqueInput>
  ProductSizeVariant?: InputMaybe<ProductSizeVariantUpsertWithNestedWhereUniqueInput>
}

export interface ProductVariantsWhereInput {
  ProductColorVariant?: InputMaybe<ProductColorVariantWhereInput>
  ProductSizeColorVariant?: InputMaybe<ProductSizeColorVariantWhereInput>
  ProductSizeVariant?: InputMaybe<ProductSizeVariantWhereInput>
}

export interface ProductVariantsWhereUniqueInput {
  ProductColorVariant?: InputMaybe<ProductColorVariantWhereUniqueInput>
  ProductSizeColorVariant?: InputMaybe<ProductSizeColorVariantWhereUniqueInput>
  ProductSizeVariant?: InputMaybe<ProductSizeVariantWhereUniqueInput>
}

/** This contains a set of filters that can be used to compare values internally */
export interface ProductWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export interface ProductWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  categories_every?: InputMaybe<CategoryWhereInput>
  categories_none?: InputMaybe<CategoryWhereInput>
  categories_some?: InputMaybe<CategoryWhereInput>
  collections_every?: InputMaybe<CollectionWhereInput>
  collections_none?: InputMaybe<CollectionWhereInput>
  collections_some?: InputMaybe<CollectionWhereInput>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>
  documentInStages_every?: InputMaybe<ProductWhereStageInput>
  documentInStages_none?: InputMaybe<ProductWhereStageInput>
  documentInStages_some?: InputMaybe<ProductWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  images_every?: InputMaybe<AssetWhereInput>
  images_none?: InputMaybe<AssetWhereInput>
  images_some?: InputMaybe<AssetWhereInput>
  name?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>
  orderItems_every?: InputMaybe<OrderItemWhereInput>
  orderItems_none?: InputMaybe<OrderItemWhereInput>
  orderItems_some?: InputMaybe<OrderItemWhereInput>
  price?: InputMaybe<Scalars["Int"]>
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars["Int"]>
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars["Int"]>
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars["Int"]>
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars["Int"]>
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars["Int"]>
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  reviews_every?: InputMaybe<ReviewWhereInput>
  reviews_none?: InputMaybe<ReviewWhereInput>
  reviews_some?: InputMaybe<ReviewWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface ProductWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProductWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Product record uniquely */
export interface ProductWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>
}

export interface PublishLocaleInput {
  /** Locales to publish */
  locale: Locale
  /** Stages to publish selected locales to */
  stages: Array<Stage>
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export interface RGBAInput {
  a: Scalars["RGBATransparency"]
  b: Scalars["RGBAHue"]
  g: Scalars["RGBAHue"]
  r: Scalars["RGBAHue"]
}

export interface ReviewConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ReviewWhereUniqueInput
}

export interface ReviewCreateInput {
  content: Scalars["String"]
  createdAt?: InputMaybe<Scalars["DateTime"]>
  email: Scalars["String"]
  headline: Scalars["String"]
  name: Scalars["String"]
  product?: InputMaybe<ProductCreateOneInlineInput>
  rating?: InputMaybe<Scalars["Int"]>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export interface ReviewCreateManyInlineInput {
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>
  /** Create and connect multiple existing Review documents */
  create?: InputMaybe<Array<ReviewCreateInput>>
}

export interface ReviewCreateOneInlineInput {
  /** Connect one existing Review document */
  connect?: InputMaybe<ReviewWhereUniqueInput>
  /** Create and connect one Review document */
  create?: InputMaybe<ReviewCreateInput>
}

/** Identifies documents */
export interface ReviewManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  content?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  content_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ReviewWhereStageInput>
  documentInStages_none?: InputMaybe<ReviewWhereStageInput>
  documentInStages_some?: InputMaybe<ReviewWhereStageInput>
  email?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]>
  headline?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  headline_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars["String"]>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  name?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>
  product?: InputMaybe<ProductWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  rating?: InputMaybe<Scalars["Int"]>
  /** All values greater than the given value. */
  rating_gt?: InputMaybe<Scalars["Int"]>
  /** All values greater than or equal the given value. */
  rating_gte?: InputMaybe<Scalars["Int"]>
  /** All values that are contained in given list. */
  rating_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** All values less than the given value. */
  rating_lt?: InputMaybe<Scalars["Int"]>
  /** All values less than or equal the given value. */
  rating_lte?: InputMaybe<Scalars["Int"]>
  /** All values that are not equal to given value. */
  rating_not?: InputMaybe<Scalars["Int"]>
  /** All values that are not contained in given list. */
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ReviewOrderByInput {
  content_ASC = "content_ASC",
  content_DESC = "content_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  email_ASC = "email_ASC",
  email_DESC = "email_DESC",
  headline_ASC = "headline_ASC",
  headline_DESC = "headline_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  name_ASC = "name_ASC",
  name_DESC = "name_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  rating_ASC = "rating_ASC",
  rating_DESC = "rating_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export interface ReviewUpdateInput {
  content?: InputMaybe<Scalars["String"]>
  email?: InputMaybe<Scalars["String"]>
  headline?: InputMaybe<Scalars["String"]>
  name?: InputMaybe<Scalars["String"]>
  product?: InputMaybe<ProductUpdateOneInlineInput>
  rating?: InputMaybe<Scalars["Int"]>
}

export interface ReviewUpdateManyInlineInput {
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<ReviewConnectInput>>
  /** Create and connect multiple Review documents */
  create?: InputMaybe<Array<ReviewCreateInput>>
  /** Delete multiple Review documents */
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>
  /** Disconnect multiple Review documents */
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Review documents */
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>
  /** Update multiple Review documents */
  update?: InputMaybe<Array<ReviewUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Review documents */
  upsert?: InputMaybe<Array<ReviewUpsertWithNestedWhereUniqueInput>>
}

export interface ReviewUpdateManyInput {
  content?: InputMaybe<Scalars["String"]>
  email?: InputMaybe<Scalars["String"]>
  headline?: InputMaybe<Scalars["String"]>
  name?: InputMaybe<Scalars["String"]>
  rating?: InputMaybe<Scalars["Int"]>
}

export interface ReviewUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: ReviewUpdateManyInput
  /** Document search */
  where: ReviewWhereInput
}

export interface ReviewUpdateOneInlineInput {
  /** Connect existing Review document */
  connect?: InputMaybe<ReviewWhereUniqueInput>
  /** Create and connect one Review document */
  create?: InputMaybe<ReviewCreateInput>
  /** Delete currently connected Review document */
  delete?: InputMaybe<Scalars["Boolean"]>
  /** Disconnect currently connected Review document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
  /** Update single Review document */
  update?: InputMaybe<ReviewUpdateWithNestedWhereUniqueInput>
  /** Upsert single Review document */
  upsert?: InputMaybe<ReviewUpsertWithNestedWhereUniqueInput>
}

export interface ReviewUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: ReviewUpdateInput
  /** Unique document search */
  where: ReviewWhereUniqueInput
}

export interface ReviewUpsertInput {
  /** Create document if it didn't exist */
  create: ReviewCreateInput
  /** Update document if it exists */
  update: ReviewUpdateInput
}

export interface ReviewUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: ReviewUpsertInput
  /** Unique document search */
  where: ReviewWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export interface ReviewWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export interface ReviewWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  content?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  content_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ReviewWhereStageInput>
  documentInStages_none?: InputMaybe<ReviewWhereStageInput>
  documentInStages_some?: InputMaybe<ReviewWhereStageInput>
  email?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]>
  headline?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  headline_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars["String"]>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  name?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>
  product?: InputMaybe<ProductWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  rating?: InputMaybe<Scalars["Int"]>
  /** All values greater than the given value. */
  rating_gt?: InputMaybe<Scalars["Int"]>
  /** All values greater than or equal the given value. */
  rating_gte?: InputMaybe<Scalars["Int"]>
  /** All values that are contained in given list. */
  rating_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** All values less than the given value. */
  rating_lt?: InputMaybe<Scalars["Int"]>
  /** All values less than or equal the given value. */
  rating_lte?: InputMaybe<Scalars["Int"]>
  /** All values that are not equal to given value. */
  rating_not?: InputMaybe<Scalars["Int"]>
  /** All values that are not contained in given list. */
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface ReviewWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ReviewWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Review record uniquely */
export interface ReviewWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>
}

export interface ScheduledOperationConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput
}

export interface ScheduledOperationCreateManyInlineInput {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export interface ScheduledOperationCreateOneInlineInput {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
}

/** Identifies documents */
export interface ScheduledOperationManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>
  errorMessage?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledOperationOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  description_ASC = "description_ASC",
  description_DESC = "description_DESC",
  errorMessage_ASC = "errorMessage_ASC",
  errorMessage_DESC = "errorMessage_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  status_ASC = "status_ASC",
  status_DESC = "status_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
}

export interface ScheduledOperationUpdateManyInlineInput {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export interface ScheduledOperationUpdateOneInlineInput {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export interface ScheduledOperationWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>
  errorMessage?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledOperation record uniquely */
export interface ScheduledOperationWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>
}

export interface ScheduledReleaseConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput
}

export interface ScheduledReleaseCreateInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>
  description?: InputMaybe<Scalars["String"]>
  errorMessage?: InputMaybe<Scalars["String"]>
  isActive?: InputMaybe<Scalars["Boolean"]>
  releaseAt?: InputMaybe<Scalars["DateTime"]>
  title?: InputMaybe<Scalars["String"]>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
}

export interface ScheduledReleaseCreateManyInlineInput {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
}

export interface ScheduledReleaseCreateOneInlineInput {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
}

/** Identifies documents */
export interface ScheduledReleaseManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>
  errorMessage?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  isActive?: InputMaybe<Scalars["Boolean"]>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>
  isImplicit?: InputMaybe<Scalars["Boolean"]>
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledReleaseOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  description_ASC = "description_ASC",
  description_DESC = "description_DESC",
  errorMessage_ASC = "errorMessage_ASC",
  errorMessage_DESC = "errorMessage_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  isActive_ASC = "isActive_ASC",
  isActive_DESC = "isActive_DESC",
  isImplicit_ASC = "isImplicit_ASC",
  isImplicit_DESC = "isImplicit_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  releaseAt_ASC = "releaseAt_ASC",
  releaseAt_DESC = "releaseAt_DESC",
  status_ASC = "status_ASC",
  status_DESC = "status_DESC",
  title_ASC = "title_ASC",
  title_DESC = "title_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
}

export interface ScheduledReleaseUpdateInput {
  description?: InputMaybe<Scalars["String"]>
  errorMessage?: InputMaybe<Scalars["String"]>
  isActive?: InputMaybe<Scalars["Boolean"]>
  releaseAt?: InputMaybe<Scalars["DateTime"]>
  title?: InputMaybe<Scalars["String"]>
}

export interface ScheduledReleaseUpdateManyInlineInput {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>
}

export interface ScheduledReleaseUpdateManyInput {
  description?: InputMaybe<Scalars["String"]>
  errorMessage?: InputMaybe<Scalars["String"]>
  isActive?: InputMaybe<Scalars["Boolean"]>
  releaseAt?: InputMaybe<Scalars["DateTime"]>
  title?: InputMaybe<Scalars["String"]>
}

export interface ScheduledReleaseUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput
  /** Document search */
  where: ScheduledReleaseWhereInput
}

export interface ScheduledReleaseUpdateOneInlineInput {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars["Boolean"]>
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
}

export interface ScheduledReleaseUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: ScheduledReleaseUpdateInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

export interface ScheduledReleaseUpsertInput {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput
}

export interface ScheduledReleaseUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

/** Identifies documents */
export interface ScheduledReleaseWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>
  errorMessage?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  isActive?: InputMaybe<Scalars["Boolean"]>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>
  isImplicit?: InputMaybe<Scalars["Boolean"]>
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledRelease record uniquely */
export interface ScheduledReleaseWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  DRAFT = "DRAFT",
  /** The Published stage is where you can publish your content to. */
  PUBLISHED = "PUBLISHED",
}

export enum SystemDateTimeFieldVariation {
  BASE = "BASE",
  COMBINED = "COMBINED",
  LOCALIZATION = "LOCALIZATION",
}

export interface UnpublishLocaleInput {
  /** Locales to unpublish */
  locale: Locale
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>
}

export interface UserConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: UserWhereUniqueInput
}

export interface UserCreateManyInlineInput {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>
}

export interface UserCreateOneInlineInput {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
}

/** System User Kind */
export enum UserKind {
  MEMBER = "MEMBER",
  PAT = "PAT",
  PUBLIC = "PUBLIC",
  WEBHOOK = "WEBHOOK",
}

/** Identifies documents */
export interface UserManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  isActive?: InputMaybe<Scalars["Boolean"]>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>
  picture?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
}

export enum UserOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  isActive_ASC = "isActive_ASC",
  isActive_DESC = "isActive_DESC",
  kind_ASC = "kind_ASC",
  kind_DESC = "kind_DESC",
  name_ASC = "name_ASC",
  name_DESC = "name_DESC",
  picture_ASC = "picture_ASC",
  picture_DESC = "picture_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export interface UserUpdateManyInlineInput {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>
}

export interface UserUpdateOneInlineInput {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars["Boolean"]>
}

/** This contains a set of filters that can be used to compare values internally */
export interface UserWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>
}

/** Identifies documents */
export interface UserWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars["ID"]>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>
  isActive?: InputMaybe<Scalars["Boolean"]>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>
  picture?: InputMaybe<Scalars["String"]>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars["String"]>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  updatedAt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface UserWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References User record uniquely */
export interface UserWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>
}

export interface VersionWhereInput {
  id: Scalars["ID"]
  revision: Scalars["Int"]
  stage: Stage
}

export enum _FilterKind {
  AND = "AND",
  NOT = "NOT",
  OR = "OR",
  contains = "contains",
  contains_all = "contains_all",
  contains_none = "contains_none",
  contains_some = "contains_some",
  ends_with = "ends_with",
  eq = "eq",
  eq_not = "eq_not",
  gt = "gt",
  gte = "gte",
  in = "in",
  lt = "lt",
  lte = "lte",
  not_contains = "not_contains",
  not_ends_with = "not_ends_with",
  not_in = "not_in",
  not_starts_with = "not_starts_with",
  relational_every = "relational_every",
  relational_none = "relational_none",
  relational_single = "relational_single",
  relational_some = "relational_some",
  search = "search",
  starts_with = "starts_with",
}

export enum _MutationInputFieldKind {
  enum = "enum",
  relation = "relation",
  richText = "richText",
  richTextWithEmbeds = "richTextWithEmbeds",
  scalar = "scalar",
  union = "union",
  virtual = "virtual",
}

export enum _MutationKind {
  create = "create",
  delete = "delete",
  deleteMany = "deleteMany",
  publish = "publish",
  publishMany = "publishMany",
  schedulePublish = "schedulePublish",
  scheduleUnpublish = "scheduleUnpublish",
  unpublish = "unpublish",
  unpublishMany = "unpublishMany",
  update = "update",
  updateMany = "updateMany",
  upsert = "upsert",
}

export enum _OrderDirection {
  asc = "asc",
  desc = "desc",
}

export enum _RelationInputCardinality {
  many = "many",
  one = "one",
}

export enum _RelationInputKind {
  create = "create",
  update = "update",
}

export enum _RelationKind {
  regular = "regular",
  union = "union",
}

export enum _SystemDateTimeFieldVariation {
  base = "base",
  combined = "combined",
  localization = "localization",
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  AssetOrderByInput: true,
  Boolean: true,
  CategoryOrderByInput: true,
  CollectionOrderByInput: true,
  CurrencyOrderByInput: true,
  Date: true,
  DateTime: true,
  DocumentFileTypes: true,
  Float: true,
  Hex: true,
  ID: true,
  ImageFit: true,
  Int: true,
  Json: true,
  Locale: true,
  Long: true,
  OrderItemOrderByInput: true,
  OrderOrderByInput: true,
  ProductColor: true,
  ProductColorVariantOrderByInput: true,
  ProductOrderByInput: true,
  ProductSize: true,
  ProductSizeColorVariantOrderByInput: true,
  ProductSizeVariantOrderByInput: true,
  RGBAHue: true,
  RGBATransparency: true,
  ReviewOrderByInput: true,
  RichTextAST: true,
  ScheduledOperationOrderByInput: true,
  ScheduledOperationStatus: true,
  ScheduledReleaseOrderByInput: true,
  ScheduledReleaseStatus: true,
  Stage: true,
  String: true,
  SystemDateTimeFieldVariation: true,
  UserKind: true,
  UserOrderByInput: true,
  _FilterKind: true,
  _MutationInputFieldKind: true,
  _MutationKind: true,
  _OrderDirection: true,
  _RelationInputCardinality: true,
  _RelationInputKind: true,
  _RelationKind: true,
  _SystemDateTimeFieldVariation: true,
}
export const generatedSchema = {
  Aggregate: { __typename: { __type: "String!" }, count: { __type: "Int!" } },
  Asset: {
    __typename: { __type: "String!" },
    createdAt: {
      __type: "DateTime!",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    createdBy: { __type: "User", __args: { locales: "[Locale!]" } },
    documentInStages: {
      __type: "[Asset!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    fileName: { __type: "String!" },
    handle: { __type: "String!" },
    height: { __type: "Float" },
    history: {
      __type: "[Version!]!",
      __args: { limit: "Int!", skip: "Int!", stageOverride: "Stage" },
    },
    id: { __type: "ID!" },
    locale: { __type: "Locale!" },
    localizations: {
      __type: "[Asset!]!",
      __args: { includeCurrent: "Boolean!", locales: "[Locale!]!" },
    },
    mimeType: { __type: "String" },
    productImages: {
      __type: "[Product!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        orderBy: "ProductOrderByInput",
        skip: "Int",
        where: "ProductWhereInput",
      },
    },
    publishedAt: {
      __type: "DateTime",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    publishedBy: { __type: "User", __args: { locales: "[Locale!]" } },
    scheduledIn: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        where: "ScheduledOperationWhereInput",
      },
    },
    size: { __type: "Float" },
    stage: { __type: "Stage!" },
    updatedAt: {
      __type: "DateTime!",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    updatedBy: { __type: "User", __args: { locales: "[Locale!]" } },
    url: {
      __type: "String!",
      __args: { transformation: "AssetTransformationInput" },
    },
    width: { __type: "Float" },
  },
  AssetConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "AssetWhereUniqueInput!" },
  },
  AssetConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[AssetEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  AssetCreateInput: {
    createdAt: { __type: "DateTime" },
    fileName: { __type: "String!" },
    handle: { __type: "String!" },
    height: { __type: "Float" },
    localizations: { __type: "AssetCreateLocalizationsInput" },
    mimeType: { __type: "String" },
    productImages: { __type: "ProductCreateManyInlineInput" },
    size: { __type: "Float" },
    updatedAt: { __type: "DateTime" },
    width: { __type: "Float" },
  },
  AssetCreateLocalizationDataInput: {
    createdAt: { __type: "DateTime" },
    fileName: { __type: "String!" },
    handle: { __type: "String!" },
    height: { __type: "Float" },
    mimeType: { __type: "String" },
    size: { __type: "Float" },
    updatedAt: { __type: "DateTime" },
    width: { __type: "Float" },
  },
  AssetCreateLocalizationInput: {
    data: { __type: "AssetCreateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  AssetCreateLocalizationsInput: {
    create: { __type: "[AssetCreateLocalizationInput!]" },
  },
  AssetCreateManyInlineInput: {
    connect: { __type: "[AssetWhereUniqueInput!]" },
    create: { __type: "[AssetCreateInput!]" },
  },
  AssetCreateOneInlineInput: {
    connect: { __type: "AssetWhereUniqueInput" },
    create: { __type: "AssetCreateInput" },
  },
  AssetEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Asset!" },
  },
  AssetManyWhereInput: {
    AND: { __type: "[AssetWhereInput!]" },
    NOT: { __type: "[AssetWhereInput!]" },
    OR: { __type: "[AssetWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "AssetWhereStageInput" },
    documentInStages_none: { __type: "AssetWhereStageInput" },
    documentInStages_some: { __type: "AssetWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    productImages_every: { __type: "ProductWhereInput" },
    productImages_none: { __type: "ProductWhereInput" },
    productImages_some: { __type: "ProductWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  AssetTransformationInput: {
    document: { __type: "DocumentTransformationInput" },
    image: { __type: "ImageTransformationInput" },
    validateOptions: { __type: "Boolean" },
  },
  AssetUpdateInput: {
    fileName: { __type: "String" },
    handle: { __type: "String" },
    height: { __type: "Float" },
    localizations: { __type: "AssetUpdateLocalizationsInput" },
    mimeType: { __type: "String" },
    productImages: { __type: "ProductUpdateManyInlineInput" },
    size: { __type: "Float" },
    width: { __type: "Float" },
  },
  AssetUpdateLocalizationDataInput: {
    fileName: { __type: "String" },
    handle: { __type: "String" },
    height: { __type: "Float" },
    mimeType: { __type: "String" },
    size: { __type: "Float" },
    width: { __type: "Float" },
  },
  AssetUpdateLocalizationInput: {
    data: { __type: "AssetUpdateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  AssetUpdateLocalizationsInput: {
    create: { __type: "[AssetCreateLocalizationInput!]" },
    delete: { __type: "[Locale!]" },
    update: { __type: "[AssetUpdateLocalizationInput!]" },
    upsert: { __type: "[AssetUpsertLocalizationInput!]" },
  },
  AssetUpdateManyInlineInput: {
    connect: { __type: "[AssetConnectInput!]" },
    create: { __type: "[AssetCreateInput!]" },
    delete: { __type: "[AssetWhereUniqueInput!]" },
    disconnect: { __type: "[AssetWhereUniqueInput!]" },
    set: { __type: "[AssetWhereUniqueInput!]" },
    update: { __type: "[AssetUpdateWithNestedWhereUniqueInput!]" },
    upsert: { __type: "[AssetUpsertWithNestedWhereUniqueInput!]" },
  },
  AssetUpdateManyInput: {
    fileName: { __type: "String" },
    height: { __type: "Float" },
    localizations: { __type: "AssetUpdateManyLocalizationsInput" },
    mimeType: { __type: "String" },
    size: { __type: "Float" },
    width: { __type: "Float" },
  },
  AssetUpdateManyLocalizationDataInput: {
    fileName: { __type: "String" },
    height: { __type: "Float" },
    mimeType: { __type: "String" },
    size: { __type: "Float" },
    width: { __type: "Float" },
  },
  AssetUpdateManyLocalizationInput: {
    data: { __type: "AssetUpdateManyLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  AssetUpdateManyLocalizationsInput: {
    update: { __type: "[AssetUpdateManyLocalizationInput!]" },
  },
  AssetUpdateManyWithNestedWhereInput: {
    data: { __type: "AssetUpdateManyInput!" },
    where: { __type: "AssetWhereInput!" },
  },
  AssetUpdateOneInlineInput: {
    connect: { __type: "AssetWhereUniqueInput" },
    create: { __type: "AssetCreateInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: { __type: "AssetUpdateWithNestedWhereUniqueInput" },
    upsert: { __type: "AssetUpsertWithNestedWhereUniqueInput" },
  },
  AssetUpdateWithNestedWhereUniqueInput: {
    data: { __type: "AssetUpdateInput!" },
    where: { __type: "AssetWhereUniqueInput!" },
  },
  AssetUpsertInput: {
    create: { __type: "AssetCreateInput!" },
    update: { __type: "AssetUpdateInput!" },
  },
  AssetUpsertLocalizationInput: {
    create: { __type: "AssetCreateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
    update: { __type: "AssetUpdateLocalizationDataInput!" },
  },
  AssetUpsertWithNestedWhereUniqueInput: {
    data: { __type: "AssetUpsertInput!" },
    where: { __type: "AssetWhereUniqueInput!" },
  },
  AssetWhereComparatorInput: { outdated_to: { __type: "Boolean" } },
  AssetWhereInput: {
    AND: { __type: "[AssetWhereInput!]" },
    NOT: { __type: "[AssetWhereInput!]" },
    OR: { __type: "[AssetWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "AssetWhereStageInput" },
    documentInStages_none: { __type: "AssetWhereStageInput" },
    documentInStages_some: { __type: "AssetWhereStageInput" },
    fileName: { __type: "String" },
    fileName_contains: { __type: "String" },
    fileName_ends_with: { __type: "String" },
    fileName_in: { __type: "[String]" },
    fileName_not: { __type: "String" },
    fileName_not_contains: { __type: "String" },
    fileName_not_ends_with: { __type: "String" },
    fileName_not_in: { __type: "[String]" },
    fileName_not_starts_with: { __type: "String" },
    fileName_starts_with: { __type: "String" },
    handle: { __type: "String" },
    handle_contains: { __type: "String" },
    handle_ends_with: { __type: "String" },
    handle_in: { __type: "[String]" },
    handle_not: { __type: "String" },
    handle_not_contains: { __type: "String" },
    handle_not_ends_with: { __type: "String" },
    handle_not_in: { __type: "[String]" },
    handle_not_starts_with: { __type: "String" },
    handle_starts_with: { __type: "String" },
    height: { __type: "Float" },
    height_gt: { __type: "Float" },
    height_gte: { __type: "Float" },
    height_in: { __type: "[Float]" },
    height_lt: { __type: "Float" },
    height_lte: { __type: "Float" },
    height_not: { __type: "Float" },
    height_not_in: { __type: "[Float]" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    mimeType: { __type: "String" },
    mimeType_contains: { __type: "String" },
    mimeType_ends_with: { __type: "String" },
    mimeType_in: { __type: "[String]" },
    mimeType_not: { __type: "String" },
    mimeType_not_contains: { __type: "String" },
    mimeType_not_ends_with: { __type: "String" },
    mimeType_not_in: { __type: "[String]" },
    mimeType_not_starts_with: { __type: "String" },
    mimeType_starts_with: { __type: "String" },
    productImages_every: { __type: "ProductWhereInput" },
    productImages_none: { __type: "ProductWhereInput" },
    productImages_some: { __type: "ProductWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    size: { __type: "Float" },
    size_gt: { __type: "Float" },
    size_gte: { __type: "Float" },
    size_in: { __type: "[Float]" },
    size_lt: { __type: "Float" },
    size_lte: { __type: "Float" },
    size_not: { __type: "Float" },
    size_not_in: { __type: "[Float]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
    width: { __type: "Float" },
    width_gt: { __type: "Float" },
    width_gte: { __type: "Float" },
    width_in: { __type: "[Float]" },
    width_lt: { __type: "Float" },
    width_lte: { __type: "Float" },
    width_not: { __type: "Float" },
    width_not_in: { __type: "[Float]" },
  },
  AssetWhereStageInput: {
    AND: { __type: "[AssetWhereStageInput!]" },
    NOT: { __type: "[AssetWhereStageInput!]" },
    OR: { __type: "[AssetWhereStageInput!]" },
    compareWithParent: { __type: "AssetWhereComparatorInput" },
    stage: { __type: "Stage" },
  },
  AssetWhereUniqueInput: { id: { __type: "ID" } },
  BatchPayload: {
    __typename: { __type: "String!" },
    count: { __type: "Long!" },
  },
  Category: {
    __typename: { __type: "String!" },
    createdAt: {
      __type: "DateTime!",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    createdBy: { __type: "User", __args: { locales: "[Locale!]" } },
    description: { __type: "String" },
    documentInStages: {
      __type: "[Category!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    history: {
      __type: "[Version!]!",
      __args: { limit: "Int!", skip: "Int!", stageOverride: "Stage" },
    },
    id: { __type: "ID!" },
    locale: { __type: "Locale!" },
    localizations: {
      __type: "[Category!]!",
      __args: { includeCurrent: "Boolean!", locales: "[Locale!]!" },
    },
    name: { __type: "String!" },
    products: {
      __type: "[Product!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        orderBy: "ProductOrderByInput",
        skip: "Int",
        where: "ProductWhereInput",
      },
    },
    publishedAt: {
      __type: "DateTime",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    publishedBy: { __type: "User", __args: { locales: "[Locale!]" } },
    scheduledIn: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        where: "ScheduledOperationWhereInput",
      },
    },
    slug: { __type: "String!" },
    stage: { __type: "Stage!" },
    updatedAt: {
      __type: "DateTime!",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    updatedBy: { __type: "User", __args: { locales: "[Locale!]" } },
  },
  CategoryConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "CategoryWhereUniqueInput!" },
  },
  CategoryConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[CategoryEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  CategoryCreateInput: {
    createdAt: { __type: "DateTime" },
    description: { __type: "String" },
    localizations: { __type: "CategoryCreateLocalizationsInput" },
    name: { __type: "String!" },
    products: { __type: "ProductCreateManyInlineInput" },
    slug: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
  },
  CategoryCreateLocalizationDataInput: {
    createdAt: { __type: "DateTime" },
    description: { __type: "String" },
    name: { __type: "String!" },
    slug: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
  },
  CategoryCreateLocalizationInput: {
    data: { __type: "CategoryCreateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  CategoryCreateLocalizationsInput: {
    create: { __type: "[CategoryCreateLocalizationInput!]" },
  },
  CategoryCreateManyInlineInput: {
    connect: { __type: "[CategoryWhereUniqueInput!]" },
    create: { __type: "[CategoryCreateInput!]" },
  },
  CategoryCreateOneInlineInput: {
    connect: { __type: "CategoryWhereUniqueInput" },
    create: { __type: "CategoryCreateInput" },
  },
  CategoryEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Category!" },
  },
  CategoryManyWhereInput: {
    AND: { __type: "[CategoryWhereInput!]" },
    NOT: { __type: "[CategoryWhereInput!]" },
    OR: { __type: "[CategoryWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "CategoryWhereStageInput" },
    documentInStages_none: { __type: "CategoryWhereStageInput" },
    documentInStages_some: { __type: "CategoryWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    products_every: { __type: "ProductWhereInput" },
    products_none: { __type: "ProductWhereInput" },
    products_some: { __type: "ProductWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  CategoryUpdateInput: {
    description: { __type: "String" },
    localizations: { __type: "CategoryUpdateLocalizationsInput" },
    name: { __type: "String" },
    products: { __type: "ProductUpdateManyInlineInput" },
    slug: { __type: "String" },
  },
  CategoryUpdateLocalizationDataInput: {
    description: { __type: "String" },
    name: { __type: "String" },
    slug: { __type: "String" },
  },
  CategoryUpdateLocalizationInput: {
    data: { __type: "CategoryUpdateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  CategoryUpdateLocalizationsInput: {
    create: { __type: "[CategoryCreateLocalizationInput!]" },
    delete: { __type: "[Locale!]" },
    update: { __type: "[CategoryUpdateLocalizationInput!]" },
    upsert: { __type: "[CategoryUpsertLocalizationInput!]" },
  },
  CategoryUpdateManyInlineInput: {
    connect: { __type: "[CategoryConnectInput!]" },
    create: { __type: "[CategoryCreateInput!]" },
    delete: { __type: "[CategoryWhereUniqueInput!]" },
    disconnect: { __type: "[CategoryWhereUniqueInput!]" },
    set: { __type: "[CategoryWhereUniqueInput!]" },
    update: { __type: "[CategoryUpdateWithNestedWhereUniqueInput!]" },
    upsert: { __type: "[CategoryUpsertWithNestedWhereUniqueInput!]" },
  },
  CategoryUpdateManyInput: {
    description: { __type: "String" },
    localizations: { __type: "CategoryUpdateManyLocalizationsInput" },
  },
  CategoryUpdateManyLocalizationDataInput: {
    description: { __type: "String" },
  },
  CategoryUpdateManyLocalizationInput: {
    data: { __type: "CategoryUpdateManyLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  CategoryUpdateManyLocalizationsInput: {
    update: { __type: "[CategoryUpdateManyLocalizationInput!]" },
  },
  CategoryUpdateManyWithNestedWhereInput: {
    data: { __type: "CategoryUpdateManyInput!" },
    where: { __type: "CategoryWhereInput!" },
  },
  CategoryUpdateOneInlineInput: {
    connect: { __type: "CategoryWhereUniqueInput" },
    create: { __type: "CategoryCreateInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: { __type: "CategoryUpdateWithNestedWhereUniqueInput" },
    upsert: { __type: "CategoryUpsertWithNestedWhereUniqueInput" },
  },
  CategoryUpdateWithNestedWhereUniqueInput: {
    data: { __type: "CategoryUpdateInput!" },
    where: { __type: "CategoryWhereUniqueInput!" },
  },
  CategoryUpsertInput: {
    create: { __type: "CategoryCreateInput!" },
    update: { __type: "CategoryUpdateInput!" },
  },
  CategoryUpsertLocalizationInput: {
    create: { __type: "CategoryCreateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
    update: { __type: "CategoryUpdateLocalizationDataInput!" },
  },
  CategoryUpsertWithNestedWhereUniqueInput: {
    data: { __type: "CategoryUpsertInput!" },
    where: { __type: "CategoryWhereUniqueInput!" },
  },
  CategoryWhereComparatorInput: { outdated_to: { __type: "Boolean" } },
  CategoryWhereInput: {
    AND: { __type: "[CategoryWhereInput!]" },
    NOT: { __type: "[CategoryWhereInput!]" },
    OR: { __type: "[CategoryWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    description: { __type: "String" },
    description_contains: { __type: "String" },
    description_ends_with: { __type: "String" },
    description_in: { __type: "[String]" },
    description_not: { __type: "String" },
    description_not_contains: { __type: "String" },
    description_not_ends_with: { __type: "String" },
    description_not_in: { __type: "[String]" },
    description_not_starts_with: { __type: "String" },
    description_starts_with: { __type: "String" },
    documentInStages_every: { __type: "CategoryWhereStageInput" },
    documentInStages_none: { __type: "CategoryWhereStageInput" },
    documentInStages_some: { __type: "CategoryWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    name: { __type: "String" },
    name_contains: { __type: "String" },
    name_ends_with: { __type: "String" },
    name_in: { __type: "[String]" },
    name_not: { __type: "String" },
    name_not_contains: { __type: "String" },
    name_not_ends_with: { __type: "String" },
    name_not_in: { __type: "[String]" },
    name_not_starts_with: { __type: "String" },
    name_starts_with: { __type: "String" },
    products_every: { __type: "ProductWhereInput" },
    products_none: { __type: "ProductWhereInput" },
    products_some: { __type: "ProductWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    slug: { __type: "String" },
    slug_contains: { __type: "String" },
    slug_ends_with: { __type: "String" },
    slug_in: { __type: "[String]" },
    slug_not: { __type: "String" },
    slug_not_contains: { __type: "String" },
    slug_not_ends_with: { __type: "String" },
    slug_not_in: { __type: "[String]" },
    slug_not_starts_with: { __type: "String" },
    slug_starts_with: { __type: "String" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  CategoryWhereStageInput: {
    AND: { __type: "[CategoryWhereStageInput!]" },
    NOT: { __type: "[CategoryWhereStageInput!]" },
    OR: { __type: "[CategoryWhereStageInput!]" },
    compareWithParent: { __type: "CategoryWhereComparatorInput" },
    stage: { __type: "Stage" },
  },
  CategoryWhereUniqueInput: { id: { __type: "ID" } },
  Collection: {
    __typename: { __type: "String!" },
    createdAt: {
      __type: "DateTime!",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    createdBy: { __type: "User", __args: { locales: "[Locale!]" } },
    description: { __type: "String" },
    documentInStages: {
      __type: "[Collection!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    history: {
      __type: "[Version!]!",
      __args: { limit: "Int!", skip: "Int!", stageOverride: "Stage" },
    },
    id: { __type: "ID!" },
    locale: { __type: "Locale!" },
    localizations: {
      __type: "[Collection!]!",
      __args: { includeCurrent: "Boolean!", locales: "[Locale!]!" },
    },
    name: { __type: "String!" },
    products: {
      __type: "[Product!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        orderBy: "ProductOrderByInput",
        skip: "Int",
        where: "ProductWhereInput",
      },
    },
    publishedAt: {
      __type: "DateTime",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    publishedBy: { __type: "User", __args: { locales: "[Locale!]" } },
    scheduledIn: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        where: "ScheduledOperationWhereInput",
      },
    },
    slug: { __type: "String!" },
    stage: { __type: "Stage!" },
    updatedAt: {
      __type: "DateTime!",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    updatedBy: { __type: "User", __args: { locales: "[Locale!]" } },
  },
  CollectionConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "CollectionWhereUniqueInput!" },
  },
  CollectionConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[CollectionEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  CollectionCreateInput: {
    createdAt: { __type: "DateTime" },
    description: { __type: "String" },
    localizations: { __type: "CollectionCreateLocalizationsInput" },
    name: { __type: "String!" },
    products: { __type: "ProductCreateManyInlineInput" },
    slug: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
  },
  CollectionCreateLocalizationDataInput: {
    createdAt: { __type: "DateTime" },
    description: { __type: "String" },
    name: { __type: "String!" },
    slug: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
  },
  CollectionCreateLocalizationInput: {
    data: { __type: "CollectionCreateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  CollectionCreateLocalizationsInput: {
    create: { __type: "[CollectionCreateLocalizationInput!]" },
  },
  CollectionCreateManyInlineInput: {
    connect: { __type: "[CollectionWhereUniqueInput!]" },
    create: { __type: "[CollectionCreateInput!]" },
  },
  CollectionCreateOneInlineInput: {
    connect: { __type: "CollectionWhereUniqueInput" },
    create: { __type: "CollectionCreateInput" },
  },
  CollectionEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Collection!" },
  },
  CollectionManyWhereInput: {
    AND: { __type: "[CollectionWhereInput!]" },
    NOT: { __type: "[CollectionWhereInput!]" },
    OR: { __type: "[CollectionWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "CollectionWhereStageInput" },
    documentInStages_none: { __type: "CollectionWhereStageInput" },
    documentInStages_some: { __type: "CollectionWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    products_every: { __type: "ProductWhereInput" },
    products_none: { __type: "ProductWhereInput" },
    products_some: { __type: "ProductWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  CollectionUpdateInput: {
    description: { __type: "String" },
    localizations: { __type: "CollectionUpdateLocalizationsInput" },
    name: { __type: "String" },
    products: { __type: "ProductUpdateManyInlineInput" },
    slug: { __type: "String" },
  },
  CollectionUpdateLocalizationDataInput: {
    description: { __type: "String" },
    name: { __type: "String" },
    slug: { __type: "String" },
  },
  CollectionUpdateLocalizationInput: {
    data: { __type: "CollectionUpdateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  CollectionUpdateLocalizationsInput: {
    create: { __type: "[CollectionCreateLocalizationInput!]" },
    delete: { __type: "[Locale!]" },
    update: { __type: "[CollectionUpdateLocalizationInput!]" },
    upsert: { __type: "[CollectionUpsertLocalizationInput!]" },
  },
  CollectionUpdateManyInlineInput: {
    connect: { __type: "[CollectionConnectInput!]" },
    create: { __type: "[CollectionCreateInput!]" },
    delete: { __type: "[CollectionWhereUniqueInput!]" },
    disconnect: { __type: "[CollectionWhereUniqueInput!]" },
    set: { __type: "[CollectionWhereUniqueInput!]" },
    update: { __type: "[CollectionUpdateWithNestedWhereUniqueInput!]" },
    upsert: { __type: "[CollectionUpsertWithNestedWhereUniqueInput!]" },
  },
  CollectionUpdateManyInput: {
    description: { __type: "String" },
    localizations: { __type: "CollectionUpdateManyLocalizationsInput" },
  },
  CollectionUpdateManyLocalizationDataInput: {
    description: { __type: "String" },
  },
  CollectionUpdateManyLocalizationInput: {
    data: { __type: "CollectionUpdateManyLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  CollectionUpdateManyLocalizationsInput: {
    update: { __type: "[CollectionUpdateManyLocalizationInput!]" },
  },
  CollectionUpdateManyWithNestedWhereInput: {
    data: { __type: "CollectionUpdateManyInput!" },
    where: { __type: "CollectionWhereInput!" },
  },
  CollectionUpdateOneInlineInput: {
    connect: { __type: "CollectionWhereUniqueInput" },
    create: { __type: "CollectionCreateInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: { __type: "CollectionUpdateWithNestedWhereUniqueInput" },
    upsert: { __type: "CollectionUpsertWithNestedWhereUniqueInput" },
  },
  CollectionUpdateWithNestedWhereUniqueInput: {
    data: { __type: "CollectionUpdateInput!" },
    where: { __type: "CollectionWhereUniqueInput!" },
  },
  CollectionUpsertInput: {
    create: { __type: "CollectionCreateInput!" },
    update: { __type: "CollectionUpdateInput!" },
  },
  CollectionUpsertLocalizationInput: {
    create: { __type: "CollectionCreateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
    update: { __type: "CollectionUpdateLocalizationDataInput!" },
  },
  CollectionUpsertWithNestedWhereUniqueInput: {
    data: { __type: "CollectionUpsertInput!" },
    where: { __type: "CollectionWhereUniqueInput!" },
  },
  CollectionWhereComparatorInput: { outdated_to: { __type: "Boolean" } },
  CollectionWhereInput: {
    AND: { __type: "[CollectionWhereInput!]" },
    NOT: { __type: "[CollectionWhereInput!]" },
    OR: { __type: "[CollectionWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    description: { __type: "String" },
    description_contains: { __type: "String" },
    description_ends_with: { __type: "String" },
    description_in: { __type: "[String]" },
    description_not: { __type: "String" },
    description_not_contains: { __type: "String" },
    description_not_ends_with: { __type: "String" },
    description_not_in: { __type: "[String]" },
    description_not_starts_with: { __type: "String" },
    description_starts_with: { __type: "String" },
    documentInStages_every: { __type: "CollectionWhereStageInput" },
    documentInStages_none: { __type: "CollectionWhereStageInput" },
    documentInStages_some: { __type: "CollectionWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    name: { __type: "String" },
    name_contains: { __type: "String" },
    name_ends_with: { __type: "String" },
    name_in: { __type: "[String]" },
    name_not: { __type: "String" },
    name_not_contains: { __type: "String" },
    name_not_ends_with: { __type: "String" },
    name_not_in: { __type: "[String]" },
    name_not_starts_with: { __type: "String" },
    name_starts_with: { __type: "String" },
    products_every: { __type: "ProductWhereInput" },
    products_none: { __type: "ProductWhereInput" },
    products_some: { __type: "ProductWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    slug: { __type: "String" },
    slug_contains: { __type: "String" },
    slug_ends_with: { __type: "String" },
    slug_in: { __type: "[String]" },
    slug_not: { __type: "String" },
    slug_not_contains: { __type: "String" },
    slug_not_ends_with: { __type: "String" },
    slug_not_in: { __type: "[String]" },
    slug_not_starts_with: { __type: "String" },
    slug_starts_with: { __type: "String" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  CollectionWhereStageInput: {
    AND: { __type: "[CollectionWhereStageInput!]" },
    NOT: { __type: "[CollectionWhereStageInput!]" },
    OR: { __type: "[CollectionWhereStageInput!]" },
    compareWithParent: { __type: "CollectionWhereComparatorInput" },
    stage: { __type: "Stage" },
  },
  CollectionWhereUniqueInput: { id: { __type: "ID" } },
  Color: {
    __typename: { __type: "String!" },
    css: { __type: "String!" },
    hex: { __type: "Hex!" },
    rgba: { __type: "RGBA!" },
  },
  ColorInput: { hex: { __type: "Hex" }, rgba: { __type: "RGBAInput" } },
  ConnectPositionInput: {
    after: { __type: "ID" },
    before: { __type: "ID" },
    end: { __type: "Boolean" },
    start: { __type: "Boolean" },
  },
  Currency: {
    __typename: { __type: "String!" },
    code: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    createdBy: { __type: "User", __args: { locales: "[Locale!]" } },
    default: { __type: "Boolean!" },
    documentInStages: {
      __type: "[Currency!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    history: {
      __type: "[Version!]!",
      __args: { limit: "Int!", skip: "Int!", stageOverride: "Stage" },
    },
    id: { __type: "ID!" },
    publishedAt: { __type: "DateTime" },
    publishedBy: { __type: "User", __args: { locales: "[Locale!]" } },
    rate: { __type: "Float!" },
    scheduledIn: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        where: "ScheduledOperationWhereInput",
      },
    },
    stage: { __type: "Stage!" },
    updatedAt: { __type: "DateTime!" },
    updatedBy: { __type: "User", __args: { locales: "[Locale!]" } },
  },
  CurrencyConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "CurrencyWhereUniqueInput!" },
  },
  CurrencyConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[CurrencyEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  CurrencyCreateInput: {
    code: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    default: { __type: "Boolean!" },
    rate: { __type: "Float!" },
    updatedAt: { __type: "DateTime" },
  },
  CurrencyCreateManyInlineInput: {
    connect: { __type: "[CurrencyWhereUniqueInput!]" },
    create: { __type: "[CurrencyCreateInput!]" },
  },
  CurrencyCreateOneInlineInput: {
    connect: { __type: "CurrencyWhereUniqueInput" },
    create: { __type: "CurrencyCreateInput" },
  },
  CurrencyEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Currency!" },
  },
  CurrencyManyWhereInput: {
    AND: { __type: "[CurrencyWhereInput!]" },
    NOT: { __type: "[CurrencyWhereInput!]" },
    OR: { __type: "[CurrencyWhereInput!]" },
    _search: { __type: "String" },
    code: { __type: "String" },
    code_contains: { __type: "String" },
    code_ends_with: { __type: "String" },
    code_in: { __type: "[String]" },
    code_not: { __type: "String" },
    code_not_contains: { __type: "String" },
    code_not_ends_with: { __type: "String" },
    code_not_in: { __type: "[String]" },
    code_not_starts_with: { __type: "String" },
    code_starts_with: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    default: { __type: "Boolean" },
    default_not: { __type: "Boolean" },
    documentInStages_every: { __type: "CurrencyWhereStageInput" },
    documentInStages_none: { __type: "CurrencyWhereStageInput" },
    documentInStages_some: { __type: "CurrencyWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    rate: { __type: "Float" },
    rate_gt: { __type: "Float" },
    rate_gte: { __type: "Float" },
    rate_in: { __type: "[Float]" },
    rate_lt: { __type: "Float" },
    rate_lte: { __type: "Float" },
    rate_not: { __type: "Float" },
    rate_not_in: { __type: "[Float]" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  CurrencyUpdateInput: {
    code: { __type: "String" },
    default: { __type: "Boolean" },
    rate: { __type: "Float" },
  },
  CurrencyUpdateManyInlineInput: {
    connect: { __type: "[CurrencyConnectInput!]" },
    create: { __type: "[CurrencyCreateInput!]" },
    delete: { __type: "[CurrencyWhereUniqueInput!]" },
    disconnect: { __type: "[CurrencyWhereUniqueInput!]" },
    set: { __type: "[CurrencyWhereUniqueInput!]" },
    update: { __type: "[CurrencyUpdateWithNestedWhereUniqueInput!]" },
    upsert: { __type: "[CurrencyUpsertWithNestedWhereUniqueInput!]" },
  },
  CurrencyUpdateManyInput: { rate: { __type: "Float" } },
  CurrencyUpdateManyWithNestedWhereInput: {
    data: { __type: "CurrencyUpdateManyInput!" },
    where: { __type: "CurrencyWhereInput!" },
  },
  CurrencyUpdateOneInlineInput: {
    connect: { __type: "CurrencyWhereUniqueInput" },
    create: { __type: "CurrencyCreateInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: { __type: "CurrencyUpdateWithNestedWhereUniqueInput" },
    upsert: { __type: "CurrencyUpsertWithNestedWhereUniqueInput" },
  },
  CurrencyUpdateWithNestedWhereUniqueInput: {
    data: { __type: "CurrencyUpdateInput!" },
    where: { __type: "CurrencyWhereUniqueInput!" },
  },
  CurrencyUpsertInput: {
    create: { __type: "CurrencyCreateInput!" },
    update: { __type: "CurrencyUpdateInput!" },
  },
  CurrencyUpsertWithNestedWhereUniqueInput: {
    data: { __type: "CurrencyUpsertInput!" },
    where: { __type: "CurrencyWhereUniqueInput!" },
  },
  CurrencyWhereComparatorInput: { outdated_to: { __type: "Boolean" } },
  CurrencyWhereInput: {
    AND: { __type: "[CurrencyWhereInput!]" },
    NOT: { __type: "[CurrencyWhereInput!]" },
    OR: { __type: "[CurrencyWhereInput!]" },
    _search: { __type: "String" },
    code: { __type: "String" },
    code_contains: { __type: "String" },
    code_ends_with: { __type: "String" },
    code_in: { __type: "[String]" },
    code_not: { __type: "String" },
    code_not_contains: { __type: "String" },
    code_not_ends_with: { __type: "String" },
    code_not_in: { __type: "[String]" },
    code_not_starts_with: { __type: "String" },
    code_starts_with: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    default: { __type: "Boolean" },
    default_not: { __type: "Boolean" },
    documentInStages_every: { __type: "CurrencyWhereStageInput" },
    documentInStages_none: { __type: "CurrencyWhereStageInput" },
    documentInStages_some: { __type: "CurrencyWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    rate: { __type: "Float" },
    rate_gt: { __type: "Float" },
    rate_gte: { __type: "Float" },
    rate_in: { __type: "[Float]" },
    rate_lt: { __type: "Float" },
    rate_lte: { __type: "Float" },
    rate_not: { __type: "Float" },
    rate_not_in: { __type: "[Float]" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  CurrencyWhereStageInput: {
    AND: { __type: "[CurrencyWhereStageInput!]" },
    NOT: { __type: "[CurrencyWhereStageInput!]" },
    OR: { __type: "[CurrencyWhereStageInput!]" },
    compareWithParent: { __type: "CurrencyWhereComparatorInput" },
    stage: { __type: "Stage" },
  },
  CurrencyWhereUniqueInput: {
    code: { __type: "String" },
    default: { __type: "Boolean" },
    id: { __type: "ID" },
  },
  DocumentOutputInput: { format: { __type: "DocumentFileTypes" } },
  DocumentTransformationInput: { output: { __type: "DocumentOutputInput" } },
  DocumentVersion: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    data: { __type: "Json" },
    id: { __type: "ID!" },
    revision: { __type: "Int!" },
    stage: { __type: "Stage!" },
  },
  ImageResizeInput: {
    fit: { __type: "ImageFit" },
    height: { __type: "Int" },
    width: { __type: "Int" },
  },
  ImageTransformationInput: { resize: { __type: "ImageResizeInput" } },
  Location: {
    __typename: { __type: "String!" },
    distance: { __type: "Float!", __args: { from: "LocationInput!" } },
    latitude: { __type: "Float!" },
    longitude: { __type: "Float!" },
  },
  LocationInput: {
    latitude: { __type: "Float!" },
    longitude: { __type: "Float!" },
  },
  Node: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    stage: { __type: "Stage!" },
    $on: { __type: "$Node!" },
  },
  Order: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    createdBy: { __type: "User", __args: { locales: "[Locale!]" } },
    documentInStages: {
      __type: "[Order!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    email: { __type: "String!" },
    history: {
      __type: "[Version!]!",
      __args: { limit: "Int!", skip: "Int!", stageOverride: "Stage" },
    },
    id: { __type: "ID!" },
    orderItems: {
      __type: "[OrderItem!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        orderBy: "OrderItemOrderByInput",
        skip: "Int",
        where: "OrderItemWhereInput",
      },
    },
    publishedAt: { __type: "DateTime" },
    publishedBy: { __type: "User", __args: { locales: "[Locale!]" } },
    scheduledIn: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        where: "ScheduledOperationWhereInput",
      },
    },
    stage: { __type: "Stage!" },
    stripeCheckoutId: { __type: "String!" },
    total: { __type: "Int!" },
    updatedAt: { __type: "DateTime!" },
    updatedBy: { __type: "User", __args: { locales: "[Locale!]" } },
  },
  OrderConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "OrderWhereUniqueInput!" },
  },
  OrderConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[OrderEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  OrderCreateInput: {
    createdAt: { __type: "DateTime" },
    email: { __type: "String!" },
    orderItems: { __type: "OrderItemCreateManyInlineInput" },
    stripeCheckoutId: { __type: "String!" },
    total: { __type: "Int!" },
    updatedAt: { __type: "DateTime" },
  },
  OrderCreateManyInlineInput: {
    connect: { __type: "[OrderWhereUniqueInput!]" },
    create: { __type: "[OrderCreateInput!]" },
  },
  OrderCreateOneInlineInput: {
    connect: { __type: "OrderWhereUniqueInput" },
    create: { __type: "OrderCreateInput" },
  },
  OrderEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Order!" },
  },
  OrderItem: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    createdBy: { __type: "User", __args: { locales: "[Locale!]" } },
    documentInStages: {
      __type: "[OrderItem!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    history: {
      __type: "[Version!]!",
      __args: { limit: "Int!", skip: "Int!", stageOverride: "Stage" },
    },
    id: { __type: "ID!" },
    order: { __type: "Order", __args: { locales: "[Locale!]" } },
    product: { __type: "Product", __args: { locales: "[Locale!]" } },
    publishedAt: { __type: "DateTime" },
    publishedBy: { __type: "User", __args: { locales: "[Locale!]" } },
    quantity: { __type: "Int!" },
    scheduledIn: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        where: "ScheduledOperationWhereInput",
      },
    },
    stage: { __type: "Stage!" },
    total: { __type: "Int!" },
    updatedAt: { __type: "DateTime!" },
    updatedBy: { __type: "User", __args: { locales: "[Locale!]" } },
  },
  OrderItemConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "OrderItemWhereUniqueInput!" },
  },
  OrderItemConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[OrderItemEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  OrderItemCreateInput: {
    createdAt: { __type: "DateTime" },
    order: { __type: "OrderCreateOneInlineInput" },
    product: { __type: "ProductCreateOneInlineInput" },
    quantity: { __type: "Int!" },
    total: { __type: "Int!" },
    updatedAt: { __type: "DateTime" },
  },
  OrderItemCreateManyInlineInput: {
    connect: { __type: "[OrderItemWhereUniqueInput!]" },
    create: { __type: "[OrderItemCreateInput!]" },
  },
  OrderItemCreateOneInlineInput: {
    connect: { __type: "OrderItemWhereUniqueInput" },
    create: { __type: "OrderItemCreateInput" },
  },
  OrderItemEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "OrderItem!" },
  },
  OrderItemManyWhereInput: {
    AND: { __type: "[OrderItemWhereInput!]" },
    NOT: { __type: "[OrderItemWhereInput!]" },
    OR: { __type: "[OrderItemWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "OrderItemWhereStageInput" },
    documentInStages_none: { __type: "OrderItemWhereStageInput" },
    documentInStages_some: { __type: "OrderItemWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    order: { __type: "OrderWhereInput" },
    product: { __type: "ProductWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    quantity: { __type: "Int" },
    quantity_gt: { __type: "Int" },
    quantity_gte: { __type: "Int" },
    quantity_in: { __type: "[Int]" },
    quantity_lt: { __type: "Int" },
    quantity_lte: { __type: "Int" },
    quantity_not: { __type: "Int" },
    quantity_not_in: { __type: "[Int]" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    total: { __type: "Int" },
    total_gt: { __type: "Int" },
    total_gte: { __type: "Int" },
    total_in: { __type: "[Int]" },
    total_lt: { __type: "Int" },
    total_lte: { __type: "Int" },
    total_not: { __type: "Int" },
    total_not_in: { __type: "[Int]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  OrderItemUpdateInput: {
    order: { __type: "OrderUpdateOneInlineInput" },
    product: { __type: "ProductUpdateOneInlineInput" },
    quantity: { __type: "Int" },
    total: { __type: "Int" },
  },
  OrderItemUpdateManyInlineInput: {
    connect: { __type: "[OrderItemConnectInput!]" },
    create: { __type: "[OrderItemCreateInput!]" },
    delete: { __type: "[OrderItemWhereUniqueInput!]" },
    disconnect: { __type: "[OrderItemWhereUniqueInput!]" },
    set: { __type: "[OrderItemWhereUniqueInput!]" },
    update: { __type: "[OrderItemUpdateWithNestedWhereUniqueInput!]" },
    upsert: { __type: "[OrderItemUpsertWithNestedWhereUniqueInput!]" },
  },
  OrderItemUpdateManyInput: {
    quantity: { __type: "Int" },
    total: { __type: "Int" },
  },
  OrderItemUpdateManyWithNestedWhereInput: {
    data: { __type: "OrderItemUpdateManyInput!" },
    where: { __type: "OrderItemWhereInput!" },
  },
  OrderItemUpdateOneInlineInput: {
    connect: { __type: "OrderItemWhereUniqueInput" },
    create: { __type: "OrderItemCreateInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: { __type: "OrderItemUpdateWithNestedWhereUniqueInput" },
    upsert: { __type: "OrderItemUpsertWithNestedWhereUniqueInput" },
  },
  OrderItemUpdateWithNestedWhereUniqueInput: {
    data: { __type: "OrderItemUpdateInput!" },
    where: { __type: "OrderItemWhereUniqueInput!" },
  },
  OrderItemUpsertInput: {
    create: { __type: "OrderItemCreateInput!" },
    update: { __type: "OrderItemUpdateInput!" },
  },
  OrderItemUpsertWithNestedWhereUniqueInput: {
    data: { __type: "OrderItemUpsertInput!" },
    where: { __type: "OrderItemWhereUniqueInput!" },
  },
  OrderItemWhereComparatorInput: { outdated_to: { __type: "Boolean" } },
  OrderItemWhereInput: {
    AND: { __type: "[OrderItemWhereInput!]" },
    NOT: { __type: "[OrderItemWhereInput!]" },
    OR: { __type: "[OrderItemWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "OrderItemWhereStageInput" },
    documentInStages_none: { __type: "OrderItemWhereStageInput" },
    documentInStages_some: { __type: "OrderItemWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    order: { __type: "OrderWhereInput" },
    product: { __type: "ProductWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    quantity: { __type: "Int" },
    quantity_gt: { __type: "Int" },
    quantity_gte: { __type: "Int" },
    quantity_in: { __type: "[Int]" },
    quantity_lt: { __type: "Int" },
    quantity_lte: { __type: "Int" },
    quantity_not: { __type: "Int" },
    quantity_not_in: { __type: "[Int]" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    total: { __type: "Int" },
    total_gt: { __type: "Int" },
    total_gte: { __type: "Int" },
    total_in: { __type: "[Int]" },
    total_lt: { __type: "Int" },
    total_lte: { __type: "Int" },
    total_not: { __type: "Int" },
    total_not_in: { __type: "[Int]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  OrderItemWhereStageInput: {
    AND: { __type: "[OrderItemWhereStageInput!]" },
    NOT: { __type: "[OrderItemWhereStageInput!]" },
    OR: { __type: "[OrderItemWhereStageInput!]" },
    compareWithParent: { __type: "OrderItemWhereComparatorInput" },
    stage: { __type: "Stage" },
  },
  OrderItemWhereUniqueInput: { id: { __type: "ID" } },
  OrderManyWhereInput: {
    AND: { __type: "[OrderWhereInput!]" },
    NOT: { __type: "[OrderWhereInput!]" },
    OR: { __type: "[OrderWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "OrderWhereStageInput" },
    documentInStages_none: { __type: "OrderWhereStageInput" },
    documentInStages_some: { __type: "OrderWhereStageInput" },
    email: { __type: "String" },
    email_contains: { __type: "String" },
    email_ends_with: { __type: "String" },
    email_in: { __type: "[String]" },
    email_not: { __type: "String" },
    email_not_contains: { __type: "String" },
    email_not_ends_with: { __type: "String" },
    email_not_in: { __type: "[String]" },
    email_not_starts_with: { __type: "String" },
    email_starts_with: { __type: "String" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    orderItems_every: { __type: "OrderItemWhereInput" },
    orderItems_none: { __type: "OrderItemWhereInput" },
    orderItems_some: { __type: "OrderItemWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    stripeCheckoutId: { __type: "String" },
    stripeCheckoutId_contains: { __type: "String" },
    stripeCheckoutId_ends_with: { __type: "String" },
    stripeCheckoutId_in: { __type: "[String]" },
    stripeCheckoutId_not: { __type: "String" },
    stripeCheckoutId_not_contains: { __type: "String" },
    stripeCheckoutId_not_ends_with: { __type: "String" },
    stripeCheckoutId_not_in: { __type: "[String]" },
    stripeCheckoutId_not_starts_with: { __type: "String" },
    stripeCheckoutId_starts_with: { __type: "String" },
    total: { __type: "Int" },
    total_gt: { __type: "Int" },
    total_gte: { __type: "Int" },
    total_in: { __type: "[Int]" },
    total_lt: { __type: "Int" },
    total_lte: { __type: "Int" },
    total_not: { __type: "Int" },
    total_not_in: { __type: "[Int]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  OrderUpdateInput: {
    email: { __type: "String" },
    orderItems: { __type: "OrderItemUpdateManyInlineInput" },
    stripeCheckoutId: { __type: "String" },
    total: { __type: "Int" },
  },
  OrderUpdateManyInlineInput: {
    connect: { __type: "[OrderConnectInput!]" },
    create: { __type: "[OrderCreateInput!]" },
    delete: { __type: "[OrderWhereUniqueInput!]" },
    disconnect: { __type: "[OrderWhereUniqueInput!]" },
    set: { __type: "[OrderWhereUniqueInput!]" },
    update: { __type: "[OrderUpdateWithNestedWhereUniqueInput!]" },
    upsert: { __type: "[OrderUpsertWithNestedWhereUniqueInput!]" },
  },
  OrderUpdateManyInput: {
    email: { __type: "String" },
    stripeCheckoutId: { __type: "String" },
    total: { __type: "Int" },
  },
  OrderUpdateManyWithNestedWhereInput: {
    data: { __type: "OrderUpdateManyInput!" },
    where: { __type: "OrderWhereInput!" },
  },
  OrderUpdateOneInlineInput: {
    connect: { __type: "OrderWhereUniqueInput" },
    create: { __type: "OrderCreateInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: { __type: "OrderUpdateWithNestedWhereUniqueInput" },
    upsert: { __type: "OrderUpsertWithNestedWhereUniqueInput" },
  },
  OrderUpdateWithNestedWhereUniqueInput: {
    data: { __type: "OrderUpdateInput!" },
    where: { __type: "OrderWhereUniqueInput!" },
  },
  OrderUpsertInput: {
    create: { __type: "OrderCreateInput!" },
    update: { __type: "OrderUpdateInput!" },
  },
  OrderUpsertWithNestedWhereUniqueInput: {
    data: { __type: "OrderUpsertInput!" },
    where: { __type: "OrderWhereUniqueInput!" },
  },
  OrderWhereComparatorInput: { outdated_to: { __type: "Boolean" } },
  OrderWhereInput: {
    AND: { __type: "[OrderWhereInput!]" },
    NOT: { __type: "[OrderWhereInput!]" },
    OR: { __type: "[OrderWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "OrderWhereStageInput" },
    documentInStages_none: { __type: "OrderWhereStageInput" },
    documentInStages_some: { __type: "OrderWhereStageInput" },
    email: { __type: "String" },
    email_contains: { __type: "String" },
    email_ends_with: { __type: "String" },
    email_in: { __type: "[String]" },
    email_not: { __type: "String" },
    email_not_contains: { __type: "String" },
    email_not_ends_with: { __type: "String" },
    email_not_in: { __type: "[String]" },
    email_not_starts_with: { __type: "String" },
    email_starts_with: { __type: "String" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    orderItems_every: { __type: "OrderItemWhereInput" },
    orderItems_none: { __type: "OrderItemWhereInput" },
    orderItems_some: { __type: "OrderItemWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    stripeCheckoutId: { __type: "String" },
    stripeCheckoutId_contains: { __type: "String" },
    stripeCheckoutId_ends_with: { __type: "String" },
    stripeCheckoutId_in: { __type: "[String]" },
    stripeCheckoutId_not: { __type: "String" },
    stripeCheckoutId_not_contains: { __type: "String" },
    stripeCheckoutId_not_ends_with: { __type: "String" },
    stripeCheckoutId_not_in: { __type: "[String]" },
    stripeCheckoutId_not_starts_with: { __type: "String" },
    stripeCheckoutId_starts_with: { __type: "String" },
    total: { __type: "Int" },
    total_gt: { __type: "Int" },
    total_gte: { __type: "Int" },
    total_in: { __type: "[Int]" },
    total_lt: { __type: "Int" },
    total_lte: { __type: "Int" },
    total_not: { __type: "Int" },
    total_not_in: { __type: "[Int]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  OrderWhereStageInput: {
    AND: { __type: "[OrderWhereStageInput!]" },
    NOT: { __type: "[OrderWhereStageInput!]" },
    OR: { __type: "[OrderWhereStageInput!]" },
    compareWithParent: { __type: "OrderWhereComparatorInput" },
    stage: { __type: "Stage" },
  },
  OrderWhereUniqueInput: { id: { __type: "ID" } },
  PageInfo: {
    __typename: { __type: "String!" },
    endCursor: { __type: "String" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    pageSize: { __type: "Int" },
    startCursor: { __type: "String" },
  },
  Product: {
    __typename: { __type: "String!" },
    categories: {
      __type: "[Category!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        orderBy: "CategoryOrderByInput",
        skip: "Int",
        where: "CategoryWhereInput",
      },
    },
    collections: {
      __type: "[Collection!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        orderBy: "CollectionOrderByInput",
        skip: "Int",
        where: "CollectionWhereInput",
      },
    },
    createdAt: {
      __type: "DateTime!",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    createdBy: { __type: "User", __args: { locales: "[Locale!]" } },
    description: { __type: "String!" },
    documentInStages: {
      __type: "[Product!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    history: {
      __type: "[Version!]!",
      __args: { limit: "Int!", skip: "Int!", stageOverride: "Stage" },
    },
    id: { __type: "ID!" },
    images: {
      __type: "[Asset!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        orderBy: "AssetOrderByInput",
        skip: "Int",
        where: "AssetWhereInput",
      },
    },
    locale: { __type: "Locale!" },
    localizations: {
      __type: "[Product!]!",
      __args: { includeCurrent: "Boolean!", locales: "[Locale!]!" },
    },
    name: { __type: "String!" },
    orderItems: {
      __type: "[OrderItem!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        orderBy: "OrderItemOrderByInput",
        skip: "Int",
        where: "OrderItemWhereInput",
      },
    },
    price: { __type: "Int!" },
    publishedAt: {
      __type: "DateTime",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    publishedBy: { __type: "User", __args: { locales: "[Locale!]" } },
    reviews: {
      __type: "[Review!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        orderBy: "ReviewOrderByInput",
        skip: "Int",
        where: "ReviewWhereInput",
      },
    },
    scheduledIn: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        where: "ScheduledOperationWhereInput",
      },
    },
    slug: { __type: "String!" },
    stage: { __type: "Stage!" },
    updatedAt: {
      __type: "DateTime!",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    updatedBy: { __type: "User", __args: { locales: "[Locale!]" } },
    variants: {
      __type: "[ProductVariants!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
      },
    },
  },
  ProductColorVariant: {
    __typename: { __type: "String!" },
    color: { __type: "ProductColor!" },
    createdAt: {
      __type: "DateTime!",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    createdBy: { __type: "User", __args: { locales: "[Locale!]" } },
    documentInStages: {
      __type: "[ProductColorVariant!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    history: {
      __type: "[Version!]!",
      __args: { limit: "Int!", skip: "Int!", stageOverride: "Stage" },
    },
    id: { __type: "ID!" },
    locale: { __type: "Locale!" },
    localizations: {
      __type: "[ProductColorVariant!]!",
      __args: { includeCurrent: "Boolean!", locales: "[Locale!]!" },
    },
    name: { __type: "String!" },
    product: { __type: "Product", __args: { locales: "[Locale!]" } },
    publishedAt: {
      __type: "DateTime",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    publishedBy: { __type: "User", __args: { locales: "[Locale!]" } },
    scheduledIn: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        where: "ScheduledOperationWhereInput",
      },
    },
    stage: { __type: "Stage!" },
    updatedAt: {
      __type: "DateTime!",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    updatedBy: { __type: "User", __args: { locales: "[Locale!]" } },
  },
  ProductColorVariantConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "ProductColorVariantWhereUniqueInput!" },
  },
  ProductColorVariantConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[ProductColorVariantEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  ProductColorVariantCreateInput: {
    color: { __type: "ProductColor!" },
    createdAt: { __type: "DateTime" },
    localizations: { __type: "ProductColorVariantCreateLocalizationsInput" },
    name: { __type: "String!" },
    product: { __type: "ProductCreateOneInlineInput" },
    updatedAt: { __type: "DateTime" },
  },
  ProductColorVariantCreateLocalizationDataInput: {
    createdAt: { __type: "DateTime" },
    name: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
  },
  ProductColorVariantCreateLocalizationInput: {
    data: { __type: "ProductColorVariantCreateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  ProductColorVariantCreateLocalizationsInput: {
    create: { __type: "[ProductColorVariantCreateLocalizationInput!]" },
  },
  ProductColorVariantCreateManyInlineInput: {
    connect: { __type: "[ProductColorVariantWhereUniqueInput!]" },
    create: { __type: "[ProductColorVariantCreateInput!]" },
  },
  ProductColorVariantCreateOneInlineInput: {
    connect: { __type: "ProductColorVariantWhereUniqueInput" },
    create: { __type: "ProductColorVariantCreateInput" },
  },
  ProductColorVariantEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ProductColorVariant!" },
  },
  ProductColorVariantManyWhereInput: {
    AND: { __type: "[ProductColorVariantWhereInput!]" },
    NOT: { __type: "[ProductColorVariantWhereInput!]" },
    OR: { __type: "[ProductColorVariantWhereInput!]" },
    _search: { __type: "String" },
    color: { __type: "ProductColor" },
    color_in: { __type: "[ProductColor]" },
    color_not: { __type: "ProductColor" },
    color_not_in: { __type: "[ProductColor]" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "ProductColorVariantWhereStageInput" },
    documentInStages_none: { __type: "ProductColorVariantWhereStageInput" },
    documentInStages_some: { __type: "ProductColorVariantWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    product: { __type: "ProductWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ProductColorVariantUpdateInput: {
    color: { __type: "ProductColor" },
    localizations: { __type: "ProductColorVariantUpdateLocalizationsInput" },
    name: { __type: "String" },
    product: { __type: "ProductUpdateOneInlineInput" },
  },
  ProductColorVariantUpdateLocalizationDataInput: {
    name: { __type: "String" },
  },
  ProductColorVariantUpdateLocalizationInput: {
    data: { __type: "ProductColorVariantUpdateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  ProductColorVariantUpdateLocalizationsInput: {
    create: { __type: "[ProductColorVariantCreateLocalizationInput!]" },
    delete: { __type: "[Locale!]" },
    update: { __type: "[ProductColorVariantUpdateLocalizationInput!]" },
    upsert: { __type: "[ProductColorVariantUpsertLocalizationInput!]" },
  },
  ProductColorVariantUpdateManyInlineInput: {
    connect: { __type: "[ProductColorVariantConnectInput!]" },
    create: { __type: "[ProductColorVariantCreateInput!]" },
    delete: { __type: "[ProductColorVariantWhereUniqueInput!]" },
    disconnect: { __type: "[ProductColorVariantWhereUniqueInput!]" },
    set: { __type: "[ProductColorVariantWhereUniqueInput!]" },
    update: {
      __type: "[ProductColorVariantUpdateWithNestedWhereUniqueInput!]",
    },
    upsert: {
      __type: "[ProductColorVariantUpsertWithNestedWhereUniqueInput!]",
    },
  },
  ProductColorVariantUpdateManyInput: {
    color: { __type: "ProductColor" },
    localizations: {
      __type: "ProductColorVariantUpdateManyLocalizationsInput",
    },
    name: { __type: "String" },
  },
  ProductColorVariantUpdateManyLocalizationDataInput: {
    name: { __type: "String" },
  },
  ProductColorVariantUpdateManyLocalizationInput: {
    data: { __type: "ProductColorVariantUpdateManyLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  ProductColorVariantUpdateManyLocalizationsInput: {
    update: { __type: "[ProductColorVariantUpdateManyLocalizationInput!]" },
  },
  ProductColorVariantUpdateManyWithNestedWhereInput: {
    data: { __type: "ProductColorVariantUpdateManyInput!" },
    where: { __type: "ProductColorVariantWhereInput!" },
  },
  ProductColorVariantUpdateOneInlineInput: {
    connect: { __type: "ProductColorVariantWhereUniqueInput" },
    create: { __type: "ProductColorVariantCreateInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: { __type: "ProductColorVariantUpdateWithNestedWhereUniqueInput" },
    upsert: { __type: "ProductColorVariantUpsertWithNestedWhereUniqueInput" },
  },
  ProductColorVariantUpdateWithNestedWhereUniqueInput: {
    data: { __type: "ProductColorVariantUpdateInput!" },
    where: { __type: "ProductColorVariantWhereUniqueInput!" },
  },
  ProductColorVariantUpsertInput: {
    create: { __type: "ProductColorVariantCreateInput!" },
    update: { __type: "ProductColorVariantUpdateInput!" },
  },
  ProductColorVariantUpsertLocalizationInput: {
    create: { __type: "ProductColorVariantCreateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
    update: { __type: "ProductColorVariantUpdateLocalizationDataInput!" },
  },
  ProductColorVariantUpsertWithNestedWhereUniqueInput: {
    data: { __type: "ProductColorVariantUpsertInput!" },
    where: { __type: "ProductColorVariantWhereUniqueInput!" },
  },
  ProductColorVariantWhereComparatorInput: {
    outdated_to: { __type: "Boolean" },
  },
  ProductColorVariantWhereInput: {
    AND: { __type: "[ProductColorVariantWhereInput!]" },
    NOT: { __type: "[ProductColorVariantWhereInput!]" },
    OR: { __type: "[ProductColorVariantWhereInput!]" },
    _search: { __type: "String" },
    color: { __type: "ProductColor" },
    color_in: { __type: "[ProductColor]" },
    color_not: { __type: "ProductColor" },
    color_not_in: { __type: "[ProductColor]" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "ProductColorVariantWhereStageInput" },
    documentInStages_none: { __type: "ProductColorVariantWhereStageInput" },
    documentInStages_some: { __type: "ProductColorVariantWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    name: { __type: "String" },
    name_contains: { __type: "String" },
    name_ends_with: { __type: "String" },
    name_in: { __type: "[String]" },
    name_not: { __type: "String" },
    name_not_contains: { __type: "String" },
    name_not_ends_with: { __type: "String" },
    name_not_in: { __type: "[String]" },
    name_not_starts_with: { __type: "String" },
    name_starts_with: { __type: "String" },
    product: { __type: "ProductWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ProductColorVariantWhereStageInput: {
    AND: { __type: "[ProductColorVariantWhereStageInput!]" },
    NOT: { __type: "[ProductColorVariantWhereStageInput!]" },
    OR: { __type: "[ProductColorVariantWhereStageInput!]" },
    compareWithParent: { __type: "ProductColorVariantWhereComparatorInput" },
    stage: { __type: "Stage" },
  },
  ProductColorVariantWhereUniqueInput: { id: { __type: "ID" } },
  ProductConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "ProductWhereUniqueInput!" },
  },
  ProductConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[ProductEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  ProductCreateInput: {
    categories: { __type: "CategoryCreateManyInlineInput" },
    collections: { __type: "CollectionCreateManyInlineInput" },
    createdAt: { __type: "DateTime" },
    description: { __type: "String!" },
    images: { __type: "AssetCreateManyInlineInput" },
    localizations: { __type: "ProductCreateLocalizationsInput" },
    name: { __type: "String!" },
    orderItems: { __type: "OrderItemCreateManyInlineInput" },
    price: { __type: "Int!" },
    reviews: { __type: "ReviewCreateManyInlineInput" },
    slug: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
    variants: { __type: "ProductVariantsCreateManyInlineInput" },
  },
  ProductCreateLocalizationDataInput: {
    createdAt: { __type: "DateTime" },
    description: { __type: "String!" },
    name: { __type: "String!" },
    price: { __type: "Int!" },
    slug: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
  },
  ProductCreateLocalizationInput: {
    data: { __type: "ProductCreateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  ProductCreateLocalizationsInput: {
    create: { __type: "[ProductCreateLocalizationInput!]" },
  },
  ProductCreateManyInlineInput: {
    connect: { __type: "[ProductWhereUniqueInput!]" },
    create: { __type: "[ProductCreateInput!]" },
  },
  ProductCreateOneInlineInput: {
    connect: { __type: "ProductWhereUniqueInput" },
    create: { __type: "ProductCreateInput" },
  },
  ProductEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Product!" },
  },
  ProductManyWhereInput: {
    AND: { __type: "[ProductWhereInput!]" },
    NOT: { __type: "[ProductWhereInput!]" },
    OR: { __type: "[ProductWhereInput!]" },
    _search: { __type: "String" },
    categories_every: { __type: "CategoryWhereInput" },
    categories_none: { __type: "CategoryWhereInput" },
    categories_some: { __type: "CategoryWhereInput" },
    collections_every: { __type: "CollectionWhereInput" },
    collections_none: { __type: "CollectionWhereInput" },
    collections_some: { __type: "CollectionWhereInput" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "ProductWhereStageInput" },
    documentInStages_none: { __type: "ProductWhereStageInput" },
    documentInStages_some: { __type: "ProductWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    images_every: { __type: "AssetWhereInput" },
    images_none: { __type: "AssetWhereInput" },
    images_some: { __type: "AssetWhereInput" },
    orderItems_every: { __type: "OrderItemWhereInput" },
    orderItems_none: { __type: "OrderItemWhereInput" },
    orderItems_some: { __type: "OrderItemWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    reviews_every: { __type: "ReviewWhereInput" },
    reviews_none: { __type: "ReviewWhereInput" },
    reviews_some: { __type: "ReviewWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ProductSizeColorVariant: {
    __typename: { __type: "String!" },
    color: { __type: "ProductColor!" },
    createdAt: {
      __type: "DateTime!",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    createdBy: { __type: "User", __args: { locales: "[Locale!]" } },
    documentInStages: {
      __type: "[ProductSizeColorVariant!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    history: {
      __type: "[Version!]!",
      __args: { limit: "Int!", skip: "Int!", stageOverride: "Stage" },
    },
    id: { __type: "ID!" },
    locale: { __type: "Locale!" },
    localizations: {
      __type: "[ProductSizeColorVariant!]!",
      __args: { includeCurrent: "Boolean!", locales: "[Locale!]!" },
    },
    name: { __type: "String!" },
    product: { __type: "Product", __args: { locales: "[Locale!]" } },
    publishedAt: {
      __type: "DateTime",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    publishedBy: { __type: "User", __args: { locales: "[Locale!]" } },
    scheduledIn: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        where: "ScheduledOperationWhereInput",
      },
    },
    size: { __type: "ProductSize!" },
    stage: { __type: "Stage!" },
    updatedAt: {
      __type: "DateTime!",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    updatedBy: { __type: "User", __args: { locales: "[Locale!]" } },
  },
  ProductSizeColorVariantConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "ProductSizeColorVariantWhereUniqueInput!" },
  },
  ProductSizeColorVariantConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[ProductSizeColorVariantEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  ProductSizeColorVariantCreateInput: {
    color: { __type: "ProductColor!" },
    createdAt: { __type: "DateTime" },
    localizations: {
      __type: "ProductSizeColorVariantCreateLocalizationsInput",
    },
    name: { __type: "String!" },
    product: { __type: "ProductCreateOneInlineInput" },
    size: { __type: "ProductSize!" },
    updatedAt: { __type: "DateTime" },
  },
  ProductSizeColorVariantCreateLocalizationDataInput: {
    createdAt: { __type: "DateTime" },
    name: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
  },
  ProductSizeColorVariantCreateLocalizationInput: {
    data: { __type: "ProductSizeColorVariantCreateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  ProductSizeColorVariantCreateLocalizationsInput: {
    create: { __type: "[ProductSizeColorVariantCreateLocalizationInput!]" },
  },
  ProductSizeColorVariantCreateManyInlineInput: {
    connect: { __type: "[ProductSizeColorVariantWhereUniqueInput!]" },
    create: { __type: "[ProductSizeColorVariantCreateInput!]" },
  },
  ProductSizeColorVariantCreateOneInlineInput: {
    connect: { __type: "ProductSizeColorVariantWhereUniqueInput" },
    create: { __type: "ProductSizeColorVariantCreateInput" },
  },
  ProductSizeColorVariantEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ProductSizeColorVariant!" },
  },
  ProductSizeColorVariantManyWhereInput: {
    AND: { __type: "[ProductSizeColorVariantWhereInput!]" },
    NOT: { __type: "[ProductSizeColorVariantWhereInput!]" },
    OR: { __type: "[ProductSizeColorVariantWhereInput!]" },
    _search: { __type: "String" },
    color: { __type: "ProductColor" },
    color_in: { __type: "[ProductColor]" },
    color_not: { __type: "ProductColor" },
    color_not_in: { __type: "[ProductColor]" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: {
      __type: "ProductSizeColorVariantWhereStageInput",
    },
    documentInStages_none: { __type: "ProductSizeColorVariantWhereStageInput" },
    documentInStages_some: { __type: "ProductSizeColorVariantWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    product: { __type: "ProductWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    size: { __type: "ProductSize" },
    size_in: { __type: "[ProductSize]" },
    size_not: { __type: "ProductSize" },
    size_not_in: { __type: "[ProductSize]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ProductSizeColorVariantUpdateInput: {
    color: { __type: "ProductColor" },
    localizations: {
      __type: "ProductSizeColorVariantUpdateLocalizationsInput",
    },
    name: { __type: "String" },
    product: { __type: "ProductUpdateOneInlineInput" },
    size: { __type: "ProductSize" },
  },
  ProductSizeColorVariantUpdateLocalizationDataInput: {
    name: { __type: "String" },
  },
  ProductSizeColorVariantUpdateLocalizationInput: {
    data: { __type: "ProductSizeColorVariantUpdateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  ProductSizeColorVariantUpdateLocalizationsInput: {
    create: { __type: "[ProductSizeColorVariantCreateLocalizationInput!]" },
    delete: { __type: "[Locale!]" },
    update: { __type: "[ProductSizeColorVariantUpdateLocalizationInput!]" },
    upsert: { __type: "[ProductSizeColorVariantUpsertLocalizationInput!]" },
  },
  ProductSizeColorVariantUpdateManyInlineInput: {
    connect: { __type: "[ProductSizeColorVariantConnectInput!]" },
    create: { __type: "[ProductSizeColorVariantCreateInput!]" },
    delete: { __type: "[ProductSizeColorVariantWhereUniqueInput!]" },
    disconnect: { __type: "[ProductSizeColorVariantWhereUniqueInput!]" },
    set: { __type: "[ProductSizeColorVariantWhereUniqueInput!]" },
    update: {
      __type: "[ProductSizeColorVariantUpdateWithNestedWhereUniqueInput!]",
    },
    upsert: {
      __type: "[ProductSizeColorVariantUpsertWithNestedWhereUniqueInput!]",
    },
  },
  ProductSizeColorVariantUpdateManyInput: {
    color: { __type: "ProductColor" },
    localizations: {
      __type: "ProductSizeColorVariantUpdateManyLocalizationsInput",
    },
    name: { __type: "String" },
    size: { __type: "ProductSize" },
  },
  ProductSizeColorVariantUpdateManyLocalizationDataInput: {
    name: { __type: "String" },
  },
  ProductSizeColorVariantUpdateManyLocalizationInput: {
    data: { __type: "ProductSizeColorVariantUpdateManyLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  ProductSizeColorVariantUpdateManyLocalizationsInput: {
    update: { __type: "[ProductSizeColorVariantUpdateManyLocalizationInput!]" },
  },
  ProductSizeColorVariantUpdateManyWithNestedWhereInput: {
    data: { __type: "ProductSizeColorVariantUpdateManyInput!" },
    where: { __type: "ProductSizeColorVariantWhereInput!" },
  },
  ProductSizeColorVariantUpdateOneInlineInput: {
    connect: { __type: "ProductSizeColorVariantWhereUniqueInput" },
    create: { __type: "ProductSizeColorVariantCreateInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: {
      __type: "ProductSizeColorVariantUpdateWithNestedWhereUniqueInput",
    },
    upsert: {
      __type: "ProductSizeColorVariantUpsertWithNestedWhereUniqueInput",
    },
  },
  ProductSizeColorVariantUpdateWithNestedWhereUniqueInput: {
    data: { __type: "ProductSizeColorVariantUpdateInput!" },
    where: { __type: "ProductSizeColorVariantWhereUniqueInput!" },
  },
  ProductSizeColorVariantUpsertInput: {
    create: { __type: "ProductSizeColorVariantCreateInput!" },
    update: { __type: "ProductSizeColorVariantUpdateInput!" },
  },
  ProductSizeColorVariantUpsertLocalizationInput: {
    create: { __type: "ProductSizeColorVariantCreateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
    update: { __type: "ProductSizeColorVariantUpdateLocalizationDataInput!" },
  },
  ProductSizeColorVariantUpsertWithNestedWhereUniqueInput: {
    data: { __type: "ProductSizeColorVariantUpsertInput!" },
    where: { __type: "ProductSizeColorVariantWhereUniqueInput!" },
  },
  ProductSizeColorVariantWhereComparatorInput: {
    outdated_to: { __type: "Boolean" },
  },
  ProductSizeColorVariantWhereInput: {
    AND: { __type: "[ProductSizeColorVariantWhereInput!]" },
    NOT: { __type: "[ProductSizeColorVariantWhereInput!]" },
    OR: { __type: "[ProductSizeColorVariantWhereInput!]" },
    _search: { __type: "String" },
    color: { __type: "ProductColor" },
    color_in: { __type: "[ProductColor]" },
    color_not: { __type: "ProductColor" },
    color_not_in: { __type: "[ProductColor]" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: {
      __type: "ProductSizeColorVariantWhereStageInput",
    },
    documentInStages_none: { __type: "ProductSizeColorVariantWhereStageInput" },
    documentInStages_some: { __type: "ProductSizeColorVariantWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    name: { __type: "String" },
    name_contains: { __type: "String" },
    name_ends_with: { __type: "String" },
    name_in: { __type: "[String]" },
    name_not: { __type: "String" },
    name_not_contains: { __type: "String" },
    name_not_ends_with: { __type: "String" },
    name_not_in: { __type: "[String]" },
    name_not_starts_with: { __type: "String" },
    name_starts_with: { __type: "String" },
    product: { __type: "ProductWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    size: { __type: "ProductSize" },
    size_in: { __type: "[ProductSize]" },
    size_not: { __type: "ProductSize" },
    size_not_in: { __type: "[ProductSize]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ProductSizeColorVariantWhereStageInput: {
    AND: { __type: "[ProductSizeColorVariantWhereStageInput!]" },
    NOT: { __type: "[ProductSizeColorVariantWhereStageInput!]" },
    OR: { __type: "[ProductSizeColorVariantWhereStageInput!]" },
    compareWithParent: {
      __type: "ProductSizeColorVariantWhereComparatorInput",
    },
    stage: { __type: "Stage" },
  },
  ProductSizeColorVariantWhereUniqueInput: { id: { __type: "ID" } },
  ProductSizeVariant: {
    __typename: { __type: "String!" },
    createdAt: {
      __type: "DateTime!",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    createdBy: { __type: "User", __args: { locales: "[Locale!]" } },
    documentInStages: {
      __type: "[ProductSizeVariant!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    history: {
      __type: "[Version!]!",
      __args: { limit: "Int!", skip: "Int!", stageOverride: "Stage" },
    },
    id: { __type: "ID!" },
    locale: { __type: "Locale!" },
    localizations: {
      __type: "[ProductSizeVariant!]!",
      __args: { includeCurrent: "Boolean!", locales: "[Locale!]!" },
    },
    name: { __type: "String!" },
    product: { __type: "Product", __args: { locales: "[Locale!]" } },
    publishedAt: {
      __type: "DateTime",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    publishedBy: { __type: "User", __args: { locales: "[Locale!]" } },
    scheduledIn: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        where: "ScheduledOperationWhereInput",
      },
    },
    size: { __type: "ProductSize!" },
    stage: { __type: "Stage!" },
    updatedAt: {
      __type: "DateTime!",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    updatedBy: { __type: "User", __args: { locales: "[Locale!]" } },
  },
  ProductSizeVariantConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "ProductSizeVariantWhereUniqueInput!" },
  },
  ProductSizeVariantConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[ProductSizeVariantEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  ProductSizeVariantCreateInput: {
    createdAt: { __type: "DateTime" },
    localizations: { __type: "ProductSizeVariantCreateLocalizationsInput" },
    name: { __type: "String!" },
    product: { __type: "ProductCreateOneInlineInput" },
    size: { __type: "ProductSize!" },
    updatedAt: { __type: "DateTime" },
  },
  ProductSizeVariantCreateLocalizationDataInput: {
    createdAt: { __type: "DateTime" },
    name: { __type: "String!" },
    updatedAt: { __type: "DateTime" },
  },
  ProductSizeVariantCreateLocalizationInput: {
    data: { __type: "ProductSizeVariantCreateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  ProductSizeVariantCreateLocalizationsInput: {
    create: { __type: "[ProductSizeVariantCreateLocalizationInput!]" },
  },
  ProductSizeVariantCreateManyInlineInput: {
    connect: { __type: "[ProductSizeVariantWhereUniqueInput!]" },
    create: { __type: "[ProductSizeVariantCreateInput!]" },
  },
  ProductSizeVariantCreateOneInlineInput: {
    connect: { __type: "ProductSizeVariantWhereUniqueInput" },
    create: { __type: "ProductSizeVariantCreateInput" },
  },
  ProductSizeVariantEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ProductSizeVariant!" },
  },
  ProductSizeVariantManyWhereInput: {
    AND: { __type: "[ProductSizeVariantWhereInput!]" },
    NOT: { __type: "[ProductSizeVariantWhereInput!]" },
    OR: { __type: "[ProductSizeVariantWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "ProductSizeVariantWhereStageInput" },
    documentInStages_none: { __type: "ProductSizeVariantWhereStageInput" },
    documentInStages_some: { __type: "ProductSizeVariantWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    product: { __type: "ProductWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    size: { __type: "ProductSize" },
    size_in: { __type: "[ProductSize]" },
    size_not: { __type: "ProductSize" },
    size_not_in: { __type: "[ProductSize]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ProductSizeVariantUpdateInput: {
    localizations: { __type: "ProductSizeVariantUpdateLocalizationsInput" },
    name: { __type: "String" },
    product: { __type: "ProductUpdateOneInlineInput" },
    size: { __type: "ProductSize" },
  },
  ProductSizeVariantUpdateLocalizationDataInput: { name: { __type: "String" } },
  ProductSizeVariantUpdateLocalizationInput: {
    data: { __type: "ProductSizeVariantUpdateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  ProductSizeVariantUpdateLocalizationsInput: {
    create: { __type: "[ProductSizeVariantCreateLocalizationInput!]" },
    delete: { __type: "[Locale!]" },
    update: { __type: "[ProductSizeVariantUpdateLocalizationInput!]" },
    upsert: { __type: "[ProductSizeVariantUpsertLocalizationInput!]" },
  },
  ProductSizeVariantUpdateManyInlineInput: {
    connect: { __type: "[ProductSizeVariantConnectInput!]" },
    create: { __type: "[ProductSizeVariantCreateInput!]" },
    delete: { __type: "[ProductSizeVariantWhereUniqueInput!]" },
    disconnect: { __type: "[ProductSizeVariantWhereUniqueInput!]" },
    set: { __type: "[ProductSizeVariantWhereUniqueInput!]" },
    update: { __type: "[ProductSizeVariantUpdateWithNestedWhereUniqueInput!]" },
    upsert: { __type: "[ProductSizeVariantUpsertWithNestedWhereUniqueInput!]" },
  },
  ProductSizeVariantUpdateManyInput: {
    localizations: { __type: "ProductSizeVariantUpdateManyLocalizationsInput" },
    name: { __type: "String" },
    size: { __type: "ProductSize" },
  },
  ProductSizeVariantUpdateManyLocalizationDataInput: {
    name: { __type: "String" },
  },
  ProductSizeVariantUpdateManyLocalizationInput: {
    data: { __type: "ProductSizeVariantUpdateManyLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  ProductSizeVariantUpdateManyLocalizationsInput: {
    update: { __type: "[ProductSizeVariantUpdateManyLocalizationInput!]" },
  },
  ProductSizeVariantUpdateManyWithNestedWhereInput: {
    data: { __type: "ProductSizeVariantUpdateManyInput!" },
    where: { __type: "ProductSizeVariantWhereInput!" },
  },
  ProductSizeVariantUpdateOneInlineInput: {
    connect: { __type: "ProductSizeVariantWhereUniqueInput" },
    create: { __type: "ProductSizeVariantCreateInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: { __type: "ProductSizeVariantUpdateWithNestedWhereUniqueInput" },
    upsert: { __type: "ProductSizeVariantUpsertWithNestedWhereUniqueInput" },
  },
  ProductSizeVariantUpdateWithNestedWhereUniqueInput: {
    data: { __type: "ProductSizeVariantUpdateInput!" },
    where: { __type: "ProductSizeVariantWhereUniqueInput!" },
  },
  ProductSizeVariantUpsertInput: {
    create: { __type: "ProductSizeVariantCreateInput!" },
    update: { __type: "ProductSizeVariantUpdateInput!" },
  },
  ProductSizeVariantUpsertLocalizationInput: {
    create: { __type: "ProductSizeVariantCreateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
    update: { __type: "ProductSizeVariantUpdateLocalizationDataInput!" },
  },
  ProductSizeVariantUpsertWithNestedWhereUniqueInput: {
    data: { __type: "ProductSizeVariantUpsertInput!" },
    where: { __type: "ProductSizeVariantWhereUniqueInput!" },
  },
  ProductSizeVariantWhereComparatorInput: {
    outdated_to: { __type: "Boolean" },
  },
  ProductSizeVariantWhereInput: {
    AND: { __type: "[ProductSizeVariantWhereInput!]" },
    NOT: { __type: "[ProductSizeVariantWhereInput!]" },
    OR: { __type: "[ProductSizeVariantWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "ProductSizeVariantWhereStageInput" },
    documentInStages_none: { __type: "ProductSizeVariantWhereStageInput" },
    documentInStages_some: { __type: "ProductSizeVariantWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    name: { __type: "String" },
    name_contains: { __type: "String" },
    name_ends_with: { __type: "String" },
    name_in: { __type: "[String]" },
    name_not: { __type: "String" },
    name_not_contains: { __type: "String" },
    name_not_ends_with: { __type: "String" },
    name_not_in: { __type: "[String]" },
    name_not_starts_with: { __type: "String" },
    name_starts_with: { __type: "String" },
    product: { __type: "ProductWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    size: { __type: "ProductSize" },
    size_in: { __type: "[ProductSize]" },
    size_not: { __type: "ProductSize" },
    size_not_in: { __type: "[ProductSize]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ProductSizeVariantWhereStageInput: {
    AND: { __type: "[ProductSizeVariantWhereStageInput!]" },
    NOT: { __type: "[ProductSizeVariantWhereStageInput!]" },
    OR: { __type: "[ProductSizeVariantWhereStageInput!]" },
    compareWithParent: { __type: "ProductSizeVariantWhereComparatorInput" },
    stage: { __type: "Stage" },
  },
  ProductSizeVariantWhereUniqueInput: { id: { __type: "ID" } },
  ProductUpdateInput: {
    categories: { __type: "CategoryUpdateManyInlineInput" },
    collections: { __type: "CollectionUpdateManyInlineInput" },
    description: { __type: "String" },
    images: { __type: "AssetUpdateManyInlineInput" },
    localizations: { __type: "ProductUpdateLocalizationsInput" },
    name: { __type: "String" },
    orderItems: { __type: "OrderItemUpdateManyInlineInput" },
    price: { __type: "Int" },
    reviews: { __type: "ReviewUpdateManyInlineInput" },
    slug: { __type: "String" },
    variants: { __type: "ProductVariantsUpdateManyInlineInput" },
  },
  ProductUpdateLocalizationDataInput: {
    description: { __type: "String" },
    name: { __type: "String" },
    price: { __type: "Int" },
    slug: { __type: "String" },
  },
  ProductUpdateLocalizationInput: {
    data: { __type: "ProductUpdateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  ProductUpdateLocalizationsInput: {
    create: { __type: "[ProductCreateLocalizationInput!]" },
    delete: { __type: "[Locale!]" },
    update: { __type: "[ProductUpdateLocalizationInput!]" },
    upsert: { __type: "[ProductUpsertLocalizationInput!]" },
  },
  ProductUpdateManyInlineInput: {
    connect: { __type: "[ProductConnectInput!]" },
    create: { __type: "[ProductCreateInput!]" },
    delete: { __type: "[ProductWhereUniqueInput!]" },
    disconnect: { __type: "[ProductWhereUniqueInput!]" },
    set: { __type: "[ProductWhereUniqueInput!]" },
    update: { __type: "[ProductUpdateWithNestedWhereUniqueInput!]" },
    upsert: { __type: "[ProductUpsertWithNestedWhereUniqueInput!]" },
  },
  ProductUpdateManyInput: {
    description: { __type: "String" },
    localizations: { __type: "ProductUpdateManyLocalizationsInput" },
    price: { __type: "Int" },
  },
  ProductUpdateManyLocalizationDataInput: {
    description: { __type: "String" },
    price: { __type: "Int" },
  },
  ProductUpdateManyLocalizationInput: {
    data: { __type: "ProductUpdateManyLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  ProductUpdateManyLocalizationsInput: {
    update: { __type: "[ProductUpdateManyLocalizationInput!]" },
  },
  ProductUpdateManyWithNestedWhereInput: {
    data: { __type: "ProductUpdateManyInput!" },
    where: { __type: "ProductWhereInput!" },
  },
  ProductUpdateOneInlineInput: {
    connect: { __type: "ProductWhereUniqueInput" },
    create: { __type: "ProductCreateInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: { __type: "ProductUpdateWithNestedWhereUniqueInput" },
    upsert: { __type: "ProductUpsertWithNestedWhereUniqueInput" },
  },
  ProductUpdateWithNestedWhereUniqueInput: {
    data: { __type: "ProductUpdateInput!" },
    where: { __type: "ProductWhereUniqueInput!" },
  },
  ProductUpsertInput: {
    create: { __type: "ProductCreateInput!" },
    update: { __type: "ProductUpdateInput!" },
  },
  ProductUpsertLocalizationInput: {
    create: { __type: "ProductCreateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
    update: { __type: "ProductUpdateLocalizationDataInput!" },
  },
  ProductUpsertWithNestedWhereUniqueInput: {
    data: { __type: "ProductUpsertInput!" },
    where: { __type: "ProductWhereUniqueInput!" },
  },
  ProductVariants: {
    __typename: { __type: "String!" },
    $on: { __type: "$ProductVariants!" },
  },
  ProductVariantsConnectInput: {
    ProductColorVariant: { __type: "ProductColorVariantConnectInput" },
    ProductSizeColorVariant: { __type: "ProductSizeColorVariantConnectInput" },
    ProductSizeVariant: { __type: "ProductSizeVariantConnectInput" },
  },
  ProductVariantsCreateInput: {
    ProductColorVariant: { __type: "ProductColorVariantCreateInput" },
    ProductSizeColorVariant: { __type: "ProductSizeColorVariantCreateInput" },
    ProductSizeVariant: { __type: "ProductSizeVariantCreateInput" },
  },
  ProductVariantsCreateManyInlineInput: {
    connect: { __type: "[ProductVariantsWhereUniqueInput!]" },
    create: { __type: "[ProductVariantsCreateInput!]" },
  },
  ProductVariantsCreateOneInlineInput: {
    connect: { __type: "ProductVariantsWhereUniqueInput" },
    create: { __type: "ProductVariantsCreateInput" },
  },
  ProductVariantsUpdateInput: {
    ProductColorVariant: { __type: "ProductColorVariantUpdateInput" },
    ProductSizeColorVariant: { __type: "ProductSizeColorVariantUpdateInput" },
    ProductSizeVariant: { __type: "ProductSizeVariantUpdateInput" },
  },
  ProductVariantsUpdateManyInlineInput: {
    connect: { __type: "[ProductVariantsConnectInput!]" },
    create: { __type: "[ProductVariantsCreateInput!]" },
    delete: { __type: "[ProductVariantsWhereUniqueInput!]" },
    disconnect: { __type: "[ProductVariantsWhereUniqueInput!]" },
    set: { __type: "[ProductVariantsWhereUniqueInput!]" },
    update: { __type: "[ProductVariantsUpdateWithNestedWhereUniqueInput!]" },
    upsert: { __type: "[ProductVariantsUpsertWithNestedWhereUniqueInput!]" },
  },
  ProductVariantsUpdateManyWithNestedWhereInput: {
    ProductColorVariant: {
      __type: "ProductColorVariantUpdateManyWithNestedWhereInput",
    },
    ProductSizeColorVariant: {
      __type: "ProductSizeColorVariantUpdateManyWithNestedWhereInput",
    },
    ProductSizeVariant: {
      __type: "ProductSizeVariantUpdateManyWithNestedWhereInput",
    },
  },
  ProductVariantsUpdateOneInlineInput: {
    connect: { __type: "ProductVariantsWhereUniqueInput" },
    create: { __type: "ProductVariantsCreateInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: { __type: "ProductVariantsUpdateWithNestedWhereUniqueInput" },
    upsert: { __type: "ProductVariantsUpsertWithNestedWhereUniqueInput" },
  },
  ProductVariantsUpdateWithNestedWhereUniqueInput: {
    ProductColorVariant: {
      __type: "ProductColorVariantUpdateWithNestedWhereUniqueInput",
    },
    ProductSizeColorVariant: {
      __type: "ProductSizeColorVariantUpdateWithNestedWhereUniqueInput",
    },
    ProductSizeVariant: {
      __type: "ProductSizeVariantUpdateWithNestedWhereUniqueInput",
    },
  },
  ProductVariantsUpsertWithNestedWhereUniqueInput: {
    ProductColorVariant: {
      __type: "ProductColorVariantUpsertWithNestedWhereUniqueInput",
    },
    ProductSizeColorVariant: {
      __type: "ProductSizeColorVariantUpsertWithNestedWhereUniqueInput",
    },
    ProductSizeVariant: {
      __type: "ProductSizeVariantUpsertWithNestedWhereUniqueInput",
    },
  },
  ProductVariantsWhereInput: {
    ProductColorVariant: { __type: "ProductColorVariantWhereInput" },
    ProductSizeColorVariant: { __type: "ProductSizeColorVariantWhereInput" },
    ProductSizeVariant: { __type: "ProductSizeVariantWhereInput" },
  },
  ProductVariantsWhereUniqueInput: {
    ProductColorVariant: { __type: "ProductColorVariantWhereUniqueInput" },
    ProductSizeColorVariant: {
      __type: "ProductSizeColorVariantWhereUniqueInput",
    },
    ProductSizeVariant: { __type: "ProductSizeVariantWhereUniqueInput" },
  },
  ProductWhereComparatorInput: { outdated_to: { __type: "Boolean" } },
  ProductWhereInput: {
    AND: { __type: "[ProductWhereInput!]" },
    NOT: { __type: "[ProductWhereInput!]" },
    OR: { __type: "[ProductWhereInput!]" },
    _search: { __type: "String" },
    categories_every: { __type: "CategoryWhereInput" },
    categories_none: { __type: "CategoryWhereInput" },
    categories_some: { __type: "CategoryWhereInput" },
    collections_every: { __type: "CollectionWhereInput" },
    collections_none: { __type: "CollectionWhereInput" },
    collections_some: { __type: "CollectionWhereInput" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    description: { __type: "String" },
    description_contains: { __type: "String" },
    description_ends_with: { __type: "String" },
    description_in: { __type: "[String]" },
    description_not: { __type: "String" },
    description_not_contains: { __type: "String" },
    description_not_ends_with: { __type: "String" },
    description_not_in: { __type: "[String]" },
    description_not_starts_with: { __type: "String" },
    description_starts_with: { __type: "String" },
    documentInStages_every: { __type: "ProductWhereStageInput" },
    documentInStages_none: { __type: "ProductWhereStageInput" },
    documentInStages_some: { __type: "ProductWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    images_every: { __type: "AssetWhereInput" },
    images_none: { __type: "AssetWhereInput" },
    images_some: { __type: "AssetWhereInput" },
    name: { __type: "String" },
    name_contains: { __type: "String" },
    name_ends_with: { __type: "String" },
    name_in: { __type: "[String]" },
    name_not: { __type: "String" },
    name_not_contains: { __type: "String" },
    name_not_ends_with: { __type: "String" },
    name_not_in: { __type: "[String]" },
    name_not_starts_with: { __type: "String" },
    name_starts_with: { __type: "String" },
    orderItems_every: { __type: "OrderItemWhereInput" },
    orderItems_none: { __type: "OrderItemWhereInput" },
    orderItems_some: { __type: "OrderItemWhereInput" },
    price: { __type: "Int" },
    price_gt: { __type: "Int" },
    price_gte: { __type: "Int" },
    price_in: { __type: "[Int]" },
    price_lt: { __type: "Int" },
    price_lte: { __type: "Int" },
    price_not: { __type: "Int" },
    price_not_in: { __type: "[Int]" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    reviews_every: { __type: "ReviewWhereInput" },
    reviews_none: { __type: "ReviewWhereInput" },
    reviews_some: { __type: "ReviewWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    slug: { __type: "String" },
    slug_contains: { __type: "String" },
    slug_ends_with: { __type: "String" },
    slug_in: { __type: "[String]" },
    slug_not: { __type: "String" },
    slug_not_contains: { __type: "String" },
    slug_not_ends_with: { __type: "String" },
    slug_not_in: { __type: "[String]" },
    slug_not_starts_with: { __type: "String" },
    slug_starts_with: { __type: "String" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ProductWhereStageInput: {
    AND: { __type: "[ProductWhereStageInput!]" },
    NOT: { __type: "[ProductWhereStageInput!]" },
    OR: { __type: "[ProductWhereStageInput!]" },
    compareWithParent: { __type: "ProductWhereComparatorInput" },
    stage: { __type: "Stage" },
  },
  ProductWhereUniqueInput: { id: { __type: "ID" } },
  PublishLocaleInput: {
    locale: { __type: "Locale!" },
    stages: { __type: "[Stage!]!" },
  },
  RGBA: {
    __typename: { __type: "String!" },
    a: { __type: "RGBATransparency!" },
    b: { __type: "RGBAHue!" },
    g: { __type: "RGBAHue!" },
    r: { __type: "RGBAHue!" },
  },
  RGBAInput: {
    a: { __type: "RGBATransparency!" },
    b: { __type: "RGBAHue!" },
    g: { __type: "RGBAHue!" },
    r: { __type: "RGBAHue!" },
  },
  Review: {
    __typename: { __type: "String!" },
    content: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    createdBy: { __type: "User", __args: { locales: "[Locale!]" } },
    documentInStages: {
      __type: "[Review!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    email: { __type: "String!" },
    headline: { __type: "String!" },
    history: {
      __type: "[Version!]!",
      __args: { limit: "Int!", skip: "Int!", stageOverride: "Stage" },
    },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    product: { __type: "Product", __args: { locales: "[Locale!]" } },
    publishedAt: { __type: "DateTime" },
    publishedBy: { __type: "User", __args: { locales: "[Locale!]" } },
    rating: { __type: "Int" },
    scheduledIn: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        where: "ScheduledOperationWhereInput",
      },
    },
    stage: { __type: "Stage!" },
    updatedAt: { __type: "DateTime!" },
    updatedBy: { __type: "User", __args: { locales: "[Locale!]" } },
  },
  ReviewConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "ReviewWhereUniqueInput!" },
  },
  ReviewConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[ReviewEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  ReviewCreateInput: {
    content: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    email: { __type: "String!" },
    headline: { __type: "String!" },
    name: { __type: "String!" },
    product: { __type: "ProductCreateOneInlineInput" },
    rating: { __type: "Int" },
    updatedAt: { __type: "DateTime" },
  },
  ReviewCreateManyInlineInput: {
    connect: { __type: "[ReviewWhereUniqueInput!]" },
    create: { __type: "[ReviewCreateInput!]" },
  },
  ReviewCreateOneInlineInput: {
    connect: { __type: "ReviewWhereUniqueInput" },
    create: { __type: "ReviewCreateInput" },
  },
  ReviewEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Review!" },
  },
  ReviewManyWhereInput: {
    AND: { __type: "[ReviewWhereInput!]" },
    NOT: { __type: "[ReviewWhereInput!]" },
    OR: { __type: "[ReviewWhereInput!]" },
    _search: { __type: "String" },
    content: { __type: "String" },
    content_contains: { __type: "String" },
    content_ends_with: { __type: "String" },
    content_in: { __type: "[String]" },
    content_not: { __type: "String" },
    content_not_contains: { __type: "String" },
    content_not_ends_with: { __type: "String" },
    content_not_in: { __type: "[String]" },
    content_not_starts_with: { __type: "String" },
    content_starts_with: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "ReviewWhereStageInput" },
    documentInStages_none: { __type: "ReviewWhereStageInput" },
    documentInStages_some: { __type: "ReviewWhereStageInput" },
    email: { __type: "String" },
    email_contains: { __type: "String" },
    email_ends_with: { __type: "String" },
    email_in: { __type: "[String]" },
    email_not: { __type: "String" },
    email_not_contains: { __type: "String" },
    email_not_ends_with: { __type: "String" },
    email_not_in: { __type: "[String]" },
    email_not_starts_with: { __type: "String" },
    email_starts_with: { __type: "String" },
    headline: { __type: "String" },
    headline_contains: { __type: "String" },
    headline_ends_with: { __type: "String" },
    headline_in: { __type: "[String]" },
    headline_not: { __type: "String" },
    headline_not_contains: { __type: "String" },
    headline_not_ends_with: { __type: "String" },
    headline_not_in: { __type: "[String]" },
    headline_not_starts_with: { __type: "String" },
    headline_starts_with: { __type: "String" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    name: { __type: "String" },
    name_contains: { __type: "String" },
    name_ends_with: { __type: "String" },
    name_in: { __type: "[String]" },
    name_not: { __type: "String" },
    name_not_contains: { __type: "String" },
    name_not_ends_with: { __type: "String" },
    name_not_in: { __type: "[String]" },
    name_not_starts_with: { __type: "String" },
    name_starts_with: { __type: "String" },
    product: { __type: "ProductWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    rating: { __type: "Int" },
    rating_gt: { __type: "Int" },
    rating_gte: { __type: "Int" },
    rating_in: { __type: "[Int]" },
    rating_lt: { __type: "Int" },
    rating_lte: { __type: "Int" },
    rating_not: { __type: "Int" },
    rating_not_in: { __type: "[Int]" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ReviewUpdateInput: {
    content: { __type: "String" },
    email: { __type: "String" },
    headline: { __type: "String" },
    name: { __type: "String" },
    product: { __type: "ProductUpdateOneInlineInput" },
    rating: { __type: "Int" },
  },
  ReviewUpdateManyInlineInput: {
    connect: { __type: "[ReviewConnectInput!]" },
    create: { __type: "[ReviewCreateInput!]" },
    delete: { __type: "[ReviewWhereUniqueInput!]" },
    disconnect: { __type: "[ReviewWhereUniqueInput!]" },
    set: { __type: "[ReviewWhereUniqueInput!]" },
    update: { __type: "[ReviewUpdateWithNestedWhereUniqueInput!]" },
    upsert: { __type: "[ReviewUpsertWithNestedWhereUniqueInput!]" },
  },
  ReviewUpdateManyInput: {
    content: { __type: "String" },
    email: { __type: "String" },
    headline: { __type: "String" },
    name: { __type: "String" },
    rating: { __type: "Int" },
  },
  ReviewUpdateManyWithNestedWhereInput: {
    data: { __type: "ReviewUpdateManyInput!" },
    where: { __type: "ReviewWhereInput!" },
  },
  ReviewUpdateOneInlineInput: {
    connect: { __type: "ReviewWhereUniqueInput" },
    create: { __type: "ReviewCreateInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: { __type: "ReviewUpdateWithNestedWhereUniqueInput" },
    upsert: { __type: "ReviewUpsertWithNestedWhereUniqueInput" },
  },
  ReviewUpdateWithNestedWhereUniqueInput: {
    data: { __type: "ReviewUpdateInput!" },
    where: { __type: "ReviewWhereUniqueInput!" },
  },
  ReviewUpsertInput: {
    create: { __type: "ReviewCreateInput!" },
    update: { __type: "ReviewUpdateInput!" },
  },
  ReviewUpsertWithNestedWhereUniqueInput: {
    data: { __type: "ReviewUpsertInput!" },
    where: { __type: "ReviewWhereUniqueInput!" },
  },
  ReviewWhereComparatorInput: { outdated_to: { __type: "Boolean" } },
  ReviewWhereInput: {
    AND: { __type: "[ReviewWhereInput!]" },
    NOT: { __type: "[ReviewWhereInput!]" },
    OR: { __type: "[ReviewWhereInput!]" },
    _search: { __type: "String" },
    content: { __type: "String" },
    content_contains: { __type: "String" },
    content_ends_with: { __type: "String" },
    content_in: { __type: "[String]" },
    content_not: { __type: "String" },
    content_not_contains: { __type: "String" },
    content_not_ends_with: { __type: "String" },
    content_not_in: { __type: "[String]" },
    content_not_starts_with: { __type: "String" },
    content_starts_with: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "ReviewWhereStageInput" },
    documentInStages_none: { __type: "ReviewWhereStageInput" },
    documentInStages_some: { __type: "ReviewWhereStageInput" },
    email: { __type: "String" },
    email_contains: { __type: "String" },
    email_ends_with: { __type: "String" },
    email_in: { __type: "[String]" },
    email_not: { __type: "String" },
    email_not_contains: { __type: "String" },
    email_not_ends_with: { __type: "String" },
    email_not_in: { __type: "[String]" },
    email_not_starts_with: { __type: "String" },
    email_starts_with: { __type: "String" },
    headline: { __type: "String" },
    headline_contains: { __type: "String" },
    headline_ends_with: { __type: "String" },
    headline_in: { __type: "[String]" },
    headline_not: { __type: "String" },
    headline_not_contains: { __type: "String" },
    headline_not_ends_with: { __type: "String" },
    headline_not_in: { __type: "[String]" },
    headline_not_starts_with: { __type: "String" },
    headline_starts_with: { __type: "String" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    name: { __type: "String" },
    name_contains: { __type: "String" },
    name_ends_with: { __type: "String" },
    name_in: { __type: "[String]" },
    name_not: { __type: "String" },
    name_not_contains: { __type: "String" },
    name_not_ends_with: { __type: "String" },
    name_not_in: { __type: "[String]" },
    name_not_starts_with: { __type: "String" },
    name_starts_with: { __type: "String" },
    product: { __type: "ProductWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    rating: { __type: "Int" },
    rating_gt: { __type: "Int" },
    rating_gte: { __type: "Int" },
    rating_in: { __type: "[Int]" },
    rating_lt: { __type: "Int" },
    rating_lte: { __type: "Int" },
    rating_not: { __type: "Int" },
    rating_not_in: { __type: "[Int]" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ReviewWhereStageInput: {
    AND: { __type: "[ReviewWhereStageInput!]" },
    NOT: { __type: "[ReviewWhereStageInput!]" },
    OR: { __type: "[ReviewWhereStageInput!]" },
    compareWithParent: { __type: "ReviewWhereComparatorInput" },
    stage: { __type: "Stage" },
  },
  ReviewWhereUniqueInput: { id: { __type: "ID" } },
  RichText: {
    __typename: { __type: "String!" },
    html: { __type: "String!" },
    markdown: { __type: "String!" },
    raw: { __type: "RichTextAST!" },
    text: { __type: "String!" },
  },
  ScheduledOperation: {
    __typename: { __type: "String!" },
    affectedDocuments: {
      __type: "[ScheduledOperationAffectedDocument!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
      },
    },
    createdAt: { __type: "DateTime!" },
    createdBy: { __type: "User", __args: { locales: "[Locale!]" } },
    description: { __type: "String" },
    documentInStages: {
      __type: "[ScheduledOperation!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    errorMessage: { __type: "String" },
    id: { __type: "ID!" },
    publishedAt: { __type: "DateTime" },
    publishedBy: { __type: "User", __args: { locales: "[Locale!]" } },
    rawPayload: { __type: "Json!" },
    release: { __type: "ScheduledRelease", __args: { locales: "[Locale!]" } },
    stage: { __type: "Stage!" },
    status: { __type: "ScheduledOperationStatus!" },
    updatedAt: { __type: "DateTime!" },
    updatedBy: { __type: "User", __args: { locales: "[Locale!]" } },
  },
  ScheduledOperationAffectedDocument: {
    __typename: { __type: "String!" },
    $on: { __type: "$ScheduledOperationAffectedDocument!" },
  },
  ScheduledOperationConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "ScheduledOperationWhereUniqueInput!" },
  },
  ScheduledOperationConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[ScheduledOperationEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  ScheduledOperationCreateManyInlineInput: {
    connect: { __type: "[ScheduledOperationWhereUniqueInput!]" },
  },
  ScheduledOperationCreateOneInlineInput: {
    connect: { __type: "ScheduledOperationWhereUniqueInput" },
  },
  ScheduledOperationEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ScheduledOperation!" },
  },
  ScheduledOperationManyWhereInput: {
    AND: { __type: "[ScheduledOperationWhereInput!]" },
    NOT: { __type: "[ScheduledOperationWhereInput!]" },
    OR: { __type: "[ScheduledOperationWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    description: { __type: "String" },
    description_contains: { __type: "String" },
    description_ends_with: { __type: "String" },
    description_in: { __type: "[String]" },
    description_not: { __type: "String" },
    description_not_contains: { __type: "String" },
    description_not_ends_with: { __type: "String" },
    description_not_in: { __type: "[String]" },
    description_not_starts_with: { __type: "String" },
    description_starts_with: { __type: "String" },
    errorMessage: { __type: "String" },
    errorMessage_contains: { __type: "String" },
    errorMessage_ends_with: { __type: "String" },
    errorMessage_in: { __type: "[String]" },
    errorMessage_not: { __type: "String" },
    errorMessage_not_contains: { __type: "String" },
    errorMessage_not_ends_with: { __type: "String" },
    errorMessage_not_in: { __type: "[String]" },
    errorMessage_not_starts_with: { __type: "String" },
    errorMessage_starts_with: { __type: "String" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    release: { __type: "ScheduledReleaseWhereInput" },
    status: { __type: "ScheduledOperationStatus" },
    status_in: { __type: "[ScheduledOperationStatus]" },
    status_not: { __type: "ScheduledOperationStatus" },
    status_not_in: { __type: "[ScheduledOperationStatus]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ScheduledOperationUpdateManyInlineInput: {
    connect: { __type: "[ScheduledOperationConnectInput!]" },
    disconnect: { __type: "[ScheduledOperationWhereUniqueInput!]" },
    set: { __type: "[ScheduledOperationWhereUniqueInput!]" },
  },
  ScheduledOperationUpdateOneInlineInput: {
    connect: { __type: "ScheduledOperationWhereUniqueInput" },
    disconnect: { __type: "Boolean" },
  },
  ScheduledOperationWhereInput: {
    AND: { __type: "[ScheduledOperationWhereInput!]" },
    NOT: { __type: "[ScheduledOperationWhereInput!]" },
    OR: { __type: "[ScheduledOperationWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    description: { __type: "String" },
    description_contains: { __type: "String" },
    description_ends_with: { __type: "String" },
    description_in: { __type: "[String]" },
    description_not: { __type: "String" },
    description_not_contains: { __type: "String" },
    description_not_ends_with: { __type: "String" },
    description_not_in: { __type: "[String]" },
    description_not_starts_with: { __type: "String" },
    description_starts_with: { __type: "String" },
    errorMessage: { __type: "String" },
    errorMessage_contains: { __type: "String" },
    errorMessage_ends_with: { __type: "String" },
    errorMessage_in: { __type: "[String]" },
    errorMessage_not: { __type: "String" },
    errorMessage_not_contains: { __type: "String" },
    errorMessage_not_ends_with: { __type: "String" },
    errorMessage_not_in: { __type: "[String]" },
    errorMessage_not_starts_with: { __type: "String" },
    errorMessage_starts_with: { __type: "String" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    release: { __type: "ScheduledReleaseWhereInput" },
    status: { __type: "ScheduledOperationStatus" },
    status_in: { __type: "[ScheduledOperationStatus]" },
    status_not: { __type: "ScheduledOperationStatus" },
    status_not_in: { __type: "[ScheduledOperationStatus]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ScheduledOperationWhereUniqueInput: { id: { __type: "ID" } },
  ScheduledRelease: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    createdBy: { __type: "User", __args: { locales: "[Locale!]" } },
    description: { __type: "String" },
    documentInStages: {
      __type: "[ScheduledRelease!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    errorMessage: { __type: "String" },
    id: { __type: "ID!" },
    isActive: { __type: "Boolean!" },
    isImplicit: { __type: "Boolean!" },
    operations: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]",
        orderBy: "ScheduledOperationOrderByInput",
        skip: "Int",
        where: "ScheduledOperationWhereInput",
      },
    },
    publishedAt: { __type: "DateTime" },
    publishedBy: { __type: "User", __args: { locales: "[Locale!]" } },
    releaseAt: { __type: "DateTime" },
    stage: { __type: "Stage!" },
    status: { __type: "ScheduledReleaseStatus!" },
    title: { __type: "String" },
    updatedAt: { __type: "DateTime!" },
    updatedBy: { __type: "User", __args: { locales: "[Locale!]" } },
  },
  ScheduledReleaseConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "ScheduledReleaseWhereUniqueInput!" },
  },
  ScheduledReleaseConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[ScheduledReleaseEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  ScheduledReleaseCreateInput: {
    createdAt: { __type: "DateTime" },
    description: { __type: "String" },
    errorMessage: { __type: "String" },
    isActive: { __type: "Boolean" },
    releaseAt: { __type: "DateTime" },
    title: { __type: "String" },
    updatedAt: { __type: "DateTime" },
  },
  ScheduledReleaseCreateManyInlineInput: {
    connect: { __type: "[ScheduledReleaseWhereUniqueInput!]" },
    create: { __type: "[ScheduledReleaseCreateInput!]" },
  },
  ScheduledReleaseCreateOneInlineInput: {
    connect: { __type: "ScheduledReleaseWhereUniqueInput" },
    create: { __type: "ScheduledReleaseCreateInput" },
  },
  ScheduledReleaseEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ScheduledRelease!" },
  },
  ScheduledReleaseManyWhereInput: {
    AND: { __type: "[ScheduledReleaseWhereInput!]" },
    NOT: { __type: "[ScheduledReleaseWhereInput!]" },
    OR: { __type: "[ScheduledReleaseWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    description: { __type: "String" },
    description_contains: { __type: "String" },
    description_ends_with: { __type: "String" },
    description_in: { __type: "[String]" },
    description_not: { __type: "String" },
    description_not_contains: { __type: "String" },
    description_not_ends_with: { __type: "String" },
    description_not_in: { __type: "[String]" },
    description_not_starts_with: { __type: "String" },
    description_starts_with: { __type: "String" },
    errorMessage: { __type: "String" },
    errorMessage_contains: { __type: "String" },
    errorMessage_ends_with: { __type: "String" },
    errorMessage_in: { __type: "[String]" },
    errorMessage_not: { __type: "String" },
    errorMessage_not_contains: { __type: "String" },
    errorMessage_not_ends_with: { __type: "String" },
    errorMessage_not_in: { __type: "[String]" },
    errorMessage_not_starts_with: { __type: "String" },
    errorMessage_starts_with: { __type: "String" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    isActive: { __type: "Boolean" },
    isActive_not: { __type: "Boolean" },
    isImplicit: { __type: "Boolean" },
    isImplicit_not: { __type: "Boolean" },
    operations_every: { __type: "ScheduledOperationWhereInput" },
    operations_none: { __type: "ScheduledOperationWhereInput" },
    operations_some: { __type: "ScheduledOperationWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    releaseAt: { __type: "DateTime" },
    releaseAt_gt: { __type: "DateTime" },
    releaseAt_gte: { __type: "DateTime" },
    releaseAt_in: { __type: "[DateTime]" },
    releaseAt_lt: { __type: "DateTime" },
    releaseAt_lte: { __type: "DateTime" },
    releaseAt_not: { __type: "DateTime" },
    releaseAt_not_in: { __type: "[DateTime]" },
    status: { __type: "ScheduledReleaseStatus" },
    status_in: { __type: "[ScheduledReleaseStatus]" },
    status_not: { __type: "ScheduledReleaseStatus" },
    status_not_in: { __type: "[ScheduledReleaseStatus]" },
    title: { __type: "String" },
    title_contains: { __type: "String" },
    title_ends_with: { __type: "String" },
    title_in: { __type: "[String]" },
    title_not: { __type: "String" },
    title_not_contains: { __type: "String" },
    title_not_ends_with: { __type: "String" },
    title_not_in: { __type: "[String]" },
    title_not_starts_with: { __type: "String" },
    title_starts_with: { __type: "String" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ScheduledReleaseUpdateInput: {
    description: { __type: "String" },
    errorMessage: { __type: "String" },
    isActive: { __type: "Boolean" },
    releaseAt: { __type: "DateTime" },
    title: { __type: "String" },
  },
  ScheduledReleaseUpdateManyInlineInput: {
    connect: { __type: "[ScheduledReleaseConnectInput!]" },
    create: { __type: "[ScheduledReleaseCreateInput!]" },
    delete: { __type: "[ScheduledReleaseWhereUniqueInput!]" },
    disconnect: { __type: "[ScheduledReleaseWhereUniqueInput!]" },
    set: { __type: "[ScheduledReleaseWhereUniqueInput!]" },
    update: { __type: "[ScheduledReleaseUpdateWithNestedWhereUniqueInput!]" },
    upsert: { __type: "[ScheduledReleaseUpsertWithNestedWhereUniqueInput!]" },
  },
  ScheduledReleaseUpdateManyInput: {
    description: { __type: "String" },
    errorMessage: { __type: "String" },
    isActive: { __type: "Boolean" },
    releaseAt: { __type: "DateTime" },
    title: { __type: "String" },
  },
  ScheduledReleaseUpdateManyWithNestedWhereInput: {
    data: { __type: "ScheduledReleaseUpdateManyInput!" },
    where: { __type: "ScheduledReleaseWhereInput!" },
  },
  ScheduledReleaseUpdateOneInlineInput: {
    connect: { __type: "ScheduledReleaseWhereUniqueInput" },
    create: { __type: "ScheduledReleaseCreateInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: { __type: "ScheduledReleaseUpdateWithNestedWhereUniqueInput" },
    upsert: { __type: "ScheduledReleaseUpsertWithNestedWhereUniqueInput" },
  },
  ScheduledReleaseUpdateWithNestedWhereUniqueInput: {
    data: { __type: "ScheduledReleaseUpdateInput!" },
    where: { __type: "ScheduledReleaseWhereUniqueInput!" },
  },
  ScheduledReleaseUpsertInput: {
    create: { __type: "ScheduledReleaseCreateInput!" },
    update: { __type: "ScheduledReleaseUpdateInput!" },
  },
  ScheduledReleaseUpsertWithNestedWhereUniqueInput: {
    data: { __type: "ScheduledReleaseUpsertInput!" },
    where: { __type: "ScheduledReleaseWhereUniqueInput!" },
  },
  ScheduledReleaseWhereInput: {
    AND: { __type: "[ScheduledReleaseWhereInput!]" },
    NOT: { __type: "[ScheduledReleaseWhereInput!]" },
    OR: { __type: "[ScheduledReleaseWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    description: { __type: "String" },
    description_contains: { __type: "String" },
    description_ends_with: { __type: "String" },
    description_in: { __type: "[String]" },
    description_not: { __type: "String" },
    description_not_contains: { __type: "String" },
    description_not_ends_with: { __type: "String" },
    description_not_in: { __type: "[String]" },
    description_not_starts_with: { __type: "String" },
    description_starts_with: { __type: "String" },
    errorMessage: { __type: "String" },
    errorMessage_contains: { __type: "String" },
    errorMessage_ends_with: { __type: "String" },
    errorMessage_in: { __type: "[String]" },
    errorMessage_not: { __type: "String" },
    errorMessage_not_contains: { __type: "String" },
    errorMessage_not_ends_with: { __type: "String" },
    errorMessage_not_in: { __type: "[String]" },
    errorMessage_not_starts_with: { __type: "String" },
    errorMessage_starts_with: { __type: "String" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    isActive: { __type: "Boolean" },
    isActive_not: { __type: "Boolean" },
    isImplicit: { __type: "Boolean" },
    isImplicit_not: { __type: "Boolean" },
    operations_every: { __type: "ScheduledOperationWhereInput" },
    operations_none: { __type: "ScheduledOperationWhereInput" },
    operations_some: { __type: "ScheduledOperationWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    releaseAt: { __type: "DateTime" },
    releaseAt_gt: { __type: "DateTime" },
    releaseAt_gte: { __type: "DateTime" },
    releaseAt_in: { __type: "[DateTime]" },
    releaseAt_lt: { __type: "DateTime" },
    releaseAt_lte: { __type: "DateTime" },
    releaseAt_not: { __type: "DateTime" },
    releaseAt_not_in: { __type: "[DateTime]" },
    status: { __type: "ScheduledReleaseStatus" },
    status_in: { __type: "[ScheduledReleaseStatus]" },
    status_not: { __type: "ScheduledReleaseStatus" },
    status_not_in: { __type: "[ScheduledReleaseStatus]" },
    title: { __type: "String" },
    title_contains: { __type: "String" },
    title_ends_with: { __type: "String" },
    title_in: { __type: "[String]" },
    title_not: { __type: "String" },
    title_not_contains: { __type: "String" },
    title_not_ends_with: { __type: "String" },
    title_not_in: { __type: "[String]" },
    title_not_starts_with: { __type: "String" },
    title_starts_with: { __type: "String" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ScheduledReleaseWhereUniqueInput: { id: { __type: "ID" } },
  UnpublishLocaleInput: {
    locale: { __type: "Locale!" },
    stages: { __type: "[Stage!]!" },
  },
  User: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    documentInStages: {
      __type: "[User!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    id: { __type: "ID!" },
    isActive: { __type: "Boolean!" },
    kind: { __type: "UserKind!" },
    name: { __type: "String!" },
    picture: { __type: "String" },
    publishedAt: { __type: "DateTime" },
    stage: { __type: "Stage!" },
    updatedAt: { __type: "DateTime!" },
  },
  UserConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "UserWhereUniqueInput!" },
  },
  UserConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[UserEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  UserCreateManyInlineInput: { connect: { __type: "[UserWhereUniqueInput!]" } },
  UserCreateOneInlineInput: { connect: { __type: "UserWhereUniqueInput" } },
  UserEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "User!" },
  },
  UserManyWhereInput: {
    AND: { __type: "[UserWhereInput!]" },
    NOT: { __type: "[UserWhereInput!]" },
    OR: { __type: "[UserWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    documentInStages_every: { __type: "UserWhereStageInput" },
    documentInStages_none: { __type: "UserWhereStageInput" },
    documentInStages_some: { __type: "UserWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    isActive: { __type: "Boolean" },
    isActive_not: { __type: "Boolean" },
    kind: { __type: "UserKind" },
    kind_in: { __type: "[UserKind]" },
    kind_not: { __type: "UserKind" },
    kind_not_in: { __type: "[UserKind]" },
    name: { __type: "String" },
    name_contains: { __type: "String" },
    name_ends_with: { __type: "String" },
    name_in: { __type: "[String]" },
    name_not: { __type: "String" },
    name_not_contains: { __type: "String" },
    name_not_ends_with: { __type: "String" },
    name_not_in: { __type: "[String]" },
    name_not_starts_with: { __type: "String" },
    name_starts_with: { __type: "String" },
    picture: { __type: "String" },
    picture_contains: { __type: "String" },
    picture_ends_with: { __type: "String" },
    picture_in: { __type: "[String]" },
    picture_not: { __type: "String" },
    picture_not_contains: { __type: "String" },
    picture_not_ends_with: { __type: "String" },
    picture_not_in: { __type: "[String]" },
    picture_not_starts_with: { __type: "String" },
    picture_starts_with: { __type: "String" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
  },
  UserUpdateManyInlineInput: {
    connect: { __type: "[UserConnectInput!]" },
    disconnect: { __type: "[UserWhereUniqueInput!]" },
    set: { __type: "[UserWhereUniqueInput!]" },
  },
  UserUpdateOneInlineInput: {
    connect: { __type: "UserWhereUniqueInput" },
    disconnect: { __type: "Boolean" },
  },
  UserWhereComparatorInput: { outdated_to: { __type: "Boolean" } },
  UserWhereInput: {
    AND: { __type: "[UserWhereInput!]" },
    NOT: { __type: "[UserWhereInput!]" },
    OR: { __type: "[UserWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    documentInStages_every: { __type: "UserWhereStageInput" },
    documentInStages_none: { __type: "UserWhereStageInput" },
    documentInStages_some: { __type: "UserWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    isActive: { __type: "Boolean" },
    isActive_not: { __type: "Boolean" },
    kind: { __type: "UserKind" },
    kind_in: { __type: "[UserKind]" },
    kind_not: { __type: "UserKind" },
    kind_not_in: { __type: "[UserKind]" },
    name: { __type: "String" },
    name_contains: { __type: "String" },
    name_ends_with: { __type: "String" },
    name_in: { __type: "[String]" },
    name_not: { __type: "String" },
    name_not_contains: { __type: "String" },
    name_not_ends_with: { __type: "String" },
    name_not_in: { __type: "[String]" },
    name_not_starts_with: { __type: "String" },
    name_starts_with: { __type: "String" },
    picture: { __type: "String" },
    picture_contains: { __type: "String" },
    picture_ends_with: { __type: "String" },
    picture_in: { __type: "[String]" },
    picture_not: { __type: "String" },
    picture_not_contains: { __type: "String" },
    picture_not_ends_with: { __type: "String" },
    picture_not_in: { __type: "[String]" },
    picture_not_starts_with: { __type: "String" },
    picture_starts_with: { __type: "String" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
  },
  UserWhereStageInput: {
    AND: { __type: "[UserWhereStageInput!]" },
    NOT: { __type: "[UserWhereStageInput!]" },
    OR: { __type: "[UserWhereStageInput!]" },
    compareWithParent: { __type: "UserWhereComparatorInput" },
    stage: { __type: "Stage" },
  },
  UserWhereUniqueInput: { id: { __type: "ID" } },
  Version: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    id: { __type: "ID!" },
    revision: { __type: "Int!" },
    stage: { __type: "Stage!" },
  },
  VersionWhereInput: {
    id: { __type: "ID!" },
    revision: { __type: "Int!" },
    stage: { __type: "Stage!" },
  },
  mutation: {
    __typename: { __type: "String!" },
    createAsset: { __type: "Asset", __args: { data: "AssetCreateInput!" } },
    createCategory: {
      __type: "Category",
      __args: { data: "CategoryCreateInput!" },
    },
    createCollection: {
      __type: "Collection",
      __args: { data: "CollectionCreateInput!" },
    },
    createCurrency: {
      __type: "Currency",
      __args: { data: "CurrencyCreateInput!" },
    },
    createOrder: { __type: "Order", __args: { data: "OrderCreateInput!" } },
    createOrderItem: {
      __type: "OrderItem",
      __args: { data: "OrderItemCreateInput!" },
    },
    createProduct: {
      __type: "Product",
      __args: { data: "ProductCreateInput!" },
    },
    createProductColorVariant: {
      __type: "ProductColorVariant",
      __args: { data: "ProductColorVariantCreateInput!" },
    },
    createProductSizeColorVariant: {
      __type: "ProductSizeColorVariant",
      __args: { data: "ProductSizeColorVariantCreateInput!" },
    },
    createProductSizeVariant: {
      __type: "ProductSizeVariant",
      __args: { data: "ProductSizeVariantCreateInput!" },
    },
    createReview: { __type: "Review", __args: { data: "ReviewCreateInput!" } },
    createScheduledRelease: {
      __type: "ScheduledRelease",
      __args: { data: "ScheduledReleaseCreateInput!" },
    },
    deleteAsset: {
      __type: "Asset",
      __args: { where: "AssetWhereUniqueInput!" },
    },
    deleteCategory: {
      __type: "Category",
      __args: { where: "CategoryWhereUniqueInput!" },
    },
    deleteCollection: {
      __type: "Collection",
      __args: { where: "CollectionWhereUniqueInput!" },
    },
    deleteCurrency: {
      __type: "Currency",
      __args: { where: "CurrencyWhereUniqueInput!" },
    },
    deleteManyAssets: {
      __type: "BatchPayload!",
      __args: { where: "AssetManyWhereInput" },
    },
    deleteManyAssetsConnection: {
      __type: "AssetConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "AssetManyWhereInput",
      },
    },
    deleteManyCategories: {
      __type: "BatchPayload!",
      __args: { where: "CategoryManyWhereInput" },
    },
    deleteManyCategoriesConnection: {
      __type: "CategoryConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "CategoryManyWhereInput",
      },
    },
    deleteManyCollections: {
      __type: "BatchPayload!",
      __args: { where: "CollectionManyWhereInput" },
    },
    deleteManyCollectionsConnection: {
      __type: "CollectionConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "CollectionManyWhereInput",
      },
    },
    deleteManyCurrencies: {
      __type: "BatchPayload!",
      __args: { where: "CurrencyManyWhereInput" },
    },
    deleteManyCurrenciesConnection: {
      __type: "CurrencyConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "CurrencyManyWhereInput",
      },
    },
    deleteManyOrderItems: {
      __type: "BatchPayload!",
      __args: { where: "OrderItemManyWhereInput" },
    },
    deleteManyOrderItemsConnection: {
      __type: "OrderItemConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "OrderItemManyWhereInput",
      },
    },
    deleteManyOrders: {
      __type: "BatchPayload!",
      __args: { where: "OrderManyWhereInput" },
    },
    deleteManyOrdersConnection: {
      __type: "OrderConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "OrderManyWhereInput",
      },
    },
    deleteManyProductColorVariants: {
      __type: "BatchPayload!",
      __args: { where: "ProductColorVariantManyWhereInput" },
    },
    deleteManyProductColorVariantsConnection: {
      __type: "ProductColorVariantConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "ProductColorVariantManyWhereInput",
      },
    },
    deleteManyProductSizeColorVariants: {
      __type: "BatchPayload!",
      __args: { where: "ProductSizeColorVariantManyWhereInput" },
    },
    deleteManyProductSizeColorVariantsConnection: {
      __type: "ProductSizeColorVariantConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "ProductSizeColorVariantManyWhereInput",
      },
    },
    deleteManyProductSizeVariants: {
      __type: "BatchPayload!",
      __args: { where: "ProductSizeVariantManyWhereInput" },
    },
    deleteManyProductSizeVariantsConnection: {
      __type: "ProductSizeVariantConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "ProductSizeVariantManyWhereInput",
      },
    },
    deleteManyProducts: {
      __type: "BatchPayload!",
      __args: { where: "ProductManyWhereInput" },
    },
    deleteManyProductsConnection: {
      __type: "ProductConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "ProductManyWhereInput",
      },
    },
    deleteManyReviews: {
      __type: "BatchPayload!",
      __args: { where: "ReviewManyWhereInput" },
    },
    deleteManyReviewsConnection: {
      __type: "ReviewConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "ReviewManyWhereInput",
      },
    },
    deleteOrder: {
      __type: "Order",
      __args: { where: "OrderWhereUniqueInput!" },
    },
    deleteOrderItem: {
      __type: "OrderItem",
      __args: { where: "OrderItemWhereUniqueInput!" },
    },
    deleteProduct: {
      __type: "Product",
      __args: { where: "ProductWhereUniqueInput!" },
    },
    deleteProductColorVariant: {
      __type: "ProductColorVariant",
      __args: { where: "ProductColorVariantWhereUniqueInput!" },
    },
    deleteProductSizeColorVariant: {
      __type: "ProductSizeColorVariant",
      __args: { where: "ProductSizeColorVariantWhereUniqueInput!" },
    },
    deleteProductSizeVariant: {
      __type: "ProductSizeVariant",
      __args: { where: "ProductSizeVariantWhereUniqueInput!" },
    },
    deleteReview: {
      __type: "Review",
      __args: { where: "ReviewWhereUniqueInput!" },
    },
    deleteScheduledOperation: {
      __type: "ScheduledOperation",
      __args: { where: "ScheduledOperationWhereUniqueInput!" },
    },
    deleteScheduledRelease: {
      __type: "ScheduledRelease",
      __args: { where: "ScheduledReleaseWhereUniqueInput!" },
    },
    publishAsset: {
      __type: "Asset",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        to: "[Stage!]!",
        where: "AssetWhereUniqueInput!",
        withDefaultLocale: "Boolean",
      },
    },
    publishCategory: {
      __type: "Category",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        to: "[Stage!]!",
        where: "CategoryWhereUniqueInput!",
        withDefaultLocale: "Boolean",
      },
    },
    publishCollection: {
      __type: "Collection",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        to: "[Stage!]!",
        where: "CollectionWhereUniqueInput!",
        withDefaultLocale: "Boolean",
      },
    },
    publishCurrency: {
      __type: "Currency",
      __args: { to: "[Stage!]!", where: "CurrencyWhereUniqueInput!" },
    },
    publishManyAssets: {
      __type: "BatchPayload!",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        to: "[Stage!]!",
        where: "AssetManyWhereInput",
        withDefaultLocale: "Boolean",
      },
    },
    publishManyAssetsConnection: {
      __type: "AssetConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "Stage",
        last: "Int",
        locales: "[Locale!]",
        publishBase: "Boolean",
        skip: "Int",
        to: "[Stage!]!",
        where: "AssetManyWhereInput",
        withDefaultLocale: "Boolean",
      },
    },
    publishManyCategories: {
      __type: "BatchPayload!",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        to: "[Stage!]!",
        where: "CategoryManyWhereInput",
        withDefaultLocale: "Boolean",
      },
    },
    publishManyCategoriesConnection: {
      __type: "CategoryConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "Stage",
        last: "Int",
        locales: "[Locale!]",
        publishBase: "Boolean",
        skip: "Int",
        to: "[Stage!]!",
        where: "CategoryManyWhereInput",
        withDefaultLocale: "Boolean",
      },
    },
    publishManyCollections: {
      __type: "BatchPayload!",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        to: "[Stage!]!",
        where: "CollectionManyWhereInput",
        withDefaultLocale: "Boolean",
      },
    },
    publishManyCollectionsConnection: {
      __type: "CollectionConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "Stage",
        last: "Int",
        locales: "[Locale!]",
        publishBase: "Boolean",
        skip: "Int",
        to: "[Stage!]!",
        where: "CollectionManyWhereInput",
        withDefaultLocale: "Boolean",
      },
    },
    publishManyCurrencies: {
      __type: "BatchPayload!",
      __args: { to: "[Stage!]!", where: "CurrencyManyWhereInput" },
    },
    publishManyCurrenciesConnection: {
      __type: "CurrencyConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "Stage",
        last: "Int",
        skip: "Int",
        to: "[Stage!]!",
        where: "CurrencyManyWhereInput",
      },
    },
    publishManyOrderItems: {
      __type: "BatchPayload!",
      __args: { to: "[Stage!]!", where: "OrderItemManyWhereInput" },
    },
    publishManyOrderItemsConnection: {
      __type: "OrderItemConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "Stage",
        last: "Int",
        skip: "Int",
        to: "[Stage!]!",
        where: "OrderItemManyWhereInput",
      },
    },
    publishManyOrders: {
      __type: "BatchPayload!",
      __args: { to: "[Stage!]!", where: "OrderManyWhereInput" },
    },
    publishManyOrdersConnection: {
      __type: "OrderConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "Stage",
        last: "Int",
        skip: "Int",
        to: "[Stage!]!",
        where: "OrderManyWhereInput",
      },
    },
    publishManyProductColorVariants: {
      __type: "BatchPayload!",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        to: "[Stage!]!",
        where: "ProductColorVariantManyWhereInput",
        withDefaultLocale: "Boolean",
      },
    },
    publishManyProductColorVariantsConnection: {
      __type: "ProductColorVariantConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "Stage",
        last: "Int",
        locales: "[Locale!]",
        publishBase: "Boolean",
        skip: "Int",
        to: "[Stage!]!",
        where: "ProductColorVariantManyWhereInput",
        withDefaultLocale: "Boolean",
      },
    },
    publishManyProductSizeColorVariants: {
      __type: "BatchPayload!",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        to: "[Stage!]!",
        where: "ProductSizeColorVariantManyWhereInput",
        withDefaultLocale: "Boolean",
      },
    },
    publishManyProductSizeColorVariantsConnection: {
      __type: "ProductSizeColorVariantConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "Stage",
        last: "Int",
        locales: "[Locale!]",
        publishBase: "Boolean",
        skip: "Int",
        to: "[Stage!]!",
        where: "ProductSizeColorVariantManyWhereInput",
        withDefaultLocale: "Boolean",
      },
    },
    publishManyProductSizeVariants: {
      __type: "BatchPayload!",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        to: "[Stage!]!",
        where: "ProductSizeVariantManyWhereInput",
        withDefaultLocale: "Boolean",
      },
    },
    publishManyProductSizeVariantsConnection: {
      __type: "ProductSizeVariantConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "Stage",
        last: "Int",
        locales: "[Locale!]",
        publishBase: "Boolean",
        skip: "Int",
        to: "[Stage!]!",
        where: "ProductSizeVariantManyWhereInput",
        withDefaultLocale: "Boolean",
      },
    },
    publishManyProducts: {
      __type: "BatchPayload!",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        to: "[Stage!]!",
        where: "ProductManyWhereInput",
        withDefaultLocale: "Boolean",
      },
    },
    publishManyProductsConnection: {
      __type: "ProductConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "Stage",
        last: "Int",
        locales: "[Locale!]",
        publishBase: "Boolean",
        skip: "Int",
        to: "[Stage!]!",
        where: "ProductManyWhereInput",
        withDefaultLocale: "Boolean",
      },
    },
    publishManyReviews: {
      __type: "BatchPayload!",
      __args: { to: "[Stage!]!", where: "ReviewManyWhereInput" },
    },
    publishManyReviewsConnection: {
      __type: "ReviewConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "Stage",
        last: "Int",
        skip: "Int",
        to: "[Stage!]!",
        where: "ReviewManyWhereInput",
      },
    },
    publishOrder: {
      __type: "Order",
      __args: { to: "[Stage!]!", where: "OrderWhereUniqueInput!" },
    },
    publishOrderItem: {
      __type: "OrderItem",
      __args: { to: "[Stage!]!", where: "OrderItemWhereUniqueInput!" },
    },
    publishProduct: {
      __type: "Product",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        to: "[Stage!]!",
        where: "ProductWhereUniqueInput!",
        withDefaultLocale: "Boolean",
      },
    },
    publishProductColorVariant: {
      __type: "ProductColorVariant",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        to: "[Stage!]!",
        where: "ProductColorVariantWhereUniqueInput!",
        withDefaultLocale: "Boolean",
      },
    },
    publishProductSizeColorVariant: {
      __type: "ProductSizeColorVariant",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        to: "[Stage!]!",
        where: "ProductSizeColorVariantWhereUniqueInput!",
        withDefaultLocale: "Boolean",
      },
    },
    publishProductSizeVariant: {
      __type: "ProductSizeVariant",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        to: "[Stage!]!",
        where: "ProductSizeVariantWhereUniqueInput!",
        withDefaultLocale: "Boolean",
      },
    },
    publishReview: {
      __type: "Review",
      __args: { to: "[Stage!]!", where: "ReviewWhereUniqueInput!" },
    },
    schedulePublishAsset: {
      __type: "Asset",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        releaseAt: "DateTime",
        releaseId: "String",
        to: "[Stage!]!",
        where: "AssetWhereUniqueInput!",
        withDefaultLocale: "Boolean",
      },
    },
    schedulePublishCategory: {
      __type: "Category",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        releaseAt: "DateTime",
        releaseId: "String",
        to: "[Stage!]!",
        where: "CategoryWhereUniqueInput!",
        withDefaultLocale: "Boolean",
      },
    },
    schedulePublishCollection: {
      __type: "Collection",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        releaseAt: "DateTime",
        releaseId: "String",
        to: "[Stage!]!",
        where: "CollectionWhereUniqueInput!",
        withDefaultLocale: "Boolean",
      },
    },
    schedulePublishCurrency: {
      __type: "Currency",
      __args: {
        releaseAt: "DateTime",
        releaseId: "String",
        to: "[Stage!]!",
        where: "CurrencyWhereUniqueInput!",
      },
    },
    schedulePublishOrder: {
      __type: "Order",
      __args: {
        releaseAt: "DateTime",
        releaseId: "String",
        to: "[Stage!]!",
        where: "OrderWhereUniqueInput!",
      },
    },
    schedulePublishOrderItem: {
      __type: "OrderItem",
      __args: {
        releaseAt: "DateTime",
        releaseId: "String",
        to: "[Stage!]!",
        where: "OrderItemWhereUniqueInput!",
      },
    },
    schedulePublishProduct: {
      __type: "Product",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        releaseAt: "DateTime",
        releaseId: "String",
        to: "[Stage!]!",
        where: "ProductWhereUniqueInput!",
        withDefaultLocale: "Boolean",
      },
    },
    schedulePublishProductColorVariant: {
      __type: "ProductColorVariant",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        releaseAt: "DateTime",
        releaseId: "String",
        to: "[Stage!]!",
        where: "ProductColorVariantWhereUniqueInput!",
        withDefaultLocale: "Boolean",
      },
    },
    schedulePublishProductSizeColorVariant: {
      __type: "ProductSizeColorVariant",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        releaseAt: "DateTime",
        releaseId: "String",
        to: "[Stage!]!",
        where: "ProductSizeColorVariantWhereUniqueInput!",
        withDefaultLocale: "Boolean",
      },
    },
    schedulePublishProductSizeVariant: {
      __type: "ProductSizeVariant",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        releaseAt: "DateTime",
        releaseId: "String",
        to: "[Stage!]!",
        where: "ProductSizeVariantWhereUniqueInput!",
        withDefaultLocale: "Boolean",
      },
    },
    schedulePublishReview: {
      __type: "Review",
      __args: {
        releaseAt: "DateTime",
        releaseId: "String",
        to: "[Stage!]!",
        where: "ReviewWhereUniqueInput!",
      },
    },
    scheduleUnpublishAsset: {
      __type: "Asset",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        releaseAt: "DateTime",
        releaseId: "String",
        unpublishBase: "Boolean",
        where: "AssetWhereUniqueInput!",
      },
    },
    scheduleUnpublishCategory: {
      __type: "Category",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        releaseAt: "DateTime",
        releaseId: "String",
        unpublishBase: "Boolean",
        where: "CategoryWhereUniqueInput!",
      },
    },
    scheduleUnpublishCollection: {
      __type: "Collection",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        releaseAt: "DateTime",
        releaseId: "String",
        unpublishBase: "Boolean",
        where: "CollectionWhereUniqueInput!",
      },
    },
    scheduleUnpublishCurrency: {
      __type: "Currency",
      __args: {
        from: "[Stage!]!",
        releaseAt: "DateTime",
        releaseId: "String",
        where: "CurrencyWhereUniqueInput!",
      },
    },
    scheduleUnpublishOrder: {
      __type: "Order",
      __args: {
        from: "[Stage!]!",
        releaseAt: "DateTime",
        releaseId: "String",
        where: "OrderWhereUniqueInput!",
      },
    },
    scheduleUnpublishOrderItem: {
      __type: "OrderItem",
      __args: {
        from: "[Stage!]!",
        releaseAt: "DateTime",
        releaseId: "String",
        where: "OrderItemWhereUniqueInput!",
      },
    },
    scheduleUnpublishProduct: {
      __type: "Product",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        releaseAt: "DateTime",
        releaseId: "String",
        unpublishBase: "Boolean",
        where: "ProductWhereUniqueInput!",
      },
    },
    scheduleUnpublishProductColorVariant: {
      __type: "ProductColorVariant",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        releaseAt: "DateTime",
        releaseId: "String",
        unpublishBase: "Boolean",
        where: "ProductColorVariantWhereUniqueInput!",
      },
    },
    scheduleUnpublishProductSizeColorVariant: {
      __type: "ProductSizeColorVariant",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        releaseAt: "DateTime",
        releaseId: "String",
        unpublishBase: "Boolean",
        where: "ProductSizeColorVariantWhereUniqueInput!",
      },
    },
    scheduleUnpublishProductSizeVariant: {
      __type: "ProductSizeVariant",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        releaseAt: "DateTime",
        releaseId: "String",
        unpublishBase: "Boolean",
        where: "ProductSizeVariantWhereUniqueInput!",
      },
    },
    scheduleUnpublishReview: {
      __type: "Review",
      __args: {
        from: "[Stage!]!",
        releaseAt: "DateTime",
        releaseId: "String",
        where: "ReviewWhereUniqueInput!",
      },
    },
    unpublishAsset: {
      __type: "Asset",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        unpublishBase: "Boolean",
        where: "AssetWhereUniqueInput!",
      },
    },
    unpublishCategory: {
      __type: "Category",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        unpublishBase: "Boolean",
        where: "CategoryWhereUniqueInput!",
      },
    },
    unpublishCollection: {
      __type: "Collection",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        unpublishBase: "Boolean",
        where: "CollectionWhereUniqueInput!",
      },
    },
    unpublishCurrency: {
      __type: "Currency",
      __args: { from: "[Stage!]!", where: "CurrencyWhereUniqueInput!" },
    },
    unpublishManyAssets: {
      __type: "BatchPayload!",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        unpublishBase: "Boolean",
        where: "AssetManyWhereInput",
      },
    },
    unpublishManyAssetsConnection: {
      __type: "AssetConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "[Stage!]!",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        stage: "Stage",
        unpublishBase: "Boolean",
        where: "AssetManyWhereInput",
      },
    },
    unpublishManyCategories: {
      __type: "BatchPayload!",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        unpublishBase: "Boolean",
        where: "CategoryManyWhereInput",
      },
    },
    unpublishManyCategoriesConnection: {
      __type: "CategoryConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "[Stage!]!",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        stage: "Stage",
        unpublishBase: "Boolean",
        where: "CategoryManyWhereInput",
      },
    },
    unpublishManyCollections: {
      __type: "BatchPayload!",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        unpublishBase: "Boolean",
        where: "CollectionManyWhereInput",
      },
    },
    unpublishManyCollectionsConnection: {
      __type: "CollectionConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "[Stage!]!",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        stage: "Stage",
        unpublishBase: "Boolean",
        where: "CollectionManyWhereInput",
      },
    },
    unpublishManyCurrencies: {
      __type: "BatchPayload!",
      __args: { from: "[Stage!]!", where: "CurrencyManyWhereInput" },
    },
    unpublishManyCurrenciesConnection: {
      __type: "CurrencyConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "[Stage!]!",
        last: "Int",
        skip: "Int",
        stage: "Stage",
        where: "CurrencyManyWhereInput",
      },
    },
    unpublishManyOrderItems: {
      __type: "BatchPayload!",
      __args: { from: "[Stage!]!", where: "OrderItemManyWhereInput" },
    },
    unpublishManyOrderItemsConnection: {
      __type: "OrderItemConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "[Stage!]!",
        last: "Int",
        skip: "Int",
        stage: "Stage",
        where: "OrderItemManyWhereInput",
      },
    },
    unpublishManyOrders: {
      __type: "BatchPayload!",
      __args: { from: "[Stage!]!", where: "OrderManyWhereInput" },
    },
    unpublishManyOrdersConnection: {
      __type: "OrderConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "[Stage!]!",
        last: "Int",
        skip: "Int",
        stage: "Stage",
        where: "OrderManyWhereInput",
      },
    },
    unpublishManyProductColorVariants: {
      __type: "BatchPayload!",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        unpublishBase: "Boolean",
        where: "ProductColorVariantManyWhereInput",
      },
    },
    unpublishManyProductColorVariantsConnection: {
      __type: "ProductColorVariantConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "[Stage!]!",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        stage: "Stage",
        unpublishBase: "Boolean",
        where: "ProductColorVariantManyWhereInput",
      },
    },
    unpublishManyProductSizeColorVariants: {
      __type: "BatchPayload!",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        unpublishBase: "Boolean",
        where: "ProductSizeColorVariantManyWhereInput",
      },
    },
    unpublishManyProductSizeColorVariantsConnection: {
      __type: "ProductSizeColorVariantConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "[Stage!]!",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        stage: "Stage",
        unpublishBase: "Boolean",
        where: "ProductSizeColorVariantManyWhereInput",
      },
    },
    unpublishManyProductSizeVariants: {
      __type: "BatchPayload!",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        unpublishBase: "Boolean",
        where: "ProductSizeVariantManyWhereInput",
      },
    },
    unpublishManyProductSizeVariantsConnection: {
      __type: "ProductSizeVariantConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "[Stage!]!",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        stage: "Stage",
        unpublishBase: "Boolean",
        where: "ProductSizeVariantManyWhereInput",
      },
    },
    unpublishManyProducts: {
      __type: "BatchPayload!",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        unpublishBase: "Boolean",
        where: "ProductManyWhereInput",
      },
    },
    unpublishManyProductsConnection: {
      __type: "ProductConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "[Stage!]!",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        stage: "Stage",
        unpublishBase: "Boolean",
        where: "ProductManyWhereInput",
      },
    },
    unpublishManyReviews: {
      __type: "BatchPayload!",
      __args: { from: "[Stage!]!", where: "ReviewManyWhereInput" },
    },
    unpublishManyReviewsConnection: {
      __type: "ReviewConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "[Stage!]!",
        last: "Int",
        skip: "Int",
        stage: "Stage",
        where: "ReviewManyWhereInput",
      },
    },
    unpublishOrder: {
      __type: "Order",
      __args: { from: "[Stage!]!", where: "OrderWhereUniqueInput!" },
    },
    unpublishOrderItem: {
      __type: "OrderItem",
      __args: { from: "[Stage!]!", where: "OrderItemWhereUniqueInput!" },
    },
    unpublishProduct: {
      __type: "Product",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        unpublishBase: "Boolean",
        where: "ProductWhereUniqueInput!",
      },
    },
    unpublishProductColorVariant: {
      __type: "ProductColorVariant",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        unpublishBase: "Boolean",
        where: "ProductColorVariantWhereUniqueInput!",
      },
    },
    unpublishProductSizeColorVariant: {
      __type: "ProductSizeColorVariant",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        unpublishBase: "Boolean",
        where: "ProductSizeColorVariantWhereUniqueInput!",
      },
    },
    unpublishProductSizeVariant: {
      __type: "ProductSizeVariant",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        unpublishBase: "Boolean",
        where: "ProductSizeVariantWhereUniqueInput!",
      },
    },
    unpublishReview: {
      __type: "Review",
      __args: { from: "[Stage!]!", where: "ReviewWhereUniqueInput!" },
    },
    updateAsset: {
      __type: "Asset",
      __args: { data: "AssetUpdateInput!", where: "AssetWhereUniqueInput!" },
    },
    updateCategory: {
      __type: "Category",
      __args: {
        data: "CategoryUpdateInput!",
        where: "CategoryWhereUniqueInput!",
      },
    },
    updateCollection: {
      __type: "Collection",
      __args: {
        data: "CollectionUpdateInput!",
        where: "CollectionWhereUniqueInput!",
      },
    },
    updateCurrency: {
      __type: "Currency",
      __args: {
        data: "CurrencyUpdateInput!",
        where: "CurrencyWhereUniqueInput!",
      },
    },
    updateManyAssets: {
      __type: "BatchPayload!",
      __args: { data: "AssetUpdateManyInput!", where: "AssetManyWhereInput" },
    },
    updateManyAssetsConnection: {
      __type: "AssetConnection!",
      __args: {
        after: "ID",
        before: "ID",
        data: "AssetUpdateManyInput!",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "AssetManyWhereInput",
      },
    },
    updateManyCategories: {
      __type: "BatchPayload!",
      __args: {
        data: "CategoryUpdateManyInput!",
        where: "CategoryManyWhereInput",
      },
    },
    updateManyCategoriesConnection: {
      __type: "CategoryConnection!",
      __args: {
        after: "ID",
        before: "ID",
        data: "CategoryUpdateManyInput!",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "CategoryManyWhereInput",
      },
    },
    updateManyCollections: {
      __type: "BatchPayload!",
      __args: {
        data: "CollectionUpdateManyInput!",
        where: "CollectionManyWhereInput",
      },
    },
    updateManyCollectionsConnection: {
      __type: "CollectionConnection!",
      __args: {
        after: "ID",
        before: "ID",
        data: "CollectionUpdateManyInput!",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "CollectionManyWhereInput",
      },
    },
    updateManyCurrencies: {
      __type: "BatchPayload!",
      __args: {
        data: "CurrencyUpdateManyInput!",
        where: "CurrencyManyWhereInput",
      },
    },
    updateManyCurrenciesConnection: {
      __type: "CurrencyConnection!",
      __args: {
        after: "ID",
        before: "ID",
        data: "CurrencyUpdateManyInput!",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "CurrencyManyWhereInput",
      },
    },
    updateManyOrderItems: {
      __type: "BatchPayload!",
      __args: {
        data: "OrderItemUpdateManyInput!",
        where: "OrderItemManyWhereInput",
      },
    },
    updateManyOrderItemsConnection: {
      __type: "OrderItemConnection!",
      __args: {
        after: "ID",
        before: "ID",
        data: "OrderItemUpdateManyInput!",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "OrderItemManyWhereInput",
      },
    },
    updateManyOrders: {
      __type: "BatchPayload!",
      __args: { data: "OrderUpdateManyInput!", where: "OrderManyWhereInput" },
    },
    updateManyOrdersConnection: {
      __type: "OrderConnection!",
      __args: {
        after: "ID",
        before: "ID",
        data: "OrderUpdateManyInput!",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "OrderManyWhereInput",
      },
    },
    updateManyProductColorVariants: {
      __type: "BatchPayload!",
      __args: {
        data: "ProductColorVariantUpdateManyInput!",
        where: "ProductColorVariantManyWhereInput",
      },
    },
    updateManyProductColorVariantsConnection: {
      __type: "ProductColorVariantConnection!",
      __args: {
        after: "ID",
        before: "ID",
        data: "ProductColorVariantUpdateManyInput!",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "ProductColorVariantManyWhereInput",
      },
    },
    updateManyProductSizeColorVariants: {
      __type: "BatchPayload!",
      __args: {
        data: "ProductSizeColorVariantUpdateManyInput!",
        where: "ProductSizeColorVariantManyWhereInput",
      },
    },
    updateManyProductSizeColorVariantsConnection: {
      __type: "ProductSizeColorVariantConnection!",
      __args: {
        after: "ID",
        before: "ID",
        data: "ProductSizeColorVariantUpdateManyInput!",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "ProductSizeColorVariantManyWhereInput",
      },
    },
    updateManyProductSizeVariants: {
      __type: "BatchPayload!",
      __args: {
        data: "ProductSizeVariantUpdateManyInput!",
        where: "ProductSizeVariantManyWhereInput",
      },
    },
    updateManyProductSizeVariantsConnection: {
      __type: "ProductSizeVariantConnection!",
      __args: {
        after: "ID",
        before: "ID",
        data: "ProductSizeVariantUpdateManyInput!",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "ProductSizeVariantManyWhereInput",
      },
    },
    updateManyProducts: {
      __type: "BatchPayload!",
      __args: {
        data: "ProductUpdateManyInput!",
        where: "ProductManyWhereInput",
      },
    },
    updateManyProductsConnection: {
      __type: "ProductConnection!",
      __args: {
        after: "ID",
        before: "ID",
        data: "ProductUpdateManyInput!",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "ProductManyWhereInput",
      },
    },
    updateManyReviews: {
      __type: "BatchPayload!",
      __args: { data: "ReviewUpdateManyInput!", where: "ReviewManyWhereInput" },
    },
    updateManyReviewsConnection: {
      __type: "ReviewConnection!",
      __args: {
        after: "ID",
        before: "ID",
        data: "ReviewUpdateManyInput!",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "ReviewManyWhereInput",
      },
    },
    updateOrder: {
      __type: "Order",
      __args: { data: "OrderUpdateInput!", where: "OrderWhereUniqueInput!" },
    },
    updateOrderItem: {
      __type: "OrderItem",
      __args: {
        data: "OrderItemUpdateInput!",
        where: "OrderItemWhereUniqueInput!",
      },
    },
    updateProduct: {
      __type: "Product",
      __args: {
        data: "ProductUpdateInput!",
        where: "ProductWhereUniqueInput!",
      },
    },
    updateProductColorVariant: {
      __type: "ProductColorVariant",
      __args: {
        data: "ProductColorVariantUpdateInput!",
        where: "ProductColorVariantWhereUniqueInput!",
      },
    },
    updateProductSizeColorVariant: {
      __type: "ProductSizeColorVariant",
      __args: {
        data: "ProductSizeColorVariantUpdateInput!",
        where: "ProductSizeColorVariantWhereUniqueInput!",
      },
    },
    updateProductSizeVariant: {
      __type: "ProductSizeVariant",
      __args: {
        data: "ProductSizeVariantUpdateInput!",
        where: "ProductSizeVariantWhereUniqueInput!",
      },
    },
    updateReview: {
      __type: "Review",
      __args: { data: "ReviewUpdateInput!", where: "ReviewWhereUniqueInput!" },
    },
    updateScheduledRelease: {
      __type: "ScheduledRelease",
      __args: {
        data: "ScheduledReleaseUpdateInput!",
        where: "ScheduledReleaseWhereUniqueInput!",
      },
    },
    upsertAsset: {
      __type: "Asset",
      __args: { upsert: "AssetUpsertInput!", where: "AssetWhereUniqueInput!" },
    },
    upsertCategory: {
      __type: "Category",
      __args: {
        upsert: "CategoryUpsertInput!",
        where: "CategoryWhereUniqueInput!",
      },
    },
    upsertCollection: {
      __type: "Collection",
      __args: {
        upsert: "CollectionUpsertInput!",
        where: "CollectionWhereUniqueInput!",
      },
    },
    upsertCurrency: {
      __type: "Currency",
      __args: {
        upsert: "CurrencyUpsertInput!",
        where: "CurrencyWhereUniqueInput!",
      },
    },
    upsertOrder: {
      __type: "Order",
      __args: { upsert: "OrderUpsertInput!", where: "OrderWhereUniqueInput!" },
    },
    upsertOrderItem: {
      __type: "OrderItem",
      __args: {
        upsert: "OrderItemUpsertInput!",
        where: "OrderItemWhereUniqueInput!",
      },
    },
    upsertProduct: {
      __type: "Product",
      __args: {
        upsert: "ProductUpsertInput!",
        where: "ProductWhereUniqueInput!",
      },
    },
    upsertProductColorVariant: {
      __type: "ProductColorVariant",
      __args: {
        upsert: "ProductColorVariantUpsertInput!",
        where: "ProductColorVariantWhereUniqueInput!",
      },
    },
    upsertProductSizeColorVariant: {
      __type: "ProductSizeColorVariant",
      __args: {
        upsert: "ProductSizeColorVariantUpsertInput!",
        where: "ProductSizeColorVariantWhereUniqueInput!",
      },
    },
    upsertProductSizeVariant: {
      __type: "ProductSizeVariant",
      __args: {
        upsert: "ProductSizeVariantUpsertInput!",
        where: "ProductSizeVariantWhereUniqueInput!",
      },
    },
    upsertReview: {
      __type: "Review",
      __args: {
        upsert: "ReviewUpsertInput!",
        where: "ReviewWhereUniqueInput!",
      },
    },
  },
  query: {
    __typename: { __type: "String!" },
    asset: {
      __type: "Asset",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "AssetWhereUniqueInput!",
      },
    },
    assetVersion: {
      __type: "DocumentVersion",
      __args: { where: "VersionWhereInput!" },
    },
    assets: {
      __type: "[Asset!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "AssetOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "AssetWhereInput",
      },
    },
    assetsConnection: {
      __type: "AssetConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "AssetOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "AssetWhereInput",
      },
    },
    categories: {
      __type: "[Category!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "CategoryOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "CategoryWhereInput",
      },
    },
    categoriesConnection: {
      __type: "CategoryConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "CategoryOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "CategoryWhereInput",
      },
    },
    category: {
      __type: "Category",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "CategoryWhereUniqueInput!",
      },
    },
    categoryVersion: {
      __type: "DocumentVersion",
      __args: { where: "VersionWhereInput!" },
    },
    collection: {
      __type: "Collection",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "CollectionWhereUniqueInput!",
      },
    },
    collectionVersion: {
      __type: "DocumentVersion",
      __args: { where: "VersionWhereInput!" },
    },
    collections: {
      __type: "[Collection!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "CollectionOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "CollectionWhereInput",
      },
    },
    collectionsConnection: {
      __type: "CollectionConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "CollectionOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "CollectionWhereInput",
      },
    },
    currencies: {
      __type: "[Currency!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "CurrencyOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "CurrencyWhereInput",
      },
    },
    currenciesConnection: {
      __type: "CurrencyConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "CurrencyOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "CurrencyWhereInput",
      },
    },
    currency: {
      __type: "Currency",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "CurrencyWhereUniqueInput!",
      },
    },
    currencyVersion: {
      __type: "DocumentVersion",
      __args: { where: "VersionWhereInput!" },
    },
    node: {
      __type: "Node",
      __args: { id: "ID!", locales: "[Locale!]!", stage: "Stage!" },
    },
    order: {
      __type: "Order",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "OrderWhereUniqueInput!",
      },
    },
    orderItem: {
      __type: "OrderItem",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "OrderItemWhereUniqueInput!",
      },
    },
    orderItemVersion: {
      __type: "DocumentVersion",
      __args: { where: "VersionWhereInput!" },
    },
    orderItems: {
      __type: "[OrderItem!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "OrderItemOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "OrderItemWhereInput",
      },
    },
    orderItemsConnection: {
      __type: "OrderItemConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "OrderItemOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "OrderItemWhereInput",
      },
    },
    orderVersion: {
      __type: "DocumentVersion",
      __args: { where: "VersionWhereInput!" },
    },
    orders: {
      __type: "[Order!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "OrderOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "OrderWhereInput",
      },
    },
    ordersConnection: {
      __type: "OrderConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "OrderOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "OrderWhereInput",
      },
    },
    product: {
      __type: "Product",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "ProductWhereUniqueInput!",
      },
    },
    productColorVariant: {
      __type: "ProductColorVariant",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "ProductColorVariantWhereUniqueInput!",
      },
    },
    productColorVariantVersion: {
      __type: "DocumentVersion",
      __args: { where: "VersionWhereInput!" },
    },
    productColorVariants: {
      __type: "[ProductColorVariant!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ProductColorVariantOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ProductColorVariantWhereInput",
      },
    },
    productColorVariantsConnection: {
      __type: "ProductColorVariantConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ProductColorVariantOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ProductColorVariantWhereInput",
      },
    },
    productSizeColorVariant: {
      __type: "ProductSizeColorVariant",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "ProductSizeColorVariantWhereUniqueInput!",
      },
    },
    productSizeColorVariantVersion: {
      __type: "DocumentVersion",
      __args: { where: "VersionWhereInput!" },
    },
    productSizeColorVariants: {
      __type: "[ProductSizeColorVariant!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ProductSizeColorVariantOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ProductSizeColorVariantWhereInput",
      },
    },
    productSizeColorVariantsConnection: {
      __type: "ProductSizeColorVariantConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ProductSizeColorVariantOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ProductSizeColorVariantWhereInput",
      },
    },
    productSizeVariant: {
      __type: "ProductSizeVariant",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "ProductSizeVariantWhereUniqueInput!",
      },
    },
    productSizeVariantVersion: {
      __type: "DocumentVersion",
      __args: { where: "VersionWhereInput!" },
    },
    productSizeVariants: {
      __type: "[ProductSizeVariant!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ProductSizeVariantOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ProductSizeVariantWhereInput",
      },
    },
    productSizeVariantsConnection: {
      __type: "ProductSizeVariantConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ProductSizeVariantOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ProductSizeVariantWhereInput",
      },
    },
    productVersion: {
      __type: "DocumentVersion",
      __args: { where: "VersionWhereInput!" },
    },
    products: {
      __type: "[Product!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ProductOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ProductWhereInput",
      },
    },
    productsConnection: {
      __type: "ProductConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ProductOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ProductWhereInput",
      },
    },
    review: {
      __type: "Review",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "ReviewWhereUniqueInput!",
      },
    },
    reviewVersion: {
      __type: "DocumentVersion",
      __args: { where: "VersionWhereInput!" },
    },
    reviews: {
      __type: "[Review!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ReviewOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ReviewWhereInput",
      },
    },
    reviewsConnection: {
      __type: "ReviewConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ReviewOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ReviewWhereInput",
      },
    },
    scheduledOperation: {
      __type: "ScheduledOperation",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "ScheduledOperationWhereUniqueInput!",
      },
    },
    scheduledOperations: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ScheduledOperationOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ScheduledOperationWhereInput",
      },
    },
    scheduledOperationsConnection: {
      __type: "ScheduledOperationConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ScheduledOperationOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ScheduledOperationWhereInput",
      },
    },
    scheduledRelease: {
      __type: "ScheduledRelease",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "ScheduledReleaseWhereUniqueInput!",
      },
    },
    scheduledReleases: {
      __type: "[ScheduledRelease!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ScheduledReleaseOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ScheduledReleaseWhereInput",
      },
    },
    scheduledReleasesConnection: {
      __type: "ScheduledReleaseConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ScheduledReleaseOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ScheduledReleaseWhereInput",
      },
    },
    user: {
      __type: "User",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "UserWhereUniqueInput!",
      },
    },
    users: {
      __type: "[User!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "UserOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "UserWhereInput",
      },
    },
    usersConnection: {
      __type: "UserConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "UserOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "UserWhereInput",
      },
    },
  },
  subscription: {},
  [SchemaUnionsKey]: {
    Node: [
      "Asset",
      "Category",
      "Collection",
      "Currency",
      "Order",
      "OrderItem",
      "Product",
      "ProductColorVariant",
      "ProductSizeColorVariant",
      "ProductSizeVariant",
      "Review",
      "ScheduledOperation",
      "ScheduledRelease",
      "User",
    ],
    ProductVariants: [
      "ProductColorVariant",
      "ProductSizeColorVariant",
      "ProductSizeVariant",
    ],
    ScheduledOperationAffectedDocument: [
      "Asset",
      "Category",
      "Collection",
      "Currency",
      "Order",
      "OrderItem",
      "Product",
      "ProductColorVariant",
      "ProductSizeColorVariant",
      "ProductSizeVariant",
      "Review",
    ],
  },
} as const

export interface Aggregate {
  __typename?: "Aggregate"
  count: ScalarsEnums["Int"]
}

/**
 * Asset system model
 */
export interface Asset {
  __typename?: "Asset"
  /**
   * The time the document was created
   */
  createdAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => ScalarsEnums["DateTime"]
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>
  }) => Array<Asset>
  /**
   * The file name
   */
  fileName: ScalarsEnums["String"]
  /**
   * The file handle
   */
  handle: ScalarsEnums["String"]
  /**
   * The height of the file
   */
  height?: Maybe<ScalarsEnums["Float"]>
  /**
   * List of Asset versions
   */
  history: (args: {
    /**
     * @defaultValue `10`
     */
    limit?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>
    /**
     * This is optional and can be used to fetch the document version history for a specific stage instead of the current one
     */
    stageOverride?: Maybe<Stage>
  }) => Array<Version>
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"]
  /**
   * System Locale field
   */
  locale: ScalarsEnums["Locale"]
  /**
   * Get the other localizations for this document
   */
  localizations: (args: {
    /**
     * Decides if the current locale should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Potential locales that should be returned
     * @defaultValue `["en","de"]`
     */
    locales?: Maybe<Array<Locale>>
  }) => Array<Asset>
  /**
   * The mime type of the file
   */
  mimeType?: Maybe<ScalarsEnums["String"]>
  productImages: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `productImages` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ProductOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<ProductWhereInput>
  }) => Array<Product>
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => Maybe<ScalarsEnums["DateTime"]>
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  scheduledIn: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<ScheduledOperationWhereInput>
  }) => Array<ScheduledOperation>
  /**
   * The file size
   */
  size?: Maybe<ScalarsEnums["Float"]>
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"]
  /**
   * The time the document was updated
   */
  updatedAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => ScalarsEnums["DateTime"]
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  /**
   * Get the url for the asset with provided transformations applied.
   */
  url: (args?: {
    transformation?: Maybe<AssetTransformationInput>
  }) => ScalarsEnums["String"]
  /**
   * The file width
   */
  width?: Maybe<ScalarsEnums["Float"]>
}

/**
 * A connection to a list of items.
 */
export interface AssetConnection {
  __typename?: "AssetConnection"
  aggregate: Aggregate
  /**
   * A list of edges.
   */
  edges: Array<AssetEdge>
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo
}

/**
 * An edge in a connection.
 */
export interface AssetEdge {
  __typename?: "AssetEdge"
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"]
  /**
   * The item at the end of the edge.
   */
  node: Asset
}

export interface BatchPayload {
  __typename?: "BatchPayload"
  /**
   * The number of nodes that have been affected by the Batch operation.
   */
  count: ScalarsEnums["Long"]
}

/**
 * Category of products, e.g. Menswear.
 */
export interface Category {
  __typename?: "Category"
  /**
   * The time the document was created
   */
  createdAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => ScalarsEnums["DateTime"]
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  description?: Maybe<ScalarsEnums["String"]>
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>
  }) => Array<Category>
  /**
   * List of Category versions
   */
  history: (args: {
    /**
     * @defaultValue `10`
     */
    limit?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>
    /**
     * This is optional and can be used to fetch the document version history for a specific stage instead of the current one
     */
    stageOverride?: Maybe<Stage>
  }) => Array<Version>
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"]
  /**
   * System Locale field
   */
  locale: ScalarsEnums["Locale"]
  /**
   * Get the other localizations for this document
   */
  localizations: (args: {
    /**
     * Decides if the current locale should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Potential locales that should be returned
     * @defaultValue `["en","de"]`
     */
    locales?: Maybe<Array<Locale>>
  }) => Array<Category>
  name: ScalarsEnums["String"]
  products: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `products` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ProductOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<ProductWhereInput>
  }) => Array<Product>
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => Maybe<ScalarsEnums["DateTime"]>
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  scheduledIn: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<ScheduledOperationWhereInput>
  }) => Array<ScheduledOperation>
  slug: ScalarsEnums["String"]
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"]
  /**
   * The time the document was updated
   */
  updatedAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => ScalarsEnums["DateTime"]
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
}

/**
 * A connection to a list of items.
 */
export interface CategoryConnection {
  __typename?: "CategoryConnection"
  aggregate: Aggregate
  /**
   * A list of edges.
   */
  edges: Array<CategoryEdge>
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo
}

/**
 * An edge in a connection.
 */
export interface CategoryEdge {
  __typename?: "CategoryEdge"
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"]
  /**
   * The item at the end of the edge.
   */
  node: Category
}

/**
 * Collection of products, e.g. Winter Sale.
 */
export interface Collection {
  __typename?: "Collection"
  /**
   * The time the document was created
   */
  createdAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => ScalarsEnums["DateTime"]
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  description?: Maybe<ScalarsEnums["String"]>
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>
  }) => Array<Collection>
  /**
   * List of Collection versions
   */
  history: (args: {
    /**
     * @defaultValue `10`
     */
    limit?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>
    /**
     * This is optional and can be used to fetch the document version history for a specific stage instead of the current one
     */
    stageOverride?: Maybe<Stage>
  }) => Array<Version>
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"]
  /**
   * System Locale field
   */
  locale: ScalarsEnums["Locale"]
  /**
   * Get the other localizations for this document
   */
  localizations: (args: {
    /**
     * Decides if the current locale should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Potential locales that should be returned
     * @defaultValue `["en","de"]`
     */
    locales?: Maybe<Array<Locale>>
  }) => Array<Collection>
  name: ScalarsEnums["String"]
  products: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `products` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ProductOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<ProductWhereInput>
  }) => Array<Product>
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => Maybe<ScalarsEnums["DateTime"]>
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  scheduledIn: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<ScheduledOperationWhereInput>
  }) => Array<ScheduledOperation>
  slug: ScalarsEnums["String"]
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"]
  /**
   * The time the document was updated
   */
  updatedAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => ScalarsEnums["DateTime"]
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
}

/**
 * A connection to a list of items.
 */
export interface CollectionConnection {
  __typename?: "CollectionConnection"
  aggregate: Aggregate
  /**
   * A list of edges.
   */
  edges: Array<CollectionEdge>
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo
}

/**
 * An edge in a connection.
 */
export interface CollectionEdge {
  __typename?: "CollectionEdge"
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"]
  /**
   * The item at the end of the edge.
   */
  node: Collection
}

/**
 * Representing a color value comprising of HEX, RGBA and css color values
 */
export interface Color {
  __typename?: "Color"
  css: ScalarsEnums["String"]
  hex: ScalarsEnums["Hex"]
  rgba: RGBA
}

export interface Currency {
  __typename?: "Currency"
  code: ScalarsEnums["String"]
  /**
   * The time the document was created
   */
  createdAt: ScalarsEnums["DateTime"]
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  default: ScalarsEnums["Boolean"]
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>
  }) => Array<Currency>
  /**
   * List of Currency versions
   */
  history: (args: {
    /**
     * @defaultValue `10`
     */
    limit?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>
    /**
     * This is optional and can be used to fetch the document version history for a specific stage instead of the current one
     */
    stageOverride?: Maybe<Stage>
  }) => Array<Version>
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"]
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  rate: ScalarsEnums["Float"]
  scheduledIn: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<ScheduledOperationWhereInput>
  }) => Array<ScheduledOperation>
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"]
  /**
   * The time the document was updated
   */
  updatedAt: ScalarsEnums["DateTime"]
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
}

/**
 * A connection to a list of items.
 */
export interface CurrencyConnection {
  __typename?: "CurrencyConnection"
  aggregate: Aggregate
  /**
   * A list of edges.
   */
  edges: Array<CurrencyEdge>
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo
}

/**
 * An edge in a connection.
 */
export interface CurrencyEdge {
  __typename?: "CurrencyEdge"
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"]
  /**
   * The item at the end of the edge.
   */
  node: Currency
}

export interface DocumentVersion {
  __typename?: "DocumentVersion"
  createdAt: ScalarsEnums["DateTime"]
  data?: Maybe<ScalarsEnums["Json"]>
  id: ScalarsEnums["ID"]
  revision: ScalarsEnums["Int"]
  stage: ScalarsEnums["Stage"]
}

/**
 * Representing a geolocation point with latitude and longitude
 */
export interface Location {
  __typename?: "Location"
  distance: (args: { from: LocationInput }) => ScalarsEnums["Float"]
  latitude: ScalarsEnums["Float"]
  longitude: ScalarsEnums["Float"]
}

/**
 * An object with an ID
 */
export interface Node {
  __typename?:
    | "Asset"
    | "Category"
    | "Collection"
    | "Currency"
    | "Order"
    | "OrderItem"
    | "Product"
    | "ProductColorVariant"
    | "ProductSizeColorVariant"
    | "ProductSizeVariant"
    | "Review"
    | "ScheduledOperation"
    | "ScheduledRelease"
    | "User"
  /**
   * The id of the object.
   */
  id: ScalarsEnums["ID"]
  /**
   * The Stage of an object
   */
  stage: ScalarsEnums["Stage"]
  $on: $Node
}

export interface Order {
  __typename?: "Order"
  /**
   * The time the document was created
   */
  createdAt: ScalarsEnums["DateTime"]
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>
  }) => Array<Order>
  email: ScalarsEnums["String"]
  /**
   * List of Order versions
   */
  history: (args: {
    /**
     * @defaultValue `10`
     */
    limit?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>
    /**
     * This is optional and can be used to fetch the document version history for a specific stage instead of the current one
     */
    stageOverride?: Maybe<Stage>
  }) => Array<Version>
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"]
  orderItems: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `orderItems` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<OrderItemOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<OrderItemWhereInput>
  }) => Array<OrderItem>
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  scheduledIn: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<ScheduledOperationWhereInput>
  }) => Array<ScheduledOperation>
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"]
  stripeCheckoutId: ScalarsEnums["String"]
  total: ScalarsEnums["Int"]
  /**
   * The time the document was updated
   */
  updatedAt: ScalarsEnums["DateTime"]
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
}

/**
 * A connection to a list of items.
 */
export interface OrderConnection {
  __typename?: "OrderConnection"
  aggregate: Aggregate
  /**
   * A list of edges.
   */
  edges: Array<OrderEdge>
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo
}

/**
 * An edge in a connection.
 */
export interface OrderEdge {
  __typename?: "OrderEdge"
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"]
  /**
   * The item at the end of the edge.
   */
  node: Order
}

export interface OrderItem {
  __typename?: "OrderItem"
  /**
   * The time the document was created
   */
  createdAt: ScalarsEnums["DateTime"]
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>
  }) => Array<OrderItem>
  /**
   * List of OrderItem versions
   */
  history: (args: {
    /**
     * @defaultValue `10`
     */
    limit?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>
    /**
     * This is optional and can be used to fetch the document version history for a specific stage instead of the current one
     */
    stageOverride?: Maybe<Stage>
  }) => Array<Version>
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"]
  order: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `order` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<Order>
  product: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `product` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<Product>
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  quantity: ScalarsEnums["Int"]
  scheduledIn: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<ScheduledOperationWhereInput>
  }) => Array<ScheduledOperation>
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"]
  total: ScalarsEnums["Int"]
  /**
   * The time the document was updated
   */
  updatedAt: ScalarsEnums["DateTime"]
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
}

/**
 * A connection to a list of items.
 */
export interface OrderItemConnection {
  __typename?: "OrderItemConnection"
  aggregate: Aggregate
  /**
   * A list of edges.
   */
  edges: Array<OrderItemEdge>
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo
}

/**
 * An edge in a connection.
 */
export interface OrderItemEdge {
  __typename?: "OrderItemEdge"
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"]
  /**
   * The item at the end of the edge.
   */
  node: OrderItem
}

/**
 * Information about pagination in a connection.
 */
export interface PageInfo {
  __typename?: "PageInfo"
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor?: Maybe<ScalarsEnums["String"]>
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: ScalarsEnums["Boolean"]
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: ScalarsEnums["Boolean"]
  /**
   * Number of items in the current page.
   */
  pageSize?: Maybe<ScalarsEnums["Int"]>
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor?: Maybe<ScalarsEnums["String"]>
}

export interface Product {
  __typename?: "Product"
  categories: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `categories` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<CategoryOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<CategoryWhereInput>
  }) => Array<Category>
  collections: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `collections` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<CollectionOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<CollectionWhereInput>
  }) => Array<Collection>
  /**
   * The time the document was created
   */
  createdAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => ScalarsEnums["DateTime"]
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  description: ScalarsEnums["String"]
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>
  }) => Array<Product>
  /**
   * List of Product versions
   */
  history: (args: {
    /**
     * @defaultValue `10`
     */
    limit?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>
    /**
     * This is optional and can be used to fetch the document version history for a specific stage instead of the current one
     */
    stageOverride?: Maybe<Stage>
  }) => Array<Version>
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"]
  images: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `images` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<AssetOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<AssetWhereInput>
  }) => Array<Asset>
  /**
   * System Locale field
   */
  locale: ScalarsEnums["Locale"]
  /**
   * Get the other localizations for this document
   */
  localizations: (args: {
    /**
     * Decides if the current locale should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Potential locales that should be returned
     * @defaultValue `["en","de"]`
     */
    locales?: Maybe<Array<Locale>>
  }) => Array<Product>
  name: ScalarsEnums["String"]
  orderItems: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `orderItems` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<OrderItemOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<OrderItemWhereInput>
  }) => Array<OrderItem>
  price: ScalarsEnums["Int"]
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => Maybe<ScalarsEnums["DateTime"]>
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  reviews: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `reviews` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ReviewOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<ReviewWhereInput>
  }) => Array<Review>
  scheduledIn: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<ScheduledOperationWhereInput>
  }) => Array<ScheduledOperation>
  slug: ScalarsEnums["String"]
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"]
  /**
   * The time the document was updated
   */
  updatedAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => ScalarsEnums["DateTime"]
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  variants: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `variants` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
  }) => Array<ProductVariants>
}

export interface ProductColorVariant {
  __typename?: "ProductColorVariant"
  color: ScalarsEnums["ProductColor"]
  /**
   * The time the document was created
   */
  createdAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => ScalarsEnums["DateTime"]
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>
  }) => Array<ProductColorVariant>
  /**
   * List of ProductColorVariant versions
   */
  history: (args: {
    /**
     * @defaultValue `10`
     */
    limit?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>
    /**
     * This is optional and can be used to fetch the document version history for a specific stage instead of the current one
     */
    stageOverride?: Maybe<Stage>
  }) => Array<Version>
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"]
  /**
   * System Locale field
   */
  locale: ScalarsEnums["Locale"]
  /**
   * Get the other localizations for this document
   */
  localizations: (args: {
    /**
     * Decides if the current locale should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Potential locales that should be returned
     * @defaultValue `["en","de"]`
     */
    locales?: Maybe<Array<Locale>>
  }) => Array<ProductColorVariant>
  name: ScalarsEnums["String"]
  product: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `product` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<Product>
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => Maybe<ScalarsEnums["DateTime"]>
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  scheduledIn: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<ScheduledOperationWhereInput>
  }) => Array<ScheduledOperation>
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"]
  /**
   * The time the document was updated
   */
  updatedAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => ScalarsEnums["DateTime"]
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
}

/**
 * A connection to a list of items.
 */
export interface ProductColorVariantConnection {
  __typename?: "ProductColorVariantConnection"
  aggregate: Aggregate
  /**
   * A list of edges.
   */
  edges: Array<ProductColorVariantEdge>
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo
}

/**
 * An edge in a connection.
 */
export interface ProductColorVariantEdge {
  __typename?: "ProductColorVariantEdge"
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"]
  /**
   * The item at the end of the edge.
   */
  node: ProductColorVariant
}

/**
 * A connection to a list of items.
 */
export interface ProductConnection {
  __typename?: "ProductConnection"
  aggregate: Aggregate
  /**
   * A list of edges.
   */
  edges: Array<ProductEdge>
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo
}

/**
 * An edge in a connection.
 */
export interface ProductEdge {
  __typename?: "ProductEdge"
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"]
  /**
   * The item at the end of the edge.
   */
  node: Product
}

export interface ProductSizeColorVariant {
  __typename?: "ProductSizeColorVariant"
  color: ScalarsEnums["ProductColor"]
  /**
   * The time the document was created
   */
  createdAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => ScalarsEnums["DateTime"]
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>
  }) => Array<ProductSizeColorVariant>
  /**
   * List of ProductSizeColorVariant versions
   */
  history: (args: {
    /**
     * @defaultValue `10`
     */
    limit?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>
    /**
     * This is optional and can be used to fetch the document version history for a specific stage instead of the current one
     */
    stageOverride?: Maybe<Stage>
  }) => Array<Version>
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"]
  /**
   * System Locale field
   */
  locale: ScalarsEnums["Locale"]
  /**
   * Get the other localizations for this document
   */
  localizations: (args: {
    /**
     * Decides if the current locale should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Potential locales that should be returned
     * @defaultValue `["en","de"]`
     */
    locales?: Maybe<Array<Locale>>
  }) => Array<ProductSizeColorVariant>
  name: ScalarsEnums["String"]
  product: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `product` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<Product>
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => Maybe<ScalarsEnums["DateTime"]>
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  scheduledIn: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<ScheduledOperationWhereInput>
  }) => Array<ScheduledOperation>
  size: ScalarsEnums["ProductSize"]
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"]
  /**
   * The time the document was updated
   */
  updatedAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => ScalarsEnums["DateTime"]
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
}

/**
 * A connection to a list of items.
 */
export interface ProductSizeColorVariantConnection {
  __typename?: "ProductSizeColorVariantConnection"
  aggregate: Aggregate
  /**
   * A list of edges.
   */
  edges: Array<ProductSizeColorVariantEdge>
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo
}

/**
 * An edge in a connection.
 */
export interface ProductSizeColorVariantEdge {
  __typename?: "ProductSizeColorVariantEdge"
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"]
  /**
   * The item at the end of the edge.
   */
  node: ProductSizeColorVariant
}

export interface ProductSizeVariant {
  __typename?: "ProductSizeVariant"
  /**
   * The time the document was created
   */
  createdAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => ScalarsEnums["DateTime"]
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>
  }) => Array<ProductSizeVariant>
  /**
   * List of ProductSizeVariant versions
   */
  history: (args: {
    /**
     * @defaultValue `10`
     */
    limit?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>
    /**
     * This is optional and can be used to fetch the document version history for a specific stage instead of the current one
     */
    stageOverride?: Maybe<Stage>
  }) => Array<Version>
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"]
  /**
   * System Locale field
   */
  locale: ScalarsEnums["Locale"]
  /**
   * Get the other localizations for this document
   */
  localizations: (args: {
    /**
     * Decides if the current locale should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Potential locales that should be returned
     * @defaultValue `["en","de"]`
     */
    locales?: Maybe<Array<Locale>>
  }) => Array<ProductSizeVariant>
  name: ScalarsEnums["String"]
  product: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `product` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<Product>
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => Maybe<ScalarsEnums["DateTime"]>
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  scheduledIn: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<ScheduledOperationWhereInput>
  }) => Array<ScheduledOperation>
  size: ScalarsEnums["ProductSize"]
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"]
  /**
   * The time the document was updated
   */
  updatedAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>
  }) => ScalarsEnums["DateTime"]
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
}

/**
 * A connection to a list of items.
 */
export interface ProductSizeVariantConnection {
  __typename?: "ProductSizeVariantConnection"
  aggregate: Aggregate
  /**
   * A list of edges.
   */
  edges: Array<ProductSizeVariantEdge>
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo
}

/**
 * An edge in a connection.
 */
export interface ProductSizeVariantEdge {
  __typename?: "ProductSizeVariantEdge"
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"]
  /**
   * The item at the end of the edge.
   */
  node: ProductSizeVariant
}

export interface ProductVariants {
  __typename?:
    | "ProductColorVariant"
    | "ProductSizeColorVariant"
    | "ProductSizeVariant"
  $on: $ProductVariants
}

/**
 * Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba()
 */
export interface RGBA {
  __typename?: "RGBA"
  a: ScalarsEnums["RGBATransparency"]
  b: ScalarsEnums["RGBAHue"]
  g: ScalarsEnums["RGBAHue"]
  r: ScalarsEnums["RGBAHue"]
}

export interface Review {
  __typename?: "Review"
  content: ScalarsEnums["String"]
  /**
   * The time the document was created
   */
  createdAt: ScalarsEnums["DateTime"]
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>
  }) => Array<Review>
  email: ScalarsEnums["String"]
  headline: ScalarsEnums["String"]
  /**
   * List of Review versions
   */
  history: (args: {
    /**
     * @defaultValue `10`
     */
    limit?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>
    /**
     * This is optional and can be used to fetch the document version history for a specific stage instead of the current one
     */
    stageOverride?: Maybe<Stage>
  }) => Array<Version>
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"]
  name: ScalarsEnums["String"]
  product: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `product` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<Product>
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  rating?: Maybe<ScalarsEnums["Int"]>
  scheduledIn: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<ScheduledOperationWhereInput>
  }) => Array<ScheduledOperation>
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"]
  /**
   * The time the document was updated
   */
  updatedAt: ScalarsEnums["DateTime"]
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
}

/**
 * A connection to a list of items.
 */
export interface ReviewConnection {
  __typename?: "ReviewConnection"
  aggregate: Aggregate
  /**
   * A list of edges.
   */
  edges: Array<ReviewEdge>
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo
}

/**
 * An edge in a connection.
 */
export interface ReviewEdge {
  __typename?: "ReviewEdge"
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"]
  /**
   * The item at the end of the edge.
   */
  node: Review
}

/**
 * Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values
 */
export interface RichText {
  __typename?: "RichText"
  /**
   * Returns HTMl representation
   */
  html: ScalarsEnums["String"]
  /**
   * Returns Markdown representation
   */
  markdown: ScalarsEnums["String"]
  /**
   * Returns AST representation
   */
  raw: ScalarsEnums["RichTextAST"]
  /**
   * Returns plain-text contents of RichText
   */
  text: ScalarsEnums["String"]
}

/**
 * Scheduled Operation system model
 */
export interface ScheduledOperation {
  __typename?: "ScheduledOperation"
  affectedDocuments: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `affectedDocuments` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
  }) => Array<ScheduledOperationAffectedDocument>
  /**
   * The time the document was created
   */
  createdAt: ScalarsEnums["DateTime"]
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  /**
   * Operation description
   */
  description?: Maybe<ScalarsEnums["String"]>
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>
  }) => Array<ScheduledOperation>
  /**
   * Operation error message
   */
  errorMessage?: Maybe<ScalarsEnums["String"]>
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"]
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  /**
   * Raw operation payload including all details, this field is subject to change
   */
  rawPayload: ScalarsEnums["Json"]
  /**
   * The release this operation is scheduled for
   */
  release: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `release` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<ScheduledRelease>
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"]
  /**
   * operation Status
   */
  status: ScalarsEnums["ScheduledOperationStatus"]
  /**
   * The time the document was updated
   */
  updatedAt: ScalarsEnums["DateTime"]
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
}

export interface ScheduledOperationAffectedDocument {
  __typename?:
    | "Asset"
    | "Category"
    | "Collection"
    | "Currency"
    | "Order"
    | "OrderItem"
    | "Product"
    | "ProductColorVariant"
    | "ProductSizeColorVariant"
    | "ProductSizeVariant"
    | "Review"
  $on: $ScheduledOperationAffectedDocument
}

/**
 * A connection to a list of items.
 */
export interface ScheduledOperationConnection {
  __typename?: "ScheduledOperationConnection"
  aggregate: Aggregate
  /**
   * A list of edges.
   */
  edges: Array<ScheduledOperationEdge>
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo
}

/**
 * An edge in a connection.
 */
export interface ScheduledOperationEdge {
  __typename?: "ScheduledOperationEdge"
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"]
  /**
   * The item at the end of the edge.
   */
  node: ScheduledOperation
}

/**
 * Scheduled Release system model
 */
export interface ScheduledRelease {
  __typename?: "ScheduledRelease"
  /**
   * The time the document was created
   */
  createdAt: ScalarsEnums["DateTime"]
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  /**
   * Release description
   */
  description?: Maybe<ScalarsEnums["String"]>
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>
  }) => Array<ScheduledRelease>
  /**
   * Release error message
   */
  errorMessage?: Maybe<ScalarsEnums["String"]>
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"]
  /**
   * Whether scheduled release should be run
   */
  isActive: ScalarsEnums["Boolean"]
  /**
   * Whether scheduled release is implicit
   */
  isImplicit: ScalarsEnums["Boolean"]
  /**
   * Operations to run with this release
   */
  operations: (args?: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `operations` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ScheduledOperationOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    where?: Maybe<ScheduledOperationWhereInput>
  }) => Array<ScheduledOperation>
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
  /**
   * Release date and time
   */
  releaseAt?: Maybe<ScalarsEnums["DateTime"]>
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"]
  /**
   * Release Status
   */
  status: ScalarsEnums["ScheduledReleaseStatus"]
  /**
   * Release Title
   */
  title?: Maybe<ScalarsEnums["String"]>
  /**
   * The time the document was updated
   */
  updatedAt: ScalarsEnums["DateTime"]
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>
  }) => Maybe<User>
}

/**
 * A connection to a list of items.
 */
export interface ScheduledReleaseConnection {
  __typename?: "ScheduledReleaseConnection"
  aggregate: Aggregate
  /**
   * A list of edges.
   */
  edges: Array<ScheduledReleaseEdge>
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo
}

/**
 * An edge in a connection.
 */
export interface ScheduledReleaseEdge {
  __typename?: "ScheduledReleaseEdge"
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"]
  /**
   * The item at the end of the edge.
   */
  node: ScheduledRelease
}

/**
 * User system model
 */
export interface User {
  __typename?: "User"
  /**
   * The time the document was created
   */
  createdAt: ScalarsEnums["DateTime"]
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>
  }) => Array<User>
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"]
  /**
   * Flag to determine if user is active or not
   */
  isActive: ScalarsEnums["Boolean"]
  /**
   * User Kind. Can be either MEMBER, PAT or PUBLIC
   */
  kind: ScalarsEnums["UserKind"]
  /**
   * The username
   */
  name: ScalarsEnums["String"]
  /**
   * Profile Picture url
   */
  picture?: Maybe<ScalarsEnums["String"]>
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"]
  /**
   * The time the document was updated
   */
  updatedAt: ScalarsEnums["DateTime"]
}

/**
 * A connection to a list of items.
 */
export interface UserConnection {
  __typename?: "UserConnection"
  aggregate: Aggregate
  /**
   * A list of edges.
   */
  edges: Array<UserEdge>
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo
}

/**
 * An edge in a connection.
 */
export interface UserEdge {
  __typename?: "UserEdge"
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"]
  /**
   * The item at the end of the edge.
   */
  node: User
}

export interface Version {
  __typename?: "Version"
  createdAt: ScalarsEnums["DateTime"]
  id: ScalarsEnums["ID"]
  revision: ScalarsEnums["Int"]
  stage: ScalarsEnums["Stage"]
}

export interface Mutation {
  __typename?: "Mutation"
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset: (args: { data: AssetCreateInput }) => Maybe<Asset>
  /**
   * Create one category
   */
  createCategory: (args: { data: CategoryCreateInput }) => Maybe<Category>
  /**
   * Create one collection
   */
  createCollection: (args: { data: CollectionCreateInput }) => Maybe<Collection>
  /**
   * Create one currency
   */
  createCurrency: (args: { data: CurrencyCreateInput }) => Maybe<Currency>
  /**
   * Create one order
   */
  createOrder: (args: { data: OrderCreateInput }) => Maybe<Order>
  /**
   * Create one orderItem
   */
  createOrderItem: (args: { data: OrderItemCreateInput }) => Maybe<OrderItem>
  /**
   * Create one product
   */
  createProduct: (args: { data: ProductCreateInput }) => Maybe<Product>
  /**
   * Create one productColorVariant
   */
  createProductColorVariant: (args: {
    data: ProductColorVariantCreateInput
  }) => Maybe<ProductColorVariant>
  /**
   * Create one productSizeColorVariant
   */
  createProductSizeColorVariant: (args: {
    data: ProductSizeColorVariantCreateInput
  }) => Maybe<ProductSizeColorVariant>
  /**
   * Create one productSizeVariant
   */
  createProductSizeVariant: (args: {
    data: ProductSizeVariantCreateInput
  }) => Maybe<ProductSizeVariant>
  /**
   * Create one review
   */
  createReview: (args: { data: ReviewCreateInput }) => Maybe<Review>
  /**
   * Create one scheduledRelease
   */
  createScheduledRelease: (args: {
    data: ScheduledReleaseCreateInput
  }) => Maybe<ScheduledRelease>
  /**
   * Delete one asset from _all_ existing stages. Returns deleted document.
   */
  deleteAsset: (args: {
    /**
     * Document to delete
     */
    where: AssetWhereUniqueInput
  }) => Maybe<Asset>
  /**
   * Delete one category from _all_ existing stages. Returns deleted document.
   */
  deleteCategory: (args: {
    /**
     * Document to delete
     */
    where: CategoryWhereUniqueInput
  }) => Maybe<Category>
  /**
   * Delete one collection from _all_ existing stages. Returns deleted document.
   */
  deleteCollection: (args: {
    /**
     * Document to delete
     */
    where: CollectionWhereUniqueInput
  }) => Maybe<Collection>
  /**
   * Delete one currency from _all_ existing stages. Returns deleted document.
   */
  deleteCurrency: (args: {
    /**
     * Document to delete
     */
    where: CurrencyWhereUniqueInput
  }) => Maybe<Currency>
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: (args?: {
    /**
     * Documents to delete
     */
    where?: Maybe<AssetManyWhereInput>
  }) => BatchPayload
  /**
   * Delete many Asset documents, return deleted documents
   */
  deleteManyAssetsConnection: (args?: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to delete
     */
    where?: Maybe<AssetManyWhereInput>
  }) => AssetConnection
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  deleteManyCategories: (args?: {
    /**
     * Documents to delete
     */
    where?: Maybe<CategoryManyWhereInput>
  }) => BatchPayload
  /**
   * Delete many Category documents, return deleted documents
   */
  deleteManyCategoriesConnection: (args?: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to delete
     */
    where?: Maybe<CategoryManyWhereInput>
  }) => CategoryConnection
  /**
   * Delete many Collection documents
   * @deprecated Please use the new paginated many mutation (deleteManyCollectionsConnection)
   */
  deleteManyCollections: (args?: {
    /**
     * Documents to delete
     */
    where?: Maybe<CollectionManyWhereInput>
  }) => BatchPayload
  /**
   * Delete many Collection documents, return deleted documents
   */
  deleteManyCollectionsConnection: (args?: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to delete
     */
    where?: Maybe<CollectionManyWhereInput>
  }) => CollectionConnection
  /**
   * Delete many Currency documents
   * @deprecated Please use the new paginated many mutation (deleteManyCurrenciesConnection)
   */
  deleteManyCurrencies: (args?: {
    /**
     * Documents to delete
     */
    where?: Maybe<CurrencyManyWhereInput>
  }) => BatchPayload
  /**
   * Delete many Currency documents, return deleted documents
   */
  deleteManyCurrenciesConnection: (args?: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to delete
     */
    where?: Maybe<CurrencyManyWhereInput>
  }) => CurrencyConnection
  /**
   * Delete many OrderItem documents
   * @deprecated Please use the new paginated many mutation (deleteManyOrderItemsConnection)
   */
  deleteManyOrderItems: (args?: {
    /**
     * Documents to delete
     */
    where?: Maybe<OrderItemManyWhereInput>
  }) => BatchPayload
  /**
   * Delete many OrderItem documents, return deleted documents
   */
  deleteManyOrderItemsConnection: (args?: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to delete
     */
    where?: Maybe<OrderItemManyWhereInput>
  }) => OrderItemConnection
  /**
   * Delete many Order documents
   * @deprecated Please use the new paginated many mutation (deleteManyOrdersConnection)
   */
  deleteManyOrders: (args?: {
    /**
     * Documents to delete
     */
    where?: Maybe<OrderManyWhereInput>
  }) => BatchPayload
  /**
   * Delete many Order documents, return deleted documents
   */
  deleteManyOrdersConnection: (args?: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to delete
     */
    where?: Maybe<OrderManyWhereInput>
  }) => OrderConnection
  /**
   * Delete many ProductColorVariant documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductColorVariantsConnection)
   */
  deleteManyProductColorVariants: (args?: {
    /**
     * Documents to delete
     */
    where?: Maybe<ProductColorVariantManyWhereInput>
  }) => BatchPayload
  /**
   * Delete many ProductColorVariant documents, return deleted documents
   */
  deleteManyProductColorVariantsConnection: (args?: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to delete
     */
    where?: Maybe<ProductColorVariantManyWhereInput>
  }) => ProductColorVariantConnection
  /**
   * Delete many ProductSizeColorVariant documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductSizeColorVariantsConnection)
   */
  deleteManyProductSizeColorVariants: (args?: {
    /**
     * Documents to delete
     */
    where?: Maybe<ProductSizeColorVariantManyWhereInput>
  }) => BatchPayload
  /**
   * Delete many ProductSizeColorVariant documents, return deleted documents
   */
  deleteManyProductSizeColorVariantsConnection: (args?: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to delete
     */
    where?: Maybe<ProductSizeColorVariantManyWhereInput>
  }) => ProductSizeColorVariantConnection
  /**
   * Delete many ProductSizeVariant documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductSizeVariantsConnection)
   */
  deleteManyProductSizeVariants: (args?: {
    /**
     * Documents to delete
     */
    where?: Maybe<ProductSizeVariantManyWhereInput>
  }) => BatchPayload
  /**
   * Delete many ProductSizeVariant documents, return deleted documents
   */
  deleteManyProductSizeVariantsConnection: (args?: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to delete
     */
    where?: Maybe<ProductSizeVariantManyWhereInput>
  }) => ProductSizeVariantConnection
  /**
   * Delete many Product documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
   */
  deleteManyProducts: (args?: {
    /**
     * Documents to delete
     */
    where?: Maybe<ProductManyWhereInput>
  }) => BatchPayload
  /**
   * Delete many Product documents, return deleted documents
   */
  deleteManyProductsConnection: (args?: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to delete
     */
    where?: Maybe<ProductManyWhereInput>
  }) => ProductConnection
  /**
   * Delete many Review documents
   * @deprecated Please use the new paginated many mutation (deleteManyReviewsConnection)
   */
  deleteManyReviews: (args?: {
    /**
     * Documents to delete
     */
    where?: Maybe<ReviewManyWhereInput>
  }) => BatchPayload
  /**
   * Delete many Review documents, return deleted documents
   */
  deleteManyReviewsConnection: (args?: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to delete
     */
    where?: Maybe<ReviewManyWhereInput>
  }) => ReviewConnection
  /**
   * Delete one order from _all_ existing stages. Returns deleted document.
   */
  deleteOrder: (args: {
    /**
     * Document to delete
     */
    where: OrderWhereUniqueInput
  }) => Maybe<Order>
  /**
   * Delete one orderItem from _all_ existing stages. Returns deleted document.
   */
  deleteOrderItem: (args: {
    /**
     * Document to delete
     */
    where: OrderItemWhereUniqueInput
  }) => Maybe<OrderItem>
  /**
   * Delete one product from _all_ existing stages. Returns deleted document.
   */
  deleteProduct: (args: {
    /**
     * Document to delete
     */
    where: ProductWhereUniqueInput
  }) => Maybe<Product>
  /**
   * Delete one productColorVariant from _all_ existing stages. Returns deleted document.
   */
  deleteProductColorVariant: (args: {
    /**
     * Document to delete
     */
    where: ProductColorVariantWhereUniqueInput
  }) => Maybe<ProductColorVariant>
  /**
   * Delete one productSizeColorVariant from _all_ existing stages. Returns deleted document.
   */
  deleteProductSizeColorVariant: (args: {
    /**
     * Document to delete
     */
    where: ProductSizeColorVariantWhereUniqueInput
  }) => Maybe<ProductSizeColorVariant>
  /**
   * Delete one productSizeVariant from _all_ existing stages. Returns deleted document.
   */
  deleteProductSizeVariant: (args: {
    /**
     * Document to delete
     */
    where: ProductSizeVariantWhereUniqueInput
  }) => Maybe<ProductSizeVariant>
  /**
   * Delete one review from _all_ existing stages. Returns deleted document.
   */
  deleteReview: (args: {
    /**
     * Document to delete
     */
    where: ReviewWhereUniqueInput
  }) => Maybe<Review>
  /**
   * Delete and return scheduled operation
   */
  deleteScheduledOperation: (args: {
    /**
     * Document to delete
     */
    where: ScheduledOperationWhereUniqueInput
  }) => Maybe<ScheduledOperation>
  /**
   * Delete one scheduledRelease from _all_ existing stages. Returns deleted document.
   */
  deleteScheduledRelease: (args: {
    /**
     * Document to delete
     */
    where: ScheduledReleaseWhereUniqueInput
  }) => Maybe<ScheduledRelease>
  /**
   * Publish one asset
   */
  publishAsset: (args: {
    /**
     * Optional localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: AssetWhereUniqueInput
    /**
     * Whether to include the default locale when publishBase is set
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => Maybe<Asset>
  /**
   * Publish one category
   */
  publishCategory: (args: {
    /**
     * Optional localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: CategoryWhereUniqueInput
    /**
     * Whether to include the default locale when publishBase is set
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => Maybe<Category>
  /**
   * Publish one collection
   */
  publishCollection: (args: {
    /**
     * Optional localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: CollectionWhereUniqueInput
    /**
     * Whether to include the default locale when publishBase is set
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => Maybe<Collection>
  /**
   * Publish one currency
   */
  publishCurrency: (args: {
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: CurrencyWhereUniqueInput
  }) => Maybe<Currency>
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: (args: {
    /**
     * Document localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<AssetManyWhereInput>
    /**
     * Whether to include the default locale when publishBase is true
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => BatchPayload
  /**
   * Publish many Asset documents
   */
  publishManyAssetsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    from?: Maybe<Stage>
    last?: Maybe<Scalars["Int"]>
    /**
     * Document localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<AssetManyWhereInput>
    /**
     * Whether to include the default locale when publishBase is true
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => AssetConnection
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  publishManyCategories: (args: {
    /**
     * Document localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<CategoryManyWhereInput>
    /**
     * Whether to include the default locale when publishBase is true
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => BatchPayload
  /**
   * Publish many Category documents
   */
  publishManyCategoriesConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    from?: Maybe<Stage>
    last?: Maybe<Scalars["Int"]>
    /**
     * Document localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<CategoryManyWhereInput>
    /**
     * Whether to include the default locale when publishBase is true
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => CategoryConnection
  /**
   * Publish many Collection documents
   * @deprecated Please use the new paginated many mutation (publishManyCollectionsConnection)
   */
  publishManyCollections: (args: {
    /**
     * Document localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<CollectionManyWhereInput>
    /**
     * Whether to include the default locale when publishBase is true
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => BatchPayload
  /**
   * Publish many Collection documents
   */
  publishManyCollectionsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    from?: Maybe<Stage>
    last?: Maybe<Scalars["Int"]>
    /**
     * Document localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<CollectionManyWhereInput>
    /**
     * Whether to include the default locale when publishBase is true
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => CollectionConnection
  /**
   * Publish many Currency documents
   * @deprecated Please use the new paginated many mutation (publishManyCurrenciesConnection)
   */
  publishManyCurrencies: (args: {
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<CurrencyManyWhereInput>
  }) => BatchPayload
  /**
   * Publish many Currency documents
   */
  publishManyCurrenciesConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    from?: Maybe<Stage>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<CurrencyManyWhereInput>
  }) => CurrencyConnection
  /**
   * Publish many OrderItem documents
   * @deprecated Please use the new paginated many mutation (publishManyOrderItemsConnection)
   */
  publishManyOrderItems: (args: {
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<OrderItemManyWhereInput>
  }) => BatchPayload
  /**
   * Publish many OrderItem documents
   */
  publishManyOrderItemsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    from?: Maybe<Stage>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<OrderItemManyWhereInput>
  }) => OrderItemConnection
  /**
   * Publish many Order documents
   * @deprecated Please use the new paginated many mutation (publishManyOrdersConnection)
   */
  publishManyOrders: (args: {
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<OrderManyWhereInput>
  }) => BatchPayload
  /**
   * Publish many Order documents
   */
  publishManyOrdersConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    from?: Maybe<Stage>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<OrderManyWhereInput>
  }) => OrderConnection
  /**
   * Publish many ProductColorVariant documents
   * @deprecated Please use the new paginated many mutation (publishManyProductColorVariantsConnection)
   */
  publishManyProductColorVariants: (args: {
    /**
     * Document localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<ProductColorVariantManyWhereInput>
    /**
     * Whether to include the default locale when publishBase is true
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => BatchPayload
  /**
   * Publish many ProductColorVariant documents
   */
  publishManyProductColorVariantsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    from?: Maybe<Stage>
    last?: Maybe<Scalars["Int"]>
    /**
     * Document localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<ProductColorVariantManyWhereInput>
    /**
     * Whether to include the default locale when publishBase is true
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => ProductColorVariantConnection
  /**
   * Publish many ProductSizeColorVariant documents
   * @deprecated Please use the new paginated many mutation (publishManyProductSizeColorVariantsConnection)
   */
  publishManyProductSizeColorVariants: (args: {
    /**
     * Document localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<ProductSizeColorVariantManyWhereInput>
    /**
     * Whether to include the default locale when publishBase is true
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => BatchPayload
  /**
   * Publish many ProductSizeColorVariant documents
   */
  publishManyProductSizeColorVariantsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    from?: Maybe<Stage>
    last?: Maybe<Scalars["Int"]>
    /**
     * Document localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<ProductSizeColorVariantManyWhereInput>
    /**
     * Whether to include the default locale when publishBase is true
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => ProductSizeColorVariantConnection
  /**
   * Publish many ProductSizeVariant documents
   * @deprecated Please use the new paginated many mutation (publishManyProductSizeVariantsConnection)
   */
  publishManyProductSizeVariants: (args: {
    /**
     * Document localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<ProductSizeVariantManyWhereInput>
    /**
     * Whether to include the default locale when publishBase is true
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => BatchPayload
  /**
   * Publish many ProductSizeVariant documents
   */
  publishManyProductSizeVariantsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    from?: Maybe<Stage>
    last?: Maybe<Scalars["Int"]>
    /**
     * Document localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<ProductSizeVariantManyWhereInput>
    /**
     * Whether to include the default locale when publishBase is true
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => ProductSizeVariantConnection
  /**
   * Publish many Product documents
   * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
   */
  publishManyProducts: (args: {
    /**
     * Document localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<ProductManyWhereInput>
    /**
     * Whether to include the default locale when publishBase is true
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => BatchPayload
  /**
   * Publish many Product documents
   */
  publishManyProductsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    from?: Maybe<Stage>
    last?: Maybe<Scalars["Int"]>
    /**
     * Document localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<ProductManyWhereInput>
    /**
     * Whether to include the default locale when publishBase is true
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => ProductConnection
  /**
   * Publish many Review documents
   * @deprecated Please use the new paginated many mutation (publishManyReviewsConnection)
   */
  publishManyReviews: (args: {
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<ReviewManyWhereInput>
  }) => BatchPayload
  /**
   * Publish many Review documents
   */
  publishManyReviewsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    from?: Maybe<Stage>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<ReviewManyWhereInput>
  }) => ReviewConnection
  /**
   * Publish one order
   */
  publishOrder: (args: {
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: OrderWhereUniqueInput
  }) => Maybe<Order>
  /**
   * Publish one orderItem
   */
  publishOrderItem: (args: {
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: OrderItemWhereUniqueInput
  }) => Maybe<OrderItem>
  /**
   * Publish one product
   */
  publishProduct: (args: {
    /**
     * Optional localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: ProductWhereUniqueInput
    /**
     * Whether to include the default locale when publishBase is set
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => Maybe<Product>
  /**
   * Publish one productColorVariant
   */
  publishProductColorVariant: (args: {
    /**
     * Optional localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: ProductColorVariantWhereUniqueInput
    /**
     * Whether to include the default locale when publishBase is set
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => Maybe<ProductColorVariant>
  /**
   * Publish one productSizeColorVariant
   */
  publishProductSizeColorVariant: (args: {
    /**
     * Optional localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: ProductSizeColorVariantWhereUniqueInput
    /**
     * Whether to include the default locale when publishBase is set
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => Maybe<ProductSizeColorVariant>
  /**
   * Publish one productSizeVariant
   */
  publishProductSizeVariant: (args: {
    /**
     * Optional localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: ProductSizeVariantWhereUniqueInput
    /**
     * Whether to include the default locale when publishBase is set
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => Maybe<ProductSizeVariant>
  /**
   * Publish one review
   */
  publishReview: (args: {
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: ReviewWhereUniqueInput
  }) => Maybe<Review>
  /**
   * Schedule to publish one asset
   */
  schedulePublishAsset: (args: {
    /**
     * Optional localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: AssetWhereUniqueInput
    /**
     * Whether to include the default locale when publishBase is set
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => Maybe<Asset>
  /**
   * Schedule to publish one category
   */
  schedulePublishCategory: (args: {
    /**
     * Optional localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: CategoryWhereUniqueInput
    /**
     * Whether to include the default locale when publishBase is set
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => Maybe<Category>
  /**
   * Schedule to publish one collection
   */
  schedulePublishCollection: (args: {
    /**
     * Optional localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: CollectionWhereUniqueInput
    /**
     * Whether to include the default locale when publishBase is set
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => Maybe<Collection>
  /**
   * Schedule to publish one currency
   */
  schedulePublishCurrency: (args: {
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: CurrencyWhereUniqueInput
  }) => Maybe<Currency>
  /**
   * Schedule to publish one order
   */
  schedulePublishOrder: (args: {
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: OrderWhereUniqueInput
  }) => Maybe<Order>
  /**
   * Schedule to publish one orderItem
   */
  schedulePublishOrderItem: (args: {
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: OrderItemWhereUniqueInput
  }) => Maybe<OrderItem>
  /**
   * Schedule to publish one product
   */
  schedulePublishProduct: (args: {
    /**
     * Optional localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: ProductWhereUniqueInput
    /**
     * Whether to include the default locale when publishBase is set
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => Maybe<Product>
  /**
   * Schedule to publish one productColorVariant
   */
  schedulePublishProductColorVariant: (args: {
    /**
     * Optional localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: ProductColorVariantWhereUniqueInput
    /**
     * Whether to include the default locale when publishBase is set
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => Maybe<ProductColorVariant>
  /**
   * Schedule to publish one productSizeColorVariant
   */
  schedulePublishProductSizeColorVariant: (args: {
    /**
     * Optional localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: ProductSizeColorVariantWhereUniqueInput
    /**
     * Whether to include the default locale when publishBase is set
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => Maybe<ProductSizeColorVariant>
  /**
   * Schedule to publish one productSizeVariant
   */
  schedulePublishProductSizeVariant: (args: {
    /**
     * Optional localizations to publish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: ProductSizeVariantWhereUniqueInput
    /**
     * Whether to include the default locale when publishBase is set
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>
  }) => Maybe<ProductSizeVariant>
  /**
   * Schedule to publish one review
   */
  schedulePublishReview: (args: {
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>
    /**
     * Document to publish
     */
    where: ReviewWhereUniqueInput
  }) => Maybe<Review>
  /**
   * Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  scheduleUnpublishAsset: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Unpublish complete document including default localization and relations from stages. Can be disabled.
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Document to unpublish
     */
    where: AssetWhereUniqueInput
  }) => Maybe<Asset>
  /**
   * Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  scheduleUnpublishCategory: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Unpublish complete document including default localization and relations from stages. Can be disabled.
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Document to unpublish
     */
    where: CategoryWhereUniqueInput
  }) => Maybe<Category>
  /**
   * Unpublish one collection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  scheduleUnpublishCollection: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Unpublish complete document including default localization and relations from stages. Can be disabled.
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Document to unpublish
     */
    where: CollectionWhereUniqueInput
  }) => Maybe<Collection>
  /**
   * Unpublish one currency from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  scheduleUnpublishCurrency: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Document to unpublish
     */
    where: CurrencyWhereUniqueInput
  }) => Maybe<Currency>
  /**
   * Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  scheduleUnpublishOrder: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Document to unpublish
     */
    where: OrderWhereUniqueInput
  }) => Maybe<Order>
  /**
   * Unpublish one orderItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  scheduleUnpublishOrderItem: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Document to unpublish
     */
    where: OrderItemWhereUniqueInput
  }) => Maybe<OrderItem>
  /**
   * Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  scheduleUnpublishProduct: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Unpublish complete document including default localization and relations from stages. Can be disabled.
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Document to unpublish
     */
    where: ProductWhereUniqueInput
  }) => Maybe<Product>
  /**
   * Unpublish one productColorVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  scheduleUnpublishProductColorVariant: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Unpublish complete document including default localization and relations from stages. Can be disabled.
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Document to unpublish
     */
    where: ProductColorVariantWhereUniqueInput
  }) => Maybe<ProductColorVariant>
  /**
   * Unpublish one productSizeColorVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  scheduleUnpublishProductSizeColorVariant: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Unpublish complete document including default localization and relations from stages. Can be disabled.
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Document to unpublish
     */
    where: ProductSizeColorVariantWhereUniqueInput
  }) => Maybe<ProductSizeColorVariant>
  /**
   * Unpublish one productSizeVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  scheduleUnpublishProductSizeVariant: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Unpublish complete document including default localization and relations from stages. Can be disabled.
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Document to unpublish
     */
    where: ProductSizeVariantWhereUniqueInput
  }) => Maybe<ProductSizeVariant>
  /**
   * Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  scheduleUnpublishReview: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>
    /**
     * Document to unpublish
     */
    where: ReviewWhereUniqueInput
  }) => Maybe<Review>
  /**
   * Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  unpublishAsset: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Unpublish complete document including default localization and relations from stages. Can be disabled.
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Document to unpublish
     */
    where: AssetWhereUniqueInput
  }) => Maybe<Asset>
  /**
   * Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  unpublishCategory: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Unpublish complete document including default localization and relations from stages. Can be disabled.
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Document to unpublish
     */
    where: CategoryWhereUniqueInput
  }) => Maybe<Category>
  /**
   * Unpublish one collection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  unpublishCollection: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Unpublish complete document including default localization and relations from stages. Can be disabled.
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Document to unpublish
     */
    where: CollectionWhereUniqueInput
  }) => Maybe<Collection>
  /**
   * Unpublish one currency from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  unpublishCurrency: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Document to unpublish
     */
    where: CurrencyWhereUniqueInput
  }) => Maybe<Currency>
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: (args: {
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Locales to unpublish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to unpublish the base document and default localization
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Identifies documents in each stage
     */
    where?: Maybe<AssetManyWhereInput>
  }) => BatchPayload
  /**
   * Find many Asset documents that match criteria in specified stage and unpublish from target stages
   */
  unpublishManyAssetsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    last?: Maybe<Scalars["Int"]>
    /**
     * Locales to unpublish
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    stage?: Maybe<Stage>
    /**
     * Whether to unpublish the base document and default localization
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Identifies documents in draft stage
     */
    where?: Maybe<AssetManyWhereInput>
  }) => AssetConnection
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  unpublishManyCategories: (args: {
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Locales to unpublish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to unpublish the base document and default localization
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Identifies documents in each stage
     */
    where?: Maybe<CategoryManyWhereInput>
  }) => BatchPayload
  /**
   * Find many Category documents that match criteria in specified stage and unpublish from target stages
   */
  unpublishManyCategoriesConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    last?: Maybe<Scalars["Int"]>
    /**
     * Locales to unpublish
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    stage?: Maybe<Stage>
    /**
     * Whether to unpublish the base document and default localization
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Identifies documents in draft stage
     */
    where?: Maybe<CategoryManyWhereInput>
  }) => CategoryConnection
  /**
   * Unpublish many Collection documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCollectionsConnection)
   */
  unpublishManyCollections: (args: {
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Locales to unpublish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to unpublish the base document and default localization
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Identifies documents in each stage
     */
    where?: Maybe<CollectionManyWhereInput>
  }) => BatchPayload
  /**
   * Find many Collection documents that match criteria in specified stage and unpublish from target stages
   */
  unpublishManyCollectionsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    last?: Maybe<Scalars["Int"]>
    /**
     * Locales to unpublish
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    stage?: Maybe<Stage>
    /**
     * Whether to unpublish the base document and default localization
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Identifies documents in draft stage
     */
    where?: Maybe<CollectionManyWhereInput>
  }) => CollectionConnection
  /**
   * Unpublish many Currency documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCurrenciesConnection)
   */
  unpublishManyCurrencies: (args: {
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage
     */
    where?: Maybe<CurrencyManyWhereInput>
  }) => BatchPayload
  /**
   * Find many Currency documents that match criteria in specified stage and unpublish from target stages
   */
  unpublishManyCurrenciesConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    stage?: Maybe<Stage>
    /**
     * Identifies documents in draft stage
     */
    where?: Maybe<CurrencyManyWhereInput>
  }) => CurrencyConnection
  /**
   * Unpublish many OrderItem documents
   * @deprecated Please use the new paginated many mutation (unpublishManyOrderItemsConnection)
   */
  unpublishManyOrderItems: (args: {
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage
     */
    where?: Maybe<OrderItemManyWhereInput>
  }) => BatchPayload
  /**
   * Find many OrderItem documents that match criteria in specified stage and unpublish from target stages
   */
  unpublishManyOrderItemsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    stage?: Maybe<Stage>
    /**
     * Identifies documents in draft stage
     */
    where?: Maybe<OrderItemManyWhereInput>
  }) => OrderItemConnection
  /**
   * Unpublish many Order documents
   * @deprecated Please use the new paginated many mutation (unpublishManyOrdersConnection)
   */
  unpublishManyOrders: (args: {
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage
     */
    where?: Maybe<OrderManyWhereInput>
  }) => BatchPayload
  /**
   * Find many Order documents that match criteria in specified stage and unpublish from target stages
   */
  unpublishManyOrdersConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    stage?: Maybe<Stage>
    /**
     * Identifies documents in draft stage
     */
    where?: Maybe<OrderManyWhereInput>
  }) => OrderConnection
  /**
   * Unpublish many ProductColorVariant documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductColorVariantsConnection)
   */
  unpublishManyProductColorVariants: (args: {
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Locales to unpublish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to unpublish the base document and default localization
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Identifies documents in each stage
     */
    where?: Maybe<ProductColorVariantManyWhereInput>
  }) => BatchPayload
  /**
   * Find many ProductColorVariant documents that match criteria in specified stage and unpublish from target stages
   */
  unpublishManyProductColorVariantsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    last?: Maybe<Scalars["Int"]>
    /**
     * Locales to unpublish
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    stage?: Maybe<Stage>
    /**
     * Whether to unpublish the base document and default localization
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Identifies documents in draft stage
     */
    where?: Maybe<ProductColorVariantManyWhereInput>
  }) => ProductColorVariantConnection
  /**
   * Unpublish many ProductSizeColorVariant documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductSizeColorVariantsConnection)
   */
  unpublishManyProductSizeColorVariants: (args: {
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Locales to unpublish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to unpublish the base document and default localization
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Identifies documents in each stage
     */
    where?: Maybe<ProductSizeColorVariantManyWhereInput>
  }) => BatchPayload
  /**
   * Find many ProductSizeColorVariant documents that match criteria in specified stage and unpublish from target stages
   */
  unpublishManyProductSizeColorVariantsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    last?: Maybe<Scalars["Int"]>
    /**
     * Locales to unpublish
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    stage?: Maybe<Stage>
    /**
     * Whether to unpublish the base document and default localization
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Identifies documents in draft stage
     */
    where?: Maybe<ProductSizeColorVariantManyWhereInput>
  }) => ProductSizeColorVariantConnection
  /**
   * Unpublish many ProductSizeVariant documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductSizeVariantsConnection)
   */
  unpublishManyProductSizeVariants: (args: {
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Locales to unpublish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to unpublish the base document and default localization
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Identifies documents in each stage
     */
    where?: Maybe<ProductSizeVariantManyWhereInput>
  }) => BatchPayload
  /**
   * Find many ProductSizeVariant documents that match criteria in specified stage and unpublish from target stages
   */
  unpublishManyProductSizeVariantsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    last?: Maybe<Scalars["Int"]>
    /**
     * Locales to unpublish
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    stage?: Maybe<Stage>
    /**
     * Whether to unpublish the base document and default localization
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Identifies documents in draft stage
     */
    where?: Maybe<ProductSizeVariantManyWhereInput>
  }) => ProductSizeVariantConnection
  /**
   * Unpublish many Product documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
   */
  unpublishManyProducts: (args: {
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Locales to unpublish
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Whether to unpublish the base document and default localization
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Identifies documents in each stage
     */
    where?: Maybe<ProductManyWhereInput>
  }) => BatchPayload
  /**
   * Find many Product documents that match criteria in specified stage and unpublish from target stages
   */
  unpublishManyProductsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    last?: Maybe<Scalars["Int"]>
    /**
     * Locales to unpublish
     */
    locales?: Maybe<Array<Locale>>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    stage?: Maybe<Stage>
    /**
     * Whether to unpublish the base document and default localization
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Identifies documents in draft stage
     */
    where?: Maybe<ProductManyWhereInput>
  }) => ProductConnection
  /**
   * Unpublish many Review documents
   * @deprecated Please use the new paginated many mutation (unpublishManyReviewsConnection)
   */
  unpublishManyReviews: (args: {
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Identifies documents in each stage
     */
    where?: Maybe<ReviewManyWhereInput>
  }) => BatchPayload
  /**
   * Find many Review documents that match criteria in specified stage and unpublish from target stages
   */
  unpublishManyReviewsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    first?: Maybe<Scalars["Int"]>
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    stage?: Maybe<Stage>
    /**
     * Identifies documents in draft stage
     */
    where?: Maybe<ReviewManyWhereInput>
  }) => ReviewConnection
  /**
   * Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  unpublishOrder: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Document to unpublish
     */
    where: OrderWhereUniqueInput
  }) => Maybe<Order>
  /**
   * Unpublish one orderItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  unpublishOrderItem: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Document to unpublish
     */
    where: OrderItemWhereUniqueInput
  }) => Maybe<OrderItem>
  /**
   * Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  unpublishProduct: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Unpublish complete document including default localization and relations from stages. Can be disabled.
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Document to unpublish
     */
    where: ProductWhereUniqueInput
  }) => Maybe<Product>
  /**
   * Unpublish one productColorVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  unpublishProductColorVariant: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Unpublish complete document including default localization and relations from stages. Can be disabled.
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Document to unpublish
     */
    where: ProductColorVariantWhereUniqueInput
  }) => Maybe<ProductColorVariant>
  /**
   * Unpublish one productSizeColorVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  unpublishProductSizeColorVariant: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Unpublish complete document including default localization and relations from stages. Can be disabled.
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Document to unpublish
     */
    where: ProductSizeColorVariantWhereUniqueInput
  }) => Maybe<ProductSizeColorVariant>
  /**
   * Unpublish one productSizeVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  unpublishProductSizeVariant: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages
     */
    locales?: Maybe<Array<Locale>>
    /**
     * Unpublish complete document including default localization and relations from stages. Can be disabled.
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>
    /**
     * Document to unpublish
     */
    where: ProductSizeVariantWhereUniqueInput
  }) => Maybe<ProductSizeVariant>
  /**
   * Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  unpublishReview: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>
    /**
     * Document to unpublish
     */
    where: ReviewWhereUniqueInput
  }) => Maybe<Review>
  /**
   * Update one asset
   */
  updateAsset: (args: {
    data: AssetUpdateInput
    where: AssetWhereUniqueInput
  }) => Maybe<Asset>
  /**
   * Update one category
   */
  updateCategory: (args: {
    data: CategoryUpdateInput
    where: CategoryWhereUniqueInput
  }) => Maybe<Category>
  /**
   * Update one collection
   */
  updateCollection: (args: {
    data: CollectionUpdateInput
    where: CollectionWhereUniqueInput
  }) => Maybe<Collection>
  /**
   * Update one currency
   */
  updateCurrency: (args: {
    data: CurrencyUpdateInput
    where: CurrencyWhereUniqueInput
  }) => Maybe<Currency>
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: (args: {
    /**
     * Updates to document content
     */
    data: AssetUpdateManyInput
    /**
     * Documents to apply update on
     */
    where?: Maybe<AssetManyWhereInput>
  }) => BatchPayload
  /**
   * Update many Asset documents
   */
  updateManyAssetsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    /**
     * Updates to document content
     */
    data: AssetUpdateManyInput
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to apply update on
     */
    where?: Maybe<AssetManyWhereInput>
  }) => AssetConnection
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  updateManyCategories: (args: {
    /**
     * Updates to document content
     */
    data: CategoryUpdateManyInput
    /**
     * Documents to apply update on
     */
    where?: Maybe<CategoryManyWhereInput>
  }) => BatchPayload
  /**
   * Update many Category documents
   */
  updateManyCategoriesConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    /**
     * Updates to document content
     */
    data: CategoryUpdateManyInput
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to apply update on
     */
    where?: Maybe<CategoryManyWhereInput>
  }) => CategoryConnection
  /**
   * Update many collections
   * @deprecated Please use the new paginated many mutation (updateManyCollectionsConnection)
   */
  updateManyCollections: (args: {
    /**
     * Updates to document content
     */
    data: CollectionUpdateManyInput
    /**
     * Documents to apply update on
     */
    where?: Maybe<CollectionManyWhereInput>
  }) => BatchPayload
  /**
   * Update many Collection documents
   */
  updateManyCollectionsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    /**
     * Updates to document content
     */
    data: CollectionUpdateManyInput
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to apply update on
     */
    where?: Maybe<CollectionManyWhereInput>
  }) => CollectionConnection
  /**
   * Update many currencies
   * @deprecated Please use the new paginated many mutation (updateManyCurrenciesConnection)
   */
  updateManyCurrencies: (args: {
    /**
     * Updates to document content
     */
    data: CurrencyUpdateManyInput
    /**
     * Documents to apply update on
     */
    where?: Maybe<CurrencyManyWhereInput>
  }) => BatchPayload
  /**
   * Update many Currency documents
   */
  updateManyCurrenciesConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    /**
     * Updates to document content
     */
    data: CurrencyUpdateManyInput
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to apply update on
     */
    where?: Maybe<CurrencyManyWhereInput>
  }) => CurrencyConnection
  /**
   * Update many orderItems
   * @deprecated Please use the new paginated many mutation (updateManyOrderItemsConnection)
   */
  updateManyOrderItems: (args: {
    /**
     * Updates to document content
     */
    data: OrderItemUpdateManyInput
    /**
     * Documents to apply update on
     */
    where?: Maybe<OrderItemManyWhereInput>
  }) => BatchPayload
  /**
   * Update many OrderItem documents
   */
  updateManyOrderItemsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    /**
     * Updates to document content
     */
    data: OrderItemUpdateManyInput
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to apply update on
     */
    where?: Maybe<OrderItemManyWhereInput>
  }) => OrderItemConnection
  /**
   * Update many orders
   * @deprecated Please use the new paginated many mutation (updateManyOrdersConnection)
   */
  updateManyOrders: (args: {
    /**
     * Updates to document content
     */
    data: OrderUpdateManyInput
    /**
     * Documents to apply update on
     */
    where?: Maybe<OrderManyWhereInput>
  }) => BatchPayload
  /**
   * Update many Order documents
   */
  updateManyOrdersConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    /**
     * Updates to document content
     */
    data: OrderUpdateManyInput
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to apply update on
     */
    where?: Maybe<OrderManyWhereInput>
  }) => OrderConnection
  /**
   * Update many productColorVariants
   * @deprecated Please use the new paginated many mutation (updateManyProductColorVariantsConnection)
   */
  updateManyProductColorVariants: (args: {
    /**
     * Updates to document content
     */
    data: ProductColorVariantUpdateManyInput
    /**
     * Documents to apply update on
     */
    where?: Maybe<ProductColorVariantManyWhereInput>
  }) => BatchPayload
  /**
   * Update many ProductColorVariant documents
   */
  updateManyProductColorVariantsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    /**
     * Updates to document content
     */
    data: ProductColorVariantUpdateManyInput
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to apply update on
     */
    where?: Maybe<ProductColorVariantManyWhereInput>
  }) => ProductColorVariantConnection
  /**
   * Update many productSizeColorVariants
   * @deprecated Please use the new paginated many mutation (updateManyProductSizeColorVariantsConnection)
   */
  updateManyProductSizeColorVariants: (args: {
    /**
     * Updates to document content
     */
    data: ProductSizeColorVariantUpdateManyInput
    /**
     * Documents to apply update on
     */
    where?: Maybe<ProductSizeColorVariantManyWhereInput>
  }) => BatchPayload
  /**
   * Update many ProductSizeColorVariant documents
   */
  updateManyProductSizeColorVariantsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    /**
     * Updates to document content
     */
    data: ProductSizeColorVariantUpdateManyInput
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to apply update on
     */
    where?: Maybe<ProductSizeColorVariantManyWhereInput>
  }) => ProductSizeColorVariantConnection
  /**
   * Update many productSizeVariants
   * @deprecated Please use the new paginated many mutation (updateManyProductSizeVariantsConnection)
   */
  updateManyProductSizeVariants: (args: {
    /**
     * Updates to document content
     */
    data: ProductSizeVariantUpdateManyInput
    /**
     * Documents to apply update on
     */
    where?: Maybe<ProductSizeVariantManyWhereInput>
  }) => BatchPayload
  /**
   * Update many ProductSizeVariant documents
   */
  updateManyProductSizeVariantsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    /**
     * Updates to document content
     */
    data: ProductSizeVariantUpdateManyInput
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to apply update on
     */
    where?: Maybe<ProductSizeVariantManyWhereInput>
  }) => ProductSizeVariantConnection
  /**
   * Update many products
   * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
   */
  updateManyProducts: (args: {
    /**
     * Updates to document content
     */
    data: ProductUpdateManyInput
    /**
     * Documents to apply update on
     */
    where?: Maybe<ProductManyWhereInput>
  }) => BatchPayload
  /**
   * Update many Product documents
   */
  updateManyProductsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    /**
     * Updates to document content
     */
    data: ProductUpdateManyInput
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to apply update on
     */
    where?: Maybe<ProductManyWhereInput>
  }) => ProductConnection
  /**
   * Update many reviews
   * @deprecated Please use the new paginated many mutation (updateManyReviewsConnection)
   */
  updateManyReviews: (args: {
    /**
     * Updates to document content
     */
    data: ReviewUpdateManyInput
    /**
     * Documents to apply update on
     */
    where?: Maybe<ReviewManyWhereInput>
  }) => BatchPayload
  /**
   * Update many Review documents
   */
  updateManyReviewsConnection: (args: {
    after?: Maybe<Scalars["ID"]>
    before?: Maybe<Scalars["ID"]>
    /**
     * Updates to document content
     */
    data: ReviewUpdateManyInput
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    skip?: Maybe<Scalars["Int"]>
    /**
     * Documents to apply update on
     */
    where?: Maybe<ReviewManyWhereInput>
  }) => ReviewConnection
  /**
   * Update one order
   */
  updateOrder: (args: {
    data: OrderUpdateInput
    where: OrderWhereUniqueInput
  }) => Maybe<Order>
  /**
   * Update one orderItem
   */
  updateOrderItem: (args: {
    data: OrderItemUpdateInput
    where: OrderItemWhereUniqueInput
  }) => Maybe<OrderItem>
  /**
   * Update one product
   */
  updateProduct: (args: {
    data: ProductUpdateInput
    where: ProductWhereUniqueInput
  }) => Maybe<Product>
  /**
   * Update one productColorVariant
   */
  updateProductColorVariant: (args: {
    data: ProductColorVariantUpdateInput
    where: ProductColorVariantWhereUniqueInput
  }) => Maybe<ProductColorVariant>
  /**
   * Update one productSizeColorVariant
   */
  updateProductSizeColorVariant: (args: {
    data: ProductSizeColorVariantUpdateInput
    where: ProductSizeColorVariantWhereUniqueInput
  }) => Maybe<ProductSizeColorVariant>
  /**
   * Update one productSizeVariant
   */
  updateProductSizeVariant: (args: {
    data: ProductSizeVariantUpdateInput
    where: ProductSizeVariantWhereUniqueInput
  }) => Maybe<ProductSizeVariant>
  /**
   * Update one review
   */
  updateReview: (args: {
    data: ReviewUpdateInput
    where: ReviewWhereUniqueInput
  }) => Maybe<Review>
  /**
   * Update one scheduledRelease
   */
  updateScheduledRelease: (args: {
    data: ScheduledReleaseUpdateInput
    where: ScheduledReleaseWhereUniqueInput
  }) => Maybe<ScheduledRelease>
  /**
   * Upsert one asset
   */
  upsertAsset: (args: {
    upsert: AssetUpsertInput
    where: AssetWhereUniqueInput
  }) => Maybe<Asset>
  /**
   * Upsert one category
   */
  upsertCategory: (args: {
    upsert: CategoryUpsertInput
    where: CategoryWhereUniqueInput
  }) => Maybe<Category>
  /**
   * Upsert one collection
   */
  upsertCollection: (args: {
    upsert: CollectionUpsertInput
    where: CollectionWhereUniqueInput
  }) => Maybe<Collection>
  /**
   * Upsert one currency
   */
  upsertCurrency: (args: {
    upsert: CurrencyUpsertInput
    where: CurrencyWhereUniqueInput
  }) => Maybe<Currency>
  /**
   * Upsert one order
   */
  upsertOrder: (args: {
    upsert: OrderUpsertInput
    where: OrderWhereUniqueInput
  }) => Maybe<Order>
  /**
   * Upsert one orderItem
   */
  upsertOrderItem: (args: {
    upsert: OrderItemUpsertInput
    where: OrderItemWhereUniqueInput
  }) => Maybe<OrderItem>
  /**
   * Upsert one product
   */
  upsertProduct: (args: {
    upsert: ProductUpsertInput
    where: ProductWhereUniqueInput
  }) => Maybe<Product>
  /**
   * Upsert one productColorVariant
   */
  upsertProductColorVariant: (args: {
    upsert: ProductColorVariantUpsertInput
    where: ProductColorVariantWhereUniqueInput
  }) => Maybe<ProductColorVariant>
  /**
   * Upsert one productSizeColorVariant
   */
  upsertProductSizeColorVariant: (args: {
    upsert: ProductSizeColorVariantUpsertInput
    where: ProductSizeColorVariantWhereUniqueInput
  }) => Maybe<ProductSizeColorVariant>
  /**
   * Upsert one productSizeVariant
   */
  upsertProductSizeVariant: (args: {
    upsert: ProductSizeVariantUpsertInput
    where: ProductSizeVariantWhereUniqueInput
  }) => Maybe<ProductSizeVariant>
  /**
   * Upsert one review
   */
  upsertReview: (args: {
    upsert: ReviewUpsertInput
    where: ReviewWhereUniqueInput
  }) => Maybe<Review>
}

export interface Query {
  __typename?: "Query"
  /**
   * Retrieve a single asset
   */
  asset: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `Asset` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where: AssetWhereUniqueInput
  }) => Maybe<Asset>
  /**
   * Retrieve document version
   */
  assetVersion: (args: { where: VersionWhereInput }) => Maybe<DocumentVersion>
  /**
   * Retrieve multiple assets
   */
  assets: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `Asset` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<AssetOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<AssetWhereInput>
  }) => Array<Asset>
  /**
   * Retrieve multiple assets using the Relay connection interface
   */
  assetsConnection: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `Asset` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<AssetOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<AssetWhereInput>
  }) => AssetConnection
  /**
   * Retrieve multiple categories
   */
  categories: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `Category` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<CategoryOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<CategoryWhereInput>
  }) => Array<Category>
  /**
   * Retrieve multiple categories using the Relay connection interface
   */
  categoriesConnection: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `Category` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<CategoryOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<CategoryWhereInput>
  }) => CategoryConnection
  /**
   * Retrieve a single category
   */
  category: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `Category` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where: CategoryWhereUniqueInput
  }) => Maybe<Category>
  /**
   * Retrieve document version
   */
  categoryVersion: (args: {
    where: VersionWhereInput
  }) => Maybe<DocumentVersion>
  /**
   * Retrieve a single collection
   */
  collection: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `Collection` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where: CollectionWhereUniqueInput
  }) => Maybe<Collection>
  /**
   * Retrieve document version
   */
  collectionVersion: (args: {
    where: VersionWhereInput
  }) => Maybe<DocumentVersion>
  /**
   * Retrieve multiple collections
   */
  collections: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `Collection` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<CollectionOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<CollectionWhereInput>
  }) => Array<Collection>
  /**
   * Retrieve multiple collections using the Relay connection interface
   */
  collectionsConnection: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `Collection` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<CollectionOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<CollectionWhereInput>
  }) => CollectionConnection
  /**
   * Retrieve multiple currencies
   */
  currencies: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `Currency` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<CurrencyOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<CurrencyWhereInput>
  }) => Array<Currency>
  /**
   * Retrieve multiple currencies using the Relay connection interface
   */
  currenciesConnection: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `Currency` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<CurrencyOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<CurrencyWhereInput>
  }) => CurrencyConnection
  /**
   * Retrieve a single currency
   */
  currency: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `Currency` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where: CurrencyWhereUniqueInput
  }) => Maybe<Currency>
  /**
   * Retrieve document version
   */
  currencyVersion: (args: {
    where: VersionWhereInput
  }) => Maybe<DocumentVersion>
  /**
   * Fetches an object given its ID
   */
  node: (args: {
    /**
     * The ID of an object
     */
    id: Scalars["ID"]
    /**
     * Defines which locales should be returned.
     *
     * Note that `Node` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
  }) => Maybe<Node>
  /**
   * Retrieve a single order
   */
  order: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `Order` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where: OrderWhereUniqueInput
  }) => Maybe<Order>
  /**
   * Retrieve a single orderItem
   */
  orderItem: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `OrderItem` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where: OrderItemWhereUniqueInput
  }) => Maybe<OrderItem>
  /**
   * Retrieve document version
   */
  orderItemVersion: (args: {
    where: VersionWhereInput
  }) => Maybe<DocumentVersion>
  /**
   * Retrieve multiple orderItems
   */
  orderItems: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `OrderItem` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<OrderItemOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<OrderItemWhereInput>
  }) => Array<OrderItem>
  /**
   * Retrieve multiple orderItems using the Relay connection interface
   */
  orderItemsConnection: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `OrderItem` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<OrderItemOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<OrderItemWhereInput>
  }) => OrderItemConnection
  /**
   * Retrieve document version
   */
  orderVersion: (args: { where: VersionWhereInput }) => Maybe<DocumentVersion>
  /**
   * Retrieve multiple orders
   */
  orders: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `Order` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<OrderOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<OrderWhereInput>
  }) => Array<Order>
  /**
   * Retrieve multiple orders using the Relay connection interface
   */
  ordersConnection: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `Order` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<OrderOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<OrderWhereInput>
  }) => OrderConnection
  /**
   * Retrieve a single product
   */
  product: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `Product` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where: ProductWhereUniqueInput
  }) => Maybe<Product>
  /**
   * Retrieve a single productColorVariant
   */
  productColorVariant: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `ProductColorVariant` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where: ProductColorVariantWhereUniqueInput
  }) => Maybe<ProductColorVariant>
  /**
   * Retrieve document version
   */
  productColorVariantVersion: (args: {
    where: VersionWhereInput
  }) => Maybe<DocumentVersion>
  /**
   * Retrieve multiple productColorVariants
   */
  productColorVariants: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `ProductColorVariant` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ProductColorVariantOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<ProductColorVariantWhereInput>
  }) => Array<ProductColorVariant>
  /**
   * Retrieve multiple productColorVariants using the Relay connection interface
   */
  productColorVariantsConnection: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `ProductColorVariant` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ProductColorVariantOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<ProductColorVariantWhereInput>
  }) => ProductColorVariantConnection
  /**
   * Retrieve a single productSizeColorVariant
   */
  productSizeColorVariant: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `ProductSizeColorVariant` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where: ProductSizeColorVariantWhereUniqueInput
  }) => Maybe<ProductSizeColorVariant>
  /**
   * Retrieve document version
   */
  productSizeColorVariantVersion: (args: {
    where: VersionWhereInput
  }) => Maybe<DocumentVersion>
  /**
   * Retrieve multiple productSizeColorVariants
   */
  productSizeColorVariants: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `ProductSizeColorVariant` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ProductSizeColorVariantOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<ProductSizeColorVariantWhereInput>
  }) => Array<ProductSizeColorVariant>
  /**
   * Retrieve multiple productSizeColorVariants using the Relay connection interface
   */
  productSizeColorVariantsConnection: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `ProductSizeColorVariant` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ProductSizeColorVariantOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<ProductSizeColorVariantWhereInput>
  }) => ProductSizeColorVariantConnection
  /**
   * Retrieve a single productSizeVariant
   */
  productSizeVariant: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `ProductSizeVariant` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where: ProductSizeVariantWhereUniqueInput
  }) => Maybe<ProductSizeVariant>
  /**
   * Retrieve document version
   */
  productSizeVariantVersion: (args: {
    where: VersionWhereInput
  }) => Maybe<DocumentVersion>
  /**
   * Retrieve multiple productSizeVariants
   */
  productSizeVariants: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `ProductSizeVariant` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ProductSizeVariantOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<ProductSizeVariantWhereInput>
  }) => Array<ProductSizeVariant>
  /**
   * Retrieve multiple productSizeVariants using the Relay connection interface
   */
  productSizeVariantsConnection: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `ProductSizeVariant` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ProductSizeVariantOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<ProductSizeVariantWhereInput>
  }) => ProductSizeVariantConnection
  /**
   * Retrieve document version
   */
  productVersion: (args: { where: VersionWhereInput }) => Maybe<DocumentVersion>
  /**
   * Retrieve multiple products
   */
  products: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `Product` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ProductOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<ProductWhereInput>
  }) => Array<Product>
  /**
   * Retrieve multiple products using the Relay connection interface
   */
  productsConnection: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `Product` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ProductOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<ProductWhereInput>
  }) => ProductConnection
  /**
   * Retrieve a single review
   */
  review: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `Review` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where: ReviewWhereUniqueInput
  }) => Maybe<Review>
  /**
   * Retrieve document version
   */
  reviewVersion: (args: { where: VersionWhereInput }) => Maybe<DocumentVersion>
  /**
   * Retrieve multiple reviews
   */
  reviews: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `Review` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ReviewOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<ReviewWhereInput>
  }) => Array<Review>
  /**
   * Retrieve multiple reviews using the Relay connection interface
   */
  reviewsConnection: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `Review` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ReviewOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<ReviewWhereInput>
  }) => ReviewConnection
  /**
   * Retrieve a single scheduledOperation
   */
  scheduledOperation: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `ScheduledOperation` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where: ScheduledOperationWhereUniqueInput
  }) => Maybe<ScheduledOperation>
  /**
   * Retrieve multiple scheduledOperations
   */
  scheduledOperations: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `ScheduledOperation` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ScheduledOperationOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<ScheduledOperationWhereInput>
  }) => Array<ScheduledOperation>
  /**
   * Retrieve multiple scheduledOperations using the Relay connection interface
   */
  scheduledOperationsConnection: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `ScheduledOperation` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ScheduledOperationOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<ScheduledOperationWhereInput>
  }) => ScheduledOperationConnection
  /**
   * Retrieve a single scheduledRelease
   */
  scheduledRelease: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `ScheduledRelease` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where: ScheduledReleaseWhereUniqueInput
  }) => Maybe<ScheduledRelease>
  /**
   * Retrieve multiple scheduledReleases
   */
  scheduledReleases: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `ScheduledRelease` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ScheduledReleaseOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<ScheduledReleaseWhereInput>
  }) => Array<ScheduledRelease>
  /**
   * Retrieve multiple scheduledReleases using the Relay connection interface
   */
  scheduledReleasesConnection: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `ScheduledRelease` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<ScheduledReleaseOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<ScheduledReleaseWhereInput>
  }) => ScheduledReleaseConnection
  /**
   * Retrieve a single user
   */
  user: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `User` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where: UserWhereUniqueInput
  }) => Maybe<User>
  /**
   * Retrieve multiple users
   */
  users: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `User` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<UserOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<UserWhereInput>
  }) => Array<User>
  /**
   * Retrieve multiple users using the Relay connection interface
   */
  usersConnection: (args: {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["Int"]>
    last?: Maybe<Scalars["Int"]>
    /**
     * Defines which locales should be returned.
     *
     * Note that `User` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>
    orderBy?: Maybe<UserOrderByInput>
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>
    where?: Maybe<UserWhereInput>
  }) => UserConnection
}

export interface Subscription {
  __typename?: "Subscription"
}

export interface SchemaObjectTypes {
  Aggregate: Aggregate
  Asset: Asset
  AssetConnection: AssetConnection
  AssetEdge: AssetEdge
  BatchPayload: BatchPayload
  Category: Category
  CategoryConnection: CategoryConnection
  CategoryEdge: CategoryEdge
  Collection: Collection
  CollectionConnection: CollectionConnection
  CollectionEdge: CollectionEdge
  Color: Color
  Currency: Currency
  CurrencyConnection: CurrencyConnection
  CurrencyEdge: CurrencyEdge
  DocumentVersion: DocumentVersion
  Location: Location
  Mutation: Mutation
  Order: Order
  OrderConnection: OrderConnection
  OrderEdge: OrderEdge
  OrderItem: OrderItem
  OrderItemConnection: OrderItemConnection
  OrderItemEdge: OrderItemEdge
  PageInfo: PageInfo
  Product: Product
  ProductColorVariant: ProductColorVariant
  ProductColorVariantConnection: ProductColorVariantConnection
  ProductColorVariantEdge: ProductColorVariantEdge
  ProductConnection: ProductConnection
  ProductEdge: ProductEdge
  ProductSizeColorVariant: ProductSizeColorVariant
  ProductSizeColorVariantConnection: ProductSizeColorVariantConnection
  ProductSizeColorVariantEdge: ProductSizeColorVariantEdge
  ProductSizeVariant: ProductSizeVariant
  ProductSizeVariantConnection: ProductSizeVariantConnection
  ProductSizeVariantEdge: ProductSizeVariantEdge
  Query: Query
  RGBA: RGBA
  Review: Review
  ReviewConnection: ReviewConnection
  ReviewEdge: ReviewEdge
  RichText: RichText
  ScheduledOperation: ScheduledOperation
  ScheduledOperationConnection: ScheduledOperationConnection
  ScheduledOperationEdge: ScheduledOperationEdge
  ScheduledRelease: ScheduledRelease
  ScheduledReleaseConnection: ScheduledReleaseConnection
  ScheduledReleaseEdge: ScheduledReleaseEdge
  Subscription: Subscription
  User: User
  UserConnection: UserConnection
  UserEdge: UserEdge
  Version: Version
}
export type SchemaObjectTypesNames =
  | "Aggregate"
  | "Asset"
  | "AssetConnection"
  | "AssetEdge"
  | "BatchPayload"
  | "Category"
  | "CategoryConnection"
  | "CategoryEdge"
  | "Collection"
  | "CollectionConnection"
  | "CollectionEdge"
  | "Color"
  | "Currency"
  | "CurrencyConnection"
  | "CurrencyEdge"
  | "DocumentVersion"
  | "Location"
  | "Mutation"
  | "Order"
  | "OrderConnection"
  | "OrderEdge"
  | "OrderItem"
  | "OrderItemConnection"
  | "OrderItemEdge"
  | "PageInfo"
  | "Product"
  | "ProductColorVariant"
  | "ProductColorVariantConnection"
  | "ProductColorVariantEdge"
  | "ProductConnection"
  | "ProductEdge"
  | "ProductSizeColorVariant"
  | "ProductSizeColorVariantConnection"
  | "ProductSizeColorVariantEdge"
  | "ProductSizeVariant"
  | "ProductSizeVariantConnection"
  | "ProductSizeVariantEdge"
  | "Query"
  | "RGBA"
  | "Review"
  | "ReviewConnection"
  | "ReviewEdge"
  | "RichText"
  | "ScheduledOperation"
  | "ScheduledOperationConnection"
  | "ScheduledOperationEdge"
  | "ScheduledRelease"
  | "ScheduledReleaseConnection"
  | "ScheduledReleaseEdge"
  | "Subscription"
  | "User"
  | "UserConnection"
  | "UserEdge"
  | "Version"

export interface $Node {
  Asset?: Asset
  Category?: Category
  Collection?: Collection
  Currency?: Currency
  Order?: Order
  OrderItem?: OrderItem
  Product?: Product
  ProductColorVariant?: ProductColorVariant
  ProductSizeColorVariant?: ProductSizeColorVariant
  ProductSizeVariant?: ProductSizeVariant
  Review?: Review
  ScheduledOperation?: ScheduledOperation
  ScheduledRelease?: ScheduledRelease
  User?: User
}

export interface $ProductVariants {
  ProductColorVariant?: ProductColorVariant
  ProductSizeColorVariant?: ProductSizeColorVariant
  ProductSizeVariant?: ProductSizeVariant
}

export interface $ScheduledOperationAffectedDocument {
  Asset?: Asset
  Category?: Category
  Collection?: Collection
  Currency?: Currency
  Order?: Order
  OrderItem?: OrderItem
  Product?: Product
  ProductColorVariant?: ProductColorVariant
  ProductSizeColorVariant?: ProductSizeColorVariant
  ProductSizeVariant?: ProductSizeVariant
  Review?: Review
}

export interface GeneratedSchema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined
}

export interface ScalarsEnums extends MakeNullable<Scalars> {
  AssetOrderByInput: AssetOrderByInput | undefined
  CategoryOrderByInput: CategoryOrderByInput | undefined
  CollectionOrderByInput: CollectionOrderByInput | undefined
  CurrencyOrderByInput: CurrencyOrderByInput | undefined
  DocumentFileTypes: DocumentFileTypes | undefined
  ImageFit: ImageFit | undefined
  Locale: Locale | undefined
  OrderItemOrderByInput: OrderItemOrderByInput | undefined
  OrderOrderByInput: OrderOrderByInput | undefined
  ProductColor: ProductColor | undefined
  ProductColorVariantOrderByInput: ProductColorVariantOrderByInput | undefined
  ProductOrderByInput: ProductOrderByInput | undefined
  ProductSize: ProductSize | undefined
  ProductSizeColorVariantOrderByInput:
    | ProductSizeColorVariantOrderByInput
    | undefined
  ProductSizeVariantOrderByInput: ProductSizeVariantOrderByInput | undefined
  ReviewOrderByInput: ReviewOrderByInput | undefined
  ScheduledOperationOrderByInput: ScheduledOperationOrderByInput | undefined
  ScheduledOperationStatus: ScheduledOperationStatus | undefined
  ScheduledReleaseOrderByInput: ScheduledReleaseOrderByInput | undefined
  ScheduledReleaseStatus: ScheduledReleaseStatus | undefined
  Stage: Stage | undefined
  SystemDateTimeFieldVariation: SystemDateTimeFieldVariation | undefined
  UserKind: UserKind | undefined
  UserOrderByInput: UserOrderByInput | undefined
  _FilterKind: _FilterKind | undefined
  _MutationInputFieldKind: _MutationInputFieldKind | undefined
  _MutationKind: _MutationKind | undefined
  _OrderDirection: _OrderDirection | undefined
  _RelationInputCardinality: _RelationInputCardinality | undefined
  _RelationInputKind: _RelationInputKind | undefined
  _RelationKind: _RelationKind | undefined
  _SystemDateTimeFieldVariation: _SystemDateTimeFieldVariation | undefined
}
