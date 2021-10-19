/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  /** Rewrites the filename to be this pretty string. Do not include `/` or `.` */
  prettyName?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  crop?: Maybe<Scalars['String']>;
  aspect_ratio?: Maybe<Scalars['String']>;
  gravity?: Maybe<Scalars['String']>;
  zoom?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['String']>;
  y?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  fetch_format?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['String']>;
  angle?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  opacity?: Maybe<Scalars['String']>;
  border?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  overlay?: Maybe<Scalars['String']>;
  underlay?: Maybe<Scalars['String']>;
  default_image?: Maybe<Scalars['String']>;
  delay?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  color_space?: Maybe<Scalars['String']>;
  dpr?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['String']>;
  density?: Maybe<Scalars['String']>;
  flags?: Maybe<Scalars['String']>;
  transformation?: Maybe<Scalars['String']>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  id?: Maybe<Scalars['ID']>;
  filename?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  publicUrl?: Maybe<Scalars['String']>;
  publicUrlTransformed?: Maybe<Scalars['String']>;
};


export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: Maybe<CloudinaryImageFormat>;
};

export type CreateInitialUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

/** A keystone list */
export type Image = {
  __typename?: 'Image';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  image?: Maybe<CloudinaryImage_File>;
};

export type ImageCreateInput = {
  name?: Maybe<Scalars['String']>;
  project?: Maybe<ProjectRelateToOneInput>;
  image?: Maybe<Scalars['Upload']>;
};

export type ImageOrderByInput = {
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
};

export type ImageRelateToManyInput = {
  create?: Maybe<Array<Maybe<ImageCreateInput>>>;
  connect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ImageUpdateInput = {
  name?: Maybe<Scalars['String']>;
  project?: Maybe<ProjectRelateToOneInput>;
  image?: Maybe<Scalars['Upload']>;
};

export type ImageWhereInput = {
  AND?: Maybe<Array<ImageWhereInput>>;
  OR?: Maybe<Array<ImageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  project?: Maybe<ProjectWhereInput>;
  project_is_null?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['String']>;
  image_not?: Maybe<Scalars['String']>;
  image_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  image_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ImageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ImagesCreateInput = {
  data?: Maybe<ImageCreateInput>;
};

export type ImagesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ImageUpdateInput>;
};


export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSignout: Scalars['Boolean'];
  enableSessionItem: Scalars['Boolean'];
  lists: Array<KeystoneAdminUiListMeta>;
  list?: Maybe<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  path: Scalars['String'];
  label: Scalars['String'];
  isOrderable: Scalars['Boolean'];
  fieldMeta?: Maybe<Scalars['JSON']>;
  viewsIndex: Scalars['Int'];
  customViewsIndex?: Maybe<Scalars['Int']>;
  createView: KeystoneAdminUiFieldMetaCreateView;
  listView: KeystoneAdminUiFieldMetaListView;
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars['ID'];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Read = 'read',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Read = 'read',
  Hidden = 'hidden'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  key: Scalars['String'];
  itemQueryName: Scalars['String'];
  listQueryName: Scalars['String'];
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  path: Scalars['String'];
  label: Scalars['String'];
  singular: Scalars['String'];
  plural: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  initialColumns: Array<Scalars['String']>;
  pageSize: Scalars['Int'];
  labelField: Scalars['String'];
  fields: Array<KeystoneAdminUiFieldMeta>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  field: Scalars['String'];
  direction: KeystoneAdminUiSortDirection;
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a single User item. */
  createUser?: Maybe<User>;
  /** Create multiple User items. */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /** Update a single User item by ID. */
  updateUser?: Maybe<User>;
  /** Update multiple User items by ID. */
  updateUsers?: Maybe<Array<Maybe<User>>>;
  /** Delete a single User item by ID. */
  deleteUser?: Maybe<User>;
  /** Delete multiple User items by ID. */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  /** Create a single Theme item. */
  createTheme?: Maybe<Theme>;
  /** Create multiple Theme items. */
  createThemes?: Maybe<Array<Maybe<Theme>>>;
  /** Update a single Theme item by ID. */
  updateTheme?: Maybe<Theme>;
  /** Update multiple Theme items by ID. */
  updateThemes?: Maybe<Array<Maybe<Theme>>>;
  /** Delete a single Theme item by ID. */
  deleteTheme?: Maybe<Theme>;
  /** Delete multiple Theme items by ID. */
  deleteThemes?: Maybe<Array<Maybe<Theme>>>;
  /** Create a single Project item. */
  createProject?: Maybe<Project>;
  /** Create multiple Project items. */
  createProjects?: Maybe<Array<Maybe<Project>>>;
  /** Update a single Project item by ID. */
  updateProject?: Maybe<Project>;
  /** Update multiple Project items by ID. */
  updateProjects?: Maybe<Array<Maybe<Project>>>;
  /** Delete a single Project item by ID. */
  deleteProject?: Maybe<Project>;
  /** Delete multiple Project items by ID. */
  deleteProjects?: Maybe<Array<Maybe<Project>>>;
  /** Create a single Image item. */
  createImage?: Maybe<Image>;
  /** Create multiple Image items. */
  createImages?: Maybe<Array<Maybe<Image>>>;
  /** Update a single Image item by ID. */
  updateImage?: Maybe<Image>;
  /** Update multiple Image items by ID. */
  updateImages?: Maybe<Array<Maybe<Image>>>;
  /** Delete a single Image item by ID. */
  deleteImage?: Maybe<Image>;
  /** Delete multiple Image items by ID. */
  deleteImages?: Maybe<Array<Maybe<Image>>>;
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  endSession: Scalars['Boolean'];
};


export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>;
};


export type MutationCreateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersCreateInput>>>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};


export type MutationUpdateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersUpdateInput>>>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateThemeArgs = {
  data?: Maybe<ThemeCreateInput>;
};


export type MutationCreateThemesArgs = {
  data?: Maybe<Array<Maybe<ThemesCreateInput>>>;
};


export type MutationUpdateThemeArgs = {
  id: Scalars['ID'];
  data?: Maybe<ThemeUpdateInput>;
};


export type MutationUpdateThemesArgs = {
  data?: Maybe<Array<Maybe<ThemesUpdateInput>>>;
};


export type MutationDeleteThemeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteThemesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateProjectArgs = {
  data?: Maybe<ProjectCreateInput>;
};


export type MutationCreateProjectsArgs = {
  data?: Maybe<Array<Maybe<ProjectsCreateInput>>>;
};


export type MutationUpdateProjectArgs = {
  id: Scalars['ID'];
  data?: Maybe<ProjectUpdateInput>;
};


export type MutationUpdateProjectsArgs = {
  data?: Maybe<Array<Maybe<ProjectsUpdateInput>>>;
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProjectsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateImageArgs = {
  data?: Maybe<ImageCreateInput>;
};


export type MutationCreateImagesArgs = {
  data?: Maybe<Array<Maybe<ImagesCreateInput>>>;
};


export type MutationUpdateImageArgs = {
  id: Scalars['ID'];
  data?: Maybe<ImageUpdateInput>;
};


export type MutationUpdateImagesArgs = {
  data?: Maybe<Array<Maybe<ImagesUpdateInput>>>;
};


export type MutationDeleteImageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteImagesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum PasswordAuthErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  SecretNotSet = 'SECRET_NOT_SET',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  SecretMismatch = 'SECRET_MISMATCH'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

/** A keystone list */
export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  themes?: Maybe<Array<Theme>>;
  /** @deprecated This query will be removed in a future version. Please use themesCount instead. */
  _themesMeta?: Maybe<_QueryMeta>;
  themesCount?: Maybe<Scalars['Int']>;
  images?: Maybe<Array<Image>>;
  /** @deprecated This query will be removed in a future version. Please use imagesCount instead. */
  _imagesMeta?: Maybe<_QueryMeta>;
  imagesCount?: Maybe<Scalars['Int']>;
};


/** A keystone list */
export type ProjectThemesArgs = {
  where?: ThemeWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortThemesBy>>;
  orderBy?: Array<ThemeOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type Project_ThemesMetaArgs = {
  where?: ThemeWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortThemesBy>>;
  orderBy?: Array<ThemeOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type ProjectThemesCountArgs = {
  where?: ThemeWhereInput;
};


/** A keystone list */
export type ProjectImagesArgs = {
  where?: ImageWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortImagesBy>>;
  orderBy?: Array<ImageOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type Project_ImagesMetaArgs = {
  where?: ImageWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortImagesBy>>;
  orderBy?: Array<ImageOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type ProjectImagesCountArgs = {
  where?: ImageWhereInput;
};

export type ProjectCreateInput = {
  name?: Maybe<Scalars['String']>;
  themes?: Maybe<ThemeRelateToManyInput>;
  images?: Maybe<ImageRelateToManyInput>;
};

export type ProjectOrderByInput = {
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
};

export type ProjectRelateToOneInput = {
  create?: Maybe<ProjectCreateInput>;
  connect?: Maybe<ProjectWhereUniqueInput>;
  disconnect?: Maybe<ProjectWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ProjectUpdateInput = {
  name?: Maybe<Scalars['String']>;
  themes?: Maybe<ThemeRelateToManyInput>;
  images?: Maybe<ImageRelateToManyInput>;
};

export type ProjectWhereInput = {
  AND?: Maybe<Array<ProjectWhereInput>>;
  OR?: Maybe<Array<ProjectWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** condition must be true for all nodes */
  themes_every?: Maybe<ThemeWhereInput>;
  /** condition must be true for at least 1 node */
  themes_some?: Maybe<ThemeWhereInput>;
  /** condition must be false for all nodes */
  themes_none?: Maybe<ThemeWhereInput>;
  /** condition must be true for all nodes */
  images_every?: Maybe<ImageWhereInput>;
  /** condition must be true for at least 1 node */
  images_some?: Maybe<ImageWhereInput>;
  /** condition must be false for all nodes */
  images_none?: Maybe<ImageWhereInput>;
};

export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ProjectsCreateInput = {
  data?: Maybe<ProjectCreateInput>;
};

export type ProjectsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ProjectUpdateInput>;
};

export type Query = {
  __typename?: 'Query';
  /** Search for all User items which match the where clause. */
  allUsers?: Maybe<Array<User>>;
  /** Search for the User item with the matching ID. */
  User?: Maybe<User>;
  /**
   * Perform a meta-query on all User items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use usersCount instead.
   */
  _allUsersMeta?: Maybe<_QueryMeta>;
  usersCount?: Maybe<Scalars['Int']>;
  /** Search for all Theme items which match the where clause. */
  allThemes?: Maybe<Array<Theme>>;
  /** Search for the Theme item with the matching ID. */
  Theme?: Maybe<Theme>;
  /**
   * Perform a meta-query on all Theme items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use themesCount instead.
   */
  _allThemesMeta?: Maybe<_QueryMeta>;
  themesCount?: Maybe<Scalars['Int']>;
  /** Search for all Project items which match the where clause. */
  allProjects?: Maybe<Array<Project>>;
  /** Search for the Project item with the matching ID. */
  Project?: Maybe<Project>;
  /**
   * Perform a meta-query on all Project items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use projectsCount instead.
   */
  _allProjectsMeta?: Maybe<_QueryMeta>;
  projectsCount?: Maybe<Scalars['Int']>;
  /** Search for all Image items which match the where clause. */
  allImages?: Maybe<Array<Image>>;
  /** Search for the Image item with the matching ID. */
  Image?: Maybe<Image>;
  /**
   * Perform a meta-query on all Image items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use imagesCount instead.
   */
  _allImagesMeta?: Maybe<_QueryMeta>;
  imagesCount?: Maybe<Scalars['Int']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
};


export type QueryAllUsersArgs = {
  where?: UserWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Array<UserOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type Query_AllUsersMetaArgs = {
  where?: UserWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Array<UserOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryAllThemesArgs = {
  where?: ThemeWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortThemesBy>>;
  orderBy?: Array<ThemeOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryThemeArgs = {
  where: ThemeWhereUniqueInput;
};


export type Query_AllThemesMetaArgs = {
  where?: ThemeWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortThemesBy>>;
  orderBy?: Array<ThemeOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryThemesCountArgs = {
  where?: ThemeWhereInput;
};


export type QueryAllProjectsArgs = {
  where?: ProjectWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProjectsBy>>;
  orderBy?: Array<ProjectOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type Query_AllProjectsMetaArgs = {
  where?: ProjectWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProjectsBy>>;
  orderBy?: Array<ProjectOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryProjectsCountArgs = {
  where?: ProjectWhereInput;
};


export type QueryAllImagesArgs = {
  where?: ImageWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortImagesBy>>;
  orderBy?: Array<ImageOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryImageArgs = {
  where: ImageWhereUniqueInput;
};


export type Query_AllImagesMetaArgs = {
  where?: ImageWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortImagesBy>>;
  orderBy?: Array<ImageOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryImagesCountArgs = {
  where?: ImageWhereInput;
};

export enum SortImagesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export enum SortProjectsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export enum SortThemesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  FailureAsc = 'failure_ASC',
  FailureDesc = 'failure_DESC',
  PrimaryAsc = 'primary_ASC',
  PrimaryDesc = 'primary_DESC',
  PrimaryBrightAsc = 'primaryBright_ASC',
  PrimaryBrightDesc = 'primaryBright_DESC',
  PrimaryDarkAsc = 'primaryDark_ASC',
  PrimaryDarkDesc = 'primaryDark_DESC',
  SecondaryAsc = 'secondary_ASC',
  SecondaryDesc = 'secondary_DESC',
  SuccessAsc = 'success_ASC',
  SuccessDesc = 'success_DESC',
  BinanceAsc = 'binance_ASC',
  BinanceDesc = 'binance_DESC',
  OverlayAsc = 'overlay_ASC',
  OverlayDesc = 'overlay_DESC',
  BackgroundAsc = 'background_ASC',
  BackgroundDesc = 'background_DESC',
  BackgroundDisabledAsc = 'backgroundDisabled_ASC',
  BackgroundDisabledDesc = 'backgroundDisabled_DESC',
  BackgroundAltAsc = 'backgroundAlt_ASC',
  BackgroundAltDesc = 'backgroundAlt_DESC',
  CardBorderAsc = 'cardBorder_ASC',
  CardBorderDesc = 'cardBorder_DESC',
  ContrastAsc = 'contrast_ASC',
  ContrastDesc = 'contrast_DESC',
  DropdownAsc = 'dropdown_ASC',
  DropdownDesc = 'dropdown_DESC',
  DropdownDeepAsc = 'dropdownDeep_ASC',
  DropdownDeepDesc = 'dropdownDeep_DESC',
  InvertedContrastAsc = 'invertedContrast_ASC',
  InvertedContrastDesc = 'invertedContrast_DESC',
  InputAsc = 'input_ASC',
  InputDesc = 'input_DESC',
  InputSecondaryAsc = 'inputSecondary_ASC',
  InputSecondaryDesc = 'inputSecondary_DESC',
  TertiaryAsc = 'tertiary_ASC',
  TertiaryDesc = 'tertiary_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  TextDisabledAsc = 'textDisabled_ASC',
  TextDisabledDesc = 'textDisabled_DESC',
  TextSubtleAsc = 'textSubtle_ASC',
  TextSubtleDesc = 'textSubtle_DESC',
  DisabledAsc = 'disabled_ASC',
  DisabledDesc = 'disabled_DESC',
  GradientBubblegumAsc = 'gradientBubblegum_ASC',
  GradientBubblegumDesc = 'gradientBubblegum_DESC',
  GradientInverseBubblegumAsc = 'gradientInverseBubblegum_ASC',
  GradientInverseBubblegumDesc = 'gradientInverseBubblegum_DESC',
  GradientCardHeaderAsc = 'gradientCardHeader_ASC',
  GradientCardHeaderDesc = 'gradientCardHeader_DESC',
  GradientBlueAsc = 'gradientBlue_ASC',
  GradientBlueDesc = 'gradientBlue_DESC',
  GradientVioletAsc = 'gradientViolet_ASC',
  GradientVioletDesc = 'gradientViolet_DESC',
  GradientVioletAltAsc = 'gradientVioletAlt_ASC',
  GradientVioletAltDesc = 'gradientVioletAlt_DESC',
  GradientGoldAsc = 'gradientGold_ASC',
  GradientGoldDesc = 'gradientGold_DESC'
}

export enum SortUsersBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC'
}

/** A keystone list */
export type Theme = {
  __typename?: 'Theme';
  id: Scalars['ID'];
  project?: Maybe<Project>;
  type?: Maybe<ThemeTypeType>;
  failure?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['String']>;
  primaryBright?: Maybe<Scalars['String']>;
  primaryDark?: Maybe<Scalars['String']>;
  secondary?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['String']>;
  binance?: Maybe<Scalars['String']>;
  overlay?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  backgroundDisabled?: Maybe<Scalars['String']>;
  backgroundAlt?: Maybe<Scalars['String']>;
  cardBorder?: Maybe<Scalars['String']>;
  contrast?: Maybe<Scalars['String']>;
  dropdown?: Maybe<Scalars['String']>;
  dropdownDeep?: Maybe<Scalars['String']>;
  invertedContrast?: Maybe<Scalars['String']>;
  input?: Maybe<Scalars['String']>;
  inputSecondary?: Maybe<Scalars['String']>;
  tertiary?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  textDisabled?: Maybe<Scalars['String']>;
  textSubtle?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['String']>;
  gradientBubblegum?: Maybe<Scalars['String']>;
  gradientInverseBubblegum?: Maybe<Scalars['String']>;
  gradientCardHeader?: Maybe<Scalars['String']>;
  gradientBlue?: Maybe<Scalars['String']>;
  gradientViolet?: Maybe<Scalars['String']>;
  gradientVioletAlt?: Maybe<Scalars['String']>;
  gradientGold?: Maybe<Scalars['String']>;
};

export type ThemeCreateInput = {
  project?: Maybe<ProjectRelateToOneInput>;
  type?: Maybe<ThemeTypeType>;
  failure?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['String']>;
  primaryBright?: Maybe<Scalars['String']>;
  primaryDark?: Maybe<Scalars['String']>;
  secondary?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['String']>;
  binance?: Maybe<Scalars['String']>;
  overlay?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  backgroundDisabled?: Maybe<Scalars['String']>;
  backgroundAlt?: Maybe<Scalars['String']>;
  cardBorder?: Maybe<Scalars['String']>;
  contrast?: Maybe<Scalars['String']>;
  dropdown?: Maybe<Scalars['String']>;
  dropdownDeep?: Maybe<Scalars['String']>;
  invertedContrast?: Maybe<Scalars['String']>;
  input?: Maybe<Scalars['String']>;
  inputSecondary?: Maybe<Scalars['String']>;
  tertiary?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  textDisabled?: Maybe<Scalars['String']>;
  textSubtle?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['String']>;
  gradientBubblegum?: Maybe<Scalars['String']>;
  gradientInverseBubblegum?: Maybe<Scalars['String']>;
  gradientCardHeader?: Maybe<Scalars['String']>;
  gradientBlue?: Maybe<Scalars['String']>;
  gradientViolet?: Maybe<Scalars['String']>;
  gradientVioletAlt?: Maybe<Scalars['String']>;
  gradientGold?: Maybe<Scalars['String']>;
};

export type ThemeOrderByInput = {
  id?: Maybe<OrderDirection>;
  type?: Maybe<OrderDirection>;
  failure?: Maybe<OrderDirection>;
  primary?: Maybe<OrderDirection>;
  primaryBright?: Maybe<OrderDirection>;
  primaryDark?: Maybe<OrderDirection>;
  secondary?: Maybe<OrderDirection>;
  success?: Maybe<OrderDirection>;
  binance?: Maybe<OrderDirection>;
  overlay?: Maybe<OrderDirection>;
  background?: Maybe<OrderDirection>;
  backgroundDisabled?: Maybe<OrderDirection>;
  backgroundAlt?: Maybe<OrderDirection>;
  cardBorder?: Maybe<OrderDirection>;
  contrast?: Maybe<OrderDirection>;
  dropdown?: Maybe<OrderDirection>;
  dropdownDeep?: Maybe<OrderDirection>;
  invertedContrast?: Maybe<OrderDirection>;
  input?: Maybe<OrderDirection>;
  inputSecondary?: Maybe<OrderDirection>;
  tertiary?: Maybe<OrderDirection>;
  text?: Maybe<OrderDirection>;
  textDisabled?: Maybe<OrderDirection>;
  textSubtle?: Maybe<OrderDirection>;
  disabled?: Maybe<OrderDirection>;
  gradientBubblegum?: Maybe<OrderDirection>;
  gradientInverseBubblegum?: Maybe<OrderDirection>;
  gradientCardHeader?: Maybe<OrderDirection>;
  gradientBlue?: Maybe<OrderDirection>;
  gradientViolet?: Maybe<OrderDirection>;
  gradientVioletAlt?: Maybe<OrderDirection>;
  gradientGold?: Maybe<OrderDirection>;
};

export type ThemeRelateToManyInput = {
  create?: Maybe<Array<Maybe<ThemeCreateInput>>>;
  connect?: Maybe<Array<Maybe<ThemeWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ThemeWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export enum ThemeTypeType {
  Light = 'light',
  Dark = 'dark'
}

export type ThemeUpdateInput = {
  project?: Maybe<ProjectRelateToOneInput>;
  type?: Maybe<ThemeTypeType>;
  failure?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['String']>;
  primaryBright?: Maybe<Scalars['String']>;
  primaryDark?: Maybe<Scalars['String']>;
  secondary?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['String']>;
  binance?: Maybe<Scalars['String']>;
  overlay?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  backgroundDisabled?: Maybe<Scalars['String']>;
  backgroundAlt?: Maybe<Scalars['String']>;
  cardBorder?: Maybe<Scalars['String']>;
  contrast?: Maybe<Scalars['String']>;
  dropdown?: Maybe<Scalars['String']>;
  dropdownDeep?: Maybe<Scalars['String']>;
  invertedContrast?: Maybe<Scalars['String']>;
  input?: Maybe<Scalars['String']>;
  inputSecondary?: Maybe<Scalars['String']>;
  tertiary?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  textDisabled?: Maybe<Scalars['String']>;
  textSubtle?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['String']>;
  gradientBubblegum?: Maybe<Scalars['String']>;
  gradientInverseBubblegum?: Maybe<Scalars['String']>;
  gradientCardHeader?: Maybe<Scalars['String']>;
  gradientBlue?: Maybe<Scalars['String']>;
  gradientViolet?: Maybe<Scalars['String']>;
  gradientVioletAlt?: Maybe<Scalars['String']>;
  gradientGold?: Maybe<Scalars['String']>;
};

export type ThemeWhereInput = {
  AND?: Maybe<Array<ThemeWhereInput>>;
  OR?: Maybe<Array<ThemeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  project?: Maybe<ProjectWhereInput>;
  project_is_null?: Maybe<Scalars['Boolean']>;
  type?: Maybe<ThemeTypeType>;
  type_not?: Maybe<ThemeTypeType>;
  type_in?: Maybe<Array<Maybe<ThemeTypeType>>>;
  type_not_in?: Maybe<Array<Maybe<ThemeTypeType>>>;
  failure?: Maybe<Scalars['String']>;
  failure_not?: Maybe<Scalars['String']>;
  failure_contains?: Maybe<Scalars['String']>;
  failure_not_contains?: Maybe<Scalars['String']>;
  failure_starts_with?: Maybe<Scalars['String']>;
  failure_not_starts_with?: Maybe<Scalars['String']>;
  failure_ends_with?: Maybe<Scalars['String']>;
  failure_not_ends_with?: Maybe<Scalars['String']>;
  failure_i?: Maybe<Scalars['String']>;
  failure_not_i?: Maybe<Scalars['String']>;
  failure_contains_i?: Maybe<Scalars['String']>;
  failure_not_contains_i?: Maybe<Scalars['String']>;
  failure_starts_with_i?: Maybe<Scalars['String']>;
  failure_not_starts_with_i?: Maybe<Scalars['String']>;
  failure_ends_with_i?: Maybe<Scalars['String']>;
  failure_not_ends_with_i?: Maybe<Scalars['String']>;
  failure_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  failure_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  primary?: Maybe<Scalars['String']>;
  primary_not?: Maybe<Scalars['String']>;
  primary_contains?: Maybe<Scalars['String']>;
  primary_not_contains?: Maybe<Scalars['String']>;
  primary_starts_with?: Maybe<Scalars['String']>;
  primary_not_starts_with?: Maybe<Scalars['String']>;
  primary_ends_with?: Maybe<Scalars['String']>;
  primary_not_ends_with?: Maybe<Scalars['String']>;
  primary_i?: Maybe<Scalars['String']>;
  primary_not_i?: Maybe<Scalars['String']>;
  primary_contains_i?: Maybe<Scalars['String']>;
  primary_not_contains_i?: Maybe<Scalars['String']>;
  primary_starts_with_i?: Maybe<Scalars['String']>;
  primary_not_starts_with_i?: Maybe<Scalars['String']>;
  primary_ends_with_i?: Maybe<Scalars['String']>;
  primary_not_ends_with_i?: Maybe<Scalars['String']>;
  primary_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  primary_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryBright?: Maybe<Scalars['String']>;
  primaryBright_not?: Maybe<Scalars['String']>;
  primaryBright_contains?: Maybe<Scalars['String']>;
  primaryBright_not_contains?: Maybe<Scalars['String']>;
  primaryBright_starts_with?: Maybe<Scalars['String']>;
  primaryBright_not_starts_with?: Maybe<Scalars['String']>;
  primaryBright_ends_with?: Maybe<Scalars['String']>;
  primaryBright_not_ends_with?: Maybe<Scalars['String']>;
  primaryBright_i?: Maybe<Scalars['String']>;
  primaryBright_not_i?: Maybe<Scalars['String']>;
  primaryBright_contains_i?: Maybe<Scalars['String']>;
  primaryBright_not_contains_i?: Maybe<Scalars['String']>;
  primaryBright_starts_with_i?: Maybe<Scalars['String']>;
  primaryBright_not_starts_with_i?: Maybe<Scalars['String']>;
  primaryBright_ends_with_i?: Maybe<Scalars['String']>;
  primaryBright_not_ends_with_i?: Maybe<Scalars['String']>;
  primaryBright_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryBright_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryDark?: Maybe<Scalars['String']>;
  primaryDark_not?: Maybe<Scalars['String']>;
  primaryDark_contains?: Maybe<Scalars['String']>;
  primaryDark_not_contains?: Maybe<Scalars['String']>;
  primaryDark_starts_with?: Maybe<Scalars['String']>;
  primaryDark_not_starts_with?: Maybe<Scalars['String']>;
  primaryDark_ends_with?: Maybe<Scalars['String']>;
  primaryDark_not_ends_with?: Maybe<Scalars['String']>;
  primaryDark_i?: Maybe<Scalars['String']>;
  primaryDark_not_i?: Maybe<Scalars['String']>;
  primaryDark_contains_i?: Maybe<Scalars['String']>;
  primaryDark_not_contains_i?: Maybe<Scalars['String']>;
  primaryDark_starts_with_i?: Maybe<Scalars['String']>;
  primaryDark_not_starts_with_i?: Maybe<Scalars['String']>;
  primaryDark_ends_with_i?: Maybe<Scalars['String']>;
  primaryDark_not_ends_with_i?: Maybe<Scalars['String']>;
  primaryDark_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryDark_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  secondary?: Maybe<Scalars['String']>;
  secondary_not?: Maybe<Scalars['String']>;
  secondary_contains?: Maybe<Scalars['String']>;
  secondary_not_contains?: Maybe<Scalars['String']>;
  secondary_starts_with?: Maybe<Scalars['String']>;
  secondary_not_starts_with?: Maybe<Scalars['String']>;
  secondary_ends_with?: Maybe<Scalars['String']>;
  secondary_not_ends_with?: Maybe<Scalars['String']>;
  secondary_i?: Maybe<Scalars['String']>;
  secondary_not_i?: Maybe<Scalars['String']>;
  secondary_contains_i?: Maybe<Scalars['String']>;
  secondary_not_contains_i?: Maybe<Scalars['String']>;
  secondary_starts_with_i?: Maybe<Scalars['String']>;
  secondary_not_starts_with_i?: Maybe<Scalars['String']>;
  secondary_ends_with_i?: Maybe<Scalars['String']>;
  secondary_not_ends_with_i?: Maybe<Scalars['String']>;
  secondary_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  secondary_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  success?: Maybe<Scalars['String']>;
  success_not?: Maybe<Scalars['String']>;
  success_contains?: Maybe<Scalars['String']>;
  success_not_contains?: Maybe<Scalars['String']>;
  success_starts_with?: Maybe<Scalars['String']>;
  success_not_starts_with?: Maybe<Scalars['String']>;
  success_ends_with?: Maybe<Scalars['String']>;
  success_not_ends_with?: Maybe<Scalars['String']>;
  success_i?: Maybe<Scalars['String']>;
  success_not_i?: Maybe<Scalars['String']>;
  success_contains_i?: Maybe<Scalars['String']>;
  success_not_contains_i?: Maybe<Scalars['String']>;
  success_starts_with_i?: Maybe<Scalars['String']>;
  success_not_starts_with_i?: Maybe<Scalars['String']>;
  success_ends_with_i?: Maybe<Scalars['String']>;
  success_not_ends_with_i?: Maybe<Scalars['String']>;
  success_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  success_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  binance?: Maybe<Scalars['String']>;
  binance_not?: Maybe<Scalars['String']>;
  binance_contains?: Maybe<Scalars['String']>;
  binance_not_contains?: Maybe<Scalars['String']>;
  binance_starts_with?: Maybe<Scalars['String']>;
  binance_not_starts_with?: Maybe<Scalars['String']>;
  binance_ends_with?: Maybe<Scalars['String']>;
  binance_not_ends_with?: Maybe<Scalars['String']>;
  binance_i?: Maybe<Scalars['String']>;
  binance_not_i?: Maybe<Scalars['String']>;
  binance_contains_i?: Maybe<Scalars['String']>;
  binance_not_contains_i?: Maybe<Scalars['String']>;
  binance_starts_with_i?: Maybe<Scalars['String']>;
  binance_not_starts_with_i?: Maybe<Scalars['String']>;
  binance_ends_with_i?: Maybe<Scalars['String']>;
  binance_not_ends_with_i?: Maybe<Scalars['String']>;
  binance_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  binance_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  overlay?: Maybe<Scalars['String']>;
  overlay_not?: Maybe<Scalars['String']>;
  overlay_contains?: Maybe<Scalars['String']>;
  overlay_not_contains?: Maybe<Scalars['String']>;
  overlay_starts_with?: Maybe<Scalars['String']>;
  overlay_not_starts_with?: Maybe<Scalars['String']>;
  overlay_ends_with?: Maybe<Scalars['String']>;
  overlay_not_ends_with?: Maybe<Scalars['String']>;
  overlay_i?: Maybe<Scalars['String']>;
  overlay_not_i?: Maybe<Scalars['String']>;
  overlay_contains_i?: Maybe<Scalars['String']>;
  overlay_not_contains_i?: Maybe<Scalars['String']>;
  overlay_starts_with_i?: Maybe<Scalars['String']>;
  overlay_not_starts_with_i?: Maybe<Scalars['String']>;
  overlay_ends_with_i?: Maybe<Scalars['String']>;
  overlay_not_ends_with_i?: Maybe<Scalars['String']>;
  overlay_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  overlay_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  background?: Maybe<Scalars['String']>;
  background_not?: Maybe<Scalars['String']>;
  background_contains?: Maybe<Scalars['String']>;
  background_not_contains?: Maybe<Scalars['String']>;
  background_starts_with?: Maybe<Scalars['String']>;
  background_not_starts_with?: Maybe<Scalars['String']>;
  background_ends_with?: Maybe<Scalars['String']>;
  background_not_ends_with?: Maybe<Scalars['String']>;
  background_i?: Maybe<Scalars['String']>;
  background_not_i?: Maybe<Scalars['String']>;
  background_contains_i?: Maybe<Scalars['String']>;
  background_not_contains_i?: Maybe<Scalars['String']>;
  background_starts_with_i?: Maybe<Scalars['String']>;
  background_not_starts_with_i?: Maybe<Scalars['String']>;
  background_ends_with_i?: Maybe<Scalars['String']>;
  background_not_ends_with_i?: Maybe<Scalars['String']>;
  background_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  background_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  backgroundDisabled?: Maybe<Scalars['String']>;
  backgroundDisabled_not?: Maybe<Scalars['String']>;
  backgroundDisabled_contains?: Maybe<Scalars['String']>;
  backgroundDisabled_not_contains?: Maybe<Scalars['String']>;
  backgroundDisabled_starts_with?: Maybe<Scalars['String']>;
  backgroundDisabled_not_starts_with?: Maybe<Scalars['String']>;
  backgroundDisabled_ends_with?: Maybe<Scalars['String']>;
  backgroundDisabled_not_ends_with?: Maybe<Scalars['String']>;
  backgroundDisabled_i?: Maybe<Scalars['String']>;
  backgroundDisabled_not_i?: Maybe<Scalars['String']>;
  backgroundDisabled_contains_i?: Maybe<Scalars['String']>;
  backgroundDisabled_not_contains_i?: Maybe<Scalars['String']>;
  backgroundDisabled_starts_with_i?: Maybe<Scalars['String']>;
  backgroundDisabled_not_starts_with_i?: Maybe<Scalars['String']>;
  backgroundDisabled_ends_with_i?: Maybe<Scalars['String']>;
  backgroundDisabled_not_ends_with_i?: Maybe<Scalars['String']>;
  backgroundDisabled_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  backgroundDisabled_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  backgroundAlt?: Maybe<Scalars['String']>;
  backgroundAlt_not?: Maybe<Scalars['String']>;
  backgroundAlt_contains?: Maybe<Scalars['String']>;
  backgroundAlt_not_contains?: Maybe<Scalars['String']>;
  backgroundAlt_starts_with?: Maybe<Scalars['String']>;
  backgroundAlt_not_starts_with?: Maybe<Scalars['String']>;
  backgroundAlt_ends_with?: Maybe<Scalars['String']>;
  backgroundAlt_not_ends_with?: Maybe<Scalars['String']>;
  backgroundAlt_i?: Maybe<Scalars['String']>;
  backgroundAlt_not_i?: Maybe<Scalars['String']>;
  backgroundAlt_contains_i?: Maybe<Scalars['String']>;
  backgroundAlt_not_contains_i?: Maybe<Scalars['String']>;
  backgroundAlt_starts_with_i?: Maybe<Scalars['String']>;
  backgroundAlt_not_starts_with_i?: Maybe<Scalars['String']>;
  backgroundAlt_ends_with_i?: Maybe<Scalars['String']>;
  backgroundAlt_not_ends_with_i?: Maybe<Scalars['String']>;
  backgroundAlt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  backgroundAlt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cardBorder?: Maybe<Scalars['String']>;
  cardBorder_not?: Maybe<Scalars['String']>;
  cardBorder_contains?: Maybe<Scalars['String']>;
  cardBorder_not_contains?: Maybe<Scalars['String']>;
  cardBorder_starts_with?: Maybe<Scalars['String']>;
  cardBorder_not_starts_with?: Maybe<Scalars['String']>;
  cardBorder_ends_with?: Maybe<Scalars['String']>;
  cardBorder_not_ends_with?: Maybe<Scalars['String']>;
  cardBorder_i?: Maybe<Scalars['String']>;
  cardBorder_not_i?: Maybe<Scalars['String']>;
  cardBorder_contains_i?: Maybe<Scalars['String']>;
  cardBorder_not_contains_i?: Maybe<Scalars['String']>;
  cardBorder_starts_with_i?: Maybe<Scalars['String']>;
  cardBorder_not_starts_with_i?: Maybe<Scalars['String']>;
  cardBorder_ends_with_i?: Maybe<Scalars['String']>;
  cardBorder_not_ends_with_i?: Maybe<Scalars['String']>;
  cardBorder_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cardBorder_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contrast?: Maybe<Scalars['String']>;
  contrast_not?: Maybe<Scalars['String']>;
  contrast_contains?: Maybe<Scalars['String']>;
  contrast_not_contains?: Maybe<Scalars['String']>;
  contrast_starts_with?: Maybe<Scalars['String']>;
  contrast_not_starts_with?: Maybe<Scalars['String']>;
  contrast_ends_with?: Maybe<Scalars['String']>;
  contrast_not_ends_with?: Maybe<Scalars['String']>;
  contrast_i?: Maybe<Scalars['String']>;
  contrast_not_i?: Maybe<Scalars['String']>;
  contrast_contains_i?: Maybe<Scalars['String']>;
  contrast_not_contains_i?: Maybe<Scalars['String']>;
  contrast_starts_with_i?: Maybe<Scalars['String']>;
  contrast_not_starts_with_i?: Maybe<Scalars['String']>;
  contrast_ends_with_i?: Maybe<Scalars['String']>;
  contrast_not_ends_with_i?: Maybe<Scalars['String']>;
  contrast_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contrast_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  dropdown?: Maybe<Scalars['String']>;
  dropdown_not?: Maybe<Scalars['String']>;
  dropdown_contains?: Maybe<Scalars['String']>;
  dropdown_not_contains?: Maybe<Scalars['String']>;
  dropdown_starts_with?: Maybe<Scalars['String']>;
  dropdown_not_starts_with?: Maybe<Scalars['String']>;
  dropdown_ends_with?: Maybe<Scalars['String']>;
  dropdown_not_ends_with?: Maybe<Scalars['String']>;
  dropdown_i?: Maybe<Scalars['String']>;
  dropdown_not_i?: Maybe<Scalars['String']>;
  dropdown_contains_i?: Maybe<Scalars['String']>;
  dropdown_not_contains_i?: Maybe<Scalars['String']>;
  dropdown_starts_with_i?: Maybe<Scalars['String']>;
  dropdown_not_starts_with_i?: Maybe<Scalars['String']>;
  dropdown_ends_with_i?: Maybe<Scalars['String']>;
  dropdown_not_ends_with_i?: Maybe<Scalars['String']>;
  dropdown_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  dropdown_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  dropdownDeep?: Maybe<Scalars['String']>;
  dropdownDeep_not?: Maybe<Scalars['String']>;
  dropdownDeep_contains?: Maybe<Scalars['String']>;
  dropdownDeep_not_contains?: Maybe<Scalars['String']>;
  dropdownDeep_starts_with?: Maybe<Scalars['String']>;
  dropdownDeep_not_starts_with?: Maybe<Scalars['String']>;
  dropdownDeep_ends_with?: Maybe<Scalars['String']>;
  dropdownDeep_not_ends_with?: Maybe<Scalars['String']>;
  dropdownDeep_i?: Maybe<Scalars['String']>;
  dropdownDeep_not_i?: Maybe<Scalars['String']>;
  dropdownDeep_contains_i?: Maybe<Scalars['String']>;
  dropdownDeep_not_contains_i?: Maybe<Scalars['String']>;
  dropdownDeep_starts_with_i?: Maybe<Scalars['String']>;
  dropdownDeep_not_starts_with_i?: Maybe<Scalars['String']>;
  dropdownDeep_ends_with_i?: Maybe<Scalars['String']>;
  dropdownDeep_not_ends_with_i?: Maybe<Scalars['String']>;
  dropdownDeep_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  dropdownDeep_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  invertedContrast?: Maybe<Scalars['String']>;
  invertedContrast_not?: Maybe<Scalars['String']>;
  invertedContrast_contains?: Maybe<Scalars['String']>;
  invertedContrast_not_contains?: Maybe<Scalars['String']>;
  invertedContrast_starts_with?: Maybe<Scalars['String']>;
  invertedContrast_not_starts_with?: Maybe<Scalars['String']>;
  invertedContrast_ends_with?: Maybe<Scalars['String']>;
  invertedContrast_not_ends_with?: Maybe<Scalars['String']>;
  invertedContrast_i?: Maybe<Scalars['String']>;
  invertedContrast_not_i?: Maybe<Scalars['String']>;
  invertedContrast_contains_i?: Maybe<Scalars['String']>;
  invertedContrast_not_contains_i?: Maybe<Scalars['String']>;
  invertedContrast_starts_with_i?: Maybe<Scalars['String']>;
  invertedContrast_not_starts_with_i?: Maybe<Scalars['String']>;
  invertedContrast_ends_with_i?: Maybe<Scalars['String']>;
  invertedContrast_not_ends_with_i?: Maybe<Scalars['String']>;
  invertedContrast_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  invertedContrast_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  input?: Maybe<Scalars['String']>;
  input_not?: Maybe<Scalars['String']>;
  input_contains?: Maybe<Scalars['String']>;
  input_not_contains?: Maybe<Scalars['String']>;
  input_starts_with?: Maybe<Scalars['String']>;
  input_not_starts_with?: Maybe<Scalars['String']>;
  input_ends_with?: Maybe<Scalars['String']>;
  input_not_ends_with?: Maybe<Scalars['String']>;
  input_i?: Maybe<Scalars['String']>;
  input_not_i?: Maybe<Scalars['String']>;
  input_contains_i?: Maybe<Scalars['String']>;
  input_not_contains_i?: Maybe<Scalars['String']>;
  input_starts_with_i?: Maybe<Scalars['String']>;
  input_not_starts_with_i?: Maybe<Scalars['String']>;
  input_ends_with_i?: Maybe<Scalars['String']>;
  input_not_ends_with_i?: Maybe<Scalars['String']>;
  input_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  input_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  inputSecondary?: Maybe<Scalars['String']>;
  inputSecondary_not?: Maybe<Scalars['String']>;
  inputSecondary_contains?: Maybe<Scalars['String']>;
  inputSecondary_not_contains?: Maybe<Scalars['String']>;
  inputSecondary_starts_with?: Maybe<Scalars['String']>;
  inputSecondary_not_starts_with?: Maybe<Scalars['String']>;
  inputSecondary_ends_with?: Maybe<Scalars['String']>;
  inputSecondary_not_ends_with?: Maybe<Scalars['String']>;
  inputSecondary_i?: Maybe<Scalars['String']>;
  inputSecondary_not_i?: Maybe<Scalars['String']>;
  inputSecondary_contains_i?: Maybe<Scalars['String']>;
  inputSecondary_not_contains_i?: Maybe<Scalars['String']>;
  inputSecondary_starts_with_i?: Maybe<Scalars['String']>;
  inputSecondary_not_starts_with_i?: Maybe<Scalars['String']>;
  inputSecondary_ends_with_i?: Maybe<Scalars['String']>;
  inputSecondary_not_ends_with_i?: Maybe<Scalars['String']>;
  inputSecondary_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  inputSecondary_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tertiary?: Maybe<Scalars['String']>;
  tertiary_not?: Maybe<Scalars['String']>;
  tertiary_contains?: Maybe<Scalars['String']>;
  tertiary_not_contains?: Maybe<Scalars['String']>;
  tertiary_starts_with?: Maybe<Scalars['String']>;
  tertiary_not_starts_with?: Maybe<Scalars['String']>;
  tertiary_ends_with?: Maybe<Scalars['String']>;
  tertiary_not_ends_with?: Maybe<Scalars['String']>;
  tertiary_i?: Maybe<Scalars['String']>;
  tertiary_not_i?: Maybe<Scalars['String']>;
  tertiary_contains_i?: Maybe<Scalars['String']>;
  tertiary_not_contains_i?: Maybe<Scalars['String']>;
  tertiary_starts_with_i?: Maybe<Scalars['String']>;
  tertiary_not_starts_with_i?: Maybe<Scalars['String']>;
  tertiary_ends_with_i?: Maybe<Scalars['String']>;
  tertiary_not_ends_with_i?: Maybe<Scalars['String']>;
  tertiary_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tertiary_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  text_i?: Maybe<Scalars['String']>;
  text_not_i?: Maybe<Scalars['String']>;
  text_contains_i?: Maybe<Scalars['String']>;
  text_not_contains_i?: Maybe<Scalars['String']>;
  text_starts_with_i?: Maybe<Scalars['String']>;
  text_not_starts_with_i?: Maybe<Scalars['String']>;
  text_ends_with_i?: Maybe<Scalars['String']>;
  text_not_ends_with_i?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  text_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  textDisabled?: Maybe<Scalars['String']>;
  textDisabled_not?: Maybe<Scalars['String']>;
  textDisabled_contains?: Maybe<Scalars['String']>;
  textDisabled_not_contains?: Maybe<Scalars['String']>;
  textDisabled_starts_with?: Maybe<Scalars['String']>;
  textDisabled_not_starts_with?: Maybe<Scalars['String']>;
  textDisabled_ends_with?: Maybe<Scalars['String']>;
  textDisabled_not_ends_with?: Maybe<Scalars['String']>;
  textDisabled_i?: Maybe<Scalars['String']>;
  textDisabled_not_i?: Maybe<Scalars['String']>;
  textDisabled_contains_i?: Maybe<Scalars['String']>;
  textDisabled_not_contains_i?: Maybe<Scalars['String']>;
  textDisabled_starts_with_i?: Maybe<Scalars['String']>;
  textDisabled_not_starts_with_i?: Maybe<Scalars['String']>;
  textDisabled_ends_with_i?: Maybe<Scalars['String']>;
  textDisabled_not_ends_with_i?: Maybe<Scalars['String']>;
  textDisabled_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  textDisabled_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  textSubtle?: Maybe<Scalars['String']>;
  textSubtle_not?: Maybe<Scalars['String']>;
  textSubtle_contains?: Maybe<Scalars['String']>;
  textSubtle_not_contains?: Maybe<Scalars['String']>;
  textSubtle_starts_with?: Maybe<Scalars['String']>;
  textSubtle_not_starts_with?: Maybe<Scalars['String']>;
  textSubtle_ends_with?: Maybe<Scalars['String']>;
  textSubtle_not_ends_with?: Maybe<Scalars['String']>;
  textSubtle_i?: Maybe<Scalars['String']>;
  textSubtle_not_i?: Maybe<Scalars['String']>;
  textSubtle_contains_i?: Maybe<Scalars['String']>;
  textSubtle_not_contains_i?: Maybe<Scalars['String']>;
  textSubtle_starts_with_i?: Maybe<Scalars['String']>;
  textSubtle_not_starts_with_i?: Maybe<Scalars['String']>;
  textSubtle_ends_with_i?: Maybe<Scalars['String']>;
  textSubtle_not_ends_with_i?: Maybe<Scalars['String']>;
  textSubtle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  textSubtle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  disabled?: Maybe<Scalars['String']>;
  disabled_not?: Maybe<Scalars['String']>;
  disabled_contains?: Maybe<Scalars['String']>;
  disabled_not_contains?: Maybe<Scalars['String']>;
  disabled_starts_with?: Maybe<Scalars['String']>;
  disabled_not_starts_with?: Maybe<Scalars['String']>;
  disabled_ends_with?: Maybe<Scalars['String']>;
  disabled_not_ends_with?: Maybe<Scalars['String']>;
  disabled_i?: Maybe<Scalars['String']>;
  disabled_not_i?: Maybe<Scalars['String']>;
  disabled_contains_i?: Maybe<Scalars['String']>;
  disabled_not_contains_i?: Maybe<Scalars['String']>;
  disabled_starts_with_i?: Maybe<Scalars['String']>;
  disabled_not_starts_with_i?: Maybe<Scalars['String']>;
  disabled_ends_with_i?: Maybe<Scalars['String']>;
  disabled_not_ends_with_i?: Maybe<Scalars['String']>;
  disabled_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  disabled_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gradientBubblegum?: Maybe<Scalars['String']>;
  gradientBubblegum_not?: Maybe<Scalars['String']>;
  gradientBubblegum_contains?: Maybe<Scalars['String']>;
  gradientBubblegum_not_contains?: Maybe<Scalars['String']>;
  gradientBubblegum_starts_with?: Maybe<Scalars['String']>;
  gradientBubblegum_not_starts_with?: Maybe<Scalars['String']>;
  gradientBubblegum_ends_with?: Maybe<Scalars['String']>;
  gradientBubblegum_not_ends_with?: Maybe<Scalars['String']>;
  gradientBubblegum_i?: Maybe<Scalars['String']>;
  gradientBubblegum_not_i?: Maybe<Scalars['String']>;
  gradientBubblegum_contains_i?: Maybe<Scalars['String']>;
  gradientBubblegum_not_contains_i?: Maybe<Scalars['String']>;
  gradientBubblegum_starts_with_i?: Maybe<Scalars['String']>;
  gradientBubblegum_not_starts_with_i?: Maybe<Scalars['String']>;
  gradientBubblegum_ends_with_i?: Maybe<Scalars['String']>;
  gradientBubblegum_not_ends_with_i?: Maybe<Scalars['String']>;
  gradientBubblegum_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gradientBubblegum_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gradientInverseBubblegum?: Maybe<Scalars['String']>;
  gradientInverseBubblegum_not?: Maybe<Scalars['String']>;
  gradientInverseBubblegum_contains?: Maybe<Scalars['String']>;
  gradientInverseBubblegum_not_contains?: Maybe<Scalars['String']>;
  gradientInverseBubblegum_starts_with?: Maybe<Scalars['String']>;
  gradientInverseBubblegum_not_starts_with?: Maybe<Scalars['String']>;
  gradientInverseBubblegum_ends_with?: Maybe<Scalars['String']>;
  gradientInverseBubblegum_not_ends_with?: Maybe<Scalars['String']>;
  gradientInverseBubblegum_i?: Maybe<Scalars['String']>;
  gradientInverseBubblegum_not_i?: Maybe<Scalars['String']>;
  gradientInverseBubblegum_contains_i?: Maybe<Scalars['String']>;
  gradientInverseBubblegum_not_contains_i?: Maybe<Scalars['String']>;
  gradientInverseBubblegum_starts_with_i?: Maybe<Scalars['String']>;
  gradientInverseBubblegum_not_starts_with_i?: Maybe<Scalars['String']>;
  gradientInverseBubblegum_ends_with_i?: Maybe<Scalars['String']>;
  gradientInverseBubblegum_not_ends_with_i?: Maybe<Scalars['String']>;
  gradientInverseBubblegum_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gradientInverseBubblegum_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gradientCardHeader?: Maybe<Scalars['String']>;
  gradientCardHeader_not?: Maybe<Scalars['String']>;
  gradientCardHeader_contains?: Maybe<Scalars['String']>;
  gradientCardHeader_not_contains?: Maybe<Scalars['String']>;
  gradientCardHeader_starts_with?: Maybe<Scalars['String']>;
  gradientCardHeader_not_starts_with?: Maybe<Scalars['String']>;
  gradientCardHeader_ends_with?: Maybe<Scalars['String']>;
  gradientCardHeader_not_ends_with?: Maybe<Scalars['String']>;
  gradientCardHeader_i?: Maybe<Scalars['String']>;
  gradientCardHeader_not_i?: Maybe<Scalars['String']>;
  gradientCardHeader_contains_i?: Maybe<Scalars['String']>;
  gradientCardHeader_not_contains_i?: Maybe<Scalars['String']>;
  gradientCardHeader_starts_with_i?: Maybe<Scalars['String']>;
  gradientCardHeader_not_starts_with_i?: Maybe<Scalars['String']>;
  gradientCardHeader_ends_with_i?: Maybe<Scalars['String']>;
  gradientCardHeader_not_ends_with_i?: Maybe<Scalars['String']>;
  gradientCardHeader_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gradientCardHeader_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gradientBlue?: Maybe<Scalars['String']>;
  gradientBlue_not?: Maybe<Scalars['String']>;
  gradientBlue_contains?: Maybe<Scalars['String']>;
  gradientBlue_not_contains?: Maybe<Scalars['String']>;
  gradientBlue_starts_with?: Maybe<Scalars['String']>;
  gradientBlue_not_starts_with?: Maybe<Scalars['String']>;
  gradientBlue_ends_with?: Maybe<Scalars['String']>;
  gradientBlue_not_ends_with?: Maybe<Scalars['String']>;
  gradientBlue_i?: Maybe<Scalars['String']>;
  gradientBlue_not_i?: Maybe<Scalars['String']>;
  gradientBlue_contains_i?: Maybe<Scalars['String']>;
  gradientBlue_not_contains_i?: Maybe<Scalars['String']>;
  gradientBlue_starts_with_i?: Maybe<Scalars['String']>;
  gradientBlue_not_starts_with_i?: Maybe<Scalars['String']>;
  gradientBlue_ends_with_i?: Maybe<Scalars['String']>;
  gradientBlue_not_ends_with_i?: Maybe<Scalars['String']>;
  gradientBlue_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gradientBlue_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gradientViolet?: Maybe<Scalars['String']>;
  gradientViolet_not?: Maybe<Scalars['String']>;
  gradientViolet_contains?: Maybe<Scalars['String']>;
  gradientViolet_not_contains?: Maybe<Scalars['String']>;
  gradientViolet_starts_with?: Maybe<Scalars['String']>;
  gradientViolet_not_starts_with?: Maybe<Scalars['String']>;
  gradientViolet_ends_with?: Maybe<Scalars['String']>;
  gradientViolet_not_ends_with?: Maybe<Scalars['String']>;
  gradientViolet_i?: Maybe<Scalars['String']>;
  gradientViolet_not_i?: Maybe<Scalars['String']>;
  gradientViolet_contains_i?: Maybe<Scalars['String']>;
  gradientViolet_not_contains_i?: Maybe<Scalars['String']>;
  gradientViolet_starts_with_i?: Maybe<Scalars['String']>;
  gradientViolet_not_starts_with_i?: Maybe<Scalars['String']>;
  gradientViolet_ends_with_i?: Maybe<Scalars['String']>;
  gradientViolet_not_ends_with_i?: Maybe<Scalars['String']>;
  gradientViolet_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gradientViolet_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gradientVioletAlt?: Maybe<Scalars['String']>;
  gradientVioletAlt_not?: Maybe<Scalars['String']>;
  gradientVioletAlt_contains?: Maybe<Scalars['String']>;
  gradientVioletAlt_not_contains?: Maybe<Scalars['String']>;
  gradientVioletAlt_starts_with?: Maybe<Scalars['String']>;
  gradientVioletAlt_not_starts_with?: Maybe<Scalars['String']>;
  gradientVioletAlt_ends_with?: Maybe<Scalars['String']>;
  gradientVioletAlt_not_ends_with?: Maybe<Scalars['String']>;
  gradientVioletAlt_i?: Maybe<Scalars['String']>;
  gradientVioletAlt_not_i?: Maybe<Scalars['String']>;
  gradientVioletAlt_contains_i?: Maybe<Scalars['String']>;
  gradientVioletAlt_not_contains_i?: Maybe<Scalars['String']>;
  gradientVioletAlt_starts_with_i?: Maybe<Scalars['String']>;
  gradientVioletAlt_not_starts_with_i?: Maybe<Scalars['String']>;
  gradientVioletAlt_ends_with_i?: Maybe<Scalars['String']>;
  gradientVioletAlt_not_ends_with_i?: Maybe<Scalars['String']>;
  gradientVioletAlt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gradientVioletAlt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gradientGold?: Maybe<Scalars['String']>;
  gradientGold_not?: Maybe<Scalars['String']>;
  gradientGold_contains?: Maybe<Scalars['String']>;
  gradientGold_not_contains?: Maybe<Scalars['String']>;
  gradientGold_starts_with?: Maybe<Scalars['String']>;
  gradientGold_not_starts_with?: Maybe<Scalars['String']>;
  gradientGold_ends_with?: Maybe<Scalars['String']>;
  gradientGold_not_ends_with?: Maybe<Scalars['String']>;
  gradientGold_i?: Maybe<Scalars['String']>;
  gradientGold_not_i?: Maybe<Scalars['String']>;
  gradientGold_contains_i?: Maybe<Scalars['String']>;
  gradientGold_not_contains_i?: Maybe<Scalars['String']>;
  gradientGold_starts_with_i?: Maybe<Scalars['String']>;
  gradientGold_not_starts_with_i?: Maybe<Scalars['String']>;
  gradientGold_ends_with_i?: Maybe<Scalars['String']>;
  gradientGold_not_ends_with_i?: Maybe<Scalars['String']>;
  gradientGold_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gradientGold_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ThemeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ThemesCreateInput = {
  data?: Maybe<ThemeCreateInput>;
};

export type ThemesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ThemeUpdateInput>;
};


/** A keystone list */
export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  code: PasswordAuthErrorCode;
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordSuccess | UserAuthenticationWithPasswordFailure;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  sessionToken: Scalars['String'];
  item: User;
};

export type UserCreateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  email?: Maybe<OrderDirection>;
};

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  password_is_set?: Maybe<Scalars['Boolean']>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};

export type UsersCreateInput = {
  data?: Maybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};
