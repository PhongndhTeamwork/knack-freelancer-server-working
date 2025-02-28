
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Auth
 * 
 */
export type Auth = $Result.DefaultSelection<Prisma.$AuthPayload>
/**
 * Model ProfileWorkExperience
 * 
 */
export type ProfileWorkExperience = $Result.DefaultSelection<Prisma.$ProfileWorkExperiencePayload>
/**
 * Model ProfileAchievement
 * 
 */
export type ProfileAchievement = $Result.DefaultSelection<Prisma.$ProfileAchievementPayload>
/**
 * Model ProfileProminentWork
 * 
 */
export type ProfileProminentWork = $Result.DefaultSelection<Prisma.$ProfileProminentWorkPayload>
/**
 * Model Portfolio
 * 
 */
export type Portfolio = $Result.DefaultSelection<Prisma.$PortfolioPayload>
/**
 * Model PortfolioProminentProject
 * 
 */
export type PortfolioProminentProject = $Result.DefaultSelection<Prisma.$PortfolioProminentProjectPayload>
/**
 * Model PortfolioProminentProjectImage
 * 
 */
export type PortfolioProminentProjectImage = $Result.DefaultSelection<Prisma.$PortfolioProminentProjectImagePayload>
/**
 * Model PortfolioCustomerFeedback
 * 
 */
export type PortfolioCustomerFeedback = $Result.DefaultSelection<Prisma.$PortfolioCustomerFeedbackPayload>
/**
 * Model PortfolioAboutSection
 * 
 */
export type PortfolioAboutSection = $Result.DefaultSelection<Prisma.$PortfolioAboutSectionPayload>
/**
 * Model PortfolioWorkExperience
 * 
 */
export type PortfolioWorkExperience = $Result.DefaultSelection<Prisma.$PortfolioWorkExperiencePayload>
/**
 * Model PortfolioSkill
 * 
 */
export type PortfolioSkill = $Result.DefaultSelection<Prisma.$PortfolioSkillPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auth`: Exposes CRUD operations for the **Auth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auths
    * const auths = await prisma.auth.findMany()
    * ```
    */
  get auth(): Prisma.AuthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profileWorkExperience`: Exposes CRUD operations for the **ProfileWorkExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfileWorkExperiences
    * const profileWorkExperiences = await prisma.profileWorkExperience.findMany()
    * ```
    */
  get profileWorkExperience(): Prisma.ProfileWorkExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profileAchievement`: Exposes CRUD operations for the **ProfileAchievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfileAchievements
    * const profileAchievements = await prisma.profileAchievement.findMany()
    * ```
    */
  get profileAchievement(): Prisma.ProfileAchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profileProminentWork`: Exposes CRUD operations for the **ProfileProminentWork** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfileProminentWorks
    * const profileProminentWorks = await prisma.profileProminentWork.findMany()
    * ```
    */
  get profileProminentWork(): Prisma.ProfileProminentWorkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolio`: Exposes CRUD operations for the **Portfolio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Portfolios
    * const portfolios = await prisma.portfolio.findMany()
    * ```
    */
  get portfolio(): Prisma.PortfolioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolioProminentProject`: Exposes CRUD operations for the **PortfolioProminentProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioProminentProjects
    * const portfolioProminentProjects = await prisma.portfolioProminentProject.findMany()
    * ```
    */
  get portfolioProminentProject(): Prisma.PortfolioProminentProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolioProminentProjectImage`: Exposes CRUD operations for the **PortfolioProminentProjectImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioProminentProjectImages
    * const portfolioProminentProjectImages = await prisma.portfolioProminentProjectImage.findMany()
    * ```
    */
  get portfolioProminentProjectImage(): Prisma.PortfolioProminentProjectImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolioCustomerFeedback`: Exposes CRUD operations for the **PortfolioCustomerFeedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioCustomerFeedbacks
    * const portfolioCustomerFeedbacks = await prisma.portfolioCustomerFeedback.findMany()
    * ```
    */
  get portfolioCustomerFeedback(): Prisma.PortfolioCustomerFeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolioAboutSection`: Exposes CRUD operations for the **PortfolioAboutSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioAboutSections
    * const portfolioAboutSections = await prisma.portfolioAboutSection.findMany()
    * ```
    */
  get portfolioAboutSection(): Prisma.PortfolioAboutSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolioWorkExperience`: Exposes CRUD operations for the **PortfolioWorkExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioWorkExperiences
    * const portfolioWorkExperiences = await prisma.portfolioWorkExperience.findMany()
    * ```
    */
  get portfolioWorkExperience(): Prisma.PortfolioWorkExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolioSkill`: Exposes CRUD operations for the **PortfolioSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioSkills
    * const portfolioSkills = await prisma.portfolioSkill.findMany()
    * ```
    */
  get portfolioSkill(): Prisma.PortfolioSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Auth: 'Auth',
    ProfileWorkExperience: 'ProfileWorkExperience',
    ProfileAchievement: 'ProfileAchievement',
    ProfileProminentWork: 'ProfileProminentWork',
    Portfolio: 'Portfolio',
    PortfolioProminentProject: 'PortfolioProminentProject',
    PortfolioProminentProjectImage: 'PortfolioProminentProjectImage',
    PortfolioCustomerFeedback: 'PortfolioCustomerFeedback',
    PortfolioAboutSection: 'PortfolioAboutSection',
    PortfolioWorkExperience: 'PortfolioWorkExperience',
    PortfolioSkill: 'PortfolioSkill',
    Booking: 'Booking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "auth" | "profileWorkExperience" | "profileAchievement" | "profileProminentWork" | "portfolio" | "portfolioProminentProject" | "portfolioProminentProjectImage" | "portfolioCustomerFeedback" | "portfolioAboutSection" | "portfolioWorkExperience" | "portfolioSkill" | "booking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Auth: {
        payload: Prisma.$AuthPayload<ExtArgs>
        fields: Prisma.AuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          findFirst: {
            args: Prisma.AuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          findMany: {
            args: Prisma.AuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          create: {
            args: Prisma.AuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          createMany: {
            args: Prisma.AuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          delete: {
            args: Prisma.AuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          update: {
            args: Prisma.AuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          deleteMany: {
            args: Prisma.AuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          upsert: {
            args: Prisma.AuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          aggregate: {
            args: Prisma.AuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth>
          }
          groupBy: {
            args: Prisma.AuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthCountArgs<ExtArgs>
            result: $Utils.Optional<AuthCountAggregateOutputType> | number
          }
        }
      }
      ProfileWorkExperience: {
        payload: Prisma.$ProfileWorkExperiencePayload<ExtArgs>
        fields: Prisma.ProfileWorkExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileWorkExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileWorkExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileWorkExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileWorkExperiencePayload>
          }
          findFirst: {
            args: Prisma.ProfileWorkExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileWorkExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileWorkExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileWorkExperiencePayload>
          }
          findMany: {
            args: Prisma.ProfileWorkExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileWorkExperiencePayload>[]
          }
          create: {
            args: Prisma.ProfileWorkExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileWorkExperiencePayload>
          }
          createMany: {
            args: Prisma.ProfileWorkExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileWorkExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileWorkExperiencePayload>[]
          }
          delete: {
            args: Prisma.ProfileWorkExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileWorkExperiencePayload>
          }
          update: {
            args: Prisma.ProfileWorkExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileWorkExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ProfileWorkExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileWorkExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileWorkExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileWorkExperiencePayload>[]
          }
          upsert: {
            args: Prisma.ProfileWorkExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileWorkExperiencePayload>
          }
          aggregate: {
            args: Prisma.ProfileWorkExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfileWorkExperience>
          }
          groupBy: {
            args: Prisma.ProfileWorkExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileWorkExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileWorkExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileWorkExperienceCountAggregateOutputType> | number
          }
        }
      }
      ProfileAchievement: {
        payload: Prisma.$ProfileAchievementPayload<ExtArgs>
        fields: Prisma.ProfileAchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileAchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileAchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAchievementPayload>
          }
          findFirst: {
            args: Prisma.ProfileAchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileAchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAchievementPayload>
          }
          findMany: {
            args: Prisma.ProfileAchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAchievementPayload>[]
          }
          create: {
            args: Prisma.ProfileAchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAchievementPayload>
          }
          createMany: {
            args: Prisma.ProfileAchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileAchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAchievementPayload>[]
          }
          delete: {
            args: Prisma.ProfileAchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAchievementPayload>
          }
          update: {
            args: Prisma.ProfileAchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAchievementPayload>
          }
          deleteMany: {
            args: Prisma.ProfileAchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileAchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileAchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAchievementPayload>[]
          }
          upsert: {
            args: Prisma.ProfileAchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAchievementPayload>
          }
          aggregate: {
            args: Prisma.ProfileAchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfileAchievement>
          }
          groupBy: {
            args: Prisma.ProfileAchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileAchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileAchievementCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileAchievementCountAggregateOutputType> | number
          }
        }
      }
      ProfileProminentWork: {
        payload: Prisma.$ProfileProminentWorkPayload<ExtArgs>
        fields: Prisma.ProfileProminentWorkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileProminentWorkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileProminentWorkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileProminentWorkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileProminentWorkPayload>
          }
          findFirst: {
            args: Prisma.ProfileProminentWorkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileProminentWorkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileProminentWorkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileProminentWorkPayload>
          }
          findMany: {
            args: Prisma.ProfileProminentWorkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileProminentWorkPayload>[]
          }
          create: {
            args: Prisma.ProfileProminentWorkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileProminentWorkPayload>
          }
          createMany: {
            args: Prisma.ProfileProminentWorkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileProminentWorkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileProminentWorkPayload>[]
          }
          delete: {
            args: Prisma.ProfileProminentWorkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileProminentWorkPayload>
          }
          update: {
            args: Prisma.ProfileProminentWorkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileProminentWorkPayload>
          }
          deleteMany: {
            args: Prisma.ProfileProminentWorkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileProminentWorkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileProminentWorkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileProminentWorkPayload>[]
          }
          upsert: {
            args: Prisma.ProfileProminentWorkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileProminentWorkPayload>
          }
          aggregate: {
            args: Prisma.ProfileProminentWorkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfileProminentWork>
          }
          groupBy: {
            args: Prisma.ProfileProminentWorkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileProminentWorkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileProminentWorkCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileProminentWorkCountAggregateOutputType> | number
          }
        }
      }
      Portfolio: {
        payload: Prisma.$PortfolioPayload<ExtArgs>
        fields: Prisma.PortfolioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          findFirst: {
            args: Prisma.PortfolioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          findMany: {
            args: Prisma.PortfolioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          create: {
            args: Prisma.PortfolioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          createMany: {
            args: Prisma.PortfolioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          delete: {
            args: Prisma.PortfolioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          update: {
            args: Prisma.PortfolioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          upsert: {
            args: Prisma.PortfolioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          aggregate: {
            args: Prisma.PortfolioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolio>
          }
          groupBy: {
            args: Prisma.PortfolioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioCountAggregateOutputType> | number
          }
        }
      }
      PortfolioProminentProject: {
        payload: Prisma.$PortfolioProminentProjectPayload<ExtArgs>
        fields: Prisma.PortfolioProminentProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioProminentProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioProminentProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectPayload>
          }
          findFirst: {
            args: Prisma.PortfolioProminentProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioProminentProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectPayload>
          }
          findMany: {
            args: Prisma.PortfolioProminentProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectPayload>[]
          }
          create: {
            args: Prisma.PortfolioProminentProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectPayload>
          }
          createMany: {
            args: Prisma.PortfolioProminentProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioProminentProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectPayload>[]
          }
          delete: {
            args: Prisma.PortfolioProminentProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectPayload>
          }
          update: {
            args: Prisma.PortfolioProminentProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioProminentProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioProminentProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioProminentProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectPayload>[]
          }
          upsert: {
            args: Prisma.PortfolioProminentProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectPayload>
          }
          aggregate: {
            args: Prisma.PortfolioProminentProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioProminentProject>
          }
          groupBy: {
            args: Prisma.PortfolioProminentProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioProminentProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioProminentProjectCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioProminentProjectCountAggregateOutputType> | number
          }
        }
      }
      PortfolioProminentProjectImage: {
        payload: Prisma.$PortfolioProminentProjectImagePayload<ExtArgs>
        fields: Prisma.PortfolioProminentProjectImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioProminentProjectImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioProminentProjectImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectImagePayload>
          }
          findFirst: {
            args: Prisma.PortfolioProminentProjectImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioProminentProjectImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectImagePayload>
          }
          findMany: {
            args: Prisma.PortfolioProminentProjectImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectImagePayload>[]
          }
          create: {
            args: Prisma.PortfolioProminentProjectImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectImagePayload>
          }
          createMany: {
            args: Prisma.PortfolioProminentProjectImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioProminentProjectImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectImagePayload>[]
          }
          delete: {
            args: Prisma.PortfolioProminentProjectImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectImagePayload>
          }
          update: {
            args: Prisma.PortfolioProminentProjectImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectImagePayload>
          }
          deleteMany: {
            args: Prisma.PortfolioProminentProjectImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioProminentProjectImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioProminentProjectImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectImagePayload>[]
          }
          upsert: {
            args: Prisma.PortfolioProminentProjectImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioProminentProjectImagePayload>
          }
          aggregate: {
            args: Prisma.PortfolioProminentProjectImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioProminentProjectImage>
          }
          groupBy: {
            args: Prisma.PortfolioProminentProjectImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioProminentProjectImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioProminentProjectImageCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioProminentProjectImageCountAggregateOutputType> | number
          }
        }
      }
      PortfolioCustomerFeedback: {
        payload: Prisma.$PortfolioCustomerFeedbackPayload<ExtArgs>
        fields: Prisma.PortfolioCustomerFeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioCustomerFeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCustomerFeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioCustomerFeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCustomerFeedbackPayload>
          }
          findFirst: {
            args: Prisma.PortfolioCustomerFeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCustomerFeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioCustomerFeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCustomerFeedbackPayload>
          }
          findMany: {
            args: Prisma.PortfolioCustomerFeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCustomerFeedbackPayload>[]
          }
          create: {
            args: Prisma.PortfolioCustomerFeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCustomerFeedbackPayload>
          }
          createMany: {
            args: Prisma.PortfolioCustomerFeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioCustomerFeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCustomerFeedbackPayload>[]
          }
          delete: {
            args: Prisma.PortfolioCustomerFeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCustomerFeedbackPayload>
          }
          update: {
            args: Prisma.PortfolioCustomerFeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCustomerFeedbackPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioCustomerFeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioCustomerFeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioCustomerFeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCustomerFeedbackPayload>[]
          }
          upsert: {
            args: Prisma.PortfolioCustomerFeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCustomerFeedbackPayload>
          }
          aggregate: {
            args: Prisma.PortfolioCustomerFeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioCustomerFeedback>
          }
          groupBy: {
            args: Prisma.PortfolioCustomerFeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioCustomerFeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioCustomerFeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioCustomerFeedbackCountAggregateOutputType> | number
          }
        }
      }
      PortfolioAboutSection: {
        payload: Prisma.$PortfolioAboutSectionPayload<ExtArgs>
        fields: Prisma.PortfolioAboutSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioAboutSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioAboutSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioAboutSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioAboutSectionPayload>
          }
          findFirst: {
            args: Prisma.PortfolioAboutSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioAboutSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioAboutSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioAboutSectionPayload>
          }
          findMany: {
            args: Prisma.PortfolioAboutSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioAboutSectionPayload>[]
          }
          create: {
            args: Prisma.PortfolioAboutSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioAboutSectionPayload>
          }
          createMany: {
            args: Prisma.PortfolioAboutSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioAboutSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioAboutSectionPayload>[]
          }
          delete: {
            args: Prisma.PortfolioAboutSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioAboutSectionPayload>
          }
          update: {
            args: Prisma.PortfolioAboutSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioAboutSectionPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioAboutSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioAboutSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioAboutSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioAboutSectionPayload>[]
          }
          upsert: {
            args: Prisma.PortfolioAboutSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioAboutSectionPayload>
          }
          aggregate: {
            args: Prisma.PortfolioAboutSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioAboutSection>
          }
          groupBy: {
            args: Prisma.PortfolioAboutSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioAboutSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioAboutSectionCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioAboutSectionCountAggregateOutputType> | number
          }
        }
      }
      PortfolioWorkExperience: {
        payload: Prisma.$PortfolioWorkExperiencePayload<ExtArgs>
        fields: Prisma.PortfolioWorkExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioWorkExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioWorkExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioWorkExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioWorkExperiencePayload>
          }
          findFirst: {
            args: Prisma.PortfolioWorkExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioWorkExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioWorkExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioWorkExperiencePayload>
          }
          findMany: {
            args: Prisma.PortfolioWorkExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioWorkExperiencePayload>[]
          }
          create: {
            args: Prisma.PortfolioWorkExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioWorkExperiencePayload>
          }
          createMany: {
            args: Prisma.PortfolioWorkExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioWorkExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioWorkExperiencePayload>[]
          }
          delete: {
            args: Prisma.PortfolioWorkExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioWorkExperiencePayload>
          }
          update: {
            args: Prisma.PortfolioWorkExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioWorkExperiencePayload>
          }
          deleteMany: {
            args: Prisma.PortfolioWorkExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioWorkExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioWorkExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioWorkExperiencePayload>[]
          }
          upsert: {
            args: Prisma.PortfolioWorkExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioWorkExperiencePayload>
          }
          aggregate: {
            args: Prisma.PortfolioWorkExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioWorkExperience>
          }
          groupBy: {
            args: Prisma.PortfolioWorkExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioWorkExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioWorkExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioWorkExperienceCountAggregateOutputType> | number
          }
        }
      }
      PortfolioSkill: {
        payload: Prisma.$PortfolioSkillPayload<ExtArgs>
        fields: Prisma.PortfolioSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSkillPayload>
          }
          findFirst: {
            args: Prisma.PortfolioSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSkillPayload>
          }
          findMany: {
            args: Prisma.PortfolioSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSkillPayload>[]
          }
          create: {
            args: Prisma.PortfolioSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSkillPayload>
          }
          createMany: {
            args: Prisma.PortfolioSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSkillPayload>[]
          }
          delete: {
            args: Prisma.PortfolioSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSkillPayload>
          }
          update: {
            args: Prisma.PortfolioSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSkillPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSkillPayload>[]
          }
          upsert: {
            args: Prisma.PortfolioSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSkillPayload>
          }
          aggregate: {
            args: Prisma.PortfolioSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioSkill>
          }
          groupBy: {
            args: Prisma.PortfolioSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioSkillCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioSkillCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    auth?: AuthOmit
    profileWorkExperience?: ProfileWorkExperienceOmit
    profileAchievement?: ProfileAchievementOmit
    profileProminentWork?: ProfileProminentWorkOmit
    portfolio?: PortfolioOmit
    portfolioProminentProject?: PortfolioProminentProjectOmit
    portfolioProminentProjectImage?: PortfolioProminentProjectImageOmit
    portfolioCustomerFeedback?: PortfolioCustomerFeedbackOmit
    portfolioAboutSection?: PortfolioAboutSectionOmit
    portfolioWorkExperience?: PortfolioWorkExperienceOmit
    portfolioSkill?: PortfolioSkillOmit
    booking?: BookingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    profileWorkExperiences: number
    profileAchievements: number
    profileProminentWorks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profileWorkExperiences?: boolean | UserCountOutputTypeCountProfileWorkExperiencesArgs
    profileAchievements?: boolean | UserCountOutputTypeCountProfileAchievementsArgs
    profileProminentWorks?: boolean | UserCountOutputTypeCountProfileProminentWorksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProfileWorkExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWorkExperienceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProfileAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileAchievementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProfileProminentWorksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileProminentWorkWhereInput
  }


  /**
   * Count Type PortfolioCountOutputType
   */

  export type PortfolioCountOutputType = {
    portfolioProminentProjects: number
    portfolioCustomerFeedbacks: number
    portfolioWorkExperiences: number
    portfolioSkills: number
  }

  export type PortfolioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolioProminentProjects?: boolean | PortfolioCountOutputTypeCountPortfolioProminentProjectsArgs
    portfolioCustomerFeedbacks?: boolean | PortfolioCountOutputTypeCountPortfolioCustomerFeedbacksArgs
    portfolioWorkExperiences?: boolean | PortfolioCountOutputTypeCountPortfolioWorkExperiencesArgs
    portfolioSkills?: boolean | PortfolioCountOutputTypeCountPortfolioSkillsArgs
  }

  // Custom InputTypes
  /**
   * PortfolioCountOutputType without action
   */
  export type PortfolioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCountOutputType
     */
    select?: PortfolioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PortfolioCountOutputType without action
   */
  export type PortfolioCountOutputTypeCountPortfolioProminentProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioProminentProjectWhereInput
  }

  /**
   * PortfolioCountOutputType without action
   */
  export type PortfolioCountOutputTypeCountPortfolioCustomerFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioCustomerFeedbackWhereInput
  }

  /**
   * PortfolioCountOutputType without action
   */
  export type PortfolioCountOutputTypeCountPortfolioWorkExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioWorkExperienceWhereInput
  }

  /**
   * PortfolioCountOutputType without action
   */
  export type PortfolioCountOutputTypeCountPortfolioSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioSkillWhereInput
  }


  /**
   * Count Type PortfolioProminentProjectCountOutputType
   */

  export type PortfolioProminentProjectCountOutputType = {
    portfolioProminentProjectImages: number
  }

  export type PortfolioProminentProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolioProminentProjectImages?: boolean | PortfolioProminentProjectCountOutputTypeCountPortfolioProminentProjectImagesArgs
  }

  // Custom InputTypes
  /**
   * PortfolioProminentProjectCountOutputType without action
   */
  export type PortfolioProminentProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProjectCountOutputType
     */
    select?: PortfolioProminentProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PortfolioProminentProjectCountOutputType without action
   */
  export type PortfolioProminentProjectCountOutputTypeCountPortfolioProminentProjectImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioProminentProjectImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    role: number | null
    gender: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    role: number | null
    gender: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    avatar: string | null
    role: number | null
    phone: string | null
    gender: number | null
    email: string | null
    biography: string | null
    address: string | null
    occupation: string | null
    facebookLink: string | null
    instagramLink: string | null
    youtubeLink: string | null
    tiktokLink: string | null
    avatarPublicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    avatar: string | null
    role: number | null
    phone: string | null
    gender: number | null
    email: string | null
    biography: string | null
    address: string | null
    occupation: string | null
    facebookLink: string | null
    instagramLink: string | null
    youtubeLink: string | null
    tiktokLink: string | null
    avatarPublicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    avatar: number
    role: number
    phone: number
    gender: number
    email: number
    biography: number
    address: number
    occupation: number
    facebookLink: number
    instagramLink: number
    youtubeLink: number
    tiktokLink: number
    avatarPublicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    role?: true
    gender?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    role?: true
    gender?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    role?: true
    phone?: true
    gender?: true
    email?: true
    biography?: true
    address?: true
    occupation?: true
    facebookLink?: true
    instagramLink?: true
    youtubeLink?: true
    tiktokLink?: true
    avatarPublicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    role?: true
    phone?: true
    gender?: true
    email?: true
    biography?: true
    address?: true
    occupation?: true
    facebookLink?: true
    instagramLink?: true
    youtubeLink?: true
    tiktokLink?: true
    avatarPublicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    role?: true
    phone?: true
    gender?: true
    email?: true
    biography?: true
    address?: true
    occupation?: true
    facebookLink?: true
    instagramLink?: true
    youtubeLink?: true
    tiktokLink?: true
    avatarPublicId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    avatar: string | null
    role: number
    phone: string | null
    gender: number | null
    email: string | null
    biography: string | null
    address: string | null
    occupation: string | null
    facebookLink: string | null
    instagramLink: string | null
    youtubeLink: string | null
    tiktokLink: string | null
    avatarPublicId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    role?: boolean
    phone?: boolean
    gender?: boolean
    email?: boolean
    biography?: boolean
    address?: boolean
    occupation?: boolean
    facebookLink?: boolean
    instagramLink?: boolean
    youtubeLink?: boolean
    tiktokLink?: boolean
    avatarPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profileWorkExperiences?: boolean | User$profileWorkExperiencesArgs<ExtArgs>
    profileAchievements?: boolean | User$profileAchievementsArgs<ExtArgs>
    profileProminentWorks?: boolean | User$profileProminentWorksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    role?: boolean
    phone?: boolean
    gender?: boolean
    email?: boolean
    biography?: boolean
    address?: boolean
    occupation?: boolean
    facebookLink?: boolean
    instagramLink?: boolean
    youtubeLink?: boolean
    tiktokLink?: boolean
    avatarPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    role?: boolean
    phone?: boolean
    gender?: boolean
    email?: boolean
    biography?: boolean
    address?: boolean
    occupation?: boolean
    facebookLink?: boolean
    instagramLink?: boolean
    youtubeLink?: boolean
    tiktokLink?: boolean
    avatarPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    avatar?: boolean
    role?: boolean
    phone?: boolean
    gender?: boolean
    email?: boolean
    biography?: boolean
    address?: boolean
    occupation?: boolean
    facebookLink?: boolean
    instagramLink?: boolean
    youtubeLink?: boolean
    tiktokLink?: boolean
    avatarPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "avatar" | "role" | "phone" | "gender" | "email" | "biography" | "address" | "occupation" | "facebookLink" | "instagramLink" | "youtubeLink" | "tiktokLink" | "avatarPublicId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profileWorkExperiences?: boolean | User$profileWorkExperiencesArgs<ExtArgs>
    profileAchievements?: boolean | User$profileAchievementsArgs<ExtArgs>
    profileProminentWorks?: boolean | User$profileProminentWorksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profileWorkExperiences: Prisma.$ProfileWorkExperiencePayload<ExtArgs>[]
      profileAchievements: Prisma.$ProfileAchievementPayload<ExtArgs>[]
      profileProminentWorks: Prisma.$ProfileProminentWorkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      avatar: string | null
      role: number
      phone: string | null
      gender: number | null
      email: string | null
      biography: string | null
      address: string | null
      occupation: string | null
      facebookLink: string | null
      instagramLink: string | null
      youtubeLink: string | null
      tiktokLink: string | null
      avatarPublicId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profileWorkExperiences<T extends User$profileWorkExperiencesArgs<ExtArgs> = {}>(args?: Subset<T, User$profileWorkExperiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileWorkExperiencePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    profileAchievements<T extends User$profileAchievementsArgs<ExtArgs> = {}>(args?: Subset<T, User$profileAchievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileAchievementPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    profileProminentWorks<T extends User$profileProminentWorksArgs<ExtArgs> = {}>(args?: Subset<T, User$profileProminentWorksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileProminentWorkPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Int'>
    readonly phone: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly biography: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly occupation: FieldRef<"User", 'String'>
    readonly facebookLink: FieldRef<"User", 'String'>
    readonly instagramLink: FieldRef<"User", 'String'>
    readonly youtubeLink: FieldRef<"User", 'String'>
    readonly tiktokLink: FieldRef<"User", 'String'>
    readonly avatarPublicId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profileWorkExperiences
   */
  export type User$profileWorkExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileWorkExperience
     */
    select?: ProfileWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileWorkExperience
     */
    omit?: ProfileWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileWorkExperienceInclude<ExtArgs> | null
    where?: ProfileWorkExperienceWhereInput
    orderBy?: ProfileWorkExperienceOrderByWithRelationInput | ProfileWorkExperienceOrderByWithRelationInput[]
    cursor?: ProfileWorkExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileWorkExperienceScalarFieldEnum | ProfileWorkExperienceScalarFieldEnum[]
  }

  /**
   * User.profileAchievements
   */
  export type User$profileAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAchievement
     */
    select?: ProfileAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAchievement
     */
    omit?: ProfileAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAchievementInclude<ExtArgs> | null
    where?: ProfileAchievementWhereInput
    orderBy?: ProfileAchievementOrderByWithRelationInput | ProfileAchievementOrderByWithRelationInput[]
    cursor?: ProfileAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileAchievementScalarFieldEnum | ProfileAchievementScalarFieldEnum[]
  }

  /**
   * User.profileProminentWorks
   */
  export type User$profileProminentWorksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileProminentWork
     */
    select?: ProfileProminentWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileProminentWork
     */
    omit?: ProfileProminentWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileProminentWorkInclude<ExtArgs> | null
    where?: ProfileProminentWorkWhereInput
    orderBy?: ProfileProminentWorkOrderByWithRelationInput | ProfileProminentWorkOrderByWithRelationInput[]
    cursor?: ProfileProminentWorkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileProminentWorkScalarFieldEnum | ProfileProminentWorkScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Auth
   */

  export type AggregateAuth = {
    _count: AuthCountAggregateOutputType | null
    _avg: AuthAvgAggregateOutputType | null
    _sum: AuthSumAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  export type AuthAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AuthSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AuthMinAggregateOutputType = {
    id: number | null
    userId: number | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthCountAggregateOutputType = {
    id: number
    userId: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AuthSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AuthMinAggregateInputType = {
    id?: true
    userId?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthMaxAggregateInputType = {
    id?: true
    userId?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthCountAggregateInputType = {
    id?: true
    userId?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auth to aggregate.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auths
    **/
    _count?: true | AuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthMaxAggregateInputType
  }

  export type GetAuthAggregateType<T extends AuthAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth[P]>
      : GetScalarType<T[P], AggregateAuth[P]>
  }




  export type AuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthWhereInput
    orderBy?: AuthOrderByWithAggregationInput | AuthOrderByWithAggregationInput[]
    by: AuthScalarFieldEnum[] | AuthScalarFieldEnum
    having?: AuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthCountAggregateInputType | true
    _avg?: AuthAvgAggregateInputType
    _sum?: AuthSumAggregateInputType
    _min?: AuthMinAggregateInputType
    _max?: AuthMaxAggregateInputType
  }

  export type AuthGroupByOutputType = {
    id: number
    userId: number
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AuthCountAggregateOutputType | null
    _avg: AuthAvgAggregateOutputType | null
    _sum: AuthSumAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  type GetAuthGroupByPayload<T extends AuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthGroupByOutputType[P]>
            : GetScalarType<T[P], AuthGroupByOutputType[P]>
        }
      >
    >


  export type AuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectScalar = {
    id?: boolean
    userId?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["auth"]>

  export type $AuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auth"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["auth"]>
    composites: {}
  }

  type AuthGetPayload<S extends boolean | null | undefined | AuthDefaultArgs> = $Result.GetResult<Prisma.$AuthPayload, S>

  type AuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthCountAggregateInputType | true
    }

  export interface AuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auth'], meta: { name: 'Auth' } }
    /**
     * Find zero or one Auth that matches the filter.
     * @param {AuthFindUniqueArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthFindUniqueArgs>(args: SelectSubset<T, AuthFindUniqueArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Auth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthFindUniqueOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Auth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindFirstArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthFindFirstArgs>(args?: SelectSubset<T, AuthFindFirstArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Auth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindFirstOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Auths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auths
     * const auths = await prisma.auth.findMany()
     * 
     * // Get first 10 Auths
     * const auths = await prisma.auth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authWithIdOnly = await prisma.auth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthFindManyArgs>(args?: SelectSubset<T, AuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Auth.
     * @param {AuthCreateArgs} args - Arguments to create a Auth.
     * @example
     * // Create one Auth
     * const Auth = await prisma.auth.create({
     *   data: {
     *     // ... data to create a Auth
     *   }
     * })
     * 
     */
    create<T extends AuthCreateArgs>(args: SelectSubset<T, AuthCreateArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Auths.
     * @param {AuthCreateManyArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthCreateManyArgs>(args?: SelectSubset<T, AuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auths and returns the data saved in the database.
     * @param {AuthCreateManyAndReturnArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auths and only return the `id`
     * const authWithIdOnly = await prisma.auth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Auth.
     * @param {AuthDeleteArgs} args - Arguments to delete one Auth.
     * @example
     * // Delete one Auth
     * const Auth = await prisma.auth.delete({
     *   where: {
     *     // ... filter to delete one Auth
     *   }
     * })
     * 
     */
    delete<T extends AuthDeleteArgs>(args: SelectSubset<T, AuthDeleteArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Auth.
     * @param {AuthUpdateArgs} args - Arguments to update one Auth.
     * @example
     * // Update one Auth
     * const auth = await prisma.auth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthUpdateArgs>(args: SelectSubset<T, AuthUpdateArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Auths.
     * @param {AuthDeleteManyArgs} args - Arguments to filter Auths to delete.
     * @example
     * // Delete a few Auths
     * const { count } = await prisma.auth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthDeleteManyArgs>(args?: SelectSubset<T, AuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthUpdateManyArgs>(args: SelectSubset<T, AuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auths and returns the data updated in the database.
     * @param {AuthUpdateManyAndReturnArgs} args - Arguments to update many Auths.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auths and only return the `id`
     * const authWithIdOnly = await prisma.auth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Auth.
     * @param {AuthUpsertArgs} args - Arguments to update or create a Auth.
     * @example
     * // Update or create a Auth
     * const auth = await prisma.auth.upsert({
     *   create: {
     *     // ... data to create a Auth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth we want to update
     *   }
     * })
     */
    upsert<T extends AuthUpsertArgs>(args: SelectSubset<T, AuthUpsertArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCountArgs} args - Arguments to filter Auths to count.
     * @example
     * // Count the number of Auths
     * const count = await prisma.auth.count({
     *   where: {
     *     // ... the filter for the Auths we want to count
     *   }
     * })
    **/
    count<T extends AuthCountArgs>(
      args?: Subset<T, AuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthAggregateArgs>(args: Subset<T, AuthAggregateArgs>): Prisma.PrismaPromise<GetAuthAggregateType<T>>

    /**
     * Group by Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthGroupByArgs['orderBy'] }
        : { orderBy?: AuthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auth model
   */
  readonly fields: AuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Auth model
   */ 
  interface AuthFieldRefs {
    readonly id: FieldRef<"Auth", 'Int'>
    readonly userId: FieldRef<"Auth", 'Int'>
    readonly password: FieldRef<"Auth", 'String'>
    readonly createdAt: FieldRef<"Auth", 'DateTime'>
    readonly updatedAt: FieldRef<"Auth", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Auth findUnique
   */
  export type AuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth findUniqueOrThrow
   */
  export type AuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth findFirst
   */
  export type AuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth findFirstOrThrow
   */
  export type AuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth findMany
   */
  export type AuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Filter, which Auths to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth create
   */
  export type AuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The data needed to create a Auth.
     */
    data: XOR<AuthCreateInput, AuthUncheckedCreateInput>
  }

  /**
   * Auth createMany
   */
  export type AuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auths.
     */
    data: AuthCreateManyInput | AuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auth createManyAndReturn
   */
  export type AuthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The data used to create many Auths.
     */
    data: AuthCreateManyInput | AuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auth update
   */
  export type AuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The data needed to update a Auth.
     */
    data: XOR<AuthUpdateInput, AuthUncheckedUpdateInput>
    /**
     * Choose, which Auth to update.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth updateMany
   */
  export type AuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auths.
     */
    data: XOR<AuthUpdateManyMutationInput, AuthUncheckedUpdateManyInput>
    /**
     * Filter which Auths to update
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to update.
     */
    limit?: number
  }

  /**
   * Auth updateManyAndReturn
   */
  export type AuthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The data used to update Auths.
     */
    data: XOR<AuthUpdateManyMutationInput, AuthUncheckedUpdateManyInput>
    /**
     * Filter which Auths to update
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to update.
     */
    limit?: number
  }

  /**
   * Auth upsert
   */
  export type AuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The filter to search for the Auth to update in case it exists.
     */
    where: AuthWhereUniqueInput
    /**
     * In case the Auth found by the `where` argument doesn't exist, create a new Auth with this data.
     */
    create: XOR<AuthCreateInput, AuthUncheckedCreateInput>
    /**
     * In case the Auth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthUpdateInput, AuthUncheckedUpdateInput>
  }

  /**
   * Auth delete
   */
  export type AuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Filter which Auth to delete.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth deleteMany
   */
  export type AuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auths to delete
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to delete.
     */
    limit?: number
  }

  /**
   * Auth without action
   */
  export type AuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
  }


  /**
   * Model ProfileWorkExperience
   */

  export type AggregateProfileWorkExperience = {
    _count: ProfileWorkExperienceCountAggregateOutputType | null
    _avg: ProfileWorkExperienceAvgAggregateOutputType | null
    _sum: ProfileWorkExperienceSumAggregateOutputType | null
    _min: ProfileWorkExperienceMinAggregateOutputType | null
    _max: ProfileWorkExperienceMaxAggregateOutputType | null
  }

  export type ProfileWorkExperienceAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileWorkExperienceSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileWorkExperienceMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    description: string | null
    from: Date | null
    to: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileWorkExperienceMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    description: string | null
    from: Date | null
    to: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileWorkExperienceCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    from: number
    to: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileWorkExperienceAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileWorkExperienceSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileWorkExperienceMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileWorkExperienceMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileWorkExperienceCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileWorkExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileWorkExperience to aggregate.
     */
    where?: ProfileWorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileWorkExperiences to fetch.
     */
    orderBy?: ProfileWorkExperienceOrderByWithRelationInput | ProfileWorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileWorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileWorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfileWorkExperiences
    **/
    _count?: true | ProfileWorkExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileWorkExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileWorkExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileWorkExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileWorkExperienceMaxAggregateInputType
  }

  export type GetProfileWorkExperienceAggregateType<T extends ProfileWorkExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateProfileWorkExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfileWorkExperience[P]>
      : GetScalarType<T[P], AggregateProfileWorkExperience[P]>
  }




  export type ProfileWorkExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWorkExperienceWhereInput
    orderBy?: ProfileWorkExperienceOrderByWithAggregationInput | ProfileWorkExperienceOrderByWithAggregationInput[]
    by: ProfileWorkExperienceScalarFieldEnum[] | ProfileWorkExperienceScalarFieldEnum
    having?: ProfileWorkExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileWorkExperienceCountAggregateInputType | true
    _avg?: ProfileWorkExperienceAvgAggregateInputType
    _sum?: ProfileWorkExperienceSumAggregateInputType
    _min?: ProfileWorkExperienceMinAggregateInputType
    _max?: ProfileWorkExperienceMaxAggregateInputType
  }

  export type ProfileWorkExperienceGroupByOutputType = {
    id: number
    userId: number
    name: string
    description: string | null
    from: Date
    to: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileWorkExperienceCountAggregateOutputType | null
    _avg: ProfileWorkExperienceAvgAggregateOutputType | null
    _sum: ProfileWorkExperienceSumAggregateOutputType | null
    _min: ProfileWorkExperienceMinAggregateOutputType | null
    _max: ProfileWorkExperienceMaxAggregateOutputType | null
  }

  type GetProfileWorkExperienceGroupByPayload<T extends ProfileWorkExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileWorkExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileWorkExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileWorkExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileWorkExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ProfileWorkExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileWorkExperience"]>

  export type ProfileWorkExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileWorkExperience"]>

  export type ProfileWorkExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileWorkExperience"]>

  export type ProfileWorkExperienceSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileWorkExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "from" | "to" | "createdAt" | "updatedAt", ExtArgs["result"]["profileWorkExperience"]>
  export type ProfileWorkExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileWorkExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileWorkExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfileWorkExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfileWorkExperience"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string
      description: string | null
      from: Date
      to: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profileWorkExperience"]>
    composites: {}
  }

  type ProfileWorkExperienceGetPayload<S extends boolean | null | undefined | ProfileWorkExperienceDefaultArgs> = $Result.GetResult<Prisma.$ProfileWorkExperiencePayload, S>

  type ProfileWorkExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileWorkExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileWorkExperienceCountAggregateInputType | true
    }

  export interface ProfileWorkExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfileWorkExperience'], meta: { name: 'ProfileWorkExperience' } }
    /**
     * Find zero or one ProfileWorkExperience that matches the filter.
     * @param {ProfileWorkExperienceFindUniqueArgs} args - Arguments to find a ProfileWorkExperience
     * @example
     * // Get one ProfileWorkExperience
     * const profileWorkExperience = await prisma.profileWorkExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileWorkExperienceFindUniqueArgs>(args: SelectSubset<T, ProfileWorkExperienceFindUniqueArgs<ExtArgs>>): Prisma__ProfileWorkExperienceClient<$Result.GetResult<Prisma.$ProfileWorkExperiencePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProfileWorkExperience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileWorkExperienceFindUniqueOrThrowArgs} args - Arguments to find a ProfileWorkExperience
     * @example
     * // Get one ProfileWorkExperience
     * const profileWorkExperience = await prisma.profileWorkExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileWorkExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileWorkExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileWorkExperienceClient<$Result.GetResult<Prisma.$ProfileWorkExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProfileWorkExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileWorkExperienceFindFirstArgs} args - Arguments to find a ProfileWorkExperience
     * @example
     * // Get one ProfileWorkExperience
     * const profileWorkExperience = await prisma.profileWorkExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileWorkExperienceFindFirstArgs>(args?: SelectSubset<T, ProfileWorkExperienceFindFirstArgs<ExtArgs>>): Prisma__ProfileWorkExperienceClient<$Result.GetResult<Prisma.$ProfileWorkExperiencePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProfileWorkExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileWorkExperienceFindFirstOrThrowArgs} args - Arguments to find a ProfileWorkExperience
     * @example
     * // Get one ProfileWorkExperience
     * const profileWorkExperience = await prisma.profileWorkExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileWorkExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileWorkExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileWorkExperienceClient<$Result.GetResult<Prisma.$ProfileWorkExperiencePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProfileWorkExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileWorkExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileWorkExperiences
     * const profileWorkExperiences = await prisma.profileWorkExperience.findMany()
     * 
     * // Get first 10 ProfileWorkExperiences
     * const profileWorkExperiences = await prisma.profileWorkExperience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWorkExperienceWithIdOnly = await prisma.profileWorkExperience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileWorkExperienceFindManyArgs>(args?: SelectSubset<T, ProfileWorkExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileWorkExperiencePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProfileWorkExperience.
     * @param {ProfileWorkExperienceCreateArgs} args - Arguments to create a ProfileWorkExperience.
     * @example
     * // Create one ProfileWorkExperience
     * const ProfileWorkExperience = await prisma.profileWorkExperience.create({
     *   data: {
     *     // ... data to create a ProfileWorkExperience
     *   }
     * })
     * 
     */
    create<T extends ProfileWorkExperienceCreateArgs>(args: SelectSubset<T, ProfileWorkExperienceCreateArgs<ExtArgs>>): Prisma__ProfileWorkExperienceClient<$Result.GetResult<Prisma.$ProfileWorkExperiencePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProfileWorkExperiences.
     * @param {ProfileWorkExperienceCreateManyArgs} args - Arguments to create many ProfileWorkExperiences.
     * @example
     * // Create many ProfileWorkExperiences
     * const profileWorkExperience = await prisma.profileWorkExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileWorkExperienceCreateManyArgs>(args?: SelectSubset<T, ProfileWorkExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfileWorkExperiences and returns the data saved in the database.
     * @param {ProfileWorkExperienceCreateManyAndReturnArgs} args - Arguments to create many ProfileWorkExperiences.
     * @example
     * // Create many ProfileWorkExperiences
     * const profileWorkExperience = await prisma.profileWorkExperience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfileWorkExperiences and only return the `id`
     * const profileWorkExperienceWithIdOnly = await prisma.profileWorkExperience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileWorkExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileWorkExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileWorkExperiencePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ProfileWorkExperience.
     * @param {ProfileWorkExperienceDeleteArgs} args - Arguments to delete one ProfileWorkExperience.
     * @example
     * // Delete one ProfileWorkExperience
     * const ProfileWorkExperience = await prisma.profileWorkExperience.delete({
     *   where: {
     *     // ... filter to delete one ProfileWorkExperience
     *   }
     * })
     * 
     */
    delete<T extends ProfileWorkExperienceDeleteArgs>(args: SelectSubset<T, ProfileWorkExperienceDeleteArgs<ExtArgs>>): Prisma__ProfileWorkExperienceClient<$Result.GetResult<Prisma.$ProfileWorkExperiencePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProfileWorkExperience.
     * @param {ProfileWorkExperienceUpdateArgs} args - Arguments to update one ProfileWorkExperience.
     * @example
     * // Update one ProfileWorkExperience
     * const profileWorkExperience = await prisma.profileWorkExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileWorkExperienceUpdateArgs>(args: SelectSubset<T, ProfileWorkExperienceUpdateArgs<ExtArgs>>): Prisma__ProfileWorkExperienceClient<$Result.GetResult<Prisma.$ProfileWorkExperiencePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProfileWorkExperiences.
     * @param {ProfileWorkExperienceDeleteManyArgs} args - Arguments to filter ProfileWorkExperiences to delete.
     * @example
     * // Delete a few ProfileWorkExperiences
     * const { count } = await prisma.profileWorkExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileWorkExperienceDeleteManyArgs>(args?: SelectSubset<T, ProfileWorkExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileWorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileWorkExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileWorkExperiences
     * const profileWorkExperience = await prisma.profileWorkExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileWorkExperienceUpdateManyArgs>(args: SelectSubset<T, ProfileWorkExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileWorkExperiences and returns the data updated in the database.
     * @param {ProfileWorkExperienceUpdateManyAndReturnArgs} args - Arguments to update many ProfileWorkExperiences.
     * @example
     * // Update many ProfileWorkExperiences
     * const profileWorkExperience = await prisma.profileWorkExperience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfileWorkExperiences and only return the `id`
     * const profileWorkExperienceWithIdOnly = await prisma.profileWorkExperience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileWorkExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileWorkExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileWorkExperiencePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ProfileWorkExperience.
     * @param {ProfileWorkExperienceUpsertArgs} args - Arguments to update or create a ProfileWorkExperience.
     * @example
     * // Update or create a ProfileWorkExperience
     * const profileWorkExperience = await prisma.profileWorkExperience.upsert({
     *   create: {
     *     // ... data to create a ProfileWorkExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileWorkExperience we want to update
     *   }
     * })
     */
    upsert<T extends ProfileWorkExperienceUpsertArgs>(args: SelectSubset<T, ProfileWorkExperienceUpsertArgs<ExtArgs>>): Prisma__ProfileWorkExperienceClient<$Result.GetResult<Prisma.$ProfileWorkExperiencePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProfileWorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileWorkExperienceCountArgs} args - Arguments to filter ProfileWorkExperiences to count.
     * @example
     * // Count the number of ProfileWorkExperiences
     * const count = await prisma.profileWorkExperience.count({
     *   where: {
     *     // ... the filter for the ProfileWorkExperiences we want to count
     *   }
     * })
    **/
    count<T extends ProfileWorkExperienceCountArgs>(
      args?: Subset<T, ProfileWorkExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileWorkExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfileWorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileWorkExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileWorkExperienceAggregateArgs>(args: Subset<T, ProfileWorkExperienceAggregateArgs>): Prisma.PrismaPromise<GetProfileWorkExperienceAggregateType<T>>

    /**
     * Group by ProfileWorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileWorkExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileWorkExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileWorkExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ProfileWorkExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileWorkExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileWorkExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfileWorkExperience model
   */
  readonly fields: ProfileWorkExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfileWorkExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileWorkExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfileWorkExperience model
   */ 
  interface ProfileWorkExperienceFieldRefs {
    readonly id: FieldRef<"ProfileWorkExperience", 'Int'>
    readonly userId: FieldRef<"ProfileWorkExperience", 'Int'>
    readonly name: FieldRef<"ProfileWorkExperience", 'String'>
    readonly description: FieldRef<"ProfileWorkExperience", 'String'>
    readonly from: FieldRef<"ProfileWorkExperience", 'DateTime'>
    readonly to: FieldRef<"ProfileWorkExperience", 'DateTime'>
    readonly createdAt: FieldRef<"ProfileWorkExperience", 'DateTime'>
    readonly updatedAt: FieldRef<"ProfileWorkExperience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfileWorkExperience findUnique
   */
  export type ProfileWorkExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileWorkExperience
     */
    select?: ProfileWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileWorkExperience
     */
    omit?: ProfileWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which ProfileWorkExperience to fetch.
     */
    where: ProfileWorkExperienceWhereUniqueInput
  }

  /**
   * ProfileWorkExperience findUniqueOrThrow
   */
  export type ProfileWorkExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileWorkExperience
     */
    select?: ProfileWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileWorkExperience
     */
    omit?: ProfileWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which ProfileWorkExperience to fetch.
     */
    where: ProfileWorkExperienceWhereUniqueInput
  }

  /**
   * ProfileWorkExperience findFirst
   */
  export type ProfileWorkExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileWorkExperience
     */
    select?: ProfileWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileWorkExperience
     */
    omit?: ProfileWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which ProfileWorkExperience to fetch.
     */
    where?: ProfileWorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileWorkExperiences to fetch.
     */
    orderBy?: ProfileWorkExperienceOrderByWithRelationInput | ProfileWorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileWorkExperiences.
     */
    cursor?: ProfileWorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileWorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileWorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileWorkExperiences.
     */
    distinct?: ProfileWorkExperienceScalarFieldEnum | ProfileWorkExperienceScalarFieldEnum[]
  }

  /**
   * ProfileWorkExperience findFirstOrThrow
   */
  export type ProfileWorkExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileWorkExperience
     */
    select?: ProfileWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileWorkExperience
     */
    omit?: ProfileWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which ProfileWorkExperience to fetch.
     */
    where?: ProfileWorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileWorkExperiences to fetch.
     */
    orderBy?: ProfileWorkExperienceOrderByWithRelationInput | ProfileWorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileWorkExperiences.
     */
    cursor?: ProfileWorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileWorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileWorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileWorkExperiences.
     */
    distinct?: ProfileWorkExperienceScalarFieldEnum | ProfileWorkExperienceScalarFieldEnum[]
  }

  /**
   * ProfileWorkExperience findMany
   */
  export type ProfileWorkExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileWorkExperience
     */
    select?: ProfileWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileWorkExperience
     */
    omit?: ProfileWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which ProfileWorkExperiences to fetch.
     */
    where?: ProfileWorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileWorkExperiences to fetch.
     */
    orderBy?: ProfileWorkExperienceOrderByWithRelationInput | ProfileWorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfileWorkExperiences.
     */
    cursor?: ProfileWorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileWorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileWorkExperiences.
     */
    skip?: number
    distinct?: ProfileWorkExperienceScalarFieldEnum | ProfileWorkExperienceScalarFieldEnum[]
  }

  /**
   * ProfileWorkExperience create
   */
  export type ProfileWorkExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileWorkExperience
     */
    select?: ProfileWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileWorkExperience
     */
    omit?: ProfileWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileWorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfileWorkExperience.
     */
    data: XOR<ProfileWorkExperienceCreateInput, ProfileWorkExperienceUncheckedCreateInput>
  }

  /**
   * ProfileWorkExperience createMany
   */
  export type ProfileWorkExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileWorkExperiences.
     */
    data: ProfileWorkExperienceCreateManyInput | ProfileWorkExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileWorkExperience createManyAndReturn
   */
  export type ProfileWorkExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileWorkExperience
     */
    select?: ProfileWorkExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileWorkExperience
     */
    omit?: ProfileWorkExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many ProfileWorkExperiences.
     */
    data: ProfileWorkExperienceCreateManyInput | ProfileWorkExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileWorkExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileWorkExperience update
   */
  export type ProfileWorkExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileWorkExperience
     */
    select?: ProfileWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileWorkExperience
     */
    omit?: ProfileWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileWorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfileWorkExperience.
     */
    data: XOR<ProfileWorkExperienceUpdateInput, ProfileWorkExperienceUncheckedUpdateInput>
    /**
     * Choose, which ProfileWorkExperience to update.
     */
    where: ProfileWorkExperienceWhereUniqueInput
  }

  /**
   * ProfileWorkExperience updateMany
   */
  export type ProfileWorkExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileWorkExperiences.
     */
    data: XOR<ProfileWorkExperienceUpdateManyMutationInput, ProfileWorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which ProfileWorkExperiences to update
     */
    where?: ProfileWorkExperienceWhereInput
    /**
     * Limit how many ProfileWorkExperiences to update.
     */
    limit?: number
  }

  /**
   * ProfileWorkExperience updateManyAndReturn
   */
  export type ProfileWorkExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileWorkExperience
     */
    select?: ProfileWorkExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileWorkExperience
     */
    omit?: ProfileWorkExperienceOmit<ExtArgs> | null
    /**
     * The data used to update ProfileWorkExperiences.
     */
    data: XOR<ProfileWorkExperienceUpdateManyMutationInput, ProfileWorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which ProfileWorkExperiences to update
     */
    where?: ProfileWorkExperienceWhereInput
    /**
     * Limit how many ProfileWorkExperiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileWorkExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileWorkExperience upsert
   */
  export type ProfileWorkExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileWorkExperience
     */
    select?: ProfileWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileWorkExperience
     */
    omit?: ProfileWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileWorkExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfileWorkExperience to update in case it exists.
     */
    where: ProfileWorkExperienceWhereUniqueInput
    /**
     * In case the ProfileWorkExperience found by the `where` argument doesn't exist, create a new ProfileWorkExperience with this data.
     */
    create: XOR<ProfileWorkExperienceCreateInput, ProfileWorkExperienceUncheckedCreateInput>
    /**
     * In case the ProfileWorkExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileWorkExperienceUpdateInput, ProfileWorkExperienceUncheckedUpdateInput>
  }

  /**
   * ProfileWorkExperience delete
   */
  export type ProfileWorkExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileWorkExperience
     */
    select?: ProfileWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileWorkExperience
     */
    omit?: ProfileWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter which ProfileWorkExperience to delete.
     */
    where: ProfileWorkExperienceWhereUniqueInput
  }

  /**
   * ProfileWorkExperience deleteMany
   */
  export type ProfileWorkExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileWorkExperiences to delete
     */
    where?: ProfileWorkExperienceWhereInput
    /**
     * Limit how many ProfileWorkExperiences to delete.
     */
    limit?: number
  }

  /**
   * ProfileWorkExperience without action
   */
  export type ProfileWorkExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileWorkExperience
     */
    select?: ProfileWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileWorkExperience
     */
    omit?: ProfileWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileWorkExperienceInclude<ExtArgs> | null
  }


  /**
   * Model ProfileAchievement
   */

  export type AggregateProfileAchievement = {
    _count: ProfileAchievementCountAggregateOutputType | null
    _avg: ProfileAchievementAvgAggregateOutputType | null
    _sum: ProfileAchievementSumAggregateOutputType | null
    _min: ProfileAchievementMinAggregateOutputType | null
    _max: ProfileAchievementMaxAggregateOutputType | null
  }

  export type ProfileAchievementAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileAchievementSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileAchievementMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    description: string | null
    from: Date | null
    to: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileAchievementMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    description: string | null
    from: Date | null
    to: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileAchievementCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    from: number
    to: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileAchievementAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileAchievementSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileAchievementMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileAchievementMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileAchievementCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileAchievement to aggregate.
     */
    where?: ProfileAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileAchievements to fetch.
     */
    orderBy?: ProfileAchievementOrderByWithRelationInput | ProfileAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfileAchievements
    **/
    _count?: true | ProfileAchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileAchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileAchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileAchievementMaxAggregateInputType
  }

  export type GetProfileAchievementAggregateType<T extends ProfileAchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateProfileAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfileAchievement[P]>
      : GetScalarType<T[P], AggregateProfileAchievement[P]>
  }




  export type ProfileAchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileAchievementWhereInput
    orderBy?: ProfileAchievementOrderByWithAggregationInput | ProfileAchievementOrderByWithAggregationInput[]
    by: ProfileAchievementScalarFieldEnum[] | ProfileAchievementScalarFieldEnum
    having?: ProfileAchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileAchievementCountAggregateInputType | true
    _avg?: ProfileAchievementAvgAggregateInputType
    _sum?: ProfileAchievementSumAggregateInputType
    _min?: ProfileAchievementMinAggregateInputType
    _max?: ProfileAchievementMaxAggregateInputType
  }

  export type ProfileAchievementGroupByOutputType = {
    id: number
    userId: number
    name: string
    description: string | null
    from: Date
    to: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileAchievementCountAggregateOutputType | null
    _avg: ProfileAchievementAvgAggregateOutputType | null
    _sum: ProfileAchievementSumAggregateOutputType | null
    _min: ProfileAchievementMinAggregateOutputType | null
    _max: ProfileAchievementMaxAggregateOutputType | null
  }

  type GetProfileAchievementGroupByPayload<T extends ProfileAchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileAchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileAchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileAchievementGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileAchievementGroupByOutputType[P]>
        }
      >
    >


  export type ProfileAchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileAchievement"]>

  export type ProfileAchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileAchievement"]>

  export type ProfileAchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileAchievement"]>

  export type ProfileAchievementSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileAchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "from" | "to" | "createdAt" | "updatedAt", ExtArgs["result"]["profileAchievement"]>
  export type ProfileAchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileAchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileAchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfileAchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfileAchievement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string
      description: string | null
      from: Date
      to: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profileAchievement"]>
    composites: {}
  }

  type ProfileAchievementGetPayload<S extends boolean | null | undefined | ProfileAchievementDefaultArgs> = $Result.GetResult<Prisma.$ProfileAchievementPayload, S>

  type ProfileAchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileAchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileAchievementCountAggregateInputType | true
    }

  export interface ProfileAchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfileAchievement'], meta: { name: 'ProfileAchievement' } }
    /**
     * Find zero or one ProfileAchievement that matches the filter.
     * @param {ProfileAchievementFindUniqueArgs} args - Arguments to find a ProfileAchievement
     * @example
     * // Get one ProfileAchievement
     * const profileAchievement = await prisma.profileAchievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileAchievementFindUniqueArgs>(args: SelectSubset<T, ProfileAchievementFindUniqueArgs<ExtArgs>>): Prisma__ProfileAchievementClient<$Result.GetResult<Prisma.$ProfileAchievementPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProfileAchievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileAchievementFindUniqueOrThrowArgs} args - Arguments to find a ProfileAchievement
     * @example
     * // Get one ProfileAchievement
     * const profileAchievement = await prisma.profileAchievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileAchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileAchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileAchievementClient<$Result.GetResult<Prisma.$ProfileAchievementPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProfileAchievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAchievementFindFirstArgs} args - Arguments to find a ProfileAchievement
     * @example
     * // Get one ProfileAchievement
     * const profileAchievement = await prisma.profileAchievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileAchievementFindFirstArgs>(args?: SelectSubset<T, ProfileAchievementFindFirstArgs<ExtArgs>>): Prisma__ProfileAchievementClient<$Result.GetResult<Prisma.$ProfileAchievementPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProfileAchievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAchievementFindFirstOrThrowArgs} args - Arguments to find a ProfileAchievement
     * @example
     * // Get one ProfileAchievement
     * const profileAchievement = await prisma.profileAchievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileAchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileAchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileAchievementClient<$Result.GetResult<Prisma.$ProfileAchievementPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProfileAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileAchievements
     * const profileAchievements = await prisma.profileAchievement.findMany()
     * 
     * // Get first 10 ProfileAchievements
     * const profileAchievements = await prisma.profileAchievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileAchievementWithIdOnly = await prisma.profileAchievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileAchievementFindManyArgs>(args?: SelectSubset<T, ProfileAchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileAchievementPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProfileAchievement.
     * @param {ProfileAchievementCreateArgs} args - Arguments to create a ProfileAchievement.
     * @example
     * // Create one ProfileAchievement
     * const ProfileAchievement = await prisma.profileAchievement.create({
     *   data: {
     *     // ... data to create a ProfileAchievement
     *   }
     * })
     * 
     */
    create<T extends ProfileAchievementCreateArgs>(args: SelectSubset<T, ProfileAchievementCreateArgs<ExtArgs>>): Prisma__ProfileAchievementClient<$Result.GetResult<Prisma.$ProfileAchievementPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProfileAchievements.
     * @param {ProfileAchievementCreateManyArgs} args - Arguments to create many ProfileAchievements.
     * @example
     * // Create many ProfileAchievements
     * const profileAchievement = await prisma.profileAchievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileAchievementCreateManyArgs>(args?: SelectSubset<T, ProfileAchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfileAchievements and returns the data saved in the database.
     * @param {ProfileAchievementCreateManyAndReturnArgs} args - Arguments to create many ProfileAchievements.
     * @example
     * // Create many ProfileAchievements
     * const profileAchievement = await prisma.profileAchievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfileAchievements and only return the `id`
     * const profileAchievementWithIdOnly = await prisma.profileAchievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileAchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileAchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileAchievementPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ProfileAchievement.
     * @param {ProfileAchievementDeleteArgs} args - Arguments to delete one ProfileAchievement.
     * @example
     * // Delete one ProfileAchievement
     * const ProfileAchievement = await prisma.profileAchievement.delete({
     *   where: {
     *     // ... filter to delete one ProfileAchievement
     *   }
     * })
     * 
     */
    delete<T extends ProfileAchievementDeleteArgs>(args: SelectSubset<T, ProfileAchievementDeleteArgs<ExtArgs>>): Prisma__ProfileAchievementClient<$Result.GetResult<Prisma.$ProfileAchievementPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProfileAchievement.
     * @param {ProfileAchievementUpdateArgs} args - Arguments to update one ProfileAchievement.
     * @example
     * // Update one ProfileAchievement
     * const profileAchievement = await prisma.profileAchievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileAchievementUpdateArgs>(args: SelectSubset<T, ProfileAchievementUpdateArgs<ExtArgs>>): Prisma__ProfileAchievementClient<$Result.GetResult<Prisma.$ProfileAchievementPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProfileAchievements.
     * @param {ProfileAchievementDeleteManyArgs} args - Arguments to filter ProfileAchievements to delete.
     * @example
     * // Delete a few ProfileAchievements
     * const { count } = await prisma.profileAchievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileAchievementDeleteManyArgs>(args?: SelectSubset<T, ProfileAchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileAchievements
     * const profileAchievement = await prisma.profileAchievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileAchievementUpdateManyArgs>(args: SelectSubset<T, ProfileAchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileAchievements and returns the data updated in the database.
     * @param {ProfileAchievementUpdateManyAndReturnArgs} args - Arguments to update many ProfileAchievements.
     * @example
     * // Update many ProfileAchievements
     * const profileAchievement = await prisma.profileAchievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfileAchievements and only return the `id`
     * const profileAchievementWithIdOnly = await prisma.profileAchievement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileAchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileAchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileAchievementPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ProfileAchievement.
     * @param {ProfileAchievementUpsertArgs} args - Arguments to update or create a ProfileAchievement.
     * @example
     * // Update or create a ProfileAchievement
     * const profileAchievement = await prisma.profileAchievement.upsert({
     *   create: {
     *     // ... data to create a ProfileAchievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileAchievement we want to update
     *   }
     * })
     */
    upsert<T extends ProfileAchievementUpsertArgs>(args: SelectSubset<T, ProfileAchievementUpsertArgs<ExtArgs>>): Prisma__ProfileAchievementClient<$Result.GetResult<Prisma.$ProfileAchievementPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProfileAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAchievementCountArgs} args - Arguments to filter ProfileAchievements to count.
     * @example
     * // Count the number of ProfileAchievements
     * const count = await prisma.profileAchievement.count({
     *   where: {
     *     // ... the filter for the ProfileAchievements we want to count
     *   }
     * })
    **/
    count<T extends ProfileAchievementCountArgs>(
      args?: Subset<T, ProfileAchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileAchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfileAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAchievementAggregateArgs>(args: Subset<T, ProfileAchievementAggregateArgs>): Prisma.PrismaPromise<GetProfileAchievementAggregateType<T>>

    /**
     * Group by ProfileAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileAchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileAchievementGroupByArgs['orderBy'] }
        : { orderBy?: ProfileAchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileAchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfileAchievement model
   */
  readonly fields: ProfileAchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfileAchievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileAchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfileAchievement model
   */ 
  interface ProfileAchievementFieldRefs {
    readonly id: FieldRef<"ProfileAchievement", 'Int'>
    readonly userId: FieldRef<"ProfileAchievement", 'Int'>
    readonly name: FieldRef<"ProfileAchievement", 'String'>
    readonly description: FieldRef<"ProfileAchievement", 'String'>
    readonly from: FieldRef<"ProfileAchievement", 'DateTime'>
    readonly to: FieldRef<"ProfileAchievement", 'DateTime'>
    readonly createdAt: FieldRef<"ProfileAchievement", 'DateTime'>
    readonly updatedAt: FieldRef<"ProfileAchievement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfileAchievement findUnique
   */
  export type ProfileAchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAchievement
     */
    select?: ProfileAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAchievement
     */
    omit?: ProfileAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAchievementInclude<ExtArgs> | null
    /**
     * Filter, which ProfileAchievement to fetch.
     */
    where: ProfileAchievementWhereUniqueInput
  }

  /**
   * ProfileAchievement findUniqueOrThrow
   */
  export type ProfileAchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAchievement
     */
    select?: ProfileAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAchievement
     */
    omit?: ProfileAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAchievementInclude<ExtArgs> | null
    /**
     * Filter, which ProfileAchievement to fetch.
     */
    where: ProfileAchievementWhereUniqueInput
  }

  /**
   * ProfileAchievement findFirst
   */
  export type ProfileAchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAchievement
     */
    select?: ProfileAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAchievement
     */
    omit?: ProfileAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAchievementInclude<ExtArgs> | null
    /**
     * Filter, which ProfileAchievement to fetch.
     */
    where?: ProfileAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileAchievements to fetch.
     */
    orderBy?: ProfileAchievementOrderByWithRelationInput | ProfileAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileAchievements.
     */
    cursor?: ProfileAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileAchievements.
     */
    distinct?: ProfileAchievementScalarFieldEnum | ProfileAchievementScalarFieldEnum[]
  }

  /**
   * ProfileAchievement findFirstOrThrow
   */
  export type ProfileAchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAchievement
     */
    select?: ProfileAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAchievement
     */
    omit?: ProfileAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAchievementInclude<ExtArgs> | null
    /**
     * Filter, which ProfileAchievement to fetch.
     */
    where?: ProfileAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileAchievements to fetch.
     */
    orderBy?: ProfileAchievementOrderByWithRelationInput | ProfileAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileAchievements.
     */
    cursor?: ProfileAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileAchievements.
     */
    distinct?: ProfileAchievementScalarFieldEnum | ProfileAchievementScalarFieldEnum[]
  }

  /**
   * ProfileAchievement findMany
   */
  export type ProfileAchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAchievement
     */
    select?: ProfileAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAchievement
     */
    omit?: ProfileAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAchievementInclude<ExtArgs> | null
    /**
     * Filter, which ProfileAchievements to fetch.
     */
    where?: ProfileAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileAchievements to fetch.
     */
    orderBy?: ProfileAchievementOrderByWithRelationInput | ProfileAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfileAchievements.
     */
    cursor?: ProfileAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileAchievements.
     */
    skip?: number
    distinct?: ProfileAchievementScalarFieldEnum | ProfileAchievementScalarFieldEnum[]
  }

  /**
   * ProfileAchievement create
   */
  export type ProfileAchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAchievement
     */
    select?: ProfileAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAchievement
     */
    omit?: ProfileAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfileAchievement.
     */
    data: XOR<ProfileAchievementCreateInput, ProfileAchievementUncheckedCreateInput>
  }

  /**
   * ProfileAchievement createMany
   */
  export type ProfileAchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileAchievements.
     */
    data: ProfileAchievementCreateManyInput | ProfileAchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileAchievement createManyAndReturn
   */
  export type ProfileAchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAchievement
     */
    select?: ProfileAchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAchievement
     */
    omit?: ProfileAchievementOmit<ExtArgs> | null
    /**
     * The data used to create many ProfileAchievements.
     */
    data: ProfileAchievementCreateManyInput | ProfileAchievementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAchievementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileAchievement update
   */
  export type ProfileAchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAchievement
     */
    select?: ProfileAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAchievement
     */
    omit?: ProfileAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfileAchievement.
     */
    data: XOR<ProfileAchievementUpdateInput, ProfileAchievementUncheckedUpdateInput>
    /**
     * Choose, which ProfileAchievement to update.
     */
    where: ProfileAchievementWhereUniqueInput
  }

  /**
   * ProfileAchievement updateMany
   */
  export type ProfileAchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileAchievements.
     */
    data: XOR<ProfileAchievementUpdateManyMutationInput, ProfileAchievementUncheckedUpdateManyInput>
    /**
     * Filter which ProfileAchievements to update
     */
    where?: ProfileAchievementWhereInput
    /**
     * Limit how many ProfileAchievements to update.
     */
    limit?: number
  }

  /**
   * ProfileAchievement updateManyAndReturn
   */
  export type ProfileAchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAchievement
     */
    select?: ProfileAchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAchievement
     */
    omit?: ProfileAchievementOmit<ExtArgs> | null
    /**
     * The data used to update ProfileAchievements.
     */
    data: XOR<ProfileAchievementUpdateManyMutationInput, ProfileAchievementUncheckedUpdateManyInput>
    /**
     * Filter which ProfileAchievements to update
     */
    where?: ProfileAchievementWhereInput
    /**
     * Limit how many ProfileAchievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAchievementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileAchievement upsert
   */
  export type ProfileAchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAchievement
     */
    select?: ProfileAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAchievement
     */
    omit?: ProfileAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfileAchievement to update in case it exists.
     */
    where: ProfileAchievementWhereUniqueInput
    /**
     * In case the ProfileAchievement found by the `where` argument doesn't exist, create a new ProfileAchievement with this data.
     */
    create: XOR<ProfileAchievementCreateInput, ProfileAchievementUncheckedCreateInput>
    /**
     * In case the ProfileAchievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileAchievementUpdateInput, ProfileAchievementUncheckedUpdateInput>
  }

  /**
   * ProfileAchievement delete
   */
  export type ProfileAchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAchievement
     */
    select?: ProfileAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAchievement
     */
    omit?: ProfileAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAchievementInclude<ExtArgs> | null
    /**
     * Filter which ProfileAchievement to delete.
     */
    where: ProfileAchievementWhereUniqueInput
  }

  /**
   * ProfileAchievement deleteMany
   */
  export type ProfileAchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileAchievements to delete
     */
    where?: ProfileAchievementWhereInput
    /**
     * Limit how many ProfileAchievements to delete.
     */
    limit?: number
  }

  /**
   * ProfileAchievement without action
   */
  export type ProfileAchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAchievement
     */
    select?: ProfileAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAchievement
     */
    omit?: ProfileAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAchievementInclude<ExtArgs> | null
  }


  /**
   * Model ProfileProminentWork
   */

  export type AggregateProfileProminentWork = {
    _count: ProfileProminentWorkCountAggregateOutputType | null
    _avg: ProfileProminentWorkAvgAggregateOutputType | null
    _sum: ProfileProminentWorkSumAggregateOutputType | null
    _min: ProfileProminentWorkMinAggregateOutputType | null
    _max: ProfileProminentWorkMaxAggregateOutputType | null
  }

  export type ProfileProminentWorkAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    wage: number | null
  }

  export type ProfileProminentWorkSumAggregateOutputType = {
    id: number | null
    userId: number | null
    wage: number | null
  }

  export type ProfileProminentWorkMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    description: string | null
    from: Date | null
    to: Date | null
    wage: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileProminentWorkMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    description: string | null
    from: Date | null
    to: Date | null
    wage: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileProminentWorkCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    from: number
    to: number
    wage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileProminentWorkAvgAggregateInputType = {
    id?: true
    userId?: true
    wage?: true
  }

  export type ProfileProminentWorkSumAggregateInputType = {
    id?: true
    userId?: true
    wage?: true
  }

  export type ProfileProminentWorkMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    from?: true
    to?: true
    wage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileProminentWorkMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    from?: true
    to?: true
    wage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileProminentWorkCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    from?: true
    to?: true
    wage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileProminentWorkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileProminentWork to aggregate.
     */
    where?: ProfileProminentWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileProminentWorks to fetch.
     */
    orderBy?: ProfileProminentWorkOrderByWithRelationInput | ProfileProminentWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileProminentWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileProminentWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileProminentWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfileProminentWorks
    **/
    _count?: true | ProfileProminentWorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileProminentWorkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileProminentWorkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileProminentWorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileProminentWorkMaxAggregateInputType
  }

  export type GetProfileProminentWorkAggregateType<T extends ProfileProminentWorkAggregateArgs> = {
        [P in keyof T & keyof AggregateProfileProminentWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfileProminentWork[P]>
      : GetScalarType<T[P], AggregateProfileProminentWork[P]>
  }




  export type ProfileProminentWorkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileProminentWorkWhereInput
    orderBy?: ProfileProminentWorkOrderByWithAggregationInput | ProfileProminentWorkOrderByWithAggregationInput[]
    by: ProfileProminentWorkScalarFieldEnum[] | ProfileProminentWorkScalarFieldEnum
    having?: ProfileProminentWorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileProminentWorkCountAggregateInputType | true
    _avg?: ProfileProminentWorkAvgAggregateInputType
    _sum?: ProfileProminentWorkSumAggregateInputType
    _min?: ProfileProminentWorkMinAggregateInputType
    _max?: ProfileProminentWorkMaxAggregateInputType
  }

  export type ProfileProminentWorkGroupByOutputType = {
    id: number
    userId: number
    name: string
    description: string | null
    from: Date
    to: Date | null
    wage: number | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileProminentWorkCountAggregateOutputType | null
    _avg: ProfileProminentWorkAvgAggregateOutputType | null
    _sum: ProfileProminentWorkSumAggregateOutputType | null
    _min: ProfileProminentWorkMinAggregateOutputType | null
    _max: ProfileProminentWorkMaxAggregateOutputType | null
  }

  type GetProfileProminentWorkGroupByPayload<T extends ProfileProminentWorkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileProminentWorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileProminentWorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileProminentWorkGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileProminentWorkGroupByOutputType[P]>
        }
      >
    >


  export type ProfileProminentWorkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    from?: boolean
    to?: boolean
    wage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileProminentWork"]>

  export type ProfileProminentWorkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    from?: boolean
    to?: boolean
    wage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileProminentWork"]>

  export type ProfileProminentWorkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    from?: boolean
    to?: boolean
    wage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileProminentWork"]>

  export type ProfileProminentWorkSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    from?: boolean
    to?: boolean
    wage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileProminentWorkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "from" | "to" | "wage" | "createdAt" | "updatedAt", ExtArgs["result"]["profileProminentWork"]>
  export type ProfileProminentWorkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileProminentWorkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileProminentWorkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfileProminentWorkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfileProminentWork"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string
      description: string | null
      from: Date
      to: Date | null
      wage: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profileProminentWork"]>
    composites: {}
  }

  type ProfileProminentWorkGetPayload<S extends boolean | null | undefined | ProfileProminentWorkDefaultArgs> = $Result.GetResult<Prisma.$ProfileProminentWorkPayload, S>

  type ProfileProminentWorkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileProminentWorkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileProminentWorkCountAggregateInputType | true
    }

  export interface ProfileProminentWorkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfileProminentWork'], meta: { name: 'ProfileProminentWork' } }
    /**
     * Find zero or one ProfileProminentWork that matches the filter.
     * @param {ProfileProminentWorkFindUniqueArgs} args - Arguments to find a ProfileProminentWork
     * @example
     * // Get one ProfileProminentWork
     * const profileProminentWork = await prisma.profileProminentWork.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileProminentWorkFindUniqueArgs>(args: SelectSubset<T, ProfileProminentWorkFindUniqueArgs<ExtArgs>>): Prisma__ProfileProminentWorkClient<$Result.GetResult<Prisma.$ProfileProminentWorkPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProfileProminentWork that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileProminentWorkFindUniqueOrThrowArgs} args - Arguments to find a ProfileProminentWork
     * @example
     * // Get one ProfileProminentWork
     * const profileProminentWork = await prisma.profileProminentWork.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileProminentWorkFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileProminentWorkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileProminentWorkClient<$Result.GetResult<Prisma.$ProfileProminentWorkPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProfileProminentWork that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileProminentWorkFindFirstArgs} args - Arguments to find a ProfileProminentWork
     * @example
     * // Get one ProfileProminentWork
     * const profileProminentWork = await prisma.profileProminentWork.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileProminentWorkFindFirstArgs>(args?: SelectSubset<T, ProfileProminentWorkFindFirstArgs<ExtArgs>>): Prisma__ProfileProminentWorkClient<$Result.GetResult<Prisma.$ProfileProminentWorkPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProfileProminentWork that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileProminentWorkFindFirstOrThrowArgs} args - Arguments to find a ProfileProminentWork
     * @example
     * // Get one ProfileProminentWork
     * const profileProminentWork = await prisma.profileProminentWork.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileProminentWorkFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileProminentWorkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileProminentWorkClient<$Result.GetResult<Prisma.$ProfileProminentWorkPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProfileProminentWorks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileProminentWorkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileProminentWorks
     * const profileProminentWorks = await prisma.profileProminentWork.findMany()
     * 
     * // Get first 10 ProfileProminentWorks
     * const profileProminentWorks = await prisma.profileProminentWork.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileProminentWorkWithIdOnly = await prisma.profileProminentWork.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileProminentWorkFindManyArgs>(args?: SelectSubset<T, ProfileProminentWorkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileProminentWorkPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProfileProminentWork.
     * @param {ProfileProminentWorkCreateArgs} args - Arguments to create a ProfileProminentWork.
     * @example
     * // Create one ProfileProminentWork
     * const ProfileProminentWork = await prisma.profileProminentWork.create({
     *   data: {
     *     // ... data to create a ProfileProminentWork
     *   }
     * })
     * 
     */
    create<T extends ProfileProminentWorkCreateArgs>(args: SelectSubset<T, ProfileProminentWorkCreateArgs<ExtArgs>>): Prisma__ProfileProminentWorkClient<$Result.GetResult<Prisma.$ProfileProminentWorkPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProfileProminentWorks.
     * @param {ProfileProminentWorkCreateManyArgs} args - Arguments to create many ProfileProminentWorks.
     * @example
     * // Create many ProfileProminentWorks
     * const profileProminentWork = await prisma.profileProminentWork.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileProminentWorkCreateManyArgs>(args?: SelectSubset<T, ProfileProminentWorkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfileProminentWorks and returns the data saved in the database.
     * @param {ProfileProminentWorkCreateManyAndReturnArgs} args - Arguments to create many ProfileProminentWorks.
     * @example
     * // Create many ProfileProminentWorks
     * const profileProminentWork = await prisma.profileProminentWork.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfileProminentWorks and only return the `id`
     * const profileProminentWorkWithIdOnly = await prisma.profileProminentWork.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileProminentWorkCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileProminentWorkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileProminentWorkPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ProfileProminentWork.
     * @param {ProfileProminentWorkDeleteArgs} args - Arguments to delete one ProfileProminentWork.
     * @example
     * // Delete one ProfileProminentWork
     * const ProfileProminentWork = await prisma.profileProminentWork.delete({
     *   where: {
     *     // ... filter to delete one ProfileProminentWork
     *   }
     * })
     * 
     */
    delete<T extends ProfileProminentWorkDeleteArgs>(args: SelectSubset<T, ProfileProminentWorkDeleteArgs<ExtArgs>>): Prisma__ProfileProminentWorkClient<$Result.GetResult<Prisma.$ProfileProminentWorkPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProfileProminentWork.
     * @param {ProfileProminentWorkUpdateArgs} args - Arguments to update one ProfileProminentWork.
     * @example
     * // Update one ProfileProminentWork
     * const profileProminentWork = await prisma.profileProminentWork.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileProminentWorkUpdateArgs>(args: SelectSubset<T, ProfileProminentWorkUpdateArgs<ExtArgs>>): Prisma__ProfileProminentWorkClient<$Result.GetResult<Prisma.$ProfileProminentWorkPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProfileProminentWorks.
     * @param {ProfileProminentWorkDeleteManyArgs} args - Arguments to filter ProfileProminentWorks to delete.
     * @example
     * // Delete a few ProfileProminentWorks
     * const { count } = await prisma.profileProminentWork.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileProminentWorkDeleteManyArgs>(args?: SelectSubset<T, ProfileProminentWorkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileProminentWorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileProminentWorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileProminentWorks
     * const profileProminentWork = await prisma.profileProminentWork.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileProminentWorkUpdateManyArgs>(args: SelectSubset<T, ProfileProminentWorkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileProminentWorks and returns the data updated in the database.
     * @param {ProfileProminentWorkUpdateManyAndReturnArgs} args - Arguments to update many ProfileProminentWorks.
     * @example
     * // Update many ProfileProminentWorks
     * const profileProminentWork = await prisma.profileProminentWork.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfileProminentWorks and only return the `id`
     * const profileProminentWorkWithIdOnly = await prisma.profileProminentWork.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileProminentWorkUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileProminentWorkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileProminentWorkPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ProfileProminentWork.
     * @param {ProfileProminentWorkUpsertArgs} args - Arguments to update or create a ProfileProminentWork.
     * @example
     * // Update or create a ProfileProminentWork
     * const profileProminentWork = await prisma.profileProminentWork.upsert({
     *   create: {
     *     // ... data to create a ProfileProminentWork
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileProminentWork we want to update
     *   }
     * })
     */
    upsert<T extends ProfileProminentWorkUpsertArgs>(args: SelectSubset<T, ProfileProminentWorkUpsertArgs<ExtArgs>>): Prisma__ProfileProminentWorkClient<$Result.GetResult<Prisma.$ProfileProminentWorkPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProfileProminentWorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileProminentWorkCountArgs} args - Arguments to filter ProfileProminentWorks to count.
     * @example
     * // Count the number of ProfileProminentWorks
     * const count = await prisma.profileProminentWork.count({
     *   where: {
     *     // ... the filter for the ProfileProminentWorks we want to count
     *   }
     * })
    **/
    count<T extends ProfileProminentWorkCountArgs>(
      args?: Subset<T, ProfileProminentWorkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileProminentWorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfileProminentWork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileProminentWorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileProminentWorkAggregateArgs>(args: Subset<T, ProfileProminentWorkAggregateArgs>): Prisma.PrismaPromise<GetProfileProminentWorkAggregateType<T>>

    /**
     * Group by ProfileProminentWork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileProminentWorkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileProminentWorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileProminentWorkGroupByArgs['orderBy'] }
        : { orderBy?: ProfileProminentWorkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileProminentWorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileProminentWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfileProminentWork model
   */
  readonly fields: ProfileProminentWorkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfileProminentWork.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileProminentWorkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfileProminentWork model
   */ 
  interface ProfileProminentWorkFieldRefs {
    readonly id: FieldRef<"ProfileProminentWork", 'Int'>
    readonly userId: FieldRef<"ProfileProminentWork", 'Int'>
    readonly name: FieldRef<"ProfileProminentWork", 'String'>
    readonly description: FieldRef<"ProfileProminentWork", 'String'>
    readonly from: FieldRef<"ProfileProminentWork", 'DateTime'>
    readonly to: FieldRef<"ProfileProminentWork", 'DateTime'>
    readonly wage: FieldRef<"ProfileProminentWork", 'Int'>
    readonly createdAt: FieldRef<"ProfileProminentWork", 'DateTime'>
    readonly updatedAt: FieldRef<"ProfileProminentWork", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfileProminentWork findUnique
   */
  export type ProfileProminentWorkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileProminentWork
     */
    select?: ProfileProminentWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileProminentWork
     */
    omit?: ProfileProminentWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileProminentWorkInclude<ExtArgs> | null
    /**
     * Filter, which ProfileProminentWork to fetch.
     */
    where: ProfileProminentWorkWhereUniqueInput
  }

  /**
   * ProfileProminentWork findUniqueOrThrow
   */
  export type ProfileProminentWorkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileProminentWork
     */
    select?: ProfileProminentWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileProminentWork
     */
    omit?: ProfileProminentWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileProminentWorkInclude<ExtArgs> | null
    /**
     * Filter, which ProfileProminentWork to fetch.
     */
    where: ProfileProminentWorkWhereUniqueInput
  }

  /**
   * ProfileProminentWork findFirst
   */
  export type ProfileProminentWorkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileProminentWork
     */
    select?: ProfileProminentWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileProminentWork
     */
    omit?: ProfileProminentWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileProminentWorkInclude<ExtArgs> | null
    /**
     * Filter, which ProfileProminentWork to fetch.
     */
    where?: ProfileProminentWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileProminentWorks to fetch.
     */
    orderBy?: ProfileProminentWorkOrderByWithRelationInput | ProfileProminentWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileProminentWorks.
     */
    cursor?: ProfileProminentWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileProminentWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileProminentWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileProminentWorks.
     */
    distinct?: ProfileProminentWorkScalarFieldEnum | ProfileProminentWorkScalarFieldEnum[]
  }

  /**
   * ProfileProminentWork findFirstOrThrow
   */
  export type ProfileProminentWorkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileProminentWork
     */
    select?: ProfileProminentWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileProminentWork
     */
    omit?: ProfileProminentWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileProminentWorkInclude<ExtArgs> | null
    /**
     * Filter, which ProfileProminentWork to fetch.
     */
    where?: ProfileProminentWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileProminentWorks to fetch.
     */
    orderBy?: ProfileProminentWorkOrderByWithRelationInput | ProfileProminentWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileProminentWorks.
     */
    cursor?: ProfileProminentWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileProminentWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileProminentWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileProminentWorks.
     */
    distinct?: ProfileProminentWorkScalarFieldEnum | ProfileProminentWorkScalarFieldEnum[]
  }

  /**
   * ProfileProminentWork findMany
   */
  export type ProfileProminentWorkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileProminentWork
     */
    select?: ProfileProminentWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileProminentWork
     */
    omit?: ProfileProminentWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileProminentWorkInclude<ExtArgs> | null
    /**
     * Filter, which ProfileProminentWorks to fetch.
     */
    where?: ProfileProminentWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileProminentWorks to fetch.
     */
    orderBy?: ProfileProminentWorkOrderByWithRelationInput | ProfileProminentWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfileProminentWorks.
     */
    cursor?: ProfileProminentWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileProminentWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileProminentWorks.
     */
    skip?: number
    distinct?: ProfileProminentWorkScalarFieldEnum | ProfileProminentWorkScalarFieldEnum[]
  }

  /**
   * ProfileProminentWork create
   */
  export type ProfileProminentWorkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileProminentWork
     */
    select?: ProfileProminentWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileProminentWork
     */
    omit?: ProfileProminentWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileProminentWorkInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfileProminentWork.
     */
    data: XOR<ProfileProminentWorkCreateInput, ProfileProminentWorkUncheckedCreateInput>
  }

  /**
   * ProfileProminentWork createMany
   */
  export type ProfileProminentWorkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileProminentWorks.
     */
    data: ProfileProminentWorkCreateManyInput | ProfileProminentWorkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileProminentWork createManyAndReturn
   */
  export type ProfileProminentWorkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileProminentWork
     */
    select?: ProfileProminentWorkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileProminentWork
     */
    omit?: ProfileProminentWorkOmit<ExtArgs> | null
    /**
     * The data used to create many ProfileProminentWorks.
     */
    data: ProfileProminentWorkCreateManyInput | ProfileProminentWorkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileProminentWorkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileProminentWork update
   */
  export type ProfileProminentWorkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileProminentWork
     */
    select?: ProfileProminentWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileProminentWork
     */
    omit?: ProfileProminentWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileProminentWorkInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfileProminentWork.
     */
    data: XOR<ProfileProminentWorkUpdateInput, ProfileProminentWorkUncheckedUpdateInput>
    /**
     * Choose, which ProfileProminentWork to update.
     */
    where: ProfileProminentWorkWhereUniqueInput
  }

  /**
   * ProfileProminentWork updateMany
   */
  export type ProfileProminentWorkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileProminentWorks.
     */
    data: XOR<ProfileProminentWorkUpdateManyMutationInput, ProfileProminentWorkUncheckedUpdateManyInput>
    /**
     * Filter which ProfileProminentWorks to update
     */
    where?: ProfileProminentWorkWhereInput
    /**
     * Limit how many ProfileProminentWorks to update.
     */
    limit?: number
  }

  /**
   * ProfileProminentWork updateManyAndReturn
   */
  export type ProfileProminentWorkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileProminentWork
     */
    select?: ProfileProminentWorkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileProminentWork
     */
    omit?: ProfileProminentWorkOmit<ExtArgs> | null
    /**
     * The data used to update ProfileProminentWorks.
     */
    data: XOR<ProfileProminentWorkUpdateManyMutationInput, ProfileProminentWorkUncheckedUpdateManyInput>
    /**
     * Filter which ProfileProminentWorks to update
     */
    where?: ProfileProminentWorkWhereInput
    /**
     * Limit how many ProfileProminentWorks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileProminentWorkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileProminentWork upsert
   */
  export type ProfileProminentWorkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileProminentWork
     */
    select?: ProfileProminentWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileProminentWork
     */
    omit?: ProfileProminentWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileProminentWorkInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfileProminentWork to update in case it exists.
     */
    where: ProfileProminentWorkWhereUniqueInput
    /**
     * In case the ProfileProminentWork found by the `where` argument doesn't exist, create a new ProfileProminentWork with this data.
     */
    create: XOR<ProfileProminentWorkCreateInput, ProfileProminentWorkUncheckedCreateInput>
    /**
     * In case the ProfileProminentWork was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileProminentWorkUpdateInput, ProfileProminentWorkUncheckedUpdateInput>
  }

  /**
   * ProfileProminentWork delete
   */
  export type ProfileProminentWorkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileProminentWork
     */
    select?: ProfileProminentWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileProminentWork
     */
    omit?: ProfileProminentWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileProminentWorkInclude<ExtArgs> | null
    /**
     * Filter which ProfileProminentWork to delete.
     */
    where: ProfileProminentWorkWhereUniqueInput
  }

  /**
   * ProfileProminentWork deleteMany
   */
  export type ProfileProminentWorkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileProminentWorks to delete
     */
    where?: ProfileProminentWorkWhereInput
    /**
     * Limit how many ProfileProminentWorks to delete.
     */
    limit?: number
  }

  /**
   * ProfileProminentWork without action
   */
  export type ProfileProminentWorkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileProminentWork
     */
    select?: ProfileProminentWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileProminentWork
     */
    omit?: ProfileProminentWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileProminentWorkInclude<ExtArgs> | null
  }


  /**
   * Model Portfolio
   */

  export type AggregatePortfolio = {
    _count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  export type PortfolioAvgAggregateOutputType = {
    id: number | null
  }

  export type PortfolioSumAggregateOutputType = {
    id: number | null
  }

  export type PortfolioMinAggregateOutputType = {
    id: number | null
    name: string | null
    skillDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioMaxAggregateOutputType = {
    id: number | null
    name: string | null
    skillDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioCountAggregateOutputType = {
    id: number
    name: number
    skillDescription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortfolioAvgAggregateInputType = {
    id?: true
  }

  export type PortfolioSumAggregateInputType = {
    id?: true
  }

  export type PortfolioMinAggregateInputType = {
    id?: true
    name?: true
    skillDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioMaxAggregateInputType = {
    id?: true
    name?: true
    skillDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioCountAggregateInputType = {
    id?: true
    name?: true
    skillDescription?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortfolioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portfolio to aggregate.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Portfolios
    **/
    _count?: true | PortfolioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioMaxAggregateInputType
  }

  export type GetPortfolioAggregateType<T extends PortfolioAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolio[P]>
      : GetScalarType<T[P], AggregatePortfolio[P]>
  }




  export type PortfolioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioWhereInput
    orderBy?: PortfolioOrderByWithAggregationInput | PortfolioOrderByWithAggregationInput[]
    by: PortfolioScalarFieldEnum[] | PortfolioScalarFieldEnum
    having?: PortfolioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioCountAggregateInputType | true
    _avg?: PortfolioAvgAggregateInputType
    _sum?: PortfolioSumAggregateInputType
    _min?: PortfolioMinAggregateInputType
    _max?: PortfolioMaxAggregateInputType
  }

  export type PortfolioGroupByOutputType = {
    id: number
    name: string
    skillDescription: string | null
    createdAt: Date
    updatedAt: Date
    _count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  type GetPortfolioGroupByPayload<T extends PortfolioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    skillDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolioProminentProjects?: boolean | Portfolio$portfolioProminentProjectsArgs<ExtArgs>
    portfolioCustomerFeedbacks?: boolean | Portfolio$portfolioCustomerFeedbacksArgs<ExtArgs>
    portfolioAboutSection?: boolean | Portfolio$portfolioAboutSectionArgs<ExtArgs>
    portfolioWorkExperiences?: boolean | Portfolio$portfolioWorkExperiencesArgs<ExtArgs>
    portfolioSkills?: boolean | Portfolio$portfolioSkillsArgs<ExtArgs>
    _count?: boolean | PortfolioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    skillDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    skillDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectScalar = {
    id?: boolean
    name?: boolean
    skillDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortfolioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "skillDescription" | "createdAt" | "updatedAt", ExtArgs["result"]["portfolio"]>
  export type PortfolioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolioProminentProjects?: boolean | Portfolio$portfolioProminentProjectsArgs<ExtArgs>
    portfolioCustomerFeedbacks?: boolean | Portfolio$portfolioCustomerFeedbacksArgs<ExtArgs>
    portfolioAboutSection?: boolean | Portfolio$portfolioAboutSectionArgs<ExtArgs>
    portfolioWorkExperiences?: boolean | Portfolio$portfolioWorkExperiencesArgs<ExtArgs>
    portfolioSkills?: boolean | Portfolio$portfolioSkillsArgs<ExtArgs>
    _count?: boolean | PortfolioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PortfolioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PortfolioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PortfolioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Portfolio"
    objects: {
      portfolioProminentProjects: Prisma.$PortfolioProminentProjectPayload<ExtArgs>[]
      portfolioCustomerFeedbacks: Prisma.$PortfolioCustomerFeedbackPayload<ExtArgs>[]
      portfolioAboutSection: Prisma.$PortfolioAboutSectionPayload<ExtArgs> | null
      portfolioWorkExperiences: Prisma.$PortfolioWorkExperiencePayload<ExtArgs>[]
      portfolioSkills: Prisma.$PortfolioSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      skillDescription: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portfolio"]>
    composites: {}
  }

  type PortfolioGetPayload<S extends boolean | null | undefined | PortfolioDefaultArgs> = $Result.GetResult<Prisma.$PortfolioPayload, S>

  type PortfolioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioCountAggregateInputType | true
    }

  export interface PortfolioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Portfolio'], meta: { name: 'Portfolio' } }
    /**
     * Find zero or one Portfolio that matches the filter.
     * @param {PortfolioFindUniqueArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioFindUniqueArgs>(args: SelectSubset<T, PortfolioFindUniqueArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Portfolio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioFindUniqueOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Portfolio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindFirstArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioFindFirstArgs>(args?: SelectSubset<T, PortfolioFindFirstArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Portfolio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindFirstOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Portfolios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Portfolios
     * const portfolios = await prisma.portfolio.findMany()
     * 
     * // Get first 10 Portfolios
     * const portfolios = await prisma.portfolio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioFindManyArgs>(args?: SelectSubset<T, PortfolioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Portfolio.
     * @param {PortfolioCreateArgs} args - Arguments to create a Portfolio.
     * @example
     * // Create one Portfolio
     * const Portfolio = await prisma.portfolio.create({
     *   data: {
     *     // ... data to create a Portfolio
     *   }
     * })
     * 
     */
    create<T extends PortfolioCreateArgs>(args: SelectSubset<T, PortfolioCreateArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Portfolios.
     * @param {PortfolioCreateManyArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioCreateManyArgs>(args?: SelectSubset<T, PortfolioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Portfolios and returns the data saved in the database.
     * @param {PortfolioCreateManyAndReturnArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Portfolios and only return the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Portfolio.
     * @param {PortfolioDeleteArgs} args - Arguments to delete one Portfolio.
     * @example
     * // Delete one Portfolio
     * const Portfolio = await prisma.portfolio.delete({
     *   where: {
     *     // ... filter to delete one Portfolio
     *   }
     * })
     * 
     */
    delete<T extends PortfolioDeleteArgs>(args: SelectSubset<T, PortfolioDeleteArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Portfolio.
     * @param {PortfolioUpdateArgs} args - Arguments to update one Portfolio.
     * @example
     * // Update one Portfolio
     * const portfolio = await prisma.portfolio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioUpdateArgs>(args: SelectSubset<T, PortfolioUpdateArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Portfolios.
     * @param {PortfolioDeleteManyArgs} args - Arguments to filter Portfolios to delete.
     * @example
     * // Delete a few Portfolios
     * const { count } = await prisma.portfolio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioDeleteManyArgs>(args?: SelectSubset<T, PortfolioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioUpdateManyArgs>(args: SelectSubset<T, PortfolioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios and returns the data updated in the database.
     * @param {PortfolioUpdateManyAndReturnArgs} args - Arguments to update many Portfolios.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Portfolios and only return the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortfolioUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Portfolio.
     * @param {PortfolioUpsertArgs} args - Arguments to update or create a Portfolio.
     * @example
     * // Update or create a Portfolio
     * const portfolio = await prisma.portfolio.upsert({
     *   create: {
     *     // ... data to create a Portfolio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Portfolio we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioUpsertArgs>(args: SelectSubset<T, PortfolioUpsertArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCountArgs} args - Arguments to filter Portfolios to count.
     * @example
     * // Count the number of Portfolios
     * const count = await prisma.portfolio.count({
     *   where: {
     *     // ... the filter for the Portfolios we want to count
     *   }
     * })
    **/
    count<T extends PortfolioCountArgs>(
      args?: Subset<T, PortfolioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioAggregateArgs>(args: Subset<T, PortfolioAggregateArgs>): Prisma.PrismaPromise<GetPortfolioAggregateType<T>>

    /**
     * Group by Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortfolioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Portfolio model
   */
  readonly fields: PortfolioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Portfolio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolioProminentProjects<T extends Portfolio$portfolioProminentProjectsArgs<ExtArgs> = {}>(args?: Subset<T, Portfolio$portfolioProminentProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioProminentProjectPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    portfolioCustomerFeedbacks<T extends Portfolio$portfolioCustomerFeedbacksArgs<ExtArgs> = {}>(args?: Subset<T, Portfolio$portfolioCustomerFeedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioCustomerFeedbackPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    portfolioAboutSection<T extends Portfolio$portfolioAboutSectionArgs<ExtArgs> = {}>(args?: Subset<T, Portfolio$portfolioAboutSectionArgs<ExtArgs>>): Prisma__PortfolioAboutSectionClient<$Result.GetResult<Prisma.$PortfolioAboutSectionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    portfolioWorkExperiences<T extends Portfolio$portfolioWorkExperiencesArgs<ExtArgs> = {}>(args?: Subset<T, Portfolio$portfolioWorkExperiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioWorkExperiencePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    portfolioSkills<T extends Portfolio$portfolioSkillsArgs<ExtArgs> = {}>(args?: Subset<T, Portfolio$portfolioSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioSkillPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Portfolio model
   */ 
  interface PortfolioFieldRefs {
    readonly id: FieldRef<"Portfolio", 'Int'>
    readonly name: FieldRef<"Portfolio", 'String'>
    readonly skillDescription: FieldRef<"Portfolio", 'String'>
    readonly createdAt: FieldRef<"Portfolio", 'DateTime'>
    readonly updatedAt: FieldRef<"Portfolio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Portfolio findUnique
   */
  export type PortfolioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio findUniqueOrThrow
   */
  export type PortfolioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio findFirst
   */
  export type PortfolioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio findFirstOrThrow
   */
  export type PortfolioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio findMany
   */
  export type PortfolioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolios to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio create
   */
  export type PortfolioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The data needed to create a Portfolio.
     */
    data: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
  }

  /**
   * Portfolio createMany
   */
  export type PortfolioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Portfolios.
     */
    data: PortfolioCreateManyInput | PortfolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Portfolio createManyAndReturn
   */
  export type PortfolioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * The data used to create many Portfolios.
     */
    data: PortfolioCreateManyInput | PortfolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Portfolio update
   */
  export type PortfolioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The data needed to update a Portfolio.
     */
    data: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
    /**
     * Choose, which Portfolio to update.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio updateMany
   */
  export type PortfolioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Portfolios.
     */
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyInput>
    /**
     * Filter which Portfolios to update
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to update.
     */
    limit?: number
  }

  /**
   * Portfolio updateManyAndReturn
   */
  export type PortfolioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * The data used to update Portfolios.
     */
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyInput>
    /**
     * Filter which Portfolios to update
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to update.
     */
    limit?: number
  }

  /**
   * Portfolio upsert
   */
  export type PortfolioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The filter to search for the Portfolio to update in case it exists.
     */
    where: PortfolioWhereUniqueInput
    /**
     * In case the Portfolio found by the `where` argument doesn't exist, create a new Portfolio with this data.
     */
    create: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
    /**
     * In case the Portfolio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
  }

  /**
   * Portfolio delete
   */
  export type PortfolioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter which Portfolio to delete.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio deleteMany
   */
  export type PortfolioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portfolios to delete
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to delete.
     */
    limit?: number
  }

  /**
   * Portfolio.portfolioProminentProjects
   */
  export type Portfolio$portfolioProminentProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProject
     */
    select?: PortfolioProminentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProject
     */
    omit?: PortfolioProminentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectInclude<ExtArgs> | null
    where?: PortfolioProminentProjectWhereInput
    orderBy?: PortfolioProminentProjectOrderByWithRelationInput | PortfolioProminentProjectOrderByWithRelationInput[]
    cursor?: PortfolioProminentProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioProminentProjectScalarFieldEnum | PortfolioProminentProjectScalarFieldEnum[]
  }

  /**
   * Portfolio.portfolioCustomerFeedbacks
   */
  export type Portfolio$portfolioCustomerFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCustomerFeedback
     */
    select?: PortfolioCustomerFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCustomerFeedback
     */
    omit?: PortfolioCustomerFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCustomerFeedbackInclude<ExtArgs> | null
    where?: PortfolioCustomerFeedbackWhereInput
    orderBy?: PortfolioCustomerFeedbackOrderByWithRelationInput | PortfolioCustomerFeedbackOrderByWithRelationInput[]
    cursor?: PortfolioCustomerFeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioCustomerFeedbackScalarFieldEnum | PortfolioCustomerFeedbackScalarFieldEnum[]
  }

  /**
   * Portfolio.portfolioAboutSection
   */
  export type Portfolio$portfolioAboutSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioAboutSection
     */
    select?: PortfolioAboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioAboutSection
     */
    omit?: PortfolioAboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioAboutSectionInclude<ExtArgs> | null
    where?: PortfolioAboutSectionWhereInput
  }

  /**
   * Portfolio.portfolioWorkExperiences
   */
  export type Portfolio$portfolioWorkExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioWorkExperience
     */
    select?: PortfolioWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioWorkExperience
     */
    omit?: PortfolioWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioWorkExperienceInclude<ExtArgs> | null
    where?: PortfolioWorkExperienceWhereInput
    orderBy?: PortfolioWorkExperienceOrderByWithRelationInput | PortfolioWorkExperienceOrderByWithRelationInput[]
    cursor?: PortfolioWorkExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioWorkExperienceScalarFieldEnum | PortfolioWorkExperienceScalarFieldEnum[]
  }

  /**
   * Portfolio.portfolioSkills
   */
  export type Portfolio$portfolioSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSkill
     */
    select?: PortfolioSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSkill
     */
    omit?: PortfolioSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSkillInclude<ExtArgs> | null
    where?: PortfolioSkillWhereInput
    orderBy?: PortfolioSkillOrderByWithRelationInput | PortfolioSkillOrderByWithRelationInput[]
    cursor?: PortfolioSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioSkillScalarFieldEnum | PortfolioSkillScalarFieldEnum[]
  }

  /**
   * Portfolio without action
   */
  export type PortfolioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
  }


  /**
   * Model PortfolioProminentProject
   */

  export type AggregatePortfolioProminentProject = {
    _count: PortfolioProminentProjectCountAggregateOutputType | null
    _avg: PortfolioProminentProjectAvgAggregateOutputType | null
    _sum: PortfolioProminentProjectSumAggregateOutputType | null
    _min: PortfolioProminentProjectMinAggregateOutputType | null
    _max: PortfolioProminentProjectMaxAggregateOutputType | null
  }

  export type PortfolioProminentProjectAvgAggregateOutputType = {
    id: number | null
    portfolioId: number | null
  }

  export type PortfolioProminentProjectSumAggregateOutputType = {
    id: number | null
    portfolioId: number | null
  }

  export type PortfolioProminentProjectMinAggregateOutputType = {
    id: number | null
    portfolioId: number | null
    description: string | null
    role: string | null
    company: string | null
    detail: string | null
    from: Date | null
    to: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioProminentProjectMaxAggregateOutputType = {
    id: number | null
    portfolioId: number | null
    description: string | null
    role: string | null
    company: string | null
    detail: string | null
    from: Date | null
    to: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioProminentProjectCountAggregateOutputType = {
    id: number
    portfolioId: number
    description: number
    role: number
    company: number
    detail: number
    from: number
    to: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortfolioProminentProjectAvgAggregateInputType = {
    id?: true
    portfolioId?: true
  }

  export type PortfolioProminentProjectSumAggregateInputType = {
    id?: true
    portfolioId?: true
  }

  export type PortfolioProminentProjectMinAggregateInputType = {
    id?: true
    portfolioId?: true
    description?: true
    role?: true
    company?: true
    detail?: true
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioProminentProjectMaxAggregateInputType = {
    id?: true
    portfolioId?: true
    description?: true
    role?: true
    company?: true
    detail?: true
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioProminentProjectCountAggregateInputType = {
    id?: true
    portfolioId?: true
    description?: true
    role?: true
    company?: true
    detail?: true
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortfolioProminentProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioProminentProject to aggregate.
     */
    where?: PortfolioProminentProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioProminentProjects to fetch.
     */
    orderBy?: PortfolioProminentProjectOrderByWithRelationInput | PortfolioProminentProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioProminentProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioProminentProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioProminentProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioProminentProjects
    **/
    _count?: true | PortfolioProminentProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioProminentProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioProminentProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioProminentProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioProminentProjectMaxAggregateInputType
  }

  export type GetPortfolioProminentProjectAggregateType<T extends PortfolioProminentProjectAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioProminentProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioProminentProject[P]>
      : GetScalarType<T[P], AggregatePortfolioProminentProject[P]>
  }




  export type PortfolioProminentProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioProminentProjectWhereInput
    orderBy?: PortfolioProminentProjectOrderByWithAggregationInput | PortfolioProminentProjectOrderByWithAggregationInput[]
    by: PortfolioProminentProjectScalarFieldEnum[] | PortfolioProminentProjectScalarFieldEnum
    having?: PortfolioProminentProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioProminentProjectCountAggregateInputType | true
    _avg?: PortfolioProminentProjectAvgAggregateInputType
    _sum?: PortfolioProminentProjectSumAggregateInputType
    _min?: PortfolioProminentProjectMinAggregateInputType
    _max?: PortfolioProminentProjectMaxAggregateInputType
  }

  export type PortfolioProminentProjectGroupByOutputType = {
    id: number
    portfolioId: number
    description: string
    role: string
    company: string
    detail: string | null
    from: Date
    to: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PortfolioProminentProjectCountAggregateOutputType | null
    _avg: PortfolioProminentProjectAvgAggregateOutputType | null
    _sum: PortfolioProminentProjectSumAggregateOutputType | null
    _min: PortfolioProminentProjectMinAggregateOutputType | null
    _max: PortfolioProminentProjectMaxAggregateOutputType | null
  }

  type GetPortfolioProminentProjectGroupByPayload<T extends PortfolioProminentProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioProminentProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioProminentProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioProminentProjectGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioProminentProjectGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioProminentProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    description?: boolean
    role?: boolean
    company?: boolean
    detail?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
    portfolioProminentProjectImages?: boolean | PortfolioProminentProject$portfolioProminentProjectImagesArgs<ExtArgs>
    _count?: boolean | PortfolioProminentProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioProminentProject"]>

  export type PortfolioProminentProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    description?: boolean
    role?: boolean
    company?: boolean
    detail?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioProminentProject"]>

  export type PortfolioProminentProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    description?: boolean
    role?: boolean
    company?: boolean
    detail?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioProminentProject"]>

  export type PortfolioProminentProjectSelectScalar = {
    id?: boolean
    portfolioId?: boolean
    description?: boolean
    role?: boolean
    company?: boolean
    detail?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortfolioProminentProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "portfolioId" | "description" | "role" | "company" | "detail" | "from" | "to" | "createdAt" | "updatedAt", ExtArgs["result"]["portfolioProminentProject"]>
  export type PortfolioProminentProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
    portfolioProminentProjectImages?: boolean | PortfolioProminentProject$portfolioProminentProjectImagesArgs<ExtArgs>
    _count?: boolean | PortfolioProminentProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PortfolioProminentProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }
  export type PortfolioProminentProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }

  export type $PortfolioProminentProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioProminentProject"
    objects: {
      portfolio: Prisma.$PortfolioPayload<ExtArgs>
      portfolioProminentProjectImages: Prisma.$PortfolioProminentProjectImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      portfolioId: number
      description: string
      role: string
      company: string
      detail: string | null
      from: Date
      to: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portfolioProminentProject"]>
    composites: {}
  }

  type PortfolioProminentProjectGetPayload<S extends boolean | null | undefined | PortfolioProminentProjectDefaultArgs> = $Result.GetResult<Prisma.$PortfolioProminentProjectPayload, S>

  type PortfolioProminentProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioProminentProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioProminentProjectCountAggregateInputType | true
    }

  export interface PortfolioProminentProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioProminentProject'], meta: { name: 'PortfolioProminentProject' } }
    /**
     * Find zero or one PortfolioProminentProject that matches the filter.
     * @param {PortfolioProminentProjectFindUniqueArgs} args - Arguments to find a PortfolioProminentProject
     * @example
     * // Get one PortfolioProminentProject
     * const portfolioProminentProject = await prisma.portfolioProminentProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioProminentProjectFindUniqueArgs>(args: SelectSubset<T, PortfolioProminentProjectFindUniqueArgs<ExtArgs>>): Prisma__PortfolioProminentProjectClient<$Result.GetResult<Prisma.$PortfolioProminentProjectPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PortfolioProminentProject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioProminentProjectFindUniqueOrThrowArgs} args - Arguments to find a PortfolioProminentProject
     * @example
     * // Get one PortfolioProminentProject
     * const portfolioProminentProject = await prisma.portfolioProminentProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioProminentProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioProminentProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioProminentProjectClient<$Result.GetResult<Prisma.$PortfolioProminentProjectPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PortfolioProminentProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioProminentProjectFindFirstArgs} args - Arguments to find a PortfolioProminentProject
     * @example
     * // Get one PortfolioProminentProject
     * const portfolioProminentProject = await prisma.portfolioProminentProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioProminentProjectFindFirstArgs>(args?: SelectSubset<T, PortfolioProminentProjectFindFirstArgs<ExtArgs>>): Prisma__PortfolioProminentProjectClient<$Result.GetResult<Prisma.$PortfolioProminentProjectPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PortfolioProminentProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioProminentProjectFindFirstOrThrowArgs} args - Arguments to find a PortfolioProminentProject
     * @example
     * // Get one PortfolioProminentProject
     * const portfolioProminentProject = await prisma.portfolioProminentProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioProminentProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioProminentProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioProminentProjectClient<$Result.GetResult<Prisma.$PortfolioProminentProjectPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PortfolioProminentProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioProminentProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioProminentProjects
     * const portfolioProminentProjects = await prisma.portfolioProminentProject.findMany()
     * 
     * // Get first 10 PortfolioProminentProjects
     * const portfolioProminentProjects = await prisma.portfolioProminentProject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioProminentProjectWithIdOnly = await prisma.portfolioProminentProject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioProminentProjectFindManyArgs>(args?: SelectSubset<T, PortfolioProminentProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioProminentProjectPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PortfolioProminentProject.
     * @param {PortfolioProminentProjectCreateArgs} args - Arguments to create a PortfolioProminentProject.
     * @example
     * // Create one PortfolioProminentProject
     * const PortfolioProminentProject = await prisma.portfolioProminentProject.create({
     *   data: {
     *     // ... data to create a PortfolioProminentProject
     *   }
     * })
     * 
     */
    create<T extends PortfolioProminentProjectCreateArgs>(args: SelectSubset<T, PortfolioProminentProjectCreateArgs<ExtArgs>>): Prisma__PortfolioProminentProjectClient<$Result.GetResult<Prisma.$PortfolioProminentProjectPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PortfolioProminentProjects.
     * @param {PortfolioProminentProjectCreateManyArgs} args - Arguments to create many PortfolioProminentProjects.
     * @example
     * // Create many PortfolioProminentProjects
     * const portfolioProminentProject = await prisma.portfolioProminentProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioProminentProjectCreateManyArgs>(args?: SelectSubset<T, PortfolioProminentProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortfolioProminentProjects and returns the data saved in the database.
     * @param {PortfolioProminentProjectCreateManyAndReturnArgs} args - Arguments to create many PortfolioProminentProjects.
     * @example
     * // Create many PortfolioProminentProjects
     * const portfolioProminentProject = await prisma.portfolioProminentProject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortfolioProminentProjects and only return the `id`
     * const portfolioProminentProjectWithIdOnly = await prisma.portfolioProminentProject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioProminentProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioProminentProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioProminentProjectPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PortfolioProminentProject.
     * @param {PortfolioProminentProjectDeleteArgs} args - Arguments to delete one PortfolioProminentProject.
     * @example
     * // Delete one PortfolioProminentProject
     * const PortfolioProminentProject = await prisma.portfolioProminentProject.delete({
     *   where: {
     *     // ... filter to delete one PortfolioProminentProject
     *   }
     * })
     * 
     */
    delete<T extends PortfolioProminentProjectDeleteArgs>(args: SelectSubset<T, PortfolioProminentProjectDeleteArgs<ExtArgs>>): Prisma__PortfolioProminentProjectClient<$Result.GetResult<Prisma.$PortfolioProminentProjectPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PortfolioProminentProject.
     * @param {PortfolioProminentProjectUpdateArgs} args - Arguments to update one PortfolioProminentProject.
     * @example
     * // Update one PortfolioProminentProject
     * const portfolioProminentProject = await prisma.portfolioProminentProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioProminentProjectUpdateArgs>(args: SelectSubset<T, PortfolioProminentProjectUpdateArgs<ExtArgs>>): Prisma__PortfolioProminentProjectClient<$Result.GetResult<Prisma.$PortfolioProminentProjectPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PortfolioProminentProjects.
     * @param {PortfolioProminentProjectDeleteManyArgs} args - Arguments to filter PortfolioProminentProjects to delete.
     * @example
     * // Delete a few PortfolioProminentProjects
     * const { count } = await prisma.portfolioProminentProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioProminentProjectDeleteManyArgs>(args?: SelectSubset<T, PortfolioProminentProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioProminentProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioProminentProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioProminentProjects
     * const portfolioProminentProject = await prisma.portfolioProminentProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioProminentProjectUpdateManyArgs>(args: SelectSubset<T, PortfolioProminentProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioProminentProjects and returns the data updated in the database.
     * @param {PortfolioProminentProjectUpdateManyAndReturnArgs} args - Arguments to update many PortfolioProminentProjects.
     * @example
     * // Update many PortfolioProminentProjects
     * const portfolioProminentProject = await prisma.portfolioProminentProject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PortfolioProminentProjects and only return the `id`
     * const portfolioProminentProjectWithIdOnly = await prisma.portfolioProminentProject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortfolioProminentProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioProminentProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioProminentProjectPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PortfolioProminentProject.
     * @param {PortfolioProminentProjectUpsertArgs} args - Arguments to update or create a PortfolioProminentProject.
     * @example
     * // Update or create a PortfolioProminentProject
     * const portfolioProminentProject = await prisma.portfolioProminentProject.upsert({
     *   create: {
     *     // ... data to create a PortfolioProminentProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioProminentProject we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioProminentProjectUpsertArgs>(args: SelectSubset<T, PortfolioProminentProjectUpsertArgs<ExtArgs>>): Prisma__PortfolioProminentProjectClient<$Result.GetResult<Prisma.$PortfolioProminentProjectPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PortfolioProminentProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioProminentProjectCountArgs} args - Arguments to filter PortfolioProminentProjects to count.
     * @example
     * // Count the number of PortfolioProminentProjects
     * const count = await prisma.portfolioProminentProject.count({
     *   where: {
     *     // ... the filter for the PortfolioProminentProjects we want to count
     *   }
     * })
    **/
    count<T extends PortfolioProminentProjectCountArgs>(
      args?: Subset<T, PortfolioProminentProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioProminentProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioProminentProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioProminentProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioProminentProjectAggregateArgs>(args: Subset<T, PortfolioProminentProjectAggregateArgs>): Prisma.PrismaPromise<GetPortfolioProminentProjectAggregateType<T>>

    /**
     * Group by PortfolioProminentProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioProminentProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortfolioProminentProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioProminentProjectGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioProminentProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioProminentProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioProminentProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioProminentProject model
   */
  readonly fields: PortfolioProminentProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioProminentProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioProminentProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolio<T extends PortfolioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortfolioDefaultArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    portfolioProminentProjectImages<T extends PortfolioProminentProject$portfolioProminentProjectImagesArgs<ExtArgs> = {}>(args?: Subset<T, PortfolioProminentProject$portfolioProminentProjectImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioProminentProjectImagePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortfolioProminentProject model
   */ 
  interface PortfolioProminentProjectFieldRefs {
    readonly id: FieldRef<"PortfolioProminentProject", 'Int'>
    readonly portfolioId: FieldRef<"PortfolioProminentProject", 'Int'>
    readonly description: FieldRef<"PortfolioProminentProject", 'String'>
    readonly role: FieldRef<"PortfolioProminentProject", 'String'>
    readonly company: FieldRef<"PortfolioProminentProject", 'String'>
    readonly detail: FieldRef<"PortfolioProminentProject", 'String'>
    readonly from: FieldRef<"PortfolioProminentProject", 'DateTime'>
    readonly to: FieldRef<"PortfolioProminentProject", 'DateTime'>
    readonly createdAt: FieldRef<"PortfolioProminentProject", 'DateTime'>
    readonly updatedAt: FieldRef<"PortfolioProminentProject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioProminentProject findUnique
   */
  export type PortfolioProminentProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProject
     */
    select?: PortfolioProminentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProject
     */
    omit?: PortfolioProminentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioProminentProject to fetch.
     */
    where: PortfolioProminentProjectWhereUniqueInput
  }

  /**
   * PortfolioProminentProject findUniqueOrThrow
   */
  export type PortfolioProminentProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProject
     */
    select?: PortfolioProminentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProject
     */
    omit?: PortfolioProminentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioProminentProject to fetch.
     */
    where: PortfolioProminentProjectWhereUniqueInput
  }

  /**
   * PortfolioProminentProject findFirst
   */
  export type PortfolioProminentProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProject
     */
    select?: PortfolioProminentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProject
     */
    omit?: PortfolioProminentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioProminentProject to fetch.
     */
    where?: PortfolioProminentProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioProminentProjects to fetch.
     */
    orderBy?: PortfolioProminentProjectOrderByWithRelationInput | PortfolioProminentProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioProminentProjects.
     */
    cursor?: PortfolioProminentProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioProminentProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioProminentProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioProminentProjects.
     */
    distinct?: PortfolioProminentProjectScalarFieldEnum | PortfolioProminentProjectScalarFieldEnum[]
  }

  /**
   * PortfolioProminentProject findFirstOrThrow
   */
  export type PortfolioProminentProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProject
     */
    select?: PortfolioProminentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProject
     */
    omit?: PortfolioProminentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioProminentProject to fetch.
     */
    where?: PortfolioProminentProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioProminentProjects to fetch.
     */
    orderBy?: PortfolioProminentProjectOrderByWithRelationInput | PortfolioProminentProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioProminentProjects.
     */
    cursor?: PortfolioProminentProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioProminentProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioProminentProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioProminentProjects.
     */
    distinct?: PortfolioProminentProjectScalarFieldEnum | PortfolioProminentProjectScalarFieldEnum[]
  }

  /**
   * PortfolioProminentProject findMany
   */
  export type PortfolioProminentProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProject
     */
    select?: PortfolioProminentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProject
     */
    omit?: PortfolioProminentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioProminentProjects to fetch.
     */
    where?: PortfolioProminentProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioProminentProjects to fetch.
     */
    orderBy?: PortfolioProminentProjectOrderByWithRelationInput | PortfolioProminentProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioProminentProjects.
     */
    cursor?: PortfolioProminentProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioProminentProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioProminentProjects.
     */
    skip?: number
    distinct?: PortfolioProminentProjectScalarFieldEnum | PortfolioProminentProjectScalarFieldEnum[]
  }

  /**
   * PortfolioProminentProject create
   */
  export type PortfolioProminentProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProject
     */
    select?: PortfolioProminentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProject
     */
    omit?: PortfolioProminentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a PortfolioProminentProject.
     */
    data: XOR<PortfolioProminentProjectCreateInput, PortfolioProminentProjectUncheckedCreateInput>
  }

  /**
   * PortfolioProminentProject createMany
   */
  export type PortfolioProminentProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioProminentProjects.
     */
    data: PortfolioProminentProjectCreateManyInput | PortfolioProminentProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioProminentProject createManyAndReturn
   */
  export type PortfolioProminentProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProject
     */
    select?: PortfolioProminentProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProject
     */
    omit?: PortfolioProminentProjectOmit<ExtArgs> | null
    /**
     * The data used to create many PortfolioProminentProjects.
     */
    data: PortfolioProminentProjectCreateManyInput | PortfolioProminentProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioProminentProject update
   */
  export type PortfolioProminentProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProject
     */
    select?: PortfolioProminentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProject
     */
    omit?: PortfolioProminentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a PortfolioProminentProject.
     */
    data: XOR<PortfolioProminentProjectUpdateInput, PortfolioProminentProjectUncheckedUpdateInput>
    /**
     * Choose, which PortfolioProminentProject to update.
     */
    where: PortfolioProminentProjectWhereUniqueInput
  }

  /**
   * PortfolioProminentProject updateMany
   */
  export type PortfolioProminentProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioProminentProjects.
     */
    data: XOR<PortfolioProminentProjectUpdateManyMutationInput, PortfolioProminentProjectUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioProminentProjects to update
     */
    where?: PortfolioProminentProjectWhereInput
    /**
     * Limit how many PortfolioProminentProjects to update.
     */
    limit?: number
  }

  /**
   * PortfolioProminentProject updateManyAndReturn
   */
  export type PortfolioProminentProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProject
     */
    select?: PortfolioProminentProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProject
     */
    omit?: PortfolioProminentProjectOmit<ExtArgs> | null
    /**
     * The data used to update PortfolioProminentProjects.
     */
    data: XOR<PortfolioProminentProjectUpdateManyMutationInput, PortfolioProminentProjectUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioProminentProjects to update
     */
    where?: PortfolioProminentProjectWhereInput
    /**
     * Limit how many PortfolioProminentProjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioProminentProject upsert
   */
  export type PortfolioProminentProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProject
     */
    select?: PortfolioProminentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProject
     */
    omit?: PortfolioProminentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the PortfolioProminentProject to update in case it exists.
     */
    where: PortfolioProminentProjectWhereUniqueInput
    /**
     * In case the PortfolioProminentProject found by the `where` argument doesn't exist, create a new PortfolioProminentProject with this data.
     */
    create: XOR<PortfolioProminentProjectCreateInput, PortfolioProminentProjectUncheckedCreateInput>
    /**
     * In case the PortfolioProminentProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioProminentProjectUpdateInput, PortfolioProminentProjectUncheckedUpdateInput>
  }

  /**
   * PortfolioProminentProject delete
   */
  export type PortfolioProminentProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProject
     */
    select?: PortfolioProminentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProject
     */
    omit?: PortfolioProminentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectInclude<ExtArgs> | null
    /**
     * Filter which PortfolioProminentProject to delete.
     */
    where: PortfolioProminentProjectWhereUniqueInput
  }

  /**
   * PortfolioProminentProject deleteMany
   */
  export type PortfolioProminentProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioProminentProjects to delete
     */
    where?: PortfolioProminentProjectWhereInput
    /**
     * Limit how many PortfolioProminentProjects to delete.
     */
    limit?: number
  }

  /**
   * PortfolioProminentProject.portfolioProminentProjectImages
   */
  export type PortfolioProminentProject$portfolioProminentProjectImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProjectImage
     */
    select?: PortfolioProminentProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProjectImage
     */
    omit?: PortfolioProminentProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectImageInclude<ExtArgs> | null
    where?: PortfolioProminentProjectImageWhereInput
    orderBy?: PortfolioProminentProjectImageOrderByWithRelationInput | PortfolioProminentProjectImageOrderByWithRelationInput[]
    cursor?: PortfolioProminentProjectImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioProminentProjectImageScalarFieldEnum | PortfolioProminentProjectImageScalarFieldEnum[]
  }

  /**
   * PortfolioProminentProject without action
   */
  export type PortfolioProminentProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProject
     */
    select?: PortfolioProminentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProject
     */
    omit?: PortfolioProminentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectInclude<ExtArgs> | null
  }


  /**
   * Model PortfolioProminentProjectImage
   */

  export type AggregatePortfolioProminentProjectImage = {
    _count: PortfolioProminentProjectImageCountAggregateOutputType | null
    _avg: PortfolioProminentProjectImageAvgAggregateOutputType | null
    _sum: PortfolioProminentProjectImageSumAggregateOutputType | null
    _min: PortfolioProminentProjectImageMinAggregateOutputType | null
    _max: PortfolioProminentProjectImageMaxAggregateOutputType | null
  }

  export type PortfolioProminentProjectImageAvgAggregateOutputType = {
    id: number | null
    portfolioProminentProjectId: number | null
  }

  export type PortfolioProminentProjectImageSumAggregateOutputType = {
    id: number | null
    portfolioProminentProjectId: number | null
  }

  export type PortfolioProminentProjectImageMinAggregateOutputType = {
    id: number | null
    portfolioProminentProjectId: number | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioProminentProjectImageMaxAggregateOutputType = {
    id: number | null
    portfolioProminentProjectId: number | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioProminentProjectImageCountAggregateOutputType = {
    id: number
    portfolioProminentProjectId: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortfolioProminentProjectImageAvgAggregateInputType = {
    id?: true
    portfolioProminentProjectId?: true
  }

  export type PortfolioProminentProjectImageSumAggregateInputType = {
    id?: true
    portfolioProminentProjectId?: true
  }

  export type PortfolioProminentProjectImageMinAggregateInputType = {
    id?: true
    portfolioProminentProjectId?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioProminentProjectImageMaxAggregateInputType = {
    id?: true
    portfolioProminentProjectId?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioProminentProjectImageCountAggregateInputType = {
    id?: true
    portfolioProminentProjectId?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortfolioProminentProjectImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioProminentProjectImage to aggregate.
     */
    where?: PortfolioProminentProjectImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioProminentProjectImages to fetch.
     */
    orderBy?: PortfolioProminentProjectImageOrderByWithRelationInput | PortfolioProminentProjectImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioProminentProjectImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioProminentProjectImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioProminentProjectImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioProminentProjectImages
    **/
    _count?: true | PortfolioProminentProjectImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioProminentProjectImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioProminentProjectImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioProminentProjectImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioProminentProjectImageMaxAggregateInputType
  }

  export type GetPortfolioProminentProjectImageAggregateType<T extends PortfolioProminentProjectImageAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioProminentProjectImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioProminentProjectImage[P]>
      : GetScalarType<T[P], AggregatePortfolioProminentProjectImage[P]>
  }




  export type PortfolioProminentProjectImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioProminentProjectImageWhereInput
    orderBy?: PortfolioProminentProjectImageOrderByWithAggregationInput | PortfolioProminentProjectImageOrderByWithAggregationInput[]
    by: PortfolioProminentProjectImageScalarFieldEnum[] | PortfolioProminentProjectImageScalarFieldEnum
    having?: PortfolioProminentProjectImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioProminentProjectImageCountAggregateInputType | true
    _avg?: PortfolioProminentProjectImageAvgAggregateInputType
    _sum?: PortfolioProminentProjectImageSumAggregateInputType
    _min?: PortfolioProminentProjectImageMinAggregateInputType
    _max?: PortfolioProminentProjectImageMaxAggregateInputType
  }

  export type PortfolioProminentProjectImageGroupByOutputType = {
    id: number
    portfolioProminentProjectId: number
    image: string
    createdAt: Date
    updatedAt: Date
    _count: PortfolioProminentProjectImageCountAggregateOutputType | null
    _avg: PortfolioProminentProjectImageAvgAggregateOutputType | null
    _sum: PortfolioProminentProjectImageSumAggregateOutputType | null
    _min: PortfolioProminentProjectImageMinAggregateOutputType | null
    _max: PortfolioProminentProjectImageMaxAggregateOutputType | null
  }

  type GetPortfolioProminentProjectImageGroupByPayload<T extends PortfolioProminentProjectImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioProminentProjectImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioProminentProjectImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioProminentProjectImageGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioProminentProjectImageGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioProminentProjectImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioProminentProjectId?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolioProminentProject?: boolean | PortfolioProminentProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioProminentProjectImage"]>

  export type PortfolioProminentProjectImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioProminentProjectId?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolioProminentProject?: boolean | PortfolioProminentProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioProminentProjectImage"]>

  export type PortfolioProminentProjectImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioProminentProjectId?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolioProminentProject?: boolean | PortfolioProminentProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioProminentProjectImage"]>

  export type PortfolioProminentProjectImageSelectScalar = {
    id?: boolean
    portfolioProminentProjectId?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortfolioProminentProjectImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "portfolioProminentProjectId" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["portfolioProminentProjectImage"]>
  export type PortfolioProminentProjectImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolioProminentProject?: boolean | PortfolioProminentProjectDefaultArgs<ExtArgs>
  }
  export type PortfolioProminentProjectImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolioProminentProject?: boolean | PortfolioProminentProjectDefaultArgs<ExtArgs>
  }
  export type PortfolioProminentProjectImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolioProminentProject?: boolean | PortfolioProminentProjectDefaultArgs<ExtArgs>
  }

  export type $PortfolioProminentProjectImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioProminentProjectImage"
    objects: {
      portfolioProminentProject: Prisma.$PortfolioProminentProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      portfolioProminentProjectId: number
      image: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portfolioProminentProjectImage"]>
    composites: {}
  }

  type PortfolioProminentProjectImageGetPayload<S extends boolean | null | undefined | PortfolioProminentProjectImageDefaultArgs> = $Result.GetResult<Prisma.$PortfolioProminentProjectImagePayload, S>

  type PortfolioProminentProjectImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioProminentProjectImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioProminentProjectImageCountAggregateInputType | true
    }

  export interface PortfolioProminentProjectImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioProminentProjectImage'], meta: { name: 'PortfolioProminentProjectImage' } }
    /**
     * Find zero or one PortfolioProminentProjectImage that matches the filter.
     * @param {PortfolioProminentProjectImageFindUniqueArgs} args - Arguments to find a PortfolioProminentProjectImage
     * @example
     * // Get one PortfolioProminentProjectImage
     * const portfolioProminentProjectImage = await prisma.portfolioProminentProjectImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioProminentProjectImageFindUniqueArgs>(args: SelectSubset<T, PortfolioProminentProjectImageFindUniqueArgs<ExtArgs>>): Prisma__PortfolioProminentProjectImageClient<$Result.GetResult<Prisma.$PortfolioProminentProjectImagePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PortfolioProminentProjectImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioProminentProjectImageFindUniqueOrThrowArgs} args - Arguments to find a PortfolioProminentProjectImage
     * @example
     * // Get one PortfolioProminentProjectImage
     * const portfolioProminentProjectImage = await prisma.portfolioProminentProjectImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioProminentProjectImageFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioProminentProjectImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioProminentProjectImageClient<$Result.GetResult<Prisma.$PortfolioProminentProjectImagePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PortfolioProminentProjectImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioProminentProjectImageFindFirstArgs} args - Arguments to find a PortfolioProminentProjectImage
     * @example
     * // Get one PortfolioProminentProjectImage
     * const portfolioProminentProjectImage = await prisma.portfolioProminentProjectImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioProminentProjectImageFindFirstArgs>(args?: SelectSubset<T, PortfolioProminentProjectImageFindFirstArgs<ExtArgs>>): Prisma__PortfolioProminentProjectImageClient<$Result.GetResult<Prisma.$PortfolioProminentProjectImagePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PortfolioProminentProjectImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioProminentProjectImageFindFirstOrThrowArgs} args - Arguments to find a PortfolioProminentProjectImage
     * @example
     * // Get one PortfolioProminentProjectImage
     * const portfolioProminentProjectImage = await prisma.portfolioProminentProjectImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioProminentProjectImageFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioProminentProjectImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioProminentProjectImageClient<$Result.GetResult<Prisma.$PortfolioProminentProjectImagePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PortfolioProminentProjectImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioProminentProjectImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioProminentProjectImages
     * const portfolioProminentProjectImages = await prisma.portfolioProminentProjectImage.findMany()
     * 
     * // Get first 10 PortfolioProminentProjectImages
     * const portfolioProminentProjectImages = await prisma.portfolioProminentProjectImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioProminentProjectImageWithIdOnly = await prisma.portfolioProminentProjectImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioProminentProjectImageFindManyArgs>(args?: SelectSubset<T, PortfolioProminentProjectImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioProminentProjectImagePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PortfolioProminentProjectImage.
     * @param {PortfolioProminentProjectImageCreateArgs} args - Arguments to create a PortfolioProminentProjectImage.
     * @example
     * // Create one PortfolioProminentProjectImage
     * const PortfolioProminentProjectImage = await prisma.portfolioProminentProjectImage.create({
     *   data: {
     *     // ... data to create a PortfolioProminentProjectImage
     *   }
     * })
     * 
     */
    create<T extends PortfolioProminentProjectImageCreateArgs>(args: SelectSubset<T, PortfolioProminentProjectImageCreateArgs<ExtArgs>>): Prisma__PortfolioProminentProjectImageClient<$Result.GetResult<Prisma.$PortfolioProminentProjectImagePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PortfolioProminentProjectImages.
     * @param {PortfolioProminentProjectImageCreateManyArgs} args - Arguments to create many PortfolioProminentProjectImages.
     * @example
     * // Create many PortfolioProminentProjectImages
     * const portfolioProminentProjectImage = await prisma.portfolioProminentProjectImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioProminentProjectImageCreateManyArgs>(args?: SelectSubset<T, PortfolioProminentProjectImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortfolioProminentProjectImages and returns the data saved in the database.
     * @param {PortfolioProminentProjectImageCreateManyAndReturnArgs} args - Arguments to create many PortfolioProminentProjectImages.
     * @example
     * // Create many PortfolioProminentProjectImages
     * const portfolioProminentProjectImage = await prisma.portfolioProminentProjectImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortfolioProminentProjectImages and only return the `id`
     * const portfolioProminentProjectImageWithIdOnly = await prisma.portfolioProminentProjectImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioProminentProjectImageCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioProminentProjectImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioProminentProjectImagePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PortfolioProminentProjectImage.
     * @param {PortfolioProminentProjectImageDeleteArgs} args - Arguments to delete one PortfolioProminentProjectImage.
     * @example
     * // Delete one PortfolioProminentProjectImage
     * const PortfolioProminentProjectImage = await prisma.portfolioProminentProjectImage.delete({
     *   where: {
     *     // ... filter to delete one PortfolioProminentProjectImage
     *   }
     * })
     * 
     */
    delete<T extends PortfolioProminentProjectImageDeleteArgs>(args: SelectSubset<T, PortfolioProminentProjectImageDeleteArgs<ExtArgs>>): Prisma__PortfolioProminentProjectImageClient<$Result.GetResult<Prisma.$PortfolioProminentProjectImagePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PortfolioProminentProjectImage.
     * @param {PortfolioProminentProjectImageUpdateArgs} args - Arguments to update one PortfolioProminentProjectImage.
     * @example
     * // Update one PortfolioProminentProjectImage
     * const portfolioProminentProjectImage = await prisma.portfolioProminentProjectImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioProminentProjectImageUpdateArgs>(args: SelectSubset<T, PortfolioProminentProjectImageUpdateArgs<ExtArgs>>): Prisma__PortfolioProminentProjectImageClient<$Result.GetResult<Prisma.$PortfolioProminentProjectImagePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PortfolioProminentProjectImages.
     * @param {PortfolioProminentProjectImageDeleteManyArgs} args - Arguments to filter PortfolioProminentProjectImages to delete.
     * @example
     * // Delete a few PortfolioProminentProjectImages
     * const { count } = await prisma.portfolioProminentProjectImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioProminentProjectImageDeleteManyArgs>(args?: SelectSubset<T, PortfolioProminentProjectImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioProminentProjectImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioProminentProjectImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioProminentProjectImages
     * const portfolioProminentProjectImage = await prisma.portfolioProminentProjectImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioProminentProjectImageUpdateManyArgs>(args: SelectSubset<T, PortfolioProminentProjectImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioProminentProjectImages and returns the data updated in the database.
     * @param {PortfolioProminentProjectImageUpdateManyAndReturnArgs} args - Arguments to update many PortfolioProminentProjectImages.
     * @example
     * // Update many PortfolioProminentProjectImages
     * const portfolioProminentProjectImage = await prisma.portfolioProminentProjectImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PortfolioProminentProjectImages and only return the `id`
     * const portfolioProminentProjectImageWithIdOnly = await prisma.portfolioProminentProjectImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortfolioProminentProjectImageUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioProminentProjectImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioProminentProjectImagePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PortfolioProminentProjectImage.
     * @param {PortfolioProminentProjectImageUpsertArgs} args - Arguments to update or create a PortfolioProminentProjectImage.
     * @example
     * // Update or create a PortfolioProminentProjectImage
     * const portfolioProminentProjectImage = await prisma.portfolioProminentProjectImage.upsert({
     *   create: {
     *     // ... data to create a PortfolioProminentProjectImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioProminentProjectImage we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioProminentProjectImageUpsertArgs>(args: SelectSubset<T, PortfolioProminentProjectImageUpsertArgs<ExtArgs>>): Prisma__PortfolioProminentProjectImageClient<$Result.GetResult<Prisma.$PortfolioProminentProjectImagePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PortfolioProminentProjectImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioProminentProjectImageCountArgs} args - Arguments to filter PortfolioProminentProjectImages to count.
     * @example
     * // Count the number of PortfolioProminentProjectImages
     * const count = await prisma.portfolioProminentProjectImage.count({
     *   where: {
     *     // ... the filter for the PortfolioProminentProjectImages we want to count
     *   }
     * })
    **/
    count<T extends PortfolioProminentProjectImageCountArgs>(
      args?: Subset<T, PortfolioProminentProjectImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioProminentProjectImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioProminentProjectImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioProminentProjectImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioProminentProjectImageAggregateArgs>(args: Subset<T, PortfolioProminentProjectImageAggregateArgs>): Prisma.PrismaPromise<GetPortfolioProminentProjectImageAggregateType<T>>

    /**
     * Group by PortfolioProminentProjectImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioProminentProjectImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortfolioProminentProjectImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioProminentProjectImageGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioProminentProjectImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioProminentProjectImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioProminentProjectImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioProminentProjectImage model
   */
  readonly fields: PortfolioProminentProjectImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioProminentProjectImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioProminentProjectImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolioProminentProject<T extends PortfolioProminentProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortfolioProminentProjectDefaultArgs<ExtArgs>>): Prisma__PortfolioProminentProjectClient<$Result.GetResult<Prisma.$PortfolioProminentProjectPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortfolioProminentProjectImage model
   */ 
  interface PortfolioProminentProjectImageFieldRefs {
    readonly id: FieldRef<"PortfolioProminentProjectImage", 'Int'>
    readonly portfolioProminentProjectId: FieldRef<"PortfolioProminentProjectImage", 'Int'>
    readonly image: FieldRef<"PortfolioProminentProjectImage", 'String'>
    readonly createdAt: FieldRef<"PortfolioProminentProjectImage", 'DateTime'>
    readonly updatedAt: FieldRef<"PortfolioProminentProjectImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioProminentProjectImage findUnique
   */
  export type PortfolioProminentProjectImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProjectImage
     */
    select?: PortfolioProminentProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProjectImage
     */
    omit?: PortfolioProminentProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectImageInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioProminentProjectImage to fetch.
     */
    where: PortfolioProminentProjectImageWhereUniqueInput
  }

  /**
   * PortfolioProminentProjectImage findUniqueOrThrow
   */
  export type PortfolioProminentProjectImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProjectImage
     */
    select?: PortfolioProminentProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProjectImage
     */
    omit?: PortfolioProminentProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectImageInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioProminentProjectImage to fetch.
     */
    where: PortfolioProminentProjectImageWhereUniqueInput
  }

  /**
   * PortfolioProminentProjectImage findFirst
   */
  export type PortfolioProminentProjectImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProjectImage
     */
    select?: PortfolioProminentProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProjectImage
     */
    omit?: PortfolioProminentProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectImageInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioProminentProjectImage to fetch.
     */
    where?: PortfolioProminentProjectImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioProminentProjectImages to fetch.
     */
    orderBy?: PortfolioProminentProjectImageOrderByWithRelationInput | PortfolioProminentProjectImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioProminentProjectImages.
     */
    cursor?: PortfolioProminentProjectImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioProminentProjectImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioProminentProjectImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioProminentProjectImages.
     */
    distinct?: PortfolioProminentProjectImageScalarFieldEnum | PortfolioProminentProjectImageScalarFieldEnum[]
  }

  /**
   * PortfolioProminentProjectImage findFirstOrThrow
   */
  export type PortfolioProminentProjectImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProjectImage
     */
    select?: PortfolioProminentProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProjectImage
     */
    omit?: PortfolioProminentProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectImageInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioProminentProjectImage to fetch.
     */
    where?: PortfolioProminentProjectImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioProminentProjectImages to fetch.
     */
    orderBy?: PortfolioProminentProjectImageOrderByWithRelationInput | PortfolioProminentProjectImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioProminentProjectImages.
     */
    cursor?: PortfolioProminentProjectImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioProminentProjectImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioProminentProjectImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioProminentProjectImages.
     */
    distinct?: PortfolioProminentProjectImageScalarFieldEnum | PortfolioProminentProjectImageScalarFieldEnum[]
  }

  /**
   * PortfolioProminentProjectImage findMany
   */
  export type PortfolioProminentProjectImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProjectImage
     */
    select?: PortfolioProminentProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProjectImage
     */
    omit?: PortfolioProminentProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectImageInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioProminentProjectImages to fetch.
     */
    where?: PortfolioProminentProjectImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioProminentProjectImages to fetch.
     */
    orderBy?: PortfolioProminentProjectImageOrderByWithRelationInput | PortfolioProminentProjectImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioProminentProjectImages.
     */
    cursor?: PortfolioProminentProjectImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioProminentProjectImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioProminentProjectImages.
     */
    skip?: number
    distinct?: PortfolioProminentProjectImageScalarFieldEnum | PortfolioProminentProjectImageScalarFieldEnum[]
  }

  /**
   * PortfolioProminentProjectImage create
   */
  export type PortfolioProminentProjectImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProjectImage
     */
    select?: PortfolioProminentProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProjectImage
     */
    omit?: PortfolioProminentProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectImageInclude<ExtArgs> | null
    /**
     * The data needed to create a PortfolioProminentProjectImage.
     */
    data: XOR<PortfolioProminentProjectImageCreateInput, PortfolioProminentProjectImageUncheckedCreateInput>
  }

  /**
   * PortfolioProminentProjectImage createMany
   */
  export type PortfolioProminentProjectImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioProminentProjectImages.
     */
    data: PortfolioProminentProjectImageCreateManyInput | PortfolioProminentProjectImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioProminentProjectImage createManyAndReturn
   */
  export type PortfolioProminentProjectImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProjectImage
     */
    select?: PortfolioProminentProjectImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProjectImage
     */
    omit?: PortfolioProminentProjectImageOmit<ExtArgs> | null
    /**
     * The data used to create many PortfolioProminentProjectImages.
     */
    data: PortfolioProminentProjectImageCreateManyInput | PortfolioProminentProjectImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioProminentProjectImage update
   */
  export type PortfolioProminentProjectImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProjectImage
     */
    select?: PortfolioProminentProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProjectImage
     */
    omit?: PortfolioProminentProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectImageInclude<ExtArgs> | null
    /**
     * The data needed to update a PortfolioProminentProjectImage.
     */
    data: XOR<PortfolioProminentProjectImageUpdateInput, PortfolioProminentProjectImageUncheckedUpdateInput>
    /**
     * Choose, which PortfolioProminentProjectImage to update.
     */
    where: PortfolioProminentProjectImageWhereUniqueInput
  }

  /**
   * PortfolioProminentProjectImage updateMany
   */
  export type PortfolioProminentProjectImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioProminentProjectImages.
     */
    data: XOR<PortfolioProminentProjectImageUpdateManyMutationInput, PortfolioProminentProjectImageUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioProminentProjectImages to update
     */
    where?: PortfolioProminentProjectImageWhereInput
    /**
     * Limit how many PortfolioProminentProjectImages to update.
     */
    limit?: number
  }

  /**
   * PortfolioProminentProjectImage updateManyAndReturn
   */
  export type PortfolioProminentProjectImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProjectImage
     */
    select?: PortfolioProminentProjectImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProjectImage
     */
    omit?: PortfolioProminentProjectImageOmit<ExtArgs> | null
    /**
     * The data used to update PortfolioProminentProjectImages.
     */
    data: XOR<PortfolioProminentProjectImageUpdateManyMutationInput, PortfolioProminentProjectImageUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioProminentProjectImages to update
     */
    where?: PortfolioProminentProjectImageWhereInput
    /**
     * Limit how many PortfolioProminentProjectImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioProminentProjectImage upsert
   */
  export type PortfolioProminentProjectImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProjectImage
     */
    select?: PortfolioProminentProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProjectImage
     */
    omit?: PortfolioProminentProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectImageInclude<ExtArgs> | null
    /**
     * The filter to search for the PortfolioProminentProjectImage to update in case it exists.
     */
    where: PortfolioProminentProjectImageWhereUniqueInput
    /**
     * In case the PortfolioProminentProjectImage found by the `where` argument doesn't exist, create a new PortfolioProminentProjectImage with this data.
     */
    create: XOR<PortfolioProminentProjectImageCreateInput, PortfolioProminentProjectImageUncheckedCreateInput>
    /**
     * In case the PortfolioProminentProjectImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioProminentProjectImageUpdateInput, PortfolioProminentProjectImageUncheckedUpdateInput>
  }

  /**
   * PortfolioProminentProjectImage delete
   */
  export type PortfolioProminentProjectImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProjectImage
     */
    select?: PortfolioProminentProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProjectImage
     */
    omit?: PortfolioProminentProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectImageInclude<ExtArgs> | null
    /**
     * Filter which PortfolioProminentProjectImage to delete.
     */
    where: PortfolioProminentProjectImageWhereUniqueInput
  }

  /**
   * PortfolioProminentProjectImage deleteMany
   */
  export type PortfolioProminentProjectImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioProminentProjectImages to delete
     */
    where?: PortfolioProminentProjectImageWhereInput
    /**
     * Limit how many PortfolioProminentProjectImages to delete.
     */
    limit?: number
  }

  /**
   * PortfolioProminentProjectImage without action
   */
  export type PortfolioProminentProjectImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProminentProjectImage
     */
    select?: PortfolioProminentProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioProminentProjectImage
     */
    omit?: PortfolioProminentProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioProminentProjectImageInclude<ExtArgs> | null
  }


  /**
   * Model PortfolioCustomerFeedback
   */

  export type AggregatePortfolioCustomerFeedback = {
    _count: PortfolioCustomerFeedbackCountAggregateOutputType | null
    _avg: PortfolioCustomerFeedbackAvgAggregateOutputType | null
    _sum: PortfolioCustomerFeedbackSumAggregateOutputType | null
    _min: PortfolioCustomerFeedbackMinAggregateOutputType | null
    _max: PortfolioCustomerFeedbackMaxAggregateOutputType | null
  }

  export type PortfolioCustomerFeedbackAvgAggregateOutputType = {
    id: number | null
    portfolioId: number | null
  }

  export type PortfolioCustomerFeedbackSumAggregateOutputType = {
    id: number | null
    portfolioId: number | null
  }

  export type PortfolioCustomerFeedbackMinAggregateOutputType = {
    id: number | null
    portfolioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioCustomerFeedbackMaxAggregateOutputType = {
    id: number | null
    portfolioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioCustomerFeedbackCountAggregateOutputType = {
    id: number
    portfolioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortfolioCustomerFeedbackAvgAggregateInputType = {
    id?: true
    portfolioId?: true
  }

  export type PortfolioCustomerFeedbackSumAggregateInputType = {
    id?: true
    portfolioId?: true
  }

  export type PortfolioCustomerFeedbackMinAggregateInputType = {
    id?: true
    portfolioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioCustomerFeedbackMaxAggregateInputType = {
    id?: true
    portfolioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioCustomerFeedbackCountAggregateInputType = {
    id?: true
    portfolioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortfolioCustomerFeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioCustomerFeedback to aggregate.
     */
    where?: PortfolioCustomerFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioCustomerFeedbacks to fetch.
     */
    orderBy?: PortfolioCustomerFeedbackOrderByWithRelationInput | PortfolioCustomerFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioCustomerFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioCustomerFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioCustomerFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioCustomerFeedbacks
    **/
    _count?: true | PortfolioCustomerFeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioCustomerFeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioCustomerFeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioCustomerFeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioCustomerFeedbackMaxAggregateInputType
  }

  export type GetPortfolioCustomerFeedbackAggregateType<T extends PortfolioCustomerFeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioCustomerFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioCustomerFeedback[P]>
      : GetScalarType<T[P], AggregatePortfolioCustomerFeedback[P]>
  }




  export type PortfolioCustomerFeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioCustomerFeedbackWhereInput
    orderBy?: PortfolioCustomerFeedbackOrderByWithAggregationInput | PortfolioCustomerFeedbackOrderByWithAggregationInput[]
    by: PortfolioCustomerFeedbackScalarFieldEnum[] | PortfolioCustomerFeedbackScalarFieldEnum
    having?: PortfolioCustomerFeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioCustomerFeedbackCountAggregateInputType | true
    _avg?: PortfolioCustomerFeedbackAvgAggregateInputType
    _sum?: PortfolioCustomerFeedbackSumAggregateInputType
    _min?: PortfolioCustomerFeedbackMinAggregateInputType
    _max?: PortfolioCustomerFeedbackMaxAggregateInputType
  }

  export type PortfolioCustomerFeedbackGroupByOutputType = {
    id: number
    portfolioId: number
    createdAt: Date
    updatedAt: Date
    _count: PortfolioCustomerFeedbackCountAggregateOutputType | null
    _avg: PortfolioCustomerFeedbackAvgAggregateOutputType | null
    _sum: PortfolioCustomerFeedbackSumAggregateOutputType | null
    _min: PortfolioCustomerFeedbackMinAggregateOutputType | null
    _max: PortfolioCustomerFeedbackMaxAggregateOutputType | null
  }

  type GetPortfolioCustomerFeedbackGroupByPayload<T extends PortfolioCustomerFeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioCustomerFeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioCustomerFeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioCustomerFeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioCustomerFeedbackGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioCustomerFeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioCustomerFeedback"]>

  export type PortfolioCustomerFeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioCustomerFeedback"]>

  export type PortfolioCustomerFeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioCustomerFeedback"]>

  export type PortfolioCustomerFeedbackSelectScalar = {
    id?: boolean
    portfolioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortfolioCustomerFeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "portfolioId" | "createdAt" | "updatedAt", ExtArgs["result"]["portfolioCustomerFeedback"]>
  export type PortfolioCustomerFeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }
  export type PortfolioCustomerFeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }
  export type PortfolioCustomerFeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }

  export type $PortfolioCustomerFeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioCustomerFeedback"
    objects: {
      portfolio: Prisma.$PortfolioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      portfolioId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portfolioCustomerFeedback"]>
    composites: {}
  }

  type PortfolioCustomerFeedbackGetPayload<S extends boolean | null | undefined | PortfolioCustomerFeedbackDefaultArgs> = $Result.GetResult<Prisma.$PortfolioCustomerFeedbackPayload, S>

  type PortfolioCustomerFeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioCustomerFeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioCustomerFeedbackCountAggregateInputType | true
    }

  export interface PortfolioCustomerFeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioCustomerFeedback'], meta: { name: 'PortfolioCustomerFeedback' } }
    /**
     * Find zero or one PortfolioCustomerFeedback that matches the filter.
     * @param {PortfolioCustomerFeedbackFindUniqueArgs} args - Arguments to find a PortfolioCustomerFeedback
     * @example
     * // Get one PortfolioCustomerFeedback
     * const portfolioCustomerFeedback = await prisma.portfolioCustomerFeedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioCustomerFeedbackFindUniqueArgs>(args: SelectSubset<T, PortfolioCustomerFeedbackFindUniqueArgs<ExtArgs>>): Prisma__PortfolioCustomerFeedbackClient<$Result.GetResult<Prisma.$PortfolioCustomerFeedbackPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PortfolioCustomerFeedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioCustomerFeedbackFindUniqueOrThrowArgs} args - Arguments to find a PortfolioCustomerFeedback
     * @example
     * // Get one PortfolioCustomerFeedback
     * const portfolioCustomerFeedback = await prisma.portfolioCustomerFeedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioCustomerFeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioCustomerFeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioCustomerFeedbackClient<$Result.GetResult<Prisma.$PortfolioCustomerFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PortfolioCustomerFeedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCustomerFeedbackFindFirstArgs} args - Arguments to find a PortfolioCustomerFeedback
     * @example
     * // Get one PortfolioCustomerFeedback
     * const portfolioCustomerFeedback = await prisma.portfolioCustomerFeedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioCustomerFeedbackFindFirstArgs>(args?: SelectSubset<T, PortfolioCustomerFeedbackFindFirstArgs<ExtArgs>>): Prisma__PortfolioCustomerFeedbackClient<$Result.GetResult<Prisma.$PortfolioCustomerFeedbackPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PortfolioCustomerFeedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCustomerFeedbackFindFirstOrThrowArgs} args - Arguments to find a PortfolioCustomerFeedback
     * @example
     * // Get one PortfolioCustomerFeedback
     * const portfolioCustomerFeedback = await prisma.portfolioCustomerFeedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioCustomerFeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioCustomerFeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioCustomerFeedbackClient<$Result.GetResult<Prisma.$PortfolioCustomerFeedbackPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PortfolioCustomerFeedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCustomerFeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioCustomerFeedbacks
     * const portfolioCustomerFeedbacks = await prisma.portfolioCustomerFeedback.findMany()
     * 
     * // Get first 10 PortfolioCustomerFeedbacks
     * const portfolioCustomerFeedbacks = await prisma.portfolioCustomerFeedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioCustomerFeedbackWithIdOnly = await prisma.portfolioCustomerFeedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioCustomerFeedbackFindManyArgs>(args?: SelectSubset<T, PortfolioCustomerFeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioCustomerFeedbackPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PortfolioCustomerFeedback.
     * @param {PortfolioCustomerFeedbackCreateArgs} args - Arguments to create a PortfolioCustomerFeedback.
     * @example
     * // Create one PortfolioCustomerFeedback
     * const PortfolioCustomerFeedback = await prisma.portfolioCustomerFeedback.create({
     *   data: {
     *     // ... data to create a PortfolioCustomerFeedback
     *   }
     * })
     * 
     */
    create<T extends PortfolioCustomerFeedbackCreateArgs>(args: SelectSubset<T, PortfolioCustomerFeedbackCreateArgs<ExtArgs>>): Prisma__PortfolioCustomerFeedbackClient<$Result.GetResult<Prisma.$PortfolioCustomerFeedbackPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PortfolioCustomerFeedbacks.
     * @param {PortfolioCustomerFeedbackCreateManyArgs} args - Arguments to create many PortfolioCustomerFeedbacks.
     * @example
     * // Create many PortfolioCustomerFeedbacks
     * const portfolioCustomerFeedback = await prisma.portfolioCustomerFeedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioCustomerFeedbackCreateManyArgs>(args?: SelectSubset<T, PortfolioCustomerFeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortfolioCustomerFeedbacks and returns the data saved in the database.
     * @param {PortfolioCustomerFeedbackCreateManyAndReturnArgs} args - Arguments to create many PortfolioCustomerFeedbacks.
     * @example
     * // Create many PortfolioCustomerFeedbacks
     * const portfolioCustomerFeedback = await prisma.portfolioCustomerFeedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortfolioCustomerFeedbacks and only return the `id`
     * const portfolioCustomerFeedbackWithIdOnly = await prisma.portfolioCustomerFeedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioCustomerFeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioCustomerFeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioCustomerFeedbackPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PortfolioCustomerFeedback.
     * @param {PortfolioCustomerFeedbackDeleteArgs} args - Arguments to delete one PortfolioCustomerFeedback.
     * @example
     * // Delete one PortfolioCustomerFeedback
     * const PortfolioCustomerFeedback = await prisma.portfolioCustomerFeedback.delete({
     *   where: {
     *     // ... filter to delete one PortfolioCustomerFeedback
     *   }
     * })
     * 
     */
    delete<T extends PortfolioCustomerFeedbackDeleteArgs>(args: SelectSubset<T, PortfolioCustomerFeedbackDeleteArgs<ExtArgs>>): Prisma__PortfolioCustomerFeedbackClient<$Result.GetResult<Prisma.$PortfolioCustomerFeedbackPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PortfolioCustomerFeedback.
     * @param {PortfolioCustomerFeedbackUpdateArgs} args - Arguments to update one PortfolioCustomerFeedback.
     * @example
     * // Update one PortfolioCustomerFeedback
     * const portfolioCustomerFeedback = await prisma.portfolioCustomerFeedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioCustomerFeedbackUpdateArgs>(args: SelectSubset<T, PortfolioCustomerFeedbackUpdateArgs<ExtArgs>>): Prisma__PortfolioCustomerFeedbackClient<$Result.GetResult<Prisma.$PortfolioCustomerFeedbackPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PortfolioCustomerFeedbacks.
     * @param {PortfolioCustomerFeedbackDeleteManyArgs} args - Arguments to filter PortfolioCustomerFeedbacks to delete.
     * @example
     * // Delete a few PortfolioCustomerFeedbacks
     * const { count } = await prisma.portfolioCustomerFeedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioCustomerFeedbackDeleteManyArgs>(args?: SelectSubset<T, PortfolioCustomerFeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioCustomerFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCustomerFeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioCustomerFeedbacks
     * const portfolioCustomerFeedback = await prisma.portfolioCustomerFeedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioCustomerFeedbackUpdateManyArgs>(args: SelectSubset<T, PortfolioCustomerFeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioCustomerFeedbacks and returns the data updated in the database.
     * @param {PortfolioCustomerFeedbackUpdateManyAndReturnArgs} args - Arguments to update many PortfolioCustomerFeedbacks.
     * @example
     * // Update many PortfolioCustomerFeedbacks
     * const portfolioCustomerFeedback = await prisma.portfolioCustomerFeedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PortfolioCustomerFeedbacks and only return the `id`
     * const portfolioCustomerFeedbackWithIdOnly = await prisma.portfolioCustomerFeedback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortfolioCustomerFeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioCustomerFeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioCustomerFeedbackPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PortfolioCustomerFeedback.
     * @param {PortfolioCustomerFeedbackUpsertArgs} args - Arguments to update or create a PortfolioCustomerFeedback.
     * @example
     * // Update or create a PortfolioCustomerFeedback
     * const portfolioCustomerFeedback = await prisma.portfolioCustomerFeedback.upsert({
     *   create: {
     *     // ... data to create a PortfolioCustomerFeedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioCustomerFeedback we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioCustomerFeedbackUpsertArgs>(args: SelectSubset<T, PortfolioCustomerFeedbackUpsertArgs<ExtArgs>>): Prisma__PortfolioCustomerFeedbackClient<$Result.GetResult<Prisma.$PortfolioCustomerFeedbackPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PortfolioCustomerFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCustomerFeedbackCountArgs} args - Arguments to filter PortfolioCustomerFeedbacks to count.
     * @example
     * // Count the number of PortfolioCustomerFeedbacks
     * const count = await prisma.portfolioCustomerFeedback.count({
     *   where: {
     *     // ... the filter for the PortfolioCustomerFeedbacks we want to count
     *   }
     * })
    **/
    count<T extends PortfolioCustomerFeedbackCountArgs>(
      args?: Subset<T, PortfolioCustomerFeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioCustomerFeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioCustomerFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCustomerFeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioCustomerFeedbackAggregateArgs>(args: Subset<T, PortfolioCustomerFeedbackAggregateArgs>): Prisma.PrismaPromise<GetPortfolioCustomerFeedbackAggregateType<T>>

    /**
     * Group by PortfolioCustomerFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCustomerFeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortfolioCustomerFeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioCustomerFeedbackGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioCustomerFeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioCustomerFeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioCustomerFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioCustomerFeedback model
   */
  readonly fields: PortfolioCustomerFeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioCustomerFeedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioCustomerFeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolio<T extends PortfolioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortfolioDefaultArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortfolioCustomerFeedback model
   */ 
  interface PortfolioCustomerFeedbackFieldRefs {
    readonly id: FieldRef<"PortfolioCustomerFeedback", 'Int'>
    readonly portfolioId: FieldRef<"PortfolioCustomerFeedback", 'Int'>
    readonly createdAt: FieldRef<"PortfolioCustomerFeedback", 'DateTime'>
    readonly updatedAt: FieldRef<"PortfolioCustomerFeedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioCustomerFeedback findUnique
   */
  export type PortfolioCustomerFeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCustomerFeedback
     */
    select?: PortfolioCustomerFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCustomerFeedback
     */
    omit?: PortfolioCustomerFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCustomerFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioCustomerFeedback to fetch.
     */
    where: PortfolioCustomerFeedbackWhereUniqueInput
  }

  /**
   * PortfolioCustomerFeedback findUniqueOrThrow
   */
  export type PortfolioCustomerFeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCustomerFeedback
     */
    select?: PortfolioCustomerFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCustomerFeedback
     */
    omit?: PortfolioCustomerFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCustomerFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioCustomerFeedback to fetch.
     */
    where: PortfolioCustomerFeedbackWhereUniqueInput
  }

  /**
   * PortfolioCustomerFeedback findFirst
   */
  export type PortfolioCustomerFeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCustomerFeedback
     */
    select?: PortfolioCustomerFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCustomerFeedback
     */
    omit?: PortfolioCustomerFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCustomerFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioCustomerFeedback to fetch.
     */
    where?: PortfolioCustomerFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioCustomerFeedbacks to fetch.
     */
    orderBy?: PortfolioCustomerFeedbackOrderByWithRelationInput | PortfolioCustomerFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioCustomerFeedbacks.
     */
    cursor?: PortfolioCustomerFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioCustomerFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioCustomerFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioCustomerFeedbacks.
     */
    distinct?: PortfolioCustomerFeedbackScalarFieldEnum | PortfolioCustomerFeedbackScalarFieldEnum[]
  }

  /**
   * PortfolioCustomerFeedback findFirstOrThrow
   */
  export type PortfolioCustomerFeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCustomerFeedback
     */
    select?: PortfolioCustomerFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCustomerFeedback
     */
    omit?: PortfolioCustomerFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCustomerFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioCustomerFeedback to fetch.
     */
    where?: PortfolioCustomerFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioCustomerFeedbacks to fetch.
     */
    orderBy?: PortfolioCustomerFeedbackOrderByWithRelationInput | PortfolioCustomerFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioCustomerFeedbacks.
     */
    cursor?: PortfolioCustomerFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioCustomerFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioCustomerFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioCustomerFeedbacks.
     */
    distinct?: PortfolioCustomerFeedbackScalarFieldEnum | PortfolioCustomerFeedbackScalarFieldEnum[]
  }

  /**
   * PortfolioCustomerFeedback findMany
   */
  export type PortfolioCustomerFeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCustomerFeedback
     */
    select?: PortfolioCustomerFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCustomerFeedback
     */
    omit?: PortfolioCustomerFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCustomerFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioCustomerFeedbacks to fetch.
     */
    where?: PortfolioCustomerFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioCustomerFeedbacks to fetch.
     */
    orderBy?: PortfolioCustomerFeedbackOrderByWithRelationInput | PortfolioCustomerFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioCustomerFeedbacks.
     */
    cursor?: PortfolioCustomerFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioCustomerFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioCustomerFeedbacks.
     */
    skip?: number
    distinct?: PortfolioCustomerFeedbackScalarFieldEnum | PortfolioCustomerFeedbackScalarFieldEnum[]
  }

  /**
   * PortfolioCustomerFeedback create
   */
  export type PortfolioCustomerFeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCustomerFeedback
     */
    select?: PortfolioCustomerFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCustomerFeedback
     */
    omit?: PortfolioCustomerFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCustomerFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a PortfolioCustomerFeedback.
     */
    data: XOR<PortfolioCustomerFeedbackCreateInput, PortfolioCustomerFeedbackUncheckedCreateInput>
  }

  /**
   * PortfolioCustomerFeedback createMany
   */
  export type PortfolioCustomerFeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioCustomerFeedbacks.
     */
    data: PortfolioCustomerFeedbackCreateManyInput | PortfolioCustomerFeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioCustomerFeedback createManyAndReturn
   */
  export type PortfolioCustomerFeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCustomerFeedback
     */
    select?: PortfolioCustomerFeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCustomerFeedback
     */
    omit?: PortfolioCustomerFeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many PortfolioCustomerFeedbacks.
     */
    data: PortfolioCustomerFeedbackCreateManyInput | PortfolioCustomerFeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCustomerFeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioCustomerFeedback update
   */
  export type PortfolioCustomerFeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCustomerFeedback
     */
    select?: PortfolioCustomerFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCustomerFeedback
     */
    omit?: PortfolioCustomerFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCustomerFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a PortfolioCustomerFeedback.
     */
    data: XOR<PortfolioCustomerFeedbackUpdateInput, PortfolioCustomerFeedbackUncheckedUpdateInput>
    /**
     * Choose, which PortfolioCustomerFeedback to update.
     */
    where: PortfolioCustomerFeedbackWhereUniqueInput
  }

  /**
   * PortfolioCustomerFeedback updateMany
   */
  export type PortfolioCustomerFeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioCustomerFeedbacks.
     */
    data: XOR<PortfolioCustomerFeedbackUpdateManyMutationInput, PortfolioCustomerFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioCustomerFeedbacks to update
     */
    where?: PortfolioCustomerFeedbackWhereInput
    /**
     * Limit how many PortfolioCustomerFeedbacks to update.
     */
    limit?: number
  }

  /**
   * PortfolioCustomerFeedback updateManyAndReturn
   */
  export type PortfolioCustomerFeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCustomerFeedback
     */
    select?: PortfolioCustomerFeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCustomerFeedback
     */
    omit?: PortfolioCustomerFeedbackOmit<ExtArgs> | null
    /**
     * The data used to update PortfolioCustomerFeedbacks.
     */
    data: XOR<PortfolioCustomerFeedbackUpdateManyMutationInput, PortfolioCustomerFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioCustomerFeedbacks to update
     */
    where?: PortfolioCustomerFeedbackWhereInput
    /**
     * Limit how many PortfolioCustomerFeedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCustomerFeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioCustomerFeedback upsert
   */
  export type PortfolioCustomerFeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCustomerFeedback
     */
    select?: PortfolioCustomerFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCustomerFeedback
     */
    omit?: PortfolioCustomerFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCustomerFeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the PortfolioCustomerFeedback to update in case it exists.
     */
    where: PortfolioCustomerFeedbackWhereUniqueInput
    /**
     * In case the PortfolioCustomerFeedback found by the `where` argument doesn't exist, create a new PortfolioCustomerFeedback with this data.
     */
    create: XOR<PortfolioCustomerFeedbackCreateInput, PortfolioCustomerFeedbackUncheckedCreateInput>
    /**
     * In case the PortfolioCustomerFeedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioCustomerFeedbackUpdateInput, PortfolioCustomerFeedbackUncheckedUpdateInput>
  }

  /**
   * PortfolioCustomerFeedback delete
   */
  export type PortfolioCustomerFeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCustomerFeedback
     */
    select?: PortfolioCustomerFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCustomerFeedback
     */
    omit?: PortfolioCustomerFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCustomerFeedbackInclude<ExtArgs> | null
    /**
     * Filter which PortfolioCustomerFeedback to delete.
     */
    where: PortfolioCustomerFeedbackWhereUniqueInput
  }

  /**
   * PortfolioCustomerFeedback deleteMany
   */
  export type PortfolioCustomerFeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioCustomerFeedbacks to delete
     */
    where?: PortfolioCustomerFeedbackWhereInput
    /**
     * Limit how many PortfolioCustomerFeedbacks to delete.
     */
    limit?: number
  }

  /**
   * PortfolioCustomerFeedback without action
   */
  export type PortfolioCustomerFeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCustomerFeedback
     */
    select?: PortfolioCustomerFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCustomerFeedback
     */
    omit?: PortfolioCustomerFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCustomerFeedbackInclude<ExtArgs> | null
  }


  /**
   * Model PortfolioAboutSection
   */

  export type AggregatePortfolioAboutSection = {
    _count: PortfolioAboutSectionCountAggregateOutputType | null
    _avg: PortfolioAboutSectionAvgAggregateOutputType | null
    _sum: PortfolioAboutSectionSumAggregateOutputType | null
    _min: PortfolioAboutSectionMinAggregateOutputType | null
    _max: PortfolioAboutSectionMaxAggregateOutputType | null
  }

  export type PortfolioAboutSectionAvgAggregateOutputType = {
    id: number | null
    portfolioId: number | null
  }

  export type PortfolioAboutSectionSumAggregateOutputType = {
    id: number | null
    portfolioId: number | null
  }

  export type PortfolioAboutSectionMinAggregateOutputType = {
    id: number | null
    portfolioId: number | null
    avatar: string | null
    overview: string | null
    detail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioAboutSectionMaxAggregateOutputType = {
    id: number | null
    portfolioId: number | null
    avatar: string | null
    overview: string | null
    detail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioAboutSectionCountAggregateOutputType = {
    id: number
    portfolioId: number
    avatar: number
    overview: number
    detail: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortfolioAboutSectionAvgAggregateInputType = {
    id?: true
    portfolioId?: true
  }

  export type PortfolioAboutSectionSumAggregateInputType = {
    id?: true
    portfolioId?: true
  }

  export type PortfolioAboutSectionMinAggregateInputType = {
    id?: true
    portfolioId?: true
    avatar?: true
    overview?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioAboutSectionMaxAggregateInputType = {
    id?: true
    portfolioId?: true
    avatar?: true
    overview?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioAboutSectionCountAggregateInputType = {
    id?: true
    portfolioId?: true
    avatar?: true
    overview?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortfolioAboutSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioAboutSection to aggregate.
     */
    where?: PortfolioAboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioAboutSections to fetch.
     */
    orderBy?: PortfolioAboutSectionOrderByWithRelationInput | PortfolioAboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioAboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioAboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioAboutSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioAboutSections
    **/
    _count?: true | PortfolioAboutSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioAboutSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioAboutSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioAboutSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioAboutSectionMaxAggregateInputType
  }

  export type GetPortfolioAboutSectionAggregateType<T extends PortfolioAboutSectionAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioAboutSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioAboutSection[P]>
      : GetScalarType<T[P], AggregatePortfolioAboutSection[P]>
  }




  export type PortfolioAboutSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioAboutSectionWhereInput
    orderBy?: PortfolioAboutSectionOrderByWithAggregationInput | PortfolioAboutSectionOrderByWithAggregationInput[]
    by: PortfolioAboutSectionScalarFieldEnum[] | PortfolioAboutSectionScalarFieldEnum
    having?: PortfolioAboutSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioAboutSectionCountAggregateInputType | true
    _avg?: PortfolioAboutSectionAvgAggregateInputType
    _sum?: PortfolioAboutSectionSumAggregateInputType
    _min?: PortfolioAboutSectionMinAggregateInputType
    _max?: PortfolioAboutSectionMaxAggregateInputType
  }

  export type PortfolioAboutSectionGroupByOutputType = {
    id: number
    portfolioId: number | null
    avatar: string
    overview: string
    detail: string
    createdAt: Date
    updatedAt: Date
    _count: PortfolioAboutSectionCountAggregateOutputType | null
    _avg: PortfolioAboutSectionAvgAggregateOutputType | null
    _sum: PortfolioAboutSectionSumAggregateOutputType | null
    _min: PortfolioAboutSectionMinAggregateOutputType | null
    _max: PortfolioAboutSectionMaxAggregateOutputType | null
  }

  type GetPortfolioAboutSectionGroupByPayload<T extends PortfolioAboutSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioAboutSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioAboutSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioAboutSectionGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioAboutSectionGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioAboutSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    avatar?: boolean
    overview?: boolean
    detail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioAboutSection$portfolioArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioAboutSection"]>

  export type PortfolioAboutSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    avatar?: boolean
    overview?: boolean
    detail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioAboutSection$portfolioArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioAboutSection"]>

  export type PortfolioAboutSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    avatar?: boolean
    overview?: boolean
    detail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioAboutSection$portfolioArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioAboutSection"]>

  export type PortfolioAboutSectionSelectScalar = {
    id?: boolean
    portfolioId?: boolean
    avatar?: boolean
    overview?: boolean
    detail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortfolioAboutSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "portfolioId" | "avatar" | "overview" | "detail" | "createdAt" | "updatedAt", ExtArgs["result"]["portfolioAboutSection"]>
  export type PortfolioAboutSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioAboutSection$portfolioArgs<ExtArgs>
  }
  export type PortfolioAboutSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioAboutSection$portfolioArgs<ExtArgs>
  }
  export type PortfolioAboutSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioAboutSection$portfolioArgs<ExtArgs>
  }

  export type $PortfolioAboutSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioAboutSection"
    objects: {
      portfolio: Prisma.$PortfolioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      portfolioId: number | null
      avatar: string
      overview: string
      detail: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portfolioAboutSection"]>
    composites: {}
  }

  type PortfolioAboutSectionGetPayload<S extends boolean | null | undefined | PortfolioAboutSectionDefaultArgs> = $Result.GetResult<Prisma.$PortfolioAboutSectionPayload, S>

  type PortfolioAboutSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioAboutSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioAboutSectionCountAggregateInputType | true
    }

  export interface PortfolioAboutSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioAboutSection'], meta: { name: 'PortfolioAboutSection' } }
    /**
     * Find zero or one PortfolioAboutSection that matches the filter.
     * @param {PortfolioAboutSectionFindUniqueArgs} args - Arguments to find a PortfolioAboutSection
     * @example
     * // Get one PortfolioAboutSection
     * const portfolioAboutSection = await prisma.portfolioAboutSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioAboutSectionFindUniqueArgs>(args: SelectSubset<T, PortfolioAboutSectionFindUniqueArgs<ExtArgs>>): Prisma__PortfolioAboutSectionClient<$Result.GetResult<Prisma.$PortfolioAboutSectionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PortfolioAboutSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioAboutSectionFindUniqueOrThrowArgs} args - Arguments to find a PortfolioAboutSection
     * @example
     * // Get one PortfolioAboutSection
     * const portfolioAboutSection = await prisma.portfolioAboutSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioAboutSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioAboutSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioAboutSectionClient<$Result.GetResult<Prisma.$PortfolioAboutSectionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PortfolioAboutSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAboutSectionFindFirstArgs} args - Arguments to find a PortfolioAboutSection
     * @example
     * // Get one PortfolioAboutSection
     * const portfolioAboutSection = await prisma.portfolioAboutSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioAboutSectionFindFirstArgs>(args?: SelectSubset<T, PortfolioAboutSectionFindFirstArgs<ExtArgs>>): Prisma__PortfolioAboutSectionClient<$Result.GetResult<Prisma.$PortfolioAboutSectionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PortfolioAboutSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAboutSectionFindFirstOrThrowArgs} args - Arguments to find a PortfolioAboutSection
     * @example
     * // Get one PortfolioAboutSection
     * const portfolioAboutSection = await prisma.portfolioAboutSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioAboutSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioAboutSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioAboutSectionClient<$Result.GetResult<Prisma.$PortfolioAboutSectionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PortfolioAboutSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAboutSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioAboutSections
     * const portfolioAboutSections = await prisma.portfolioAboutSection.findMany()
     * 
     * // Get first 10 PortfolioAboutSections
     * const portfolioAboutSections = await prisma.portfolioAboutSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioAboutSectionWithIdOnly = await prisma.portfolioAboutSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioAboutSectionFindManyArgs>(args?: SelectSubset<T, PortfolioAboutSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioAboutSectionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PortfolioAboutSection.
     * @param {PortfolioAboutSectionCreateArgs} args - Arguments to create a PortfolioAboutSection.
     * @example
     * // Create one PortfolioAboutSection
     * const PortfolioAboutSection = await prisma.portfolioAboutSection.create({
     *   data: {
     *     // ... data to create a PortfolioAboutSection
     *   }
     * })
     * 
     */
    create<T extends PortfolioAboutSectionCreateArgs>(args: SelectSubset<T, PortfolioAboutSectionCreateArgs<ExtArgs>>): Prisma__PortfolioAboutSectionClient<$Result.GetResult<Prisma.$PortfolioAboutSectionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PortfolioAboutSections.
     * @param {PortfolioAboutSectionCreateManyArgs} args - Arguments to create many PortfolioAboutSections.
     * @example
     * // Create many PortfolioAboutSections
     * const portfolioAboutSection = await prisma.portfolioAboutSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioAboutSectionCreateManyArgs>(args?: SelectSubset<T, PortfolioAboutSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortfolioAboutSections and returns the data saved in the database.
     * @param {PortfolioAboutSectionCreateManyAndReturnArgs} args - Arguments to create many PortfolioAboutSections.
     * @example
     * // Create many PortfolioAboutSections
     * const portfolioAboutSection = await prisma.portfolioAboutSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortfolioAboutSections and only return the `id`
     * const portfolioAboutSectionWithIdOnly = await prisma.portfolioAboutSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioAboutSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioAboutSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioAboutSectionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PortfolioAboutSection.
     * @param {PortfolioAboutSectionDeleteArgs} args - Arguments to delete one PortfolioAboutSection.
     * @example
     * // Delete one PortfolioAboutSection
     * const PortfolioAboutSection = await prisma.portfolioAboutSection.delete({
     *   where: {
     *     // ... filter to delete one PortfolioAboutSection
     *   }
     * })
     * 
     */
    delete<T extends PortfolioAboutSectionDeleteArgs>(args: SelectSubset<T, PortfolioAboutSectionDeleteArgs<ExtArgs>>): Prisma__PortfolioAboutSectionClient<$Result.GetResult<Prisma.$PortfolioAboutSectionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PortfolioAboutSection.
     * @param {PortfolioAboutSectionUpdateArgs} args - Arguments to update one PortfolioAboutSection.
     * @example
     * // Update one PortfolioAboutSection
     * const portfolioAboutSection = await prisma.portfolioAboutSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioAboutSectionUpdateArgs>(args: SelectSubset<T, PortfolioAboutSectionUpdateArgs<ExtArgs>>): Prisma__PortfolioAboutSectionClient<$Result.GetResult<Prisma.$PortfolioAboutSectionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PortfolioAboutSections.
     * @param {PortfolioAboutSectionDeleteManyArgs} args - Arguments to filter PortfolioAboutSections to delete.
     * @example
     * // Delete a few PortfolioAboutSections
     * const { count } = await prisma.portfolioAboutSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioAboutSectionDeleteManyArgs>(args?: SelectSubset<T, PortfolioAboutSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioAboutSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAboutSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioAboutSections
     * const portfolioAboutSection = await prisma.portfolioAboutSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioAboutSectionUpdateManyArgs>(args: SelectSubset<T, PortfolioAboutSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioAboutSections and returns the data updated in the database.
     * @param {PortfolioAboutSectionUpdateManyAndReturnArgs} args - Arguments to update many PortfolioAboutSections.
     * @example
     * // Update many PortfolioAboutSections
     * const portfolioAboutSection = await prisma.portfolioAboutSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PortfolioAboutSections and only return the `id`
     * const portfolioAboutSectionWithIdOnly = await prisma.portfolioAboutSection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortfolioAboutSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioAboutSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioAboutSectionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PortfolioAboutSection.
     * @param {PortfolioAboutSectionUpsertArgs} args - Arguments to update or create a PortfolioAboutSection.
     * @example
     * // Update or create a PortfolioAboutSection
     * const portfolioAboutSection = await prisma.portfolioAboutSection.upsert({
     *   create: {
     *     // ... data to create a PortfolioAboutSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioAboutSection we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioAboutSectionUpsertArgs>(args: SelectSubset<T, PortfolioAboutSectionUpsertArgs<ExtArgs>>): Prisma__PortfolioAboutSectionClient<$Result.GetResult<Prisma.$PortfolioAboutSectionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PortfolioAboutSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAboutSectionCountArgs} args - Arguments to filter PortfolioAboutSections to count.
     * @example
     * // Count the number of PortfolioAboutSections
     * const count = await prisma.portfolioAboutSection.count({
     *   where: {
     *     // ... the filter for the PortfolioAboutSections we want to count
     *   }
     * })
    **/
    count<T extends PortfolioAboutSectionCountArgs>(
      args?: Subset<T, PortfolioAboutSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioAboutSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioAboutSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAboutSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioAboutSectionAggregateArgs>(args: Subset<T, PortfolioAboutSectionAggregateArgs>): Prisma.PrismaPromise<GetPortfolioAboutSectionAggregateType<T>>

    /**
     * Group by PortfolioAboutSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAboutSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortfolioAboutSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioAboutSectionGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioAboutSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioAboutSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioAboutSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioAboutSection model
   */
  readonly fields: PortfolioAboutSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioAboutSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioAboutSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolio<T extends PortfolioAboutSection$portfolioArgs<ExtArgs> = {}>(args?: Subset<T, PortfolioAboutSection$portfolioArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortfolioAboutSection model
   */ 
  interface PortfolioAboutSectionFieldRefs {
    readonly id: FieldRef<"PortfolioAboutSection", 'Int'>
    readonly portfolioId: FieldRef<"PortfolioAboutSection", 'Int'>
    readonly avatar: FieldRef<"PortfolioAboutSection", 'String'>
    readonly overview: FieldRef<"PortfolioAboutSection", 'String'>
    readonly detail: FieldRef<"PortfolioAboutSection", 'String'>
    readonly createdAt: FieldRef<"PortfolioAboutSection", 'DateTime'>
    readonly updatedAt: FieldRef<"PortfolioAboutSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioAboutSection findUnique
   */
  export type PortfolioAboutSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioAboutSection
     */
    select?: PortfolioAboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioAboutSection
     */
    omit?: PortfolioAboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioAboutSectionInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioAboutSection to fetch.
     */
    where: PortfolioAboutSectionWhereUniqueInput
  }

  /**
   * PortfolioAboutSection findUniqueOrThrow
   */
  export type PortfolioAboutSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioAboutSection
     */
    select?: PortfolioAboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioAboutSection
     */
    omit?: PortfolioAboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioAboutSectionInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioAboutSection to fetch.
     */
    where: PortfolioAboutSectionWhereUniqueInput
  }

  /**
   * PortfolioAboutSection findFirst
   */
  export type PortfolioAboutSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioAboutSection
     */
    select?: PortfolioAboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioAboutSection
     */
    omit?: PortfolioAboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioAboutSectionInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioAboutSection to fetch.
     */
    where?: PortfolioAboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioAboutSections to fetch.
     */
    orderBy?: PortfolioAboutSectionOrderByWithRelationInput | PortfolioAboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioAboutSections.
     */
    cursor?: PortfolioAboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioAboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioAboutSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioAboutSections.
     */
    distinct?: PortfolioAboutSectionScalarFieldEnum | PortfolioAboutSectionScalarFieldEnum[]
  }

  /**
   * PortfolioAboutSection findFirstOrThrow
   */
  export type PortfolioAboutSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioAboutSection
     */
    select?: PortfolioAboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioAboutSection
     */
    omit?: PortfolioAboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioAboutSectionInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioAboutSection to fetch.
     */
    where?: PortfolioAboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioAboutSections to fetch.
     */
    orderBy?: PortfolioAboutSectionOrderByWithRelationInput | PortfolioAboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioAboutSections.
     */
    cursor?: PortfolioAboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioAboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioAboutSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioAboutSections.
     */
    distinct?: PortfolioAboutSectionScalarFieldEnum | PortfolioAboutSectionScalarFieldEnum[]
  }

  /**
   * PortfolioAboutSection findMany
   */
  export type PortfolioAboutSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioAboutSection
     */
    select?: PortfolioAboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioAboutSection
     */
    omit?: PortfolioAboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioAboutSectionInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioAboutSections to fetch.
     */
    where?: PortfolioAboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioAboutSections to fetch.
     */
    orderBy?: PortfolioAboutSectionOrderByWithRelationInput | PortfolioAboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioAboutSections.
     */
    cursor?: PortfolioAboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioAboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioAboutSections.
     */
    skip?: number
    distinct?: PortfolioAboutSectionScalarFieldEnum | PortfolioAboutSectionScalarFieldEnum[]
  }

  /**
   * PortfolioAboutSection create
   */
  export type PortfolioAboutSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioAboutSection
     */
    select?: PortfolioAboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioAboutSection
     */
    omit?: PortfolioAboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioAboutSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a PortfolioAboutSection.
     */
    data: XOR<PortfolioAboutSectionCreateInput, PortfolioAboutSectionUncheckedCreateInput>
  }

  /**
   * PortfolioAboutSection createMany
   */
  export type PortfolioAboutSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioAboutSections.
     */
    data: PortfolioAboutSectionCreateManyInput | PortfolioAboutSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioAboutSection createManyAndReturn
   */
  export type PortfolioAboutSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioAboutSection
     */
    select?: PortfolioAboutSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioAboutSection
     */
    omit?: PortfolioAboutSectionOmit<ExtArgs> | null
    /**
     * The data used to create many PortfolioAboutSections.
     */
    data: PortfolioAboutSectionCreateManyInput | PortfolioAboutSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioAboutSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioAboutSection update
   */
  export type PortfolioAboutSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioAboutSection
     */
    select?: PortfolioAboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioAboutSection
     */
    omit?: PortfolioAboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioAboutSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a PortfolioAboutSection.
     */
    data: XOR<PortfolioAboutSectionUpdateInput, PortfolioAboutSectionUncheckedUpdateInput>
    /**
     * Choose, which PortfolioAboutSection to update.
     */
    where: PortfolioAboutSectionWhereUniqueInput
  }

  /**
   * PortfolioAboutSection updateMany
   */
  export type PortfolioAboutSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioAboutSections.
     */
    data: XOR<PortfolioAboutSectionUpdateManyMutationInput, PortfolioAboutSectionUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioAboutSections to update
     */
    where?: PortfolioAboutSectionWhereInput
    /**
     * Limit how many PortfolioAboutSections to update.
     */
    limit?: number
  }

  /**
   * PortfolioAboutSection updateManyAndReturn
   */
  export type PortfolioAboutSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioAboutSection
     */
    select?: PortfolioAboutSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioAboutSection
     */
    omit?: PortfolioAboutSectionOmit<ExtArgs> | null
    /**
     * The data used to update PortfolioAboutSections.
     */
    data: XOR<PortfolioAboutSectionUpdateManyMutationInput, PortfolioAboutSectionUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioAboutSections to update
     */
    where?: PortfolioAboutSectionWhereInput
    /**
     * Limit how many PortfolioAboutSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioAboutSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioAboutSection upsert
   */
  export type PortfolioAboutSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioAboutSection
     */
    select?: PortfolioAboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioAboutSection
     */
    omit?: PortfolioAboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioAboutSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the PortfolioAboutSection to update in case it exists.
     */
    where: PortfolioAboutSectionWhereUniqueInput
    /**
     * In case the PortfolioAboutSection found by the `where` argument doesn't exist, create a new PortfolioAboutSection with this data.
     */
    create: XOR<PortfolioAboutSectionCreateInput, PortfolioAboutSectionUncheckedCreateInput>
    /**
     * In case the PortfolioAboutSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioAboutSectionUpdateInput, PortfolioAboutSectionUncheckedUpdateInput>
  }

  /**
   * PortfolioAboutSection delete
   */
  export type PortfolioAboutSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioAboutSection
     */
    select?: PortfolioAboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioAboutSection
     */
    omit?: PortfolioAboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioAboutSectionInclude<ExtArgs> | null
    /**
     * Filter which PortfolioAboutSection to delete.
     */
    where: PortfolioAboutSectionWhereUniqueInput
  }

  /**
   * PortfolioAboutSection deleteMany
   */
  export type PortfolioAboutSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioAboutSections to delete
     */
    where?: PortfolioAboutSectionWhereInput
    /**
     * Limit how many PortfolioAboutSections to delete.
     */
    limit?: number
  }

  /**
   * PortfolioAboutSection.portfolio
   */
  export type PortfolioAboutSection$portfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    where?: PortfolioWhereInput
  }

  /**
   * PortfolioAboutSection without action
   */
  export type PortfolioAboutSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioAboutSection
     */
    select?: PortfolioAboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioAboutSection
     */
    omit?: PortfolioAboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioAboutSectionInclude<ExtArgs> | null
  }


  /**
   * Model PortfolioWorkExperience
   */

  export type AggregatePortfolioWorkExperience = {
    _count: PortfolioWorkExperienceCountAggregateOutputType | null
    _avg: PortfolioWorkExperienceAvgAggregateOutputType | null
    _sum: PortfolioWorkExperienceSumAggregateOutputType | null
    _min: PortfolioWorkExperienceMinAggregateOutputType | null
    _max: PortfolioWorkExperienceMaxAggregateOutputType | null
  }

  export type PortfolioWorkExperienceAvgAggregateOutputType = {
    id: number | null
    portfolioId: number | null
  }

  export type PortfolioWorkExperienceSumAggregateOutputType = {
    id: number | null
    portfolioId: number | null
  }

  export type PortfolioWorkExperienceMinAggregateOutputType = {
    id: number | null
    portfolioId: number | null
    role: string | null
    company: string | null
    image: string | null
    from: Date | null
    to: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioWorkExperienceMaxAggregateOutputType = {
    id: number | null
    portfolioId: number | null
    role: string | null
    company: string | null
    image: string | null
    from: Date | null
    to: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioWorkExperienceCountAggregateOutputType = {
    id: number
    portfolioId: number
    role: number
    company: number
    image: number
    from: number
    to: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortfolioWorkExperienceAvgAggregateInputType = {
    id?: true
    portfolioId?: true
  }

  export type PortfolioWorkExperienceSumAggregateInputType = {
    id?: true
    portfolioId?: true
  }

  export type PortfolioWorkExperienceMinAggregateInputType = {
    id?: true
    portfolioId?: true
    role?: true
    company?: true
    image?: true
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioWorkExperienceMaxAggregateInputType = {
    id?: true
    portfolioId?: true
    role?: true
    company?: true
    image?: true
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioWorkExperienceCountAggregateInputType = {
    id?: true
    portfolioId?: true
    role?: true
    company?: true
    image?: true
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortfolioWorkExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioWorkExperience to aggregate.
     */
    where?: PortfolioWorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioWorkExperiences to fetch.
     */
    orderBy?: PortfolioWorkExperienceOrderByWithRelationInput | PortfolioWorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioWorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioWorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioWorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioWorkExperiences
    **/
    _count?: true | PortfolioWorkExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioWorkExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioWorkExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioWorkExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioWorkExperienceMaxAggregateInputType
  }

  export type GetPortfolioWorkExperienceAggregateType<T extends PortfolioWorkExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioWorkExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioWorkExperience[P]>
      : GetScalarType<T[P], AggregatePortfolioWorkExperience[P]>
  }




  export type PortfolioWorkExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioWorkExperienceWhereInput
    orderBy?: PortfolioWorkExperienceOrderByWithAggregationInput | PortfolioWorkExperienceOrderByWithAggregationInput[]
    by: PortfolioWorkExperienceScalarFieldEnum[] | PortfolioWorkExperienceScalarFieldEnum
    having?: PortfolioWorkExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioWorkExperienceCountAggregateInputType | true
    _avg?: PortfolioWorkExperienceAvgAggregateInputType
    _sum?: PortfolioWorkExperienceSumAggregateInputType
    _min?: PortfolioWorkExperienceMinAggregateInputType
    _max?: PortfolioWorkExperienceMaxAggregateInputType
  }

  export type PortfolioWorkExperienceGroupByOutputType = {
    id: number
    portfolioId: number
    role: string
    company: string
    image: string
    from: Date
    to: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PortfolioWorkExperienceCountAggregateOutputType | null
    _avg: PortfolioWorkExperienceAvgAggregateOutputType | null
    _sum: PortfolioWorkExperienceSumAggregateOutputType | null
    _min: PortfolioWorkExperienceMinAggregateOutputType | null
    _max: PortfolioWorkExperienceMaxAggregateOutputType | null
  }

  type GetPortfolioWorkExperienceGroupByPayload<T extends PortfolioWorkExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioWorkExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioWorkExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioWorkExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioWorkExperienceGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioWorkExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    role?: boolean
    company?: boolean
    image?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioWorkExperience"]>

  export type PortfolioWorkExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    role?: boolean
    company?: boolean
    image?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioWorkExperience"]>

  export type PortfolioWorkExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    role?: boolean
    company?: boolean
    image?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioWorkExperience"]>

  export type PortfolioWorkExperienceSelectScalar = {
    id?: boolean
    portfolioId?: boolean
    role?: boolean
    company?: boolean
    image?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortfolioWorkExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "portfolioId" | "role" | "company" | "image" | "from" | "to" | "createdAt" | "updatedAt", ExtArgs["result"]["portfolioWorkExperience"]>
  export type PortfolioWorkExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }
  export type PortfolioWorkExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }
  export type PortfolioWorkExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }

  export type $PortfolioWorkExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioWorkExperience"
    objects: {
      portfolio: Prisma.$PortfolioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      portfolioId: number
      role: string
      company: string
      image: string
      from: Date
      to: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portfolioWorkExperience"]>
    composites: {}
  }

  type PortfolioWorkExperienceGetPayload<S extends boolean | null | undefined | PortfolioWorkExperienceDefaultArgs> = $Result.GetResult<Prisma.$PortfolioWorkExperiencePayload, S>

  type PortfolioWorkExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioWorkExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioWorkExperienceCountAggregateInputType | true
    }

  export interface PortfolioWorkExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioWorkExperience'], meta: { name: 'PortfolioWorkExperience' } }
    /**
     * Find zero or one PortfolioWorkExperience that matches the filter.
     * @param {PortfolioWorkExperienceFindUniqueArgs} args - Arguments to find a PortfolioWorkExperience
     * @example
     * // Get one PortfolioWorkExperience
     * const portfolioWorkExperience = await prisma.portfolioWorkExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioWorkExperienceFindUniqueArgs>(args: SelectSubset<T, PortfolioWorkExperienceFindUniqueArgs<ExtArgs>>): Prisma__PortfolioWorkExperienceClient<$Result.GetResult<Prisma.$PortfolioWorkExperiencePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PortfolioWorkExperience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioWorkExperienceFindUniqueOrThrowArgs} args - Arguments to find a PortfolioWorkExperience
     * @example
     * // Get one PortfolioWorkExperience
     * const portfolioWorkExperience = await prisma.portfolioWorkExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioWorkExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioWorkExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioWorkExperienceClient<$Result.GetResult<Prisma.$PortfolioWorkExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PortfolioWorkExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioWorkExperienceFindFirstArgs} args - Arguments to find a PortfolioWorkExperience
     * @example
     * // Get one PortfolioWorkExperience
     * const portfolioWorkExperience = await prisma.portfolioWorkExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioWorkExperienceFindFirstArgs>(args?: SelectSubset<T, PortfolioWorkExperienceFindFirstArgs<ExtArgs>>): Prisma__PortfolioWorkExperienceClient<$Result.GetResult<Prisma.$PortfolioWorkExperiencePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PortfolioWorkExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioWorkExperienceFindFirstOrThrowArgs} args - Arguments to find a PortfolioWorkExperience
     * @example
     * // Get one PortfolioWorkExperience
     * const portfolioWorkExperience = await prisma.portfolioWorkExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioWorkExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioWorkExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioWorkExperienceClient<$Result.GetResult<Prisma.$PortfolioWorkExperiencePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PortfolioWorkExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioWorkExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioWorkExperiences
     * const portfolioWorkExperiences = await prisma.portfolioWorkExperience.findMany()
     * 
     * // Get first 10 PortfolioWorkExperiences
     * const portfolioWorkExperiences = await prisma.portfolioWorkExperience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioWorkExperienceWithIdOnly = await prisma.portfolioWorkExperience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioWorkExperienceFindManyArgs>(args?: SelectSubset<T, PortfolioWorkExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioWorkExperiencePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PortfolioWorkExperience.
     * @param {PortfolioWorkExperienceCreateArgs} args - Arguments to create a PortfolioWorkExperience.
     * @example
     * // Create one PortfolioWorkExperience
     * const PortfolioWorkExperience = await prisma.portfolioWorkExperience.create({
     *   data: {
     *     // ... data to create a PortfolioWorkExperience
     *   }
     * })
     * 
     */
    create<T extends PortfolioWorkExperienceCreateArgs>(args: SelectSubset<T, PortfolioWorkExperienceCreateArgs<ExtArgs>>): Prisma__PortfolioWorkExperienceClient<$Result.GetResult<Prisma.$PortfolioWorkExperiencePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PortfolioWorkExperiences.
     * @param {PortfolioWorkExperienceCreateManyArgs} args - Arguments to create many PortfolioWorkExperiences.
     * @example
     * // Create many PortfolioWorkExperiences
     * const portfolioWorkExperience = await prisma.portfolioWorkExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioWorkExperienceCreateManyArgs>(args?: SelectSubset<T, PortfolioWorkExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortfolioWorkExperiences and returns the data saved in the database.
     * @param {PortfolioWorkExperienceCreateManyAndReturnArgs} args - Arguments to create many PortfolioWorkExperiences.
     * @example
     * // Create many PortfolioWorkExperiences
     * const portfolioWorkExperience = await prisma.portfolioWorkExperience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortfolioWorkExperiences and only return the `id`
     * const portfolioWorkExperienceWithIdOnly = await prisma.portfolioWorkExperience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioWorkExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioWorkExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioWorkExperiencePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PortfolioWorkExperience.
     * @param {PortfolioWorkExperienceDeleteArgs} args - Arguments to delete one PortfolioWorkExperience.
     * @example
     * // Delete one PortfolioWorkExperience
     * const PortfolioWorkExperience = await prisma.portfolioWorkExperience.delete({
     *   where: {
     *     // ... filter to delete one PortfolioWorkExperience
     *   }
     * })
     * 
     */
    delete<T extends PortfolioWorkExperienceDeleteArgs>(args: SelectSubset<T, PortfolioWorkExperienceDeleteArgs<ExtArgs>>): Prisma__PortfolioWorkExperienceClient<$Result.GetResult<Prisma.$PortfolioWorkExperiencePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PortfolioWorkExperience.
     * @param {PortfolioWorkExperienceUpdateArgs} args - Arguments to update one PortfolioWorkExperience.
     * @example
     * // Update one PortfolioWorkExperience
     * const portfolioWorkExperience = await prisma.portfolioWorkExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioWorkExperienceUpdateArgs>(args: SelectSubset<T, PortfolioWorkExperienceUpdateArgs<ExtArgs>>): Prisma__PortfolioWorkExperienceClient<$Result.GetResult<Prisma.$PortfolioWorkExperiencePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PortfolioWorkExperiences.
     * @param {PortfolioWorkExperienceDeleteManyArgs} args - Arguments to filter PortfolioWorkExperiences to delete.
     * @example
     * // Delete a few PortfolioWorkExperiences
     * const { count } = await prisma.portfolioWorkExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioWorkExperienceDeleteManyArgs>(args?: SelectSubset<T, PortfolioWorkExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioWorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioWorkExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioWorkExperiences
     * const portfolioWorkExperience = await prisma.portfolioWorkExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioWorkExperienceUpdateManyArgs>(args: SelectSubset<T, PortfolioWorkExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioWorkExperiences and returns the data updated in the database.
     * @param {PortfolioWorkExperienceUpdateManyAndReturnArgs} args - Arguments to update many PortfolioWorkExperiences.
     * @example
     * // Update many PortfolioWorkExperiences
     * const portfolioWorkExperience = await prisma.portfolioWorkExperience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PortfolioWorkExperiences and only return the `id`
     * const portfolioWorkExperienceWithIdOnly = await prisma.portfolioWorkExperience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortfolioWorkExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioWorkExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioWorkExperiencePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PortfolioWorkExperience.
     * @param {PortfolioWorkExperienceUpsertArgs} args - Arguments to update or create a PortfolioWorkExperience.
     * @example
     * // Update or create a PortfolioWorkExperience
     * const portfolioWorkExperience = await prisma.portfolioWorkExperience.upsert({
     *   create: {
     *     // ... data to create a PortfolioWorkExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioWorkExperience we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioWorkExperienceUpsertArgs>(args: SelectSubset<T, PortfolioWorkExperienceUpsertArgs<ExtArgs>>): Prisma__PortfolioWorkExperienceClient<$Result.GetResult<Prisma.$PortfolioWorkExperiencePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PortfolioWorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioWorkExperienceCountArgs} args - Arguments to filter PortfolioWorkExperiences to count.
     * @example
     * // Count the number of PortfolioWorkExperiences
     * const count = await prisma.portfolioWorkExperience.count({
     *   where: {
     *     // ... the filter for the PortfolioWorkExperiences we want to count
     *   }
     * })
    **/
    count<T extends PortfolioWorkExperienceCountArgs>(
      args?: Subset<T, PortfolioWorkExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioWorkExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioWorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioWorkExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioWorkExperienceAggregateArgs>(args: Subset<T, PortfolioWorkExperienceAggregateArgs>): Prisma.PrismaPromise<GetPortfolioWorkExperienceAggregateType<T>>

    /**
     * Group by PortfolioWorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioWorkExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortfolioWorkExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioWorkExperienceGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioWorkExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioWorkExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioWorkExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioWorkExperience model
   */
  readonly fields: PortfolioWorkExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioWorkExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioWorkExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolio<T extends PortfolioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortfolioDefaultArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortfolioWorkExperience model
   */ 
  interface PortfolioWorkExperienceFieldRefs {
    readonly id: FieldRef<"PortfolioWorkExperience", 'Int'>
    readonly portfolioId: FieldRef<"PortfolioWorkExperience", 'Int'>
    readonly role: FieldRef<"PortfolioWorkExperience", 'String'>
    readonly company: FieldRef<"PortfolioWorkExperience", 'String'>
    readonly image: FieldRef<"PortfolioWorkExperience", 'String'>
    readonly from: FieldRef<"PortfolioWorkExperience", 'DateTime'>
    readonly to: FieldRef<"PortfolioWorkExperience", 'DateTime'>
    readonly createdAt: FieldRef<"PortfolioWorkExperience", 'DateTime'>
    readonly updatedAt: FieldRef<"PortfolioWorkExperience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioWorkExperience findUnique
   */
  export type PortfolioWorkExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioWorkExperience
     */
    select?: PortfolioWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioWorkExperience
     */
    omit?: PortfolioWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioWorkExperience to fetch.
     */
    where: PortfolioWorkExperienceWhereUniqueInput
  }

  /**
   * PortfolioWorkExperience findUniqueOrThrow
   */
  export type PortfolioWorkExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioWorkExperience
     */
    select?: PortfolioWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioWorkExperience
     */
    omit?: PortfolioWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioWorkExperience to fetch.
     */
    where: PortfolioWorkExperienceWhereUniqueInput
  }

  /**
   * PortfolioWorkExperience findFirst
   */
  export type PortfolioWorkExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioWorkExperience
     */
    select?: PortfolioWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioWorkExperience
     */
    omit?: PortfolioWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioWorkExperience to fetch.
     */
    where?: PortfolioWorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioWorkExperiences to fetch.
     */
    orderBy?: PortfolioWorkExperienceOrderByWithRelationInput | PortfolioWorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioWorkExperiences.
     */
    cursor?: PortfolioWorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioWorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioWorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioWorkExperiences.
     */
    distinct?: PortfolioWorkExperienceScalarFieldEnum | PortfolioWorkExperienceScalarFieldEnum[]
  }

  /**
   * PortfolioWorkExperience findFirstOrThrow
   */
  export type PortfolioWorkExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioWorkExperience
     */
    select?: PortfolioWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioWorkExperience
     */
    omit?: PortfolioWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioWorkExperience to fetch.
     */
    where?: PortfolioWorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioWorkExperiences to fetch.
     */
    orderBy?: PortfolioWorkExperienceOrderByWithRelationInput | PortfolioWorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioWorkExperiences.
     */
    cursor?: PortfolioWorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioWorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioWorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioWorkExperiences.
     */
    distinct?: PortfolioWorkExperienceScalarFieldEnum | PortfolioWorkExperienceScalarFieldEnum[]
  }

  /**
   * PortfolioWorkExperience findMany
   */
  export type PortfolioWorkExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioWorkExperience
     */
    select?: PortfolioWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioWorkExperience
     */
    omit?: PortfolioWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioWorkExperiences to fetch.
     */
    where?: PortfolioWorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioWorkExperiences to fetch.
     */
    orderBy?: PortfolioWorkExperienceOrderByWithRelationInput | PortfolioWorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioWorkExperiences.
     */
    cursor?: PortfolioWorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioWorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioWorkExperiences.
     */
    skip?: number
    distinct?: PortfolioWorkExperienceScalarFieldEnum | PortfolioWorkExperienceScalarFieldEnum[]
  }

  /**
   * PortfolioWorkExperience create
   */
  export type PortfolioWorkExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioWorkExperience
     */
    select?: PortfolioWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioWorkExperience
     */
    omit?: PortfolioWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioWorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a PortfolioWorkExperience.
     */
    data: XOR<PortfolioWorkExperienceCreateInput, PortfolioWorkExperienceUncheckedCreateInput>
  }

  /**
   * PortfolioWorkExperience createMany
   */
  export type PortfolioWorkExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioWorkExperiences.
     */
    data: PortfolioWorkExperienceCreateManyInput | PortfolioWorkExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioWorkExperience createManyAndReturn
   */
  export type PortfolioWorkExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioWorkExperience
     */
    select?: PortfolioWorkExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioWorkExperience
     */
    omit?: PortfolioWorkExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many PortfolioWorkExperiences.
     */
    data: PortfolioWorkExperienceCreateManyInput | PortfolioWorkExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioWorkExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioWorkExperience update
   */
  export type PortfolioWorkExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioWorkExperience
     */
    select?: PortfolioWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioWorkExperience
     */
    omit?: PortfolioWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioWorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a PortfolioWorkExperience.
     */
    data: XOR<PortfolioWorkExperienceUpdateInput, PortfolioWorkExperienceUncheckedUpdateInput>
    /**
     * Choose, which PortfolioWorkExperience to update.
     */
    where: PortfolioWorkExperienceWhereUniqueInput
  }

  /**
   * PortfolioWorkExperience updateMany
   */
  export type PortfolioWorkExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioWorkExperiences.
     */
    data: XOR<PortfolioWorkExperienceUpdateManyMutationInput, PortfolioWorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioWorkExperiences to update
     */
    where?: PortfolioWorkExperienceWhereInput
    /**
     * Limit how many PortfolioWorkExperiences to update.
     */
    limit?: number
  }

  /**
   * PortfolioWorkExperience updateManyAndReturn
   */
  export type PortfolioWorkExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioWorkExperience
     */
    select?: PortfolioWorkExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioWorkExperience
     */
    omit?: PortfolioWorkExperienceOmit<ExtArgs> | null
    /**
     * The data used to update PortfolioWorkExperiences.
     */
    data: XOR<PortfolioWorkExperienceUpdateManyMutationInput, PortfolioWorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioWorkExperiences to update
     */
    where?: PortfolioWorkExperienceWhereInput
    /**
     * Limit how many PortfolioWorkExperiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioWorkExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioWorkExperience upsert
   */
  export type PortfolioWorkExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioWorkExperience
     */
    select?: PortfolioWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioWorkExperience
     */
    omit?: PortfolioWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioWorkExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the PortfolioWorkExperience to update in case it exists.
     */
    where: PortfolioWorkExperienceWhereUniqueInput
    /**
     * In case the PortfolioWorkExperience found by the `where` argument doesn't exist, create a new PortfolioWorkExperience with this data.
     */
    create: XOR<PortfolioWorkExperienceCreateInput, PortfolioWorkExperienceUncheckedCreateInput>
    /**
     * In case the PortfolioWorkExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioWorkExperienceUpdateInput, PortfolioWorkExperienceUncheckedUpdateInput>
  }

  /**
   * PortfolioWorkExperience delete
   */
  export type PortfolioWorkExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioWorkExperience
     */
    select?: PortfolioWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioWorkExperience
     */
    omit?: PortfolioWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter which PortfolioWorkExperience to delete.
     */
    where: PortfolioWorkExperienceWhereUniqueInput
  }

  /**
   * PortfolioWorkExperience deleteMany
   */
  export type PortfolioWorkExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioWorkExperiences to delete
     */
    where?: PortfolioWorkExperienceWhereInput
    /**
     * Limit how many PortfolioWorkExperiences to delete.
     */
    limit?: number
  }

  /**
   * PortfolioWorkExperience without action
   */
  export type PortfolioWorkExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioWorkExperience
     */
    select?: PortfolioWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioWorkExperience
     */
    omit?: PortfolioWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioWorkExperienceInclude<ExtArgs> | null
  }


  /**
   * Model PortfolioSkill
   */

  export type AggregatePortfolioSkill = {
    _count: PortfolioSkillCountAggregateOutputType | null
    _avg: PortfolioSkillAvgAggregateOutputType | null
    _sum: PortfolioSkillSumAggregateOutputType | null
    _min: PortfolioSkillMinAggregateOutputType | null
    _max: PortfolioSkillMaxAggregateOutputType | null
  }

  export type PortfolioSkillAvgAggregateOutputType = {
    id: number | null
    portfolioId: number | null
  }

  export type PortfolioSkillSumAggregateOutputType = {
    id: number | null
    portfolioId: number | null
  }

  export type PortfolioSkillMinAggregateOutputType = {
    id: number | null
    portfolioId: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioSkillMaxAggregateOutputType = {
    id: number | null
    portfolioId: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioSkillCountAggregateOutputType = {
    id: number
    portfolioId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortfolioSkillAvgAggregateInputType = {
    id?: true
    portfolioId?: true
  }

  export type PortfolioSkillSumAggregateInputType = {
    id?: true
    portfolioId?: true
  }

  export type PortfolioSkillMinAggregateInputType = {
    id?: true
    portfolioId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioSkillMaxAggregateInputType = {
    id?: true
    portfolioId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioSkillCountAggregateInputType = {
    id?: true
    portfolioId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortfolioSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioSkill to aggregate.
     */
    where?: PortfolioSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioSkills to fetch.
     */
    orderBy?: PortfolioSkillOrderByWithRelationInput | PortfolioSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioSkills
    **/
    _count?: true | PortfolioSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioSkillMaxAggregateInputType
  }

  export type GetPortfolioSkillAggregateType<T extends PortfolioSkillAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioSkill[P]>
      : GetScalarType<T[P], AggregatePortfolioSkill[P]>
  }




  export type PortfolioSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioSkillWhereInput
    orderBy?: PortfolioSkillOrderByWithAggregationInput | PortfolioSkillOrderByWithAggregationInput[]
    by: PortfolioSkillScalarFieldEnum[] | PortfolioSkillScalarFieldEnum
    having?: PortfolioSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioSkillCountAggregateInputType | true
    _avg?: PortfolioSkillAvgAggregateInputType
    _sum?: PortfolioSkillSumAggregateInputType
    _min?: PortfolioSkillMinAggregateInputType
    _max?: PortfolioSkillMaxAggregateInputType
  }

  export type PortfolioSkillGroupByOutputType = {
    id: number
    portfolioId: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: PortfolioSkillCountAggregateOutputType | null
    _avg: PortfolioSkillAvgAggregateOutputType | null
    _sum: PortfolioSkillSumAggregateOutputType | null
    _min: PortfolioSkillMinAggregateOutputType | null
    _max: PortfolioSkillMaxAggregateOutputType | null
  }

  type GetPortfolioSkillGroupByPayload<T extends PortfolioSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioSkillGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioSkillGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioSkill"]>

  export type PortfolioSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioSkill"]>

  export type PortfolioSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioSkill"]>

  export type PortfolioSkillSelectScalar = {
    id?: boolean
    portfolioId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortfolioSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "portfolioId" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["portfolioSkill"]>
  export type PortfolioSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }
  export type PortfolioSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }
  export type PortfolioSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }

  export type $PortfolioSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioSkill"
    objects: {
      portfolio: Prisma.$PortfolioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      portfolioId: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portfolioSkill"]>
    composites: {}
  }

  type PortfolioSkillGetPayload<S extends boolean | null | undefined | PortfolioSkillDefaultArgs> = $Result.GetResult<Prisma.$PortfolioSkillPayload, S>

  type PortfolioSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioSkillCountAggregateInputType | true
    }

  export interface PortfolioSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioSkill'], meta: { name: 'PortfolioSkill' } }
    /**
     * Find zero or one PortfolioSkill that matches the filter.
     * @param {PortfolioSkillFindUniqueArgs} args - Arguments to find a PortfolioSkill
     * @example
     * // Get one PortfolioSkill
     * const portfolioSkill = await prisma.portfolioSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioSkillFindUniqueArgs>(args: SelectSubset<T, PortfolioSkillFindUniqueArgs<ExtArgs>>): Prisma__PortfolioSkillClient<$Result.GetResult<Prisma.$PortfolioSkillPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PortfolioSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioSkillFindUniqueOrThrowArgs} args - Arguments to find a PortfolioSkill
     * @example
     * // Get one PortfolioSkill
     * const portfolioSkill = await prisma.portfolioSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioSkillClient<$Result.GetResult<Prisma.$PortfolioSkillPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PortfolioSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioSkillFindFirstArgs} args - Arguments to find a PortfolioSkill
     * @example
     * // Get one PortfolioSkill
     * const portfolioSkill = await prisma.portfolioSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioSkillFindFirstArgs>(args?: SelectSubset<T, PortfolioSkillFindFirstArgs<ExtArgs>>): Prisma__PortfolioSkillClient<$Result.GetResult<Prisma.$PortfolioSkillPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PortfolioSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioSkillFindFirstOrThrowArgs} args - Arguments to find a PortfolioSkill
     * @example
     * // Get one PortfolioSkill
     * const portfolioSkill = await prisma.portfolioSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioSkillClient<$Result.GetResult<Prisma.$PortfolioSkillPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PortfolioSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioSkills
     * const portfolioSkills = await prisma.portfolioSkill.findMany()
     * 
     * // Get first 10 PortfolioSkills
     * const portfolioSkills = await prisma.portfolioSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioSkillWithIdOnly = await prisma.portfolioSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioSkillFindManyArgs>(args?: SelectSubset<T, PortfolioSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioSkillPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PortfolioSkill.
     * @param {PortfolioSkillCreateArgs} args - Arguments to create a PortfolioSkill.
     * @example
     * // Create one PortfolioSkill
     * const PortfolioSkill = await prisma.portfolioSkill.create({
     *   data: {
     *     // ... data to create a PortfolioSkill
     *   }
     * })
     * 
     */
    create<T extends PortfolioSkillCreateArgs>(args: SelectSubset<T, PortfolioSkillCreateArgs<ExtArgs>>): Prisma__PortfolioSkillClient<$Result.GetResult<Prisma.$PortfolioSkillPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PortfolioSkills.
     * @param {PortfolioSkillCreateManyArgs} args - Arguments to create many PortfolioSkills.
     * @example
     * // Create many PortfolioSkills
     * const portfolioSkill = await prisma.portfolioSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioSkillCreateManyArgs>(args?: SelectSubset<T, PortfolioSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortfolioSkills and returns the data saved in the database.
     * @param {PortfolioSkillCreateManyAndReturnArgs} args - Arguments to create many PortfolioSkills.
     * @example
     * // Create many PortfolioSkills
     * const portfolioSkill = await prisma.portfolioSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortfolioSkills and only return the `id`
     * const portfolioSkillWithIdOnly = await prisma.portfolioSkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioSkillPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PortfolioSkill.
     * @param {PortfolioSkillDeleteArgs} args - Arguments to delete one PortfolioSkill.
     * @example
     * // Delete one PortfolioSkill
     * const PortfolioSkill = await prisma.portfolioSkill.delete({
     *   where: {
     *     // ... filter to delete one PortfolioSkill
     *   }
     * })
     * 
     */
    delete<T extends PortfolioSkillDeleteArgs>(args: SelectSubset<T, PortfolioSkillDeleteArgs<ExtArgs>>): Prisma__PortfolioSkillClient<$Result.GetResult<Prisma.$PortfolioSkillPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PortfolioSkill.
     * @param {PortfolioSkillUpdateArgs} args - Arguments to update one PortfolioSkill.
     * @example
     * // Update one PortfolioSkill
     * const portfolioSkill = await prisma.portfolioSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioSkillUpdateArgs>(args: SelectSubset<T, PortfolioSkillUpdateArgs<ExtArgs>>): Prisma__PortfolioSkillClient<$Result.GetResult<Prisma.$PortfolioSkillPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PortfolioSkills.
     * @param {PortfolioSkillDeleteManyArgs} args - Arguments to filter PortfolioSkills to delete.
     * @example
     * // Delete a few PortfolioSkills
     * const { count } = await prisma.portfolioSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioSkillDeleteManyArgs>(args?: SelectSubset<T, PortfolioSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioSkills
     * const portfolioSkill = await prisma.portfolioSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioSkillUpdateManyArgs>(args: SelectSubset<T, PortfolioSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioSkills and returns the data updated in the database.
     * @param {PortfolioSkillUpdateManyAndReturnArgs} args - Arguments to update many PortfolioSkills.
     * @example
     * // Update many PortfolioSkills
     * const portfolioSkill = await prisma.portfolioSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PortfolioSkills and only return the `id`
     * const portfolioSkillWithIdOnly = await prisma.portfolioSkill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortfolioSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioSkillPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PortfolioSkill.
     * @param {PortfolioSkillUpsertArgs} args - Arguments to update or create a PortfolioSkill.
     * @example
     * // Update or create a PortfolioSkill
     * const portfolioSkill = await prisma.portfolioSkill.upsert({
     *   create: {
     *     // ... data to create a PortfolioSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioSkill we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioSkillUpsertArgs>(args: SelectSubset<T, PortfolioSkillUpsertArgs<ExtArgs>>): Prisma__PortfolioSkillClient<$Result.GetResult<Prisma.$PortfolioSkillPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PortfolioSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioSkillCountArgs} args - Arguments to filter PortfolioSkills to count.
     * @example
     * // Count the number of PortfolioSkills
     * const count = await prisma.portfolioSkill.count({
     *   where: {
     *     // ... the filter for the PortfolioSkills we want to count
     *   }
     * })
    **/
    count<T extends PortfolioSkillCountArgs>(
      args?: Subset<T, PortfolioSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioSkillAggregateArgs>(args: Subset<T, PortfolioSkillAggregateArgs>): Prisma.PrismaPromise<GetPortfolioSkillAggregateType<T>>

    /**
     * Group by PortfolioSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortfolioSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioSkillGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioSkill model
   */
  readonly fields: PortfolioSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolio<T extends PortfolioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortfolioDefaultArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortfolioSkill model
   */ 
  interface PortfolioSkillFieldRefs {
    readonly id: FieldRef<"PortfolioSkill", 'Int'>
    readonly portfolioId: FieldRef<"PortfolioSkill", 'Int'>
    readonly name: FieldRef<"PortfolioSkill", 'String'>
    readonly createdAt: FieldRef<"PortfolioSkill", 'DateTime'>
    readonly updatedAt: FieldRef<"PortfolioSkill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioSkill findUnique
   */
  export type PortfolioSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSkill
     */
    select?: PortfolioSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSkill
     */
    omit?: PortfolioSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSkillInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioSkill to fetch.
     */
    where: PortfolioSkillWhereUniqueInput
  }

  /**
   * PortfolioSkill findUniqueOrThrow
   */
  export type PortfolioSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSkill
     */
    select?: PortfolioSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSkill
     */
    omit?: PortfolioSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSkillInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioSkill to fetch.
     */
    where: PortfolioSkillWhereUniqueInput
  }

  /**
   * PortfolioSkill findFirst
   */
  export type PortfolioSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSkill
     */
    select?: PortfolioSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSkill
     */
    omit?: PortfolioSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSkillInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioSkill to fetch.
     */
    where?: PortfolioSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioSkills to fetch.
     */
    orderBy?: PortfolioSkillOrderByWithRelationInput | PortfolioSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioSkills.
     */
    cursor?: PortfolioSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioSkills.
     */
    distinct?: PortfolioSkillScalarFieldEnum | PortfolioSkillScalarFieldEnum[]
  }

  /**
   * PortfolioSkill findFirstOrThrow
   */
  export type PortfolioSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSkill
     */
    select?: PortfolioSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSkill
     */
    omit?: PortfolioSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSkillInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioSkill to fetch.
     */
    where?: PortfolioSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioSkills to fetch.
     */
    orderBy?: PortfolioSkillOrderByWithRelationInput | PortfolioSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioSkills.
     */
    cursor?: PortfolioSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioSkills.
     */
    distinct?: PortfolioSkillScalarFieldEnum | PortfolioSkillScalarFieldEnum[]
  }

  /**
   * PortfolioSkill findMany
   */
  export type PortfolioSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSkill
     */
    select?: PortfolioSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSkill
     */
    omit?: PortfolioSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSkillInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioSkills to fetch.
     */
    where?: PortfolioSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioSkills to fetch.
     */
    orderBy?: PortfolioSkillOrderByWithRelationInput | PortfolioSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioSkills.
     */
    cursor?: PortfolioSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioSkills.
     */
    skip?: number
    distinct?: PortfolioSkillScalarFieldEnum | PortfolioSkillScalarFieldEnum[]
  }

  /**
   * PortfolioSkill create
   */
  export type PortfolioSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSkill
     */
    select?: PortfolioSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSkill
     */
    omit?: PortfolioSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a PortfolioSkill.
     */
    data: XOR<PortfolioSkillCreateInput, PortfolioSkillUncheckedCreateInput>
  }

  /**
   * PortfolioSkill createMany
   */
  export type PortfolioSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioSkills.
     */
    data: PortfolioSkillCreateManyInput | PortfolioSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioSkill createManyAndReturn
   */
  export type PortfolioSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSkill
     */
    select?: PortfolioSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSkill
     */
    omit?: PortfolioSkillOmit<ExtArgs> | null
    /**
     * The data used to create many PortfolioSkills.
     */
    data: PortfolioSkillCreateManyInput | PortfolioSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioSkill update
   */
  export type PortfolioSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSkill
     */
    select?: PortfolioSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSkill
     */
    omit?: PortfolioSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a PortfolioSkill.
     */
    data: XOR<PortfolioSkillUpdateInput, PortfolioSkillUncheckedUpdateInput>
    /**
     * Choose, which PortfolioSkill to update.
     */
    where: PortfolioSkillWhereUniqueInput
  }

  /**
   * PortfolioSkill updateMany
   */
  export type PortfolioSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioSkills.
     */
    data: XOR<PortfolioSkillUpdateManyMutationInput, PortfolioSkillUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioSkills to update
     */
    where?: PortfolioSkillWhereInput
    /**
     * Limit how many PortfolioSkills to update.
     */
    limit?: number
  }

  /**
   * PortfolioSkill updateManyAndReturn
   */
  export type PortfolioSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSkill
     */
    select?: PortfolioSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSkill
     */
    omit?: PortfolioSkillOmit<ExtArgs> | null
    /**
     * The data used to update PortfolioSkills.
     */
    data: XOR<PortfolioSkillUpdateManyMutationInput, PortfolioSkillUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioSkills to update
     */
    where?: PortfolioSkillWhereInput
    /**
     * Limit how many PortfolioSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioSkill upsert
   */
  export type PortfolioSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSkill
     */
    select?: PortfolioSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSkill
     */
    omit?: PortfolioSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the PortfolioSkill to update in case it exists.
     */
    where: PortfolioSkillWhereUniqueInput
    /**
     * In case the PortfolioSkill found by the `where` argument doesn't exist, create a new PortfolioSkill with this data.
     */
    create: XOR<PortfolioSkillCreateInput, PortfolioSkillUncheckedCreateInput>
    /**
     * In case the PortfolioSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioSkillUpdateInput, PortfolioSkillUncheckedUpdateInput>
  }

  /**
   * PortfolioSkill delete
   */
  export type PortfolioSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSkill
     */
    select?: PortfolioSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSkill
     */
    omit?: PortfolioSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSkillInclude<ExtArgs> | null
    /**
     * Filter which PortfolioSkill to delete.
     */
    where: PortfolioSkillWhereUniqueInput
  }

  /**
   * PortfolioSkill deleteMany
   */
  export type PortfolioSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioSkills to delete
     */
    where?: PortfolioSkillWhereInput
    /**
     * Limit how many PortfolioSkills to delete.
     */
    limit?: number
  }

  /**
   * PortfolioSkill without action
   */
  export type PortfolioSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSkill
     */
    select?: PortfolioSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSkill
     */
    omit?: PortfolioSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSkillInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    freelancerId: number | null
    clientId: number | null
    wage: Decimal | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    freelancerId: number | null
    clientId: number | null
    wage: Decimal | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    freelancerId: number | null
    clientId: number | null
    wage: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    freelancerId: number | null
    clientId: number | null
    wage: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    freelancerId: number
    clientId: number
    wage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    freelancerId?: true
    clientId?: true
    wage?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    freelancerId?: true
    clientId?: true
    wage?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    freelancerId?: true
    clientId?: true
    wage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    freelancerId?: true
    clientId?: true
    wage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    freelancerId?: true
    clientId?: true
    wage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    freelancerId: number
    clientId: number
    wage: Decimal
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    freelancerId?: boolean
    clientId?: boolean
    wage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    freelancerId?: boolean
    clientId?: boolean
    wage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    freelancerId?: boolean
    clientId?: boolean
    wage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    freelancerId?: boolean
    clientId?: boolean
    wage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "freelancerId" | "clientId" | "wage" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      freelancerId: number
      clientId: number
      wage: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */ 
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly freelancerId: FieldRef<"Booking", 'Int'>
    readonly clientId: FieldRef<"Booking", 'Int'>
    readonly wage: FieldRef<"Booking", 'Decimal'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    avatar: 'avatar',
    role: 'role',
    phone: 'phone',
    gender: 'gender',
    email: 'email',
    biography: 'biography',
    address: 'address',
    occupation: 'occupation',
    facebookLink: 'facebookLink',
    instagramLink: 'instagramLink',
    youtubeLink: 'youtubeLink',
    tiktokLink: 'tiktokLink',
    avatarPublicId: 'avatarPublicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AuthScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthScalarFieldEnum = (typeof AuthScalarFieldEnum)[keyof typeof AuthScalarFieldEnum]


  export const ProfileWorkExperienceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    from: 'from',
    to: 'to',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileWorkExperienceScalarFieldEnum = (typeof ProfileWorkExperienceScalarFieldEnum)[keyof typeof ProfileWorkExperienceScalarFieldEnum]


  export const ProfileAchievementScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    from: 'from',
    to: 'to',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileAchievementScalarFieldEnum = (typeof ProfileAchievementScalarFieldEnum)[keyof typeof ProfileAchievementScalarFieldEnum]


  export const ProfileProminentWorkScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    from: 'from',
    to: 'to',
    wage: 'wage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileProminentWorkScalarFieldEnum = (typeof ProfileProminentWorkScalarFieldEnum)[keyof typeof ProfileProminentWorkScalarFieldEnum]


  export const PortfolioScalarFieldEnum: {
    id: 'id',
    name: 'name',
    skillDescription: 'skillDescription',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortfolioScalarFieldEnum = (typeof PortfolioScalarFieldEnum)[keyof typeof PortfolioScalarFieldEnum]


  export const PortfolioProminentProjectScalarFieldEnum: {
    id: 'id',
    portfolioId: 'portfolioId',
    description: 'description',
    role: 'role',
    company: 'company',
    detail: 'detail',
    from: 'from',
    to: 'to',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortfolioProminentProjectScalarFieldEnum = (typeof PortfolioProminentProjectScalarFieldEnum)[keyof typeof PortfolioProminentProjectScalarFieldEnum]


  export const PortfolioProminentProjectImageScalarFieldEnum: {
    id: 'id',
    portfolioProminentProjectId: 'portfolioProminentProjectId',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortfolioProminentProjectImageScalarFieldEnum = (typeof PortfolioProminentProjectImageScalarFieldEnum)[keyof typeof PortfolioProminentProjectImageScalarFieldEnum]


  export const PortfolioCustomerFeedbackScalarFieldEnum: {
    id: 'id',
    portfolioId: 'portfolioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortfolioCustomerFeedbackScalarFieldEnum = (typeof PortfolioCustomerFeedbackScalarFieldEnum)[keyof typeof PortfolioCustomerFeedbackScalarFieldEnum]


  export const PortfolioAboutSectionScalarFieldEnum: {
    id: 'id',
    portfolioId: 'portfolioId',
    avatar: 'avatar',
    overview: 'overview',
    detail: 'detail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortfolioAboutSectionScalarFieldEnum = (typeof PortfolioAboutSectionScalarFieldEnum)[keyof typeof PortfolioAboutSectionScalarFieldEnum]


  export const PortfolioWorkExperienceScalarFieldEnum: {
    id: 'id',
    portfolioId: 'portfolioId',
    role: 'role',
    company: 'company',
    image: 'image',
    from: 'from',
    to: 'to',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortfolioWorkExperienceScalarFieldEnum = (typeof PortfolioWorkExperienceScalarFieldEnum)[keyof typeof PortfolioWorkExperienceScalarFieldEnum]


  export const PortfolioSkillScalarFieldEnum: {
    id: 'id',
    portfolioId: 'portfolioId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortfolioSkillScalarFieldEnum = (typeof PortfolioSkillScalarFieldEnum)[keyof typeof PortfolioSkillScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    freelancerId: 'freelancerId',
    clientId: 'clientId',
    wage: 'wage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    role?: IntFilter<"User"> | number
    phone?: StringNullableFilter<"User"> | string | null
    gender?: IntNullableFilter<"User"> | number | null
    email?: StringNullableFilter<"User"> | string | null
    biography?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    occupation?: StringNullableFilter<"User"> | string | null
    facebookLink?: StringNullableFilter<"User"> | string | null
    instagramLink?: StringNullableFilter<"User"> | string | null
    youtubeLink?: StringNullableFilter<"User"> | string | null
    tiktokLink?: StringNullableFilter<"User"> | string | null
    avatarPublicId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profileWorkExperiences?: ProfileWorkExperienceListRelationFilter
    profileAchievements?: ProfileAchievementListRelationFilter
    profileProminentWorks?: ProfileProminentWorkListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    biography?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    facebookLink?: SortOrderInput | SortOrder
    instagramLink?: SortOrderInput | SortOrder
    youtubeLink?: SortOrderInput | SortOrder
    tiktokLink?: SortOrderInput | SortOrder
    avatarPublicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profileWorkExperiences?: ProfileWorkExperienceOrderByRelationAggregateInput
    profileAchievements?: ProfileAchievementOrderByRelationAggregateInput
    profileProminentWorks?: ProfileProminentWorkOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    role?: IntFilter<"User"> | number
    phone?: StringNullableFilter<"User"> | string | null
    gender?: IntNullableFilter<"User"> | number | null
    biography?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    occupation?: StringNullableFilter<"User"> | string | null
    facebookLink?: StringNullableFilter<"User"> | string | null
    instagramLink?: StringNullableFilter<"User"> | string | null
    youtubeLink?: StringNullableFilter<"User"> | string | null
    tiktokLink?: StringNullableFilter<"User"> | string | null
    avatarPublicId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profileWorkExperiences?: ProfileWorkExperienceListRelationFilter
    profileAchievements?: ProfileAchievementListRelationFilter
    profileProminentWorks?: ProfileProminentWorkListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    biography?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    facebookLink?: SortOrderInput | SortOrder
    instagramLink?: SortOrderInput | SortOrder
    youtubeLink?: SortOrderInput | SortOrder
    tiktokLink?: SortOrderInput | SortOrder
    avatarPublicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: IntWithAggregatesFilter<"User"> | number
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: IntNullableWithAggregatesFilter<"User"> | number | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    biography?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    occupation?: StringNullableWithAggregatesFilter<"User"> | string | null
    facebookLink?: StringNullableWithAggregatesFilter<"User"> | string | null
    instagramLink?: StringNullableWithAggregatesFilter<"User"> | string | null
    youtubeLink?: StringNullableWithAggregatesFilter<"User"> | string | null
    tiktokLink?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarPublicId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AuthWhereInput = {
    AND?: AuthWhereInput | AuthWhereInput[]
    OR?: AuthWhereInput[]
    NOT?: AuthWhereInput | AuthWhereInput[]
    id?: IntFilter<"Auth"> | number
    userId?: IntFilter<"Auth"> | number
    password?: StringFilter<"Auth"> | string
    createdAt?: DateTimeFilter<"Auth"> | Date | string
    updatedAt?: DateTimeFilter<"Auth"> | Date | string
  }

  export type AuthOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuthWhereInput | AuthWhereInput[]
    OR?: AuthWhereInput[]
    NOT?: AuthWhereInput | AuthWhereInput[]
    userId?: IntFilter<"Auth"> | number
    password?: StringFilter<"Auth"> | string
    createdAt?: DateTimeFilter<"Auth"> | Date | string
    updatedAt?: DateTimeFilter<"Auth"> | Date | string
  }, "id">

  export type AuthOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthCountOrderByAggregateInput
    _avg?: AuthAvgOrderByAggregateInput
    _max?: AuthMaxOrderByAggregateInput
    _min?: AuthMinOrderByAggregateInput
    _sum?: AuthSumOrderByAggregateInput
  }

  export type AuthScalarWhereWithAggregatesInput = {
    AND?: AuthScalarWhereWithAggregatesInput | AuthScalarWhereWithAggregatesInput[]
    OR?: AuthScalarWhereWithAggregatesInput[]
    NOT?: AuthScalarWhereWithAggregatesInput | AuthScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Auth"> | number
    userId?: IntWithAggregatesFilter<"Auth"> | number
    password?: StringWithAggregatesFilter<"Auth"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Auth"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Auth"> | Date | string
  }

  export type ProfileWorkExperienceWhereInput = {
    AND?: ProfileWorkExperienceWhereInput | ProfileWorkExperienceWhereInput[]
    OR?: ProfileWorkExperienceWhereInput[]
    NOT?: ProfileWorkExperienceWhereInput | ProfileWorkExperienceWhereInput[]
    id?: IntFilter<"ProfileWorkExperience"> | number
    userId?: IntFilter<"ProfileWorkExperience"> | number
    name?: StringFilter<"ProfileWorkExperience"> | string
    description?: StringNullableFilter<"ProfileWorkExperience"> | string | null
    from?: DateTimeFilter<"ProfileWorkExperience"> | Date | string
    to?: DateTimeNullableFilter<"ProfileWorkExperience"> | Date | string | null
    createdAt?: DateTimeFilter<"ProfileWorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileWorkExperience"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileWorkExperienceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    from?: SortOrder
    to?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWorkExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProfileWorkExperienceWhereInput | ProfileWorkExperienceWhereInput[]
    OR?: ProfileWorkExperienceWhereInput[]
    NOT?: ProfileWorkExperienceWhereInput | ProfileWorkExperienceWhereInput[]
    userId?: IntFilter<"ProfileWorkExperience"> | number
    name?: StringFilter<"ProfileWorkExperience"> | string
    description?: StringNullableFilter<"ProfileWorkExperience"> | string | null
    from?: DateTimeFilter<"ProfileWorkExperience"> | Date | string
    to?: DateTimeNullableFilter<"ProfileWorkExperience"> | Date | string | null
    createdAt?: DateTimeFilter<"ProfileWorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileWorkExperience"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProfileWorkExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    from?: SortOrder
    to?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileWorkExperienceCountOrderByAggregateInput
    _avg?: ProfileWorkExperienceAvgOrderByAggregateInput
    _max?: ProfileWorkExperienceMaxOrderByAggregateInput
    _min?: ProfileWorkExperienceMinOrderByAggregateInput
    _sum?: ProfileWorkExperienceSumOrderByAggregateInput
  }

  export type ProfileWorkExperienceScalarWhereWithAggregatesInput = {
    AND?: ProfileWorkExperienceScalarWhereWithAggregatesInput | ProfileWorkExperienceScalarWhereWithAggregatesInput[]
    OR?: ProfileWorkExperienceScalarWhereWithAggregatesInput[]
    NOT?: ProfileWorkExperienceScalarWhereWithAggregatesInput | ProfileWorkExperienceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProfileWorkExperience"> | number
    userId?: IntWithAggregatesFilter<"ProfileWorkExperience"> | number
    name?: StringWithAggregatesFilter<"ProfileWorkExperience"> | string
    description?: StringNullableWithAggregatesFilter<"ProfileWorkExperience"> | string | null
    from?: DateTimeWithAggregatesFilter<"ProfileWorkExperience"> | Date | string
    to?: DateTimeNullableWithAggregatesFilter<"ProfileWorkExperience"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProfileWorkExperience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProfileWorkExperience"> | Date | string
  }

  export type ProfileAchievementWhereInput = {
    AND?: ProfileAchievementWhereInput | ProfileAchievementWhereInput[]
    OR?: ProfileAchievementWhereInput[]
    NOT?: ProfileAchievementWhereInput | ProfileAchievementWhereInput[]
    id?: IntFilter<"ProfileAchievement"> | number
    userId?: IntFilter<"ProfileAchievement"> | number
    name?: StringFilter<"ProfileAchievement"> | string
    description?: StringNullableFilter<"ProfileAchievement"> | string | null
    from?: DateTimeFilter<"ProfileAchievement"> | Date | string
    to?: DateTimeNullableFilter<"ProfileAchievement"> | Date | string | null
    createdAt?: DateTimeFilter<"ProfileAchievement"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileAchievement"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileAchievementOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    from?: SortOrder
    to?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileAchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProfileAchievementWhereInput | ProfileAchievementWhereInput[]
    OR?: ProfileAchievementWhereInput[]
    NOT?: ProfileAchievementWhereInput | ProfileAchievementWhereInput[]
    userId?: IntFilter<"ProfileAchievement"> | number
    name?: StringFilter<"ProfileAchievement"> | string
    description?: StringNullableFilter<"ProfileAchievement"> | string | null
    from?: DateTimeFilter<"ProfileAchievement"> | Date | string
    to?: DateTimeNullableFilter<"ProfileAchievement"> | Date | string | null
    createdAt?: DateTimeFilter<"ProfileAchievement"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileAchievement"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProfileAchievementOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    from?: SortOrder
    to?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileAchievementCountOrderByAggregateInput
    _avg?: ProfileAchievementAvgOrderByAggregateInput
    _max?: ProfileAchievementMaxOrderByAggregateInput
    _min?: ProfileAchievementMinOrderByAggregateInput
    _sum?: ProfileAchievementSumOrderByAggregateInput
  }

  export type ProfileAchievementScalarWhereWithAggregatesInput = {
    AND?: ProfileAchievementScalarWhereWithAggregatesInput | ProfileAchievementScalarWhereWithAggregatesInput[]
    OR?: ProfileAchievementScalarWhereWithAggregatesInput[]
    NOT?: ProfileAchievementScalarWhereWithAggregatesInput | ProfileAchievementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProfileAchievement"> | number
    userId?: IntWithAggregatesFilter<"ProfileAchievement"> | number
    name?: StringWithAggregatesFilter<"ProfileAchievement"> | string
    description?: StringNullableWithAggregatesFilter<"ProfileAchievement"> | string | null
    from?: DateTimeWithAggregatesFilter<"ProfileAchievement"> | Date | string
    to?: DateTimeNullableWithAggregatesFilter<"ProfileAchievement"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProfileAchievement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProfileAchievement"> | Date | string
  }

  export type ProfileProminentWorkWhereInput = {
    AND?: ProfileProminentWorkWhereInput | ProfileProminentWorkWhereInput[]
    OR?: ProfileProminentWorkWhereInput[]
    NOT?: ProfileProminentWorkWhereInput | ProfileProminentWorkWhereInput[]
    id?: IntFilter<"ProfileProminentWork"> | number
    userId?: IntFilter<"ProfileProminentWork"> | number
    name?: StringFilter<"ProfileProminentWork"> | string
    description?: StringNullableFilter<"ProfileProminentWork"> | string | null
    from?: DateTimeFilter<"ProfileProminentWork"> | Date | string
    to?: DateTimeNullableFilter<"ProfileProminentWork"> | Date | string | null
    wage?: IntNullableFilter<"ProfileProminentWork"> | number | null
    createdAt?: DateTimeFilter<"ProfileProminentWork"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileProminentWork"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileProminentWorkOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    from?: SortOrder
    to?: SortOrderInput | SortOrder
    wage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileProminentWorkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProfileProminentWorkWhereInput | ProfileProminentWorkWhereInput[]
    OR?: ProfileProminentWorkWhereInput[]
    NOT?: ProfileProminentWorkWhereInput | ProfileProminentWorkWhereInput[]
    userId?: IntFilter<"ProfileProminentWork"> | number
    name?: StringFilter<"ProfileProminentWork"> | string
    description?: StringNullableFilter<"ProfileProminentWork"> | string | null
    from?: DateTimeFilter<"ProfileProminentWork"> | Date | string
    to?: DateTimeNullableFilter<"ProfileProminentWork"> | Date | string | null
    wage?: IntNullableFilter<"ProfileProminentWork"> | number | null
    createdAt?: DateTimeFilter<"ProfileProminentWork"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileProminentWork"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProfileProminentWorkOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    from?: SortOrder
    to?: SortOrderInput | SortOrder
    wage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileProminentWorkCountOrderByAggregateInput
    _avg?: ProfileProminentWorkAvgOrderByAggregateInput
    _max?: ProfileProminentWorkMaxOrderByAggregateInput
    _min?: ProfileProminentWorkMinOrderByAggregateInput
    _sum?: ProfileProminentWorkSumOrderByAggregateInput
  }

  export type ProfileProminentWorkScalarWhereWithAggregatesInput = {
    AND?: ProfileProminentWorkScalarWhereWithAggregatesInput | ProfileProminentWorkScalarWhereWithAggregatesInput[]
    OR?: ProfileProminentWorkScalarWhereWithAggregatesInput[]
    NOT?: ProfileProminentWorkScalarWhereWithAggregatesInput | ProfileProminentWorkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProfileProminentWork"> | number
    userId?: IntWithAggregatesFilter<"ProfileProminentWork"> | number
    name?: StringWithAggregatesFilter<"ProfileProminentWork"> | string
    description?: StringNullableWithAggregatesFilter<"ProfileProminentWork"> | string | null
    from?: DateTimeWithAggregatesFilter<"ProfileProminentWork"> | Date | string
    to?: DateTimeNullableWithAggregatesFilter<"ProfileProminentWork"> | Date | string | null
    wage?: IntNullableWithAggregatesFilter<"ProfileProminentWork"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ProfileProminentWork"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProfileProminentWork"> | Date | string
  }

  export type PortfolioWhereInput = {
    AND?: PortfolioWhereInput | PortfolioWhereInput[]
    OR?: PortfolioWhereInput[]
    NOT?: PortfolioWhereInput | PortfolioWhereInput[]
    id?: IntFilter<"Portfolio"> | number
    name?: StringFilter<"Portfolio"> | string
    skillDescription?: StringNullableFilter<"Portfolio"> | string | null
    createdAt?: DateTimeFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portfolio"> | Date | string
    portfolioProminentProjects?: PortfolioProminentProjectListRelationFilter
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackListRelationFilter
    portfolioAboutSection?: XOR<PortfolioAboutSectionNullableScalarRelationFilter, PortfolioAboutSectionWhereInput> | null
    portfolioWorkExperiences?: PortfolioWorkExperienceListRelationFilter
    portfolioSkills?: PortfolioSkillListRelationFilter
  }

  export type PortfolioOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    skillDescription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolioProminentProjects?: PortfolioProminentProjectOrderByRelationAggregateInput
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackOrderByRelationAggregateInput
    portfolioAboutSection?: PortfolioAboutSectionOrderByWithRelationInput
    portfolioWorkExperiences?: PortfolioWorkExperienceOrderByRelationAggregateInput
    portfolioSkills?: PortfolioSkillOrderByRelationAggregateInput
  }

  export type PortfolioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PortfolioWhereInput | PortfolioWhereInput[]
    OR?: PortfolioWhereInput[]
    NOT?: PortfolioWhereInput | PortfolioWhereInput[]
    name?: StringFilter<"Portfolio"> | string
    skillDescription?: StringNullableFilter<"Portfolio"> | string | null
    createdAt?: DateTimeFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portfolio"> | Date | string
    portfolioProminentProjects?: PortfolioProminentProjectListRelationFilter
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackListRelationFilter
    portfolioAboutSection?: XOR<PortfolioAboutSectionNullableScalarRelationFilter, PortfolioAboutSectionWhereInput> | null
    portfolioWorkExperiences?: PortfolioWorkExperienceListRelationFilter
    portfolioSkills?: PortfolioSkillListRelationFilter
  }, "id">

  export type PortfolioOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    skillDescription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortfolioCountOrderByAggregateInput
    _avg?: PortfolioAvgOrderByAggregateInput
    _max?: PortfolioMaxOrderByAggregateInput
    _min?: PortfolioMinOrderByAggregateInput
    _sum?: PortfolioSumOrderByAggregateInput
  }

  export type PortfolioScalarWhereWithAggregatesInput = {
    AND?: PortfolioScalarWhereWithAggregatesInput | PortfolioScalarWhereWithAggregatesInput[]
    OR?: PortfolioScalarWhereWithAggregatesInput[]
    NOT?: PortfolioScalarWhereWithAggregatesInput | PortfolioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Portfolio"> | number
    name?: StringWithAggregatesFilter<"Portfolio"> | string
    skillDescription?: StringNullableWithAggregatesFilter<"Portfolio"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Portfolio"> | Date | string
  }

  export type PortfolioProminentProjectWhereInput = {
    AND?: PortfolioProminentProjectWhereInput | PortfolioProminentProjectWhereInput[]
    OR?: PortfolioProminentProjectWhereInput[]
    NOT?: PortfolioProminentProjectWhereInput | PortfolioProminentProjectWhereInput[]
    id?: IntFilter<"PortfolioProminentProject"> | number
    portfolioId?: IntFilter<"PortfolioProminentProject"> | number
    description?: StringFilter<"PortfolioProminentProject"> | string
    role?: StringFilter<"PortfolioProminentProject"> | string
    company?: StringFilter<"PortfolioProminentProject"> | string
    detail?: StringNullableFilter<"PortfolioProminentProject"> | string | null
    from?: DateTimeFilter<"PortfolioProminentProject"> | Date | string
    to?: DateTimeNullableFilter<"PortfolioProminentProject"> | Date | string | null
    createdAt?: DateTimeFilter<"PortfolioProminentProject"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioProminentProject"> | Date | string
    portfolio?: XOR<PortfolioScalarRelationFilter, PortfolioWhereInput>
    portfolioProminentProjectImages?: PortfolioProminentProjectImageListRelationFilter
  }

  export type PortfolioProminentProjectOrderByWithRelationInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    description?: SortOrder
    role?: SortOrder
    company?: SortOrder
    detail?: SortOrderInput | SortOrder
    from?: SortOrder
    to?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolio?: PortfolioOrderByWithRelationInput
    portfolioProminentProjectImages?: PortfolioProminentProjectImageOrderByRelationAggregateInput
  }

  export type PortfolioProminentProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PortfolioProminentProjectWhereInput | PortfolioProminentProjectWhereInput[]
    OR?: PortfolioProminentProjectWhereInput[]
    NOT?: PortfolioProminentProjectWhereInput | PortfolioProminentProjectWhereInput[]
    portfolioId?: IntFilter<"PortfolioProminentProject"> | number
    description?: StringFilter<"PortfolioProminentProject"> | string
    role?: StringFilter<"PortfolioProminentProject"> | string
    company?: StringFilter<"PortfolioProminentProject"> | string
    detail?: StringNullableFilter<"PortfolioProminentProject"> | string | null
    from?: DateTimeFilter<"PortfolioProminentProject"> | Date | string
    to?: DateTimeNullableFilter<"PortfolioProminentProject"> | Date | string | null
    createdAt?: DateTimeFilter<"PortfolioProminentProject"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioProminentProject"> | Date | string
    portfolio?: XOR<PortfolioScalarRelationFilter, PortfolioWhereInput>
    portfolioProminentProjectImages?: PortfolioProminentProjectImageListRelationFilter
  }, "id">

  export type PortfolioProminentProjectOrderByWithAggregationInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    description?: SortOrder
    role?: SortOrder
    company?: SortOrder
    detail?: SortOrderInput | SortOrder
    from?: SortOrder
    to?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortfolioProminentProjectCountOrderByAggregateInput
    _avg?: PortfolioProminentProjectAvgOrderByAggregateInput
    _max?: PortfolioProminentProjectMaxOrderByAggregateInput
    _min?: PortfolioProminentProjectMinOrderByAggregateInput
    _sum?: PortfolioProminentProjectSumOrderByAggregateInput
  }

  export type PortfolioProminentProjectScalarWhereWithAggregatesInput = {
    AND?: PortfolioProminentProjectScalarWhereWithAggregatesInput | PortfolioProminentProjectScalarWhereWithAggregatesInput[]
    OR?: PortfolioProminentProjectScalarWhereWithAggregatesInput[]
    NOT?: PortfolioProminentProjectScalarWhereWithAggregatesInput | PortfolioProminentProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PortfolioProminentProject"> | number
    portfolioId?: IntWithAggregatesFilter<"PortfolioProminentProject"> | number
    description?: StringWithAggregatesFilter<"PortfolioProminentProject"> | string
    role?: StringWithAggregatesFilter<"PortfolioProminentProject"> | string
    company?: StringWithAggregatesFilter<"PortfolioProminentProject"> | string
    detail?: StringNullableWithAggregatesFilter<"PortfolioProminentProject"> | string | null
    from?: DateTimeWithAggregatesFilter<"PortfolioProminentProject"> | Date | string
    to?: DateTimeNullableWithAggregatesFilter<"PortfolioProminentProject"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PortfolioProminentProject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PortfolioProminentProject"> | Date | string
  }

  export type PortfolioProminentProjectImageWhereInput = {
    AND?: PortfolioProminentProjectImageWhereInput | PortfolioProminentProjectImageWhereInput[]
    OR?: PortfolioProminentProjectImageWhereInput[]
    NOT?: PortfolioProminentProjectImageWhereInput | PortfolioProminentProjectImageWhereInput[]
    id?: IntFilter<"PortfolioProminentProjectImage"> | number
    portfolioProminentProjectId?: IntFilter<"PortfolioProminentProjectImage"> | number
    image?: StringFilter<"PortfolioProminentProjectImage"> | string
    createdAt?: DateTimeFilter<"PortfolioProminentProjectImage"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioProminentProjectImage"> | Date | string
    portfolioProminentProject?: XOR<PortfolioProminentProjectScalarRelationFilter, PortfolioProminentProjectWhereInput>
  }

  export type PortfolioProminentProjectImageOrderByWithRelationInput = {
    id?: SortOrder
    portfolioProminentProjectId?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolioProminentProject?: PortfolioProminentProjectOrderByWithRelationInput
  }

  export type PortfolioProminentProjectImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PortfolioProminentProjectImageWhereInput | PortfolioProminentProjectImageWhereInput[]
    OR?: PortfolioProminentProjectImageWhereInput[]
    NOT?: PortfolioProminentProjectImageWhereInput | PortfolioProminentProjectImageWhereInput[]
    portfolioProminentProjectId?: IntFilter<"PortfolioProminentProjectImage"> | number
    image?: StringFilter<"PortfolioProminentProjectImage"> | string
    createdAt?: DateTimeFilter<"PortfolioProminentProjectImage"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioProminentProjectImage"> | Date | string
    portfolioProminentProject?: XOR<PortfolioProminentProjectScalarRelationFilter, PortfolioProminentProjectWhereInput>
  }, "id">

  export type PortfolioProminentProjectImageOrderByWithAggregationInput = {
    id?: SortOrder
    portfolioProminentProjectId?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortfolioProminentProjectImageCountOrderByAggregateInput
    _avg?: PortfolioProminentProjectImageAvgOrderByAggregateInput
    _max?: PortfolioProminentProjectImageMaxOrderByAggregateInput
    _min?: PortfolioProminentProjectImageMinOrderByAggregateInput
    _sum?: PortfolioProminentProjectImageSumOrderByAggregateInput
  }

  export type PortfolioProminentProjectImageScalarWhereWithAggregatesInput = {
    AND?: PortfolioProminentProjectImageScalarWhereWithAggregatesInput | PortfolioProminentProjectImageScalarWhereWithAggregatesInput[]
    OR?: PortfolioProminentProjectImageScalarWhereWithAggregatesInput[]
    NOT?: PortfolioProminentProjectImageScalarWhereWithAggregatesInput | PortfolioProminentProjectImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PortfolioProminentProjectImage"> | number
    portfolioProminentProjectId?: IntWithAggregatesFilter<"PortfolioProminentProjectImage"> | number
    image?: StringWithAggregatesFilter<"PortfolioProminentProjectImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PortfolioProminentProjectImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PortfolioProminentProjectImage"> | Date | string
  }

  export type PortfolioCustomerFeedbackWhereInput = {
    AND?: PortfolioCustomerFeedbackWhereInput | PortfolioCustomerFeedbackWhereInput[]
    OR?: PortfolioCustomerFeedbackWhereInput[]
    NOT?: PortfolioCustomerFeedbackWhereInput | PortfolioCustomerFeedbackWhereInput[]
    id?: IntFilter<"PortfolioCustomerFeedback"> | number
    portfolioId?: IntFilter<"PortfolioCustomerFeedback"> | number
    createdAt?: DateTimeFilter<"PortfolioCustomerFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioCustomerFeedback"> | Date | string
    portfolio?: XOR<PortfolioScalarRelationFilter, PortfolioWhereInput>
  }

  export type PortfolioCustomerFeedbackOrderByWithRelationInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolio?: PortfolioOrderByWithRelationInput
  }

  export type PortfolioCustomerFeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PortfolioCustomerFeedbackWhereInput | PortfolioCustomerFeedbackWhereInput[]
    OR?: PortfolioCustomerFeedbackWhereInput[]
    NOT?: PortfolioCustomerFeedbackWhereInput | PortfolioCustomerFeedbackWhereInput[]
    portfolioId?: IntFilter<"PortfolioCustomerFeedback"> | number
    createdAt?: DateTimeFilter<"PortfolioCustomerFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioCustomerFeedback"> | Date | string
    portfolio?: XOR<PortfolioScalarRelationFilter, PortfolioWhereInput>
  }, "id">

  export type PortfolioCustomerFeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortfolioCustomerFeedbackCountOrderByAggregateInput
    _avg?: PortfolioCustomerFeedbackAvgOrderByAggregateInput
    _max?: PortfolioCustomerFeedbackMaxOrderByAggregateInput
    _min?: PortfolioCustomerFeedbackMinOrderByAggregateInput
    _sum?: PortfolioCustomerFeedbackSumOrderByAggregateInput
  }

  export type PortfolioCustomerFeedbackScalarWhereWithAggregatesInput = {
    AND?: PortfolioCustomerFeedbackScalarWhereWithAggregatesInput | PortfolioCustomerFeedbackScalarWhereWithAggregatesInput[]
    OR?: PortfolioCustomerFeedbackScalarWhereWithAggregatesInput[]
    NOT?: PortfolioCustomerFeedbackScalarWhereWithAggregatesInput | PortfolioCustomerFeedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PortfolioCustomerFeedback"> | number
    portfolioId?: IntWithAggregatesFilter<"PortfolioCustomerFeedback"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PortfolioCustomerFeedback"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PortfolioCustomerFeedback"> | Date | string
  }

  export type PortfolioAboutSectionWhereInput = {
    AND?: PortfolioAboutSectionWhereInput | PortfolioAboutSectionWhereInput[]
    OR?: PortfolioAboutSectionWhereInput[]
    NOT?: PortfolioAboutSectionWhereInput | PortfolioAboutSectionWhereInput[]
    id?: IntFilter<"PortfolioAboutSection"> | number
    portfolioId?: IntNullableFilter<"PortfolioAboutSection"> | number | null
    avatar?: StringFilter<"PortfolioAboutSection"> | string
    overview?: StringFilter<"PortfolioAboutSection"> | string
    detail?: StringFilter<"PortfolioAboutSection"> | string
    createdAt?: DateTimeFilter<"PortfolioAboutSection"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioAboutSection"> | Date | string
    portfolio?: XOR<PortfolioNullableScalarRelationFilter, PortfolioWhereInput> | null
  }

  export type PortfolioAboutSectionOrderByWithRelationInput = {
    id?: SortOrder
    portfolioId?: SortOrderInput | SortOrder
    avatar?: SortOrder
    overview?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolio?: PortfolioOrderByWithRelationInput
  }

  export type PortfolioAboutSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    portfolioId?: number
    AND?: PortfolioAboutSectionWhereInput | PortfolioAboutSectionWhereInput[]
    OR?: PortfolioAboutSectionWhereInput[]
    NOT?: PortfolioAboutSectionWhereInput | PortfolioAboutSectionWhereInput[]
    avatar?: StringFilter<"PortfolioAboutSection"> | string
    overview?: StringFilter<"PortfolioAboutSection"> | string
    detail?: StringFilter<"PortfolioAboutSection"> | string
    createdAt?: DateTimeFilter<"PortfolioAboutSection"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioAboutSection"> | Date | string
    portfolio?: XOR<PortfolioNullableScalarRelationFilter, PortfolioWhereInput> | null
  }, "id" | "portfolioId">

  export type PortfolioAboutSectionOrderByWithAggregationInput = {
    id?: SortOrder
    portfolioId?: SortOrderInput | SortOrder
    avatar?: SortOrder
    overview?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortfolioAboutSectionCountOrderByAggregateInput
    _avg?: PortfolioAboutSectionAvgOrderByAggregateInput
    _max?: PortfolioAboutSectionMaxOrderByAggregateInput
    _min?: PortfolioAboutSectionMinOrderByAggregateInput
    _sum?: PortfolioAboutSectionSumOrderByAggregateInput
  }

  export type PortfolioAboutSectionScalarWhereWithAggregatesInput = {
    AND?: PortfolioAboutSectionScalarWhereWithAggregatesInput | PortfolioAboutSectionScalarWhereWithAggregatesInput[]
    OR?: PortfolioAboutSectionScalarWhereWithAggregatesInput[]
    NOT?: PortfolioAboutSectionScalarWhereWithAggregatesInput | PortfolioAboutSectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PortfolioAboutSection"> | number
    portfolioId?: IntNullableWithAggregatesFilter<"PortfolioAboutSection"> | number | null
    avatar?: StringWithAggregatesFilter<"PortfolioAboutSection"> | string
    overview?: StringWithAggregatesFilter<"PortfolioAboutSection"> | string
    detail?: StringWithAggregatesFilter<"PortfolioAboutSection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PortfolioAboutSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PortfolioAboutSection"> | Date | string
  }

  export type PortfolioWorkExperienceWhereInput = {
    AND?: PortfolioWorkExperienceWhereInput | PortfolioWorkExperienceWhereInput[]
    OR?: PortfolioWorkExperienceWhereInput[]
    NOT?: PortfolioWorkExperienceWhereInput | PortfolioWorkExperienceWhereInput[]
    id?: IntFilter<"PortfolioWorkExperience"> | number
    portfolioId?: IntFilter<"PortfolioWorkExperience"> | number
    role?: StringFilter<"PortfolioWorkExperience"> | string
    company?: StringFilter<"PortfolioWorkExperience"> | string
    image?: StringFilter<"PortfolioWorkExperience"> | string
    from?: DateTimeFilter<"PortfolioWorkExperience"> | Date | string
    to?: DateTimeNullableFilter<"PortfolioWorkExperience"> | Date | string | null
    createdAt?: DateTimeFilter<"PortfolioWorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioWorkExperience"> | Date | string
    portfolio?: XOR<PortfolioScalarRelationFilter, PortfolioWhereInput>
  }

  export type PortfolioWorkExperienceOrderByWithRelationInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    role?: SortOrder
    company?: SortOrder
    image?: SortOrder
    from?: SortOrder
    to?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolio?: PortfolioOrderByWithRelationInput
  }

  export type PortfolioWorkExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PortfolioWorkExperienceWhereInput | PortfolioWorkExperienceWhereInput[]
    OR?: PortfolioWorkExperienceWhereInput[]
    NOT?: PortfolioWorkExperienceWhereInput | PortfolioWorkExperienceWhereInput[]
    portfolioId?: IntFilter<"PortfolioWorkExperience"> | number
    role?: StringFilter<"PortfolioWorkExperience"> | string
    company?: StringFilter<"PortfolioWorkExperience"> | string
    image?: StringFilter<"PortfolioWorkExperience"> | string
    from?: DateTimeFilter<"PortfolioWorkExperience"> | Date | string
    to?: DateTimeNullableFilter<"PortfolioWorkExperience"> | Date | string | null
    createdAt?: DateTimeFilter<"PortfolioWorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioWorkExperience"> | Date | string
    portfolio?: XOR<PortfolioScalarRelationFilter, PortfolioWhereInput>
  }, "id">

  export type PortfolioWorkExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    role?: SortOrder
    company?: SortOrder
    image?: SortOrder
    from?: SortOrder
    to?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortfolioWorkExperienceCountOrderByAggregateInput
    _avg?: PortfolioWorkExperienceAvgOrderByAggregateInput
    _max?: PortfolioWorkExperienceMaxOrderByAggregateInput
    _min?: PortfolioWorkExperienceMinOrderByAggregateInput
    _sum?: PortfolioWorkExperienceSumOrderByAggregateInput
  }

  export type PortfolioWorkExperienceScalarWhereWithAggregatesInput = {
    AND?: PortfolioWorkExperienceScalarWhereWithAggregatesInput | PortfolioWorkExperienceScalarWhereWithAggregatesInput[]
    OR?: PortfolioWorkExperienceScalarWhereWithAggregatesInput[]
    NOT?: PortfolioWorkExperienceScalarWhereWithAggregatesInput | PortfolioWorkExperienceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PortfolioWorkExperience"> | number
    portfolioId?: IntWithAggregatesFilter<"PortfolioWorkExperience"> | number
    role?: StringWithAggregatesFilter<"PortfolioWorkExperience"> | string
    company?: StringWithAggregatesFilter<"PortfolioWorkExperience"> | string
    image?: StringWithAggregatesFilter<"PortfolioWorkExperience"> | string
    from?: DateTimeWithAggregatesFilter<"PortfolioWorkExperience"> | Date | string
    to?: DateTimeNullableWithAggregatesFilter<"PortfolioWorkExperience"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PortfolioWorkExperience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PortfolioWorkExperience"> | Date | string
  }

  export type PortfolioSkillWhereInput = {
    AND?: PortfolioSkillWhereInput | PortfolioSkillWhereInput[]
    OR?: PortfolioSkillWhereInput[]
    NOT?: PortfolioSkillWhereInput | PortfolioSkillWhereInput[]
    id?: IntFilter<"PortfolioSkill"> | number
    portfolioId?: IntFilter<"PortfolioSkill"> | number
    name?: StringFilter<"PortfolioSkill"> | string
    createdAt?: DateTimeFilter<"PortfolioSkill"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioSkill"> | Date | string
    portfolio?: XOR<PortfolioScalarRelationFilter, PortfolioWhereInput>
  }

  export type PortfolioSkillOrderByWithRelationInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolio?: PortfolioOrderByWithRelationInput
  }

  export type PortfolioSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PortfolioSkillWhereInput | PortfolioSkillWhereInput[]
    OR?: PortfolioSkillWhereInput[]
    NOT?: PortfolioSkillWhereInput | PortfolioSkillWhereInput[]
    portfolioId?: IntFilter<"PortfolioSkill"> | number
    name?: StringFilter<"PortfolioSkill"> | string
    createdAt?: DateTimeFilter<"PortfolioSkill"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioSkill"> | Date | string
    portfolio?: XOR<PortfolioScalarRelationFilter, PortfolioWhereInput>
  }, "id">

  export type PortfolioSkillOrderByWithAggregationInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortfolioSkillCountOrderByAggregateInput
    _avg?: PortfolioSkillAvgOrderByAggregateInput
    _max?: PortfolioSkillMaxOrderByAggregateInput
    _min?: PortfolioSkillMinOrderByAggregateInput
    _sum?: PortfolioSkillSumOrderByAggregateInput
  }

  export type PortfolioSkillScalarWhereWithAggregatesInput = {
    AND?: PortfolioSkillScalarWhereWithAggregatesInput | PortfolioSkillScalarWhereWithAggregatesInput[]
    OR?: PortfolioSkillScalarWhereWithAggregatesInput[]
    NOT?: PortfolioSkillScalarWhereWithAggregatesInput | PortfolioSkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PortfolioSkill"> | number
    portfolioId?: IntWithAggregatesFilter<"PortfolioSkill"> | number
    name?: StringWithAggregatesFilter<"PortfolioSkill"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PortfolioSkill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PortfolioSkill"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    freelancerId?: IntFilter<"Booking"> | number
    clientId?: IntFilter<"Booking"> | number
    wage?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    freelancerId?: SortOrder
    clientId?: SortOrder
    wage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    freelancerId?: IntFilter<"Booking"> | number
    clientId?: IntFilter<"Booking"> | number
    wage?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    freelancerId?: SortOrder
    clientId?: SortOrder
    wage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    freelancerId?: IntWithAggregatesFilter<"Booking"> | number
    clientId?: IntWithAggregatesFilter<"Booking"> | number
    wage?: DecimalWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type UserCreateInput = {
    name?: string | null
    avatar?: string | null
    role?: number
    phone?: string | null
    gender?: number | null
    email?: string | null
    biography?: string | null
    address?: string | null
    occupation?: string | null
    facebookLink?: string | null
    instagramLink?: string | null
    youtubeLink?: string | null
    tiktokLink?: string | null
    avatarPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profileWorkExperiences?: ProfileWorkExperienceCreateNestedManyWithoutUserInput
    profileAchievements?: ProfileAchievementCreateNestedManyWithoutUserInput
    profileProminentWorks?: ProfileProminentWorkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    avatar?: string | null
    role?: number
    phone?: string | null
    gender?: number | null
    email?: string | null
    biography?: string | null
    address?: string | null
    occupation?: string | null
    facebookLink?: string | null
    instagramLink?: string | null
    youtubeLink?: string | null
    tiktokLink?: string | null
    avatarPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profileWorkExperiences?: ProfileWorkExperienceUncheckedCreateNestedManyWithoutUserInput
    profileAchievements?: ProfileAchievementUncheckedCreateNestedManyWithoutUserInput
    profileProminentWorks?: ProfileProminentWorkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileWorkExperiences?: ProfileWorkExperienceUpdateManyWithoutUserNestedInput
    profileAchievements?: ProfileAchievementUpdateManyWithoutUserNestedInput
    profileProminentWorks?: ProfileProminentWorkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileWorkExperiences?: ProfileWorkExperienceUncheckedUpdateManyWithoutUserNestedInput
    profileAchievements?: ProfileAchievementUncheckedUpdateManyWithoutUserNestedInput
    profileProminentWorks?: ProfileProminentWorkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    avatar?: string | null
    role?: number
    phone?: string | null
    gender?: number | null
    email?: string | null
    biography?: string | null
    address?: string | null
    occupation?: string | null
    facebookLink?: string | null
    instagramLink?: string | null
    youtubeLink?: string | null
    tiktokLink?: string | null
    avatarPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthCreateInput = {
    userId: number
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthUncheckedCreateInput = {
    id?: number
    userId: number
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthCreateManyInput = {
    id?: number
    userId: number
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileWorkExperienceCreateInput = {
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileWorkExperiencesInput
  }

  export type ProfileWorkExperienceUncheckedCreateInput = {
    id?: number
    userId: number
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileWorkExperienceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileWorkExperiencesNestedInput
  }

  export type ProfileWorkExperienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileWorkExperienceCreateManyInput = {
    id?: number
    userId: number
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileWorkExperienceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileWorkExperienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileAchievementCreateInput = {
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileAchievementsInput
  }

  export type ProfileAchievementUncheckedCreateInput = {
    id?: number
    userId: number
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileAchievementUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileAchievementsNestedInput
  }

  export type ProfileAchievementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileAchievementCreateManyInput = {
    id?: number
    userId: number
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileAchievementUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileAchievementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileProminentWorkCreateInput = {
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    wage?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileProminentWorksInput
  }

  export type ProfileProminentWorkUncheckedCreateInput = {
    id?: number
    userId: number
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    wage?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileProminentWorkUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wage?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileProminentWorksNestedInput
  }

  export type ProfileProminentWorkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wage?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileProminentWorkCreateManyInput = {
    id?: number
    userId: number
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    wage?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileProminentWorkUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wage?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileProminentWorkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wage?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCreateInput = {
    name: string
    skillDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioProminentProjects?: PortfolioProminentProjectCreateNestedManyWithoutPortfolioInput
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackCreateNestedManyWithoutPortfolioInput
    portfolioAboutSection?: PortfolioAboutSectionCreateNestedOneWithoutPortfolioInput
    portfolioWorkExperiences?: PortfolioWorkExperienceCreateNestedManyWithoutPortfolioInput
    portfolioSkills?: PortfolioSkillCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateInput = {
    id?: number
    name: string
    skillDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioProminentProjects?: PortfolioProminentProjectUncheckedCreateNestedManyWithoutPortfolioInput
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackUncheckedCreateNestedManyWithoutPortfolioInput
    portfolioAboutSection?: PortfolioAboutSectionUncheckedCreateNestedOneWithoutPortfolioInput
    portfolioWorkExperiences?: PortfolioWorkExperienceUncheckedCreateNestedManyWithoutPortfolioInput
    portfolioSkills?: PortfolioSkillUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    skillDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioProminentProjects?: PortfolioProminentProjectUpdateManyWithoutPortfolioNestedInput
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackUpdateManyWithoutPortfolioNestedInput
    portfolioAboutSection?: PortfolioAboutSectionUpdateOneWithoutPortfolioNestedInput
    portfolioWorkExperiences?: PortfolioWorkExperienceUpdateManyWithoutPortfolioNestedInput
    portfolioSkills?: PortfolioSkillUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    skillDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioProminentProjects?: PortfolioProminentProjectUncheckedUpdateManyWithoutPortfolioNestedInput
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackUncheckedUpdateManyWithoutPortfolioNestedInput
    portfolioAboutSection?: PortfolioAboutSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    portfolioWorkExperiences?: PortfolioWorkExperienceUncheckedUpdateManyWithoutPortfolioNestedInput
    portfolioSkills?: PortfolioSkillUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioCreateManyInput = {
    id?: number
    name: string
    skillDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    skillDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    skillDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioProminentProjectCreateInput = {
    description: string
    role: string
    company: string
    detail?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolio: PortfolioCreateNestedOneWithoutPortfolioProminentProjectsInput
    portfolioProminentProjectImages?: PortfolioProminentProjectImageCreateNestedManyWithoutPortfolioProminentProjectInput
  }

  export type PortfolioProminentProjectUncheckedCreateInput = {
    id?: number
    portfolioId: number
    description: string
    role: string
    company: string
    detail?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioProminentProjectImages?: PortfolioProminentProjectImageUncheckedCreateNestedManyWithoutPortfolioProminentProjectInput
  }

  export type PortfolioProminentProjectUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioUpdateOneRequiredWithoutPortfolioProminentProjectsNestedInput
    portfolioProminentProjectImages?: PortfolioProminentProjectImageUpdateManyWithoutPortfolioProminentProjectNestedInput
  }

  export type PortfolioProminentProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    portfolioId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioProminentProjectImages?: PortfolioProminentProjectImageUncheckedUpdateManyWithoutPortfolioProminentProjectNestedInput
  }

  export type PortfolioProminentProjectCreateManyInput = {
    id?: number
    portfolioId: number
    description: string
    role: string
    company: string
    detail?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioProminentProjectUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioProminentProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    portfolioId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioProminentProjectImageCreateInput = {
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioProminentProject: PortfolioProminentProjectCreateNestedOneWithoutPortfolioProminentProjectImagesInput
  }

  export type PortfolioProminentProjectImageUncheckedCreateInput = {
    id?: number
    portfolioProminentProjectId: number
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioProminentProjectImageUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioProminentProject?: PortfolioProminentProjectUpdateOneRequiredWithoutPortfolioProminentProjectImagesNestedInput
  }

  export type PortfolioProminentProjectImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    portfolioProminentProjectId?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioProminentProjectImageCreateManyInput = {
    id?: number
    portfolioProminentProjectId: number
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioProminentProjectImageUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioProminentProjectImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    portfolioProminentProjectId?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCustomerFeedbackCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolio: PortfolioCreateNestedOneWithoutPortfolioCustomerFeedbacksInput
  }

  export type PortfolioCustomerFeedbackUncheckedCreateInput = {
    id?: number
    portfolioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioCustomerFeedbackUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioUpdateOneRequiredWithoutPortfolioCustomerFeedbacksNestedInput
  }

  export type PortfolioCustomerFeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    portfolioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCustomerFeedbackCreateManyInput = {
    id?: number
    portfolioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioCustomerFeedbackUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCustomerFeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    portfolioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioAboutSectionCreateInput = {
    avatar: string
    overview: string
    detail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolio?: PortfolioCreateNestedOneWithoutPortfolioAboutSectionInput
  }

  export type PortfolioAboutSectionUncheckedCreateInput = {
    id?: number
    portfolioId?: number | null
    avatar: string
    overview: string
    detail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioAboutSectionUpdateInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioUpdateOneWithoutPortfolioAboutSectionNestedInput
  }

  export type PortfolioAboutSectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    portfolioId?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioAboutSectionCreateManyInput = {
    id?: number
    portfolioId?: number | null
    avatar: string
    overview: string
    detail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioAboutSectionUpdateManyMutationInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioAboutSectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    portfolioId?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioWorkExperienceCreateInput = {
    role: string
    company: string
    image: string
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolio: PortfolioCreateNestedOneWithoutPortfolioWorkExperiencesInput
  }

  export type PortfolioWorkExperienceUncheckedCreateInput = {
    id?: number
    portfolioId: number
    role: string
    company: string
    image: string
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioWorkExperienceUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioUpdateOneRequiredWithoutPortfolioWorkExperiencesNestedInput
  }

  export type PortfolioWorkExperienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    portfolioId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioWorkExperienceCreateManyInput = {
    id?: number
    portfolioId: number
    role: string
    company: string
    image: string
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioWorkExperienceUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioWorkExperienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    portfolioId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioSkillCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolio: PortfolioCreateNestedOneWithoutPortfolioSkillsInput
  }

  export type PortfolioSkillUncheckedCreateInput = {
    id?: number
    portfolioId: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioSkillUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioUpdateOneRequiredWithoutPortfolioSkillsNestedInput
  }

  export type PortfolioSkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    portfolioId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioSkillCreateManyInput = {
    id?: number
    portfolioId: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioSkillUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioSkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    portfolioId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    freelancerId: number
    clientId: number
    wage: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    freelancerId: number
    clientId: number
    wage: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    freelancerId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    wage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    freelancerId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    wage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: number
    freelancerId: number
    clientId: number
    wage: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    freelancerId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    wage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    freelancerId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    wage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProfileWorkExperienceListRelationFilter = {
    every?: ProfileWorkExperienceWhereInput
    some?: ProfileWorkExperienceWhereInput
    none?: ProfileWorkExperienceWhereInput
  }

  export type ProfileAchievementListRelationFilter = {
    every?: ProfileAchievementWhereInput
    some?: ProfileAchievementWhereInput
    none?: ProfileAchievementWhereInput
  }

  export type ProfileProminentWorkListRelationFilter = {
    every?: ProfileProminentWorkWhereInput
    some?: ProfileProminentWorkWhereInput
    none?: ProfileProminentWorkWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfileWorkExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileAchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileProminentWorkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    biography?: SortOrder
    address?: SortOrder
    occupation?: SortOrder
    facebookLink?: SortOrder
    instagramLink?: SortOrder
    youtubeLink?: SortOrder
    tiktokLink?: SortOrder
    avatarPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    gender?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    biography?: SortOrder
    address?: SortOrder
    occupation?: SortOrder
    facebookLink?: SortOrder
    instagramLink?: SortOrder
    youtubeLink?: SortOrder
    tiktokLink?: SortOrder
    avatarPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    biography?: SortOrder
    address?: SortOrder
    occupation?: SortOrder
    facebookLink?: SortOrder
    instagramLink?: SortOrder
    youtubeLink?: SortOrder
    tiktokLink?: SortOrder
    avatarPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    gender?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AuthCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AuthMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileWorkExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileWorkExperienceAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileWorkExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileWorkExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileWorkExperienceSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProfileAchievementCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileAchievementAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileAchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileAchievementMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileAchievementSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileProminentWorkCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    from?: SortOrder
    to?: SortOrder
    wage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileProminentWorkAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wage?: SortOrder
  }

  export type ProfileProminentWorkMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    from?: SortOrder
    to?: SortOrder
    wage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileProminentWorkMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    from?: SortOrder
    to?: SortOrder
    wage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileProminentWorkSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wage?: SortOrder
  }

  export type PortfolioProminentProjectListRelationFilter = {
    every?: PortfolioProminentProjectWhereInput
    some?: PortfolioProminentProjectWhereInput
    none?: PortfolioProminentProjectWhereInput
  }

  export type PortfolioCustomerFeedbackListRelationFilter = {
    every?: PortfolioCustomerFeedbackWhereInput
    some?: PortfolioCustomerFeedbackWhereInput
    none?: PortfolioCustomerFeedbackWhereInput
  }

  export type PortfolioAboutSectionNullableScalarRelationFilter = {
    is?: PortfolioAboutSectionWhereInput | null
    isNot?: PortfolioAboutSectionWhereInput | null
  }

  export type PortfolioWorkExperienceListRelationFilter = {
    every?: PortfolioWorkExperienceWhereInput
    some?: PortfolioWorkExperienceWhereInput
    none?: PortfolioWorkExperienceWhereInput
  }

  export type PortfolioSkillListRelationFilter = {
    every?: PortfolioSkillWhereInput
    some?: PortfolioSkillWhereInput
    none?: PortfolioSkillWhereInput
  }

  export type PortfolioProminentProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortfolioCustomerFeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortfolioWorkExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortfolioSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortfolioCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    skillDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PortfolioMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    skillDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    skillDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PortfolioScalarRelationFilter = {
    is?: PortfolioWhereInput
    isNot?: PortfolioWhereInput
  }

  export type PortfolioProminentProjectImageListRelationFilter = {
    every?: PortfolioProminentProjectImageWhereInput
    some?: PortfolioProminentProjectImageWhereInput
    none?: PortfolioProminentProjectImageWhereInput
  }

  export type PortfolioProminentProjectImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortfolioProminentProjectCountOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    description?: SortOrder
    role?: SortOrder
    company?: SortOrder
    detail?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioProminentProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
  }

  export type PortfolioProminentProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    description?: SortOrder
    role?: SortOrder
    company?: SortOrder
    detail?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioProminentProjectMinOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    description?: SortOrder
    role?: SortOrder
    company?: SortOrder
    detail?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioProminentProjectSumOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
  }

  export type PortfolioProminentProjectScalarRelationFilter = {
    is?: PortfolioProminentProjectWhereInput
    isNot?: PortfolioProminentProjectWhereInput
  }

  export type PortfolioProminentProjectImageCountOrderByAggregateInput = {
    id?: SortOrder
    portfolioProminentProjectId?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioProminentProjectImageAvgOrderByAggregateInput = {
    id?: SortOrder
    portfolioProminentProjectId?: SortOrder
  }

  export type PortfolioProminentProjectImageMaxOrderByAggregateInput = {
    id?: SortOrder
    portfolioProminentProjectId?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioProminentProjectImageMinOrderByAggregateInput = {
    id?: SortOrder
    portfolioProminentProjectId?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioProminentProjectImageSumOrderByAggregateInput = {
    id?: SortOrder
    portfolioProminentProjectId?: SortOrder
  }

  export type PortfolioCustomerFeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioCustomerFeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
  }

  export type PortfolioCustomerFeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioCustomerFeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioCustomerFeedbackSumOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
  }

  export type PortfolioNullableScalarRelationFilter = {
    is?: PortfolioWhereInput | null
    isNot?: PortfolioWhereInput | null
  }

  export type PortfolioAboutSectionCountOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    avatar?: SortOrder
    overview?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioAboutSectionAvgOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
  }

  export type PortfolioAboutSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    avatar?: SortOrder
    overview?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioAboutSectionMinOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    avatar?: SortOrder
    overview?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioAboutSectionSumOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
  }

  export type PortfolioWorkExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    role?: SortOrder
    company?: SortOrder
    image?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioWorkExperienceAvgOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
  }

  export type PortfolioWorkExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    role?: SortOrder
    company?: SortOrder
    image?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioWorkExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    role?: SortOrder
    company?: SortOrder
    image?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioWorkExperienceSumOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
  }

  export type PortfolioSkillCountOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioSkillAvgOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
  }

  export type PortfolioSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioSkillMinOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioSkillSumOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    freelancerId?: SortOrder
    clientId?: SortOrder
    wage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    freelancerId?: SortOrder
    clientId?: SortOrder
    wage?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    freelancerId?: SortOrder
    clientId?: SortOrder
    wage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    freelancerId?: SortOrder
    clientId?: SortOrder
    wage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    freelancerId?: SortOrder
    clientId?: SortOrder
    wage?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ProfileWorkExperienceCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfileWorkExperienceCreateWithoutUserInput, ProfileWorkExperienceUncheckedCreateWithoutUserInput> | ProfileWorkExperienceCreateWithoutUserInput[] | ProfileWorkExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileWorkExperienceCreateOrConnectWithoutUserInput | ProfileWorkExperienceCreateOrConnectWithoutUserInput[]
    createMany?: ProfileWorkExperienceCreateManyUserInputEnvelope
    connect?: ProfileWorkExperienceWhereUniqueInput | ProfileWorkExperienceWhereUniqueInput[]
  }

  export type ProfileAchievementCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfileAchievementCreateWithoutUserInput, ProfileAchievementUncheckedCreateWithoutUserInput> | ProfileAchievementCreateWithoutUserInput[] | ProfileAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileAchievementCreateOrConnectWithoutUserInput | ProfileAchievementCreateOrConnectWithoutUserInput[]
    createMany?: ProfileAchievementCreateManyUserInputEnvelope
    connect?: ProfileAchievementWhereUniqueInput | ProfileAchievementWhereUniqueInput[]
  }

  export type ProfileProminentWorkCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfileProminentWorkCreateWithoutUserInput, ProfileProminentWorkUncheckedCreateWithoutUserInput> | ProfileProminentWorkCreateWithoutUserInput[] | ProfileProminentWorkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileProminentWorkCreateOrConnectWithoutUserInput | ProfileProminentWorkCreateOrConnectWithoutUserInput[]
    createMany?: ProfileProminentWorkCreateManyUserInputEnvelope
    connect?: ProfileProminentWorkWhereUniqueInput | ProfileProminentWorkWhereUniqueInput[]
  }

  export type ProfileWorkExperienceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfileWorkExperienceCreateWithoutUserInput, ProfileWorkExperienceUncheckedCreateWithoutUserInput> | ProfileWorkExperienceCreateWithoutUserInput[] | ProfileWorkExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileWorkExperienceCreateOrConnectWithoutUserInput | ProfileWorkExperienceCreateOrConnectWithoutUserInput[]
    createMany?: ProfileWorkExperienceCreateManyUserInputEnvelope
    connect?: ProfileWorkExperienceWhereUniqueInput | ProfileWorkExperienceWhereUniqueInput[]
  }

  export type ProfileAchievementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfileAchievementCreateWithoutUserInput, ProfileAchievementUncheckedCreateWithoutUserInput> | ProfileAchievementCreateWithoutUserInput[] | ProfileAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileAchievementCreateOrConnectWithoutUserInput | ProfileAchievementCreateOrConnectWithoutUserInput[]
    createMany?: ProfileAchievementCreateManyUserInputEnvelope
    connect?: ProfileAchievementWhereUniqueInput | ProfileAchievementWhereUniqueInput[]
  }

  export type ProfileProminentWorkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfileProminentWorkCreateWithoutUserInput, ProfileProminentWorkUncheckedCreateWithoutUserInput> | ProfileProminentWorkCreateWithoutUserInput[] | ProfileProminentWorkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileProminentWorkCreateOrConnectWithoutUserInput | ProfileProminentWorkCreateOrConnectWithoutUserInput[]
    createMany?: ProfileProminentWorkCreateManyUserInputEnvelope
    connect?: ProfileProminentWorkWhereUniqueInput | ProfileProminentWorkWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfileWorkExperienceUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfileWorkExperienceCreateWithoutUserInput, ProfileWorkExperienceUncheckedCreateWithoutUserInput> | ProfileWorkExperienceCreateWithoutUserInput[] | ProfileWorkExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileWorkExperienceCreateOrConnectWithoutUserInput | ProfileWorkExperienceCreateOrConnectWithoutUserInput[]
    upsert?: ProfileWorkExperienceUpsertWithWhereUniqueWithoutUserInput | ProfileWorkExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfileWorkExperienceCreateManyUserInputEnvelope
    set?: ProfileWorkExperienceWhereUniqueInput | ProfileWorkExperienceWhereUniqueInput[]
    disconnect?: ProfileWorkExperienceWhereUniqueInput | ProfileWorkExperienceWhereUniqueInput[]
    delete?: ProfileWorkExperienceWhereUniqueInput | ProfileWorkExperienceWhereUniqueInput[]
    connect?: ProfileWorkExperienceWhereUniqueInput | ProfileWorkExperienceWhereUniqueInput[]
    update?: ProfileWorkExperienceUpdateWithWhereUniqueWithoutUserInput | ProfileWorkExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfileWorkExperienceUpdateManyWithWhereWithoutUserInput | ProfileWorkExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfileWorkExperienceScalarWhereInput | ProfileWorkExperienceScalarWhereInput[]
  }

  export type ProfileAchievementUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfileAchievementCreateWithoutUserInput, ProfileAchievementUncheckedCreateWithoutUserInput> | ProfileAchievementCreateWithoutUserInput[] | ProfileAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileAchievementCreateOrConnectWithoutUserInput | ProfileAchievementCreateOrConnectWithoutUserInput[]
    upsert?: ProfileAchievementUpsertWithWhereUniqueWithoutUserInput | ProfileAchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfileAchievementCreateManyUserInputEnvelope
    set?: ProfileAchievementWhereUniqueInput | ProfileAchievementWhereUniqueInput[]
    disconnect?: ProfileAchievementWhereUniqueInput | ProfileAchievementWhereUniqueInput[]
    delete?: ProfileAchievementWhereUniqueInput | ProfileAchievementWhereUniqueInput[]
    connect?: ProfileAchievementWhereUniqueInput | ProfileAchievementWhereUniqueInput[]
    update?: ProfileAchievementUpdateWithWhereUniqueWithoutUserInput | ProfileAchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfileAchievementUpdateManyWithWhereWithoutUserInput | ProfileAchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfileAchievementScalarWhereInput | ProfileAchievementScalarWhereInput[]
  }

  export type ProfileProminentWorkUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfileProminentWorkCreateWithoutUserInput, ProfileProminentWorkUncheckedCreateWithoutUserInput> | ProfileProminentWorkCreateWithoutUserInput[] | ProfileProminentWorkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileProminentWorkCreateOrConnectWithoutUserInput | ProfileProminentWorkCreateOrConnectWithoutUserInput[]
    upsert?: ProfileProminentWorkUpsertWithWhereUniqueWithoutUserInput | ProfileProminentWorkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfileProminentWorkCreateManyUserInputEnvelope
    set?: ProfileProminentWorkWhereUniqueInput | ProfileProminentWorkWhereUniqueInput[]
    disconnect?: ProfileProminentWorkWhereUniqueInput | ProfileProminentWorkWhereUniqueInput[]
    delete?: ProfileProminentWorkWhereUniqueInput | ProfileProminentWorkWhereUniqueInput[]
    connect?: ProfileProminentWorkWhereUniqueInput | ProfileProminentWorkWhereUniqueInput[]
    update?: ProfileProminentWorkUpdateWithWhereUniqueWithoutUserInput | ProfileProminentWorkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfileProminentWorkUpdateManyWithWhereWithoutUserInput | ProfileProminentWorkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfileProminentWorkScalarWhereInput | ProfileProminentWorkScalarWhereInput[]
  }

  export type ProfileWorkExperienceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfileWorkExperienceCreateWithoutUserInput, ProfileWorkExperienceUncheckedCreateWithoutUserInput> | ProfileWorkExperienceCreateWithoutUserInput[] | ProfileWorkExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileWorkExperienceCreateOrConnectWithoutUserInput | ProfileWorkExperienceCreateOrConnectWithoutUserInput[]
    upsert?: ProfileWorkExperienceUpsertWithWhereUniqueWithoutUserInput | ProfileWorkExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfileWorkExperienceCreateManyUserInputEnvelope
    set?: ProfileWorkExperienceWhereUniqueInput | ProfileWorkExperienceWhereUniqueInput[]
    disconnect?: ProfileWorkExperienceWhereUniqueInput | ProfileWorkExperienceWhereUniqueInput[]
    delete?: ProfileWorkExperienceWhereUniqueInput | ProfileWorkExperienceWhereUniqueInput[]
    connect?: ProfileWorkExperienceWhereUniqueInput | ProfileWorkExperienceWhereUniqueInput[]
    update?: ProfileWorkExperienceUpdateWithWhereUniqueWithoutUserInput | ProfileWorkExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfileWorkExperienceUpdateManyWithWhereWithoutUserInput | ProfileWorkExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfileWorkExperienceScalarWhereInput | ProfileWorkExperienceScalarWhereInput[]
  }

  export type ProfileAchievementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfileAchievementCreateWithoutUserInput, ProfileAchievementUncheckedCreateWithoutUserInput> | ProfileAchievementCreateWithoutUserInput[] | ProfileAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileAchievementCreateOrConnectWithoutUserInput | ProfileAchievementCreateOrConnectWithoutUserInput[]
    upsert?: ProfileAchievementUpsertWithWhereUniqueWithoutUserInput | ProfileAchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfileAchievementCreateManyUserInputEnvelope
    set?: ProfileAchievementWhereUniqueInput | ProfileAchievementWhereUniqueInput[]
    disconnect?: ProfileAchievementWhereUniqueInput | ProfileAchievementWhereUniqueInput[]
    delete?: ProfileAchievementWhereUniqueInput | ProfileAchievementWhereUniqueInput[]
    connect?: ProfileAchievementWhereUniqueInput | ProfileAchievementWhereUniqueInput[]
    update?: ProfileAchievementUpdateWithWhereUniqueWithoutUserInput | ProfileAchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfileAchievementUpdateManyWithWhereWithoutUserInput | ProfileAchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfileAchievementScalarWhereInput | ProfileAchievementScalarWhereInput[]
  }

  export type ProfileProminentWorkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfileProminentWorkCreateWithoutUserInput, ProfileProminentWorkUncheckedCreateWithoutUserInput> | ProfileProminentWorkCreateWithoutUserInput[] | ProfileProminentWorkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileProminentWorkCreateOrConnectWithoutUserInput | ProfileProminentWorkCreateOrConnectWithoutUserInput[]
    upsert?: ProfileProminentWorkUpsertWithWhereUniqueWithoutUserInput | ProfileProminentWorkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfileProminentWorkCreateManyUserInputEnvelope
    set?: ProfileProminentWorkWhereUniqueInput | ProfileProminentWorkWhereUniqueInput[]
    disconnect?: ProfileProminentWorkWhereUniqueInput | ProfileProminentWorkWhereUniqueInput[]
    delete?: ProfileProminentWorkWhereUniqueInput | ProfileProminentWorkWhereUniqueInput[]
    connect?: ProfileProminentWorkWhereUniqueInput | ProfileProminentWorkWhereUniqueInput[]
    update?: ProfileProminentWorkUpdateWithWhereUniqueWithoutUserInput | ProfileProminentWorkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfileProminentWorkUpdateManyWithWhereWithoutUserInput | ProfileProminentWorkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfileProminentWorkScalarWhereInput | ProfileProminentWorkScalarWhereInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserCreateNestedOneWithoutProfileWorkExperiencesInput = {
    create?: XOR<UserCreateWithoutProfileWorkExperiencesInput, UserUncheckedCreateWithoutProfileWorkExperiencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileWorkExperiencesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutProfileWorkExperiencesNestedInput = {
    create?: XOR<UserCreateWithoutProfileWorkExperiencesInput, UserUncheckedCreateWithoutProfileWorkExperiencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileWorkExperiencesInput
    upsert?: UserUpsertWithoutProfileWorkExperiencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileWorkExperiencesInput, UserUpdateWithoutProfileWorkExperiencesInput>, UserUncheckedUpdateWithoutProfileWorkExperiencesInput>
  }

  export type UserCreateNestedOneWithoutProfileAchievementsInput = {
    create?: XOR<UserCreateWithoutProfileAchievementsInput, UserUncheckedCreateWithoutProfileAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileAchievementsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileAchievementsNestedInput = {
    create?: XOR<UserCreateWithoutProfileAchievementsInput, UserUncheckedCreateWithoutProfileAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileAchievementsInput
    upsert?: UserUpsertWithoutProfileAchievementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileAchievementsInput, UserUpdateWithoutProfileAchievementsInput>, UserUncheckedUpdateWithoutProfileAchievementsInput>
  }

  export type UserCreateNestedOneWithoutProfileProminentWorksInput = {
    create?: XOR<UserCreateWithoutProfileProminentWorksInput, UserUncheckedCreateWithoutProfileProminentWorksInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileProminentWorksInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileProminentWorksNestedInput = {
    create?: XOR<UserCreateWithoutProfileProminentWorksInput, UserUncheckedCreateWithoutProfileProminentWorksInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileProminentWorksInput
    upsert?: UserUpsertWithoutProfileProminentWorksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileProminentWorksInput, UserUpdateWithoutProfileProminentWorksInput>, UserUncheckedUpdateWithoutProfileProminentWorksInput>
  }

  export type PortfolioProminentProjectCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<PortfolioProminentProjectCreateWithoutPortfolioInput, PortfolioProminentProjectUncheckedCreateWithoutPortfolioInput> | PortfolioProminentProjectCreateWithoutPortfolioInput[] | PortfolioProminentProjectUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioProminentProjectCreateOrConnectWithoutPortfolioInput | PortfolioProminentProjectCreateOrConnectWithoutPortfolioInput[]
    createMany?: PortfolioProminentProjectCreateManyPortfolioInputEnvelope
    connect?: PortfolioProminentProjectWhereUniqueInput | PortfolioProminentProjectWhereUniqueInput[]
  }

  export type PortfolioCustomerFeedbackCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<PortfolioCustomerFeedbackCreateWithoutPortfolioInput, PortfolioCustomerFeedbackUncheckedCreateWithoutPortfolioInput> | PortfolioCustomerFeedbackCreateWithoutPortfolioInput[] | PortfolioCustomerFeedbackUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioCustomerFeedbackCreateOrConnectWithoutPortfolioInput | PortfolioCustomerFeedbackCreateOrConnectWithoutPortfolioInput[]
    createMany?: PortfolioCustomerFeedbackCreateManyPortfolioInputEnvelope
    connect?: PortfolioCustomerFeedbackWhereUniqueInput | PortfolioCustomerFeedbackWhereUniqueInput[]
  }

  export type PortfolioAboutSectionCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<PortfolioAboutSectionCreateWithoutPortfolioInput, PortfolioAboutSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: PortfolioAboutSectionCreateOrConnectWithoutPortfolioInput
    connect?: PortfolioAboutSectionWhereUniqueInput
  }

  export type PortfolioWorkExperienceCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<PortfolioWorkExperienceCreateWithoutPortfolioInput, PortfolioWorkExperienceUncheckedCreateWithoutPortfolioInput> | PortfolioWorkExperienceCreateWithoutPortfolioInput[] | PortfolioWorkExperienceUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioWorkExperienceCreateOrConnectWithoutPortfolioInput | PortfolioWorkExperienceCreateOrConnectWithoutPortfolioInput[]
    createMany?: PortfolioWorkExperienceCreateManyPortfolioInputEnvelope
    connect?: PortfolioWorkExperienceWhereUniqueInput | PortfolioWorkExperienceWhereUniqueInput[]
  }

  export type PortfolioSkillCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<PortfolioSkillCreateWithoutPortfolioInput, PortfolioSkillUncheckedCreateWithoutPortfolioInput> | PortfolioSkillCreateWithoutPortfolioInput[] | PortfolioSkillUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioSkillCreateOrConnectWithoutPortfolioInput | PortfolioSkillCreateOrConnectWithoutPortfolioInput[]
    createMany?: PortfolioSkillCreateManyPortfolioInputEnvelope
    connect?: PortfolioSkillWhereUniqueInput | PortfolioSkillWhereUniqueInput[]
  }

  export type PortfolioProminentProjectUncheckedCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<PortfolioProminentProjectCreateWithoutPortfolioInput, PortfolioProminentProjectUncheckedCreateWithoutPortfolioInput> | PortfolioProminentProjectCreateWithoutPortfolioInput[] | PortfolioProminentProjectUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioProminentProjectCreateOrConnectWithoutPortfolioInput | PortfolioProminentProjectCreateOrConnectWithoutPortfolioInput[]
    createMany?: PortfolioProminentProjectCreateManyPortfolioInputEnvelope
    connect?: PortfolioProminentProjectWhereUniqueInput | PortfolioProminentProjectWhereUniqueInput[]
  }

  export type PortfolioCustomerFeedbackUncheckedCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<PortfolioCustomerFeedbackCreateWithoutPortfolioInput, PortfolioCustomerFeedbackUncheckedCreateWithoutPortfolioInput> | PortfolioCustomerFeedbackCreateWithoutPortfolioInput[] | PortfolioCustomerFeedbackUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioCustomerFeedbackCreateOrConnectWithoutPortfolioInput | PortfolioCustomerFeedbackCreateOrConnectWithoutPortfolioInput[]
    createMany?: PortfolioCustomerFeedbackCreateManyPortfolioInputEnvelope
    connect?: PortfolioCustomerFeedbackWhereUniqueInput | PortfolioCustomerFeedbackWhereUniqueInput[]
  }

  export type PortfolioAboutSectionUncheckedCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<PortfolioAboutSectionCreateWithoutPortfolioInput, PortfolioAboutSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: PortfolioAboutSectionCreateOrConnectWithoutPortfolioInput
    connect?: PortfolioAboutSectionWhereUniqueInput
  }

  export type PortfolioWorkExperienceUncheckedCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<PortfolioWorkExperienceCreateWithoutPortfolioInput, PortfolioWorkExperienceUncheckedCreateWithoutPortfolioInput> | PortfolioWorkExperienceCreateWithoutPortfolioInput[] | PortfolioWorkExperienceUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioWorkExperienceCreateOrConnectWithoutPortfolioInput | PortfolioWorkExperienceCreateOrConnectWithoutPortfolioInput[]
    createMany?: PortfolioWorkExperienceCreateManyPortfolioInputEnvelope
    connect?: PortfolioWorkExperienceWhereUniqueInput | PortfolioWorkExperienceWhereUniqueInput[]
  }

  export type PortfolioSkillUncheckedCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<PortfolioSkillCreateWithoutPortfolioInput, PortfolioSkillUncheckedCreateWithoutPortfolioInput> | PortfolioSkillCreateWithoutPortfolioInput[] | PortfolioSkillUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioSkillCreateOrConnectWithoutPortfolioInput | PortfolioSkillCreateOrConnectWithoutPortfolioInput[]
    createMany?: PortfolioSkillCreateManyPortfolioInputEnvelope
    connect?: PortfolioSkillWhereUniqueInput | PortfolioSkillWhereUniqueInput[]
  }

  export type PortfolioProminentProjectUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<PortfolioProminentProjectCreateWithoutPortfolioInput, PortfolioProminentProjectUncheckedCreateWithoutPortfolioInput> | PortfolioProminentProjectCreateWithoutPortfolioInput[] | PortfolioProminentProjectUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioProminentProjectCreateOrConnectWithoutPortfolioInput | PortfolioProminentProjectCreateOrConnectWithoutPortfolioInput[]
    upsert?: PortfolioProminentProjectUpsertWithWhereUniqueWithoutPortfolioInput | PortfolioProminentProjectUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: PortfolioProminentProjectCreateManyPortfolioInputEnvelope
    set?: PortfolioProminentProjectWhereUniqueInput | PortfolioProminentProjectWhereUniqueInput[]
    disconnect?: PortfolioProminentProjectWhereUniqueInput | PortfolioProminentProjectWhereUniqueInput[]
    delete?: PortfolioProminentProjectWhereUniqueInput | PortfolioProminentProjectWhereUniqueInput[]
    connect?: PortfolioProminentProjectWhereUniqueInput | PortfolioProminentProjectWhereUniqueInput[]
    update?: PortfolioProminentProjectUpdateWithWhereUniqueWithoutPortfolioInput | PortfolioProminentProjectUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: PortfolioProminentProjectUpdateManyWithWhereWithoutPortfolioInput | PortfolioProminentProjectUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: PortfolioProminentProjectScalarWhereInput | PortfolioProminentProjectScalarWhereInput[]
  }

  export type PortfolioCustomerFeedbackUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<PortfolioCustomerFeedbackCreateWithoutPortfolioInput, PortfolioCustomerFeedbackUncheckedCreateWithoutPortfolioInput> | PortfolioCustomerFeedbackCreateWithoutPortfolioInput[] | PortfolioCustomerFeedbackUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioCustomerFeedbackCreateOrConnectWithoutPortfolioInput | PortfolioCustomerFeedbackCreateOrConnectWithoutPortfolioInput[]
    upsert?: PortfolioCustomerFeedbackUpsertWithWhereUniqueWithoutPortfolioInput | PortfolioCustomerFeedbackUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: PortfolioCustomerFeedbackCreateManyPortfolioInputEnvelope
    set?: PortfolioCustomerFeedbackWhereUniqueInput | PortfolioCustomerFeedbackWhereUniqueInput[]
    disconnect?: PortfolioCustomerFeedbackWhereUniqueInput | PortfolioCustomerFeedbackWhereUniqueInput[]
    delete?: PortfolioCustomerFeedbackWhereUniqueInput | PortfolioCustomerFeedbackWhereUniqueInput[]
    connect?: PortfolioCustomerFeedbackWhereUniqueInput | PortfolioCustomerFeedbackWhereUniqueInput[]
    update?: PortfolioCustomerFeedbackUpdateWithWhereUniqueWithoutPortfolioInput | PortfolioCustomerFeedbackUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: PortfolioCustomerFeedbackUpdateManyWithWhereWithoutPortfolioInput | PortfolioCustomerFeedbackUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: PortfolioCustomerFeedbackScalarWhereInput | PortfolioCustomerFeedbackScalarWhereInput[]
  }

  export type PortfolioAboutSectionUpdateOneWithoutPortfolioNestedInput = {
    create?: XOR<PortfolioAboutSectionCreateWithoutPortfolioInput, PortfolioAboutSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: PortfolioAboutSectionCreateOrConnectWithoutPortfolioInput
    upsert?: PortfolioAboutSectionUpsertWithoutPortfolioInput
    disconnect?: PortfolioAboutSectionWhereInput | boolean
    delete?: PortfolioAboutSectionWhereInput | boolean
    connect?: PortfolioAboutSectionWhereUniqueInput
    update?: XOR<XOR<PortfolioAboutSectionUpdateToOneWithWhereWithoutPortfolioInput, PortfolioAboutSectionUpdateWithoutPortfolioInput>, PortfolioAboutSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type PortfolioWorkExperienceUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<PortfolioWorkExperienceCreateWithoutPortfolioInput, PortfolioWorkExperienceUncheckedCreateWithoutPortfolioInput> | PortfolioWorkExperienceCreateWithoutPortfolioInput[] | PortfolioWorkExperienceUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioWorkExperienceCreateOrConnectWithoutPortfolioInput | PortfolioWorkExperienceCreateOrConnectWithoutPortfolioInput[]
    upsert?: PortfolioWorkExperienceUpsertWithWhereUniqueWithoutPortfolioInput | PortfolioWorkExperienceUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: PortfolioWorkExperienceCreateManyPortfolioInputEnvelope
    set?: PortfolioWorkExperienceWhereUniqueInput | PortfolioWorkExperienceWhereUniqueInput[]
    disconnect?: PortfolioWorkExperienceWhereUniqueInput | PortfolioWorkExperienceWhereUniqueInput[]
    delete?: PortfolioWorkExperienceWhereUniqueInput | PortfolioWorkExperienceWhereUniqueInput[]
    connect?: PortfolioWorkExperienceWhereUniqueInput | PortfolioWorkExperienceWhereUniqueInput[]
    update?: PortfolioWorkExperienceUpdateWithWhereUniqueWithoutPortfolioInput | PortfolioWorkExperienceUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: PortfolioWorkExperienceUpdateManyWithWhereWithoutPortfolioInput | PortfolioWorkExperienceUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: PortfolioWorkExperienceScalarWhereInput | PortfolioWorkExperienceScalarWhereInput[]
  }

  export type PortfolioSkillUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<PortfolioSkillCreateWithoutPortfolioInput, PortfolioSkillUncheckedCreateWithoutPortfolioInput> | PortfolioSkillCreateWithoutPortfolioInput[] | PortfolioSkillUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioSkillCreateOrConnectWithoutPortfolioInput | PortfolioSkillCreateOrConnectWithoutPortfolioInput[]
    upsert?: PortfolioSkillUpsertWithWhereUniqueWithoutPortfolioInput | PortfolioSkillUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: PortfolioSkillCreateManyPortfolioInputEnvelope
    set?: PortfolioSkillWhereUniqueInput | PortfolioSkillWhereUniqueInput[]
    disconnect?: PortfolioSkillWhereUniqueInput | PortfolioSkillWhereUniqueInput[]
    delete?: PortfolioSkillWhereUniqueInput | PortfolioSkillWhereUniqueInput[]
    connect?: PortfolioSkillWhereUniqueInput | PortfolioSkillWhereUniqueInput[]
    update?: PortfolioSkillUpdateWithWhereUniqueWithoutPortfolioInput | PortfolioSkillUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: PortfolioSkillUpdateManyWithWhereWithoutPortfolioInput | PortfolioSkillUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: PortfolioSkillScalarWhereInput | PortfolioSkillScalarWhereInput[]
  }

  export type PortfolioProminentProjectUncheckedUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<PortfolioProminentProjectCreateWithoutPortfolioInput, PortfolioProminentProjectUncheckedCreateWithoutPortfolioInput> | PortfolioProminentProjectCreateWithoutPortfolioInput[] | PortfolioProminentProjectUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioProminentProjectCreateOrConnectWithoutPortfolioInput | PortfolioProminentProjectCreateOrConnectWithoutPortfolioInput[]
    upsert?: PortfolioProminentProjectUpsertWithWhereUniqueWithoutPortfolioInput | PortfolioProminentProjectUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: PortfolioProminentProjectCreateManyPortfolioInputEnvelope
    set?: PortfolioProminentProjectWhereUniqueInput | PortfolioProminentProjectWhereUniqueInput[]
    disconnect?: PortfolioProminentProjectWhereUniqueInput | PortfolioProminentProjectWhereUniqueInput[]
    delete?: PortfolioProminentProjectWhereUniqueInput | PortfolioProminentProjectWhereUniqueInput[]
    connect?: PortfolioProminentProjectWhereUniqueInput | PortfolioProminentProjectWhereUniqueInput[]
    update?: PortfolioProminentProjectUpdateWithWhereUniqueWithoutPortfolioInput | PortfolioProminentProjectUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: PortfolioProminentProjectUpdateManyWithWhereWithoutPortfolioInput | PortfolioProminentProjectUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: PortfolioProminentProjectScalarWhereInput | PortfolioProminentProjectScalarWhereInput[]
  }

  export type PortfolioCustomerFeedbackUncheckedUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<PortfolioCustomerFeedbackCreateWithoutPortfolioInput, PortfolioCustomerFeedbackUncheckedCreateWithoutPortfolioInput> | PortfolioCustomerFeedbackCreateWithoutPortfolioInput[] | PortfolioCustomerFeedbackUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioCustomerFeedbackCreateOrConnectWithoutPortfolioInput | PortfolioCustomerFeedbackCreateOrConnectWithoutPortfolioInput[]
    upsert?: PortfolioCustomerFeedbackUpsertWithWhereUniqueWithoutPortfolioInput | PortfolioCustomerFeedbackUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: PortfolioCustomerFeedbackCreateManyPortfolioInputEnvelope
    set?: PortfolioCustomerFeedbackWhereUniqueInput | PortfolioCustomerFeedbackWhereUniqueInput[]
    disconnect?: PortfolioCustomerFeedbackWhereUniqueInput | PortfolioCustomerFeedbackWhereUniqueInput[]
    delete?: PortfolioCustomerFeedbackWhereUniqueInput | PortfolioCustomerFeedbackWhereUniqueInput[]
    connect?: PortfolioCustomerFeedbackWhereUniqueInput | PortfolioCustomerFeedbackWhereUniqueInput[]
    update?: PortfolioCustomerFeedbackUpdateWithWhereUniqueWithoutPortfolioInput | PortfolioCustomerFeedbackUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: PortfolioCustomerFeedbackUpdateManyWithWhereWithoutPortfolioInput | PortfolioCustomerFeedbackUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: PortfolioCustomerFeedbackScalarWhereInput | PortfolioCustomerFeedbackScalarWhereInput[]
  }

  export type PortfolioAboutSectionUncheckedUpdateOneWithoutPortfolioNestedInput = {
    create?: XOR<PortfolioAboutSectionCreateWithoutPortfolioInput, PortfolioAboutSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: PortfolioAboutSectionCreateOrConnectWithoutPortfolioInput
    upsert?: PortfolioAboutSectionUpsertWithoutPortfolioInput
    disconnect?: PortfolioAboutSectionWhereInput | boolean
    delete?: PortfolioAboutSectionWhereInput | boolean
    connect?: PortfolioAboutSectionWhereUniqueInput
    update?: XOR<XOR<PortfolioAboutSectionUpdateToOneWithWhereWithoutPortfolioInput, PortfolioAboutSectionUpdateWithoutPortfolioInput>, PortfolioAboutSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type PortfolioWorkExperienceUncheckedUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<PortfolioWorkExperienceCreateWithoutPortfolioInput, PortfolioWorkExperienceUncheckedCreateWithoutPortfolioInput> | PortfolioWorkExperienceCreateWithoutPortfolioInput[] | PortfolioWorkExperienceUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioWorkExperienceCreateOrConnectWithoutPortfolioInput | PortfolioWorkExperienceCreateOrConnectWithoutPortfolioInput[]
    upsert?: PortfolioWorkExperienceUpsertWithWhereUniqueWithoutPortfolioInput | PortfolioWorkExperienceUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: PortfolioWorkExperienceCreateManyPortfolioInputEnvelope
    set?: PortfolioWorkExperienceWhereUniqueInput | PortfolioWorkExperienceWhereUniqueInput[]
    disconnect?: PortfolioWorkExperienceWhereUniqueInput | PortfolioWorkExperienceWhereUniqueInput[]
    delete?: PortfolioWorkExperienceWhereUniqueInput | PortfolioWorkExperienceWhereUniqueInput[]
    connect?: PortfolioWorkExperienceWhereUniqueInput | PortfolioWorkExperienceWhereUniqueInput[]
    update?: PortfolioWorkExperienceUpdateWithWhereUniqueWithoutPortfolioInput | PortfolioWorkExperienceUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: PortfolioWorkExperienceUpdateManyWithWhereWithoutPortfolioInput | PortfolioWorkExperienceUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: PortfolioWorkExperienceScalarWhereInput | PortfolioWorkExperienceScalarWhereInput[]
  }

  export type PortfolioSkillUncheckedUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<PortfolioSkillCreateWithoutPortfolioInput, PortfolioSkillUncheckedCreateWithoutPortfolioInput> | PortfolioSkillCreateWithoutPortfolioInput[] | PortfolioSkillUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioSkillCreateOrConnectWithoutPortfolioInput | PortfolioSkillCreateOrConnectWithoutPortfolioInput[]
    upsert?: PortfolioSkillUpsertWithWhereUniqueWithoutPortfolioInput | PortfolioSkillUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: PortfolioSkillCreateManyPortfolioInputEnvelope
    set?: PortfolioSkillWhereUniqueInput | PortfolioSkillWhereUniqueInput[]
    disconnect?: PortfolioSkillWhereUniqueInput | PortfolioSkillWhereUniqueInput[]
    delete?: PortfolioSkillWhereUniqueInput | PortfolioSkillWhereUniqueInput[]
    connect?: PortfolioSkillWhereUniqueInput | PortfolioSkillWhereUniqueInput[]
    update?: PortfolioSkillUpdateWithWhereUniqueWithoutPortfolioInput | PortfolioSkillUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: PortfolioSkillUpdateManyWithWhereWithoutPortfolioInput | PortfolioSkillUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: PortfolioSkillScalarWhereInput | PortfolioSkillScalarWhereInput[]
  }

  export type PortfolioCreateNestedOneWithoutPortfolioProminentProjectsInput = {
    create?: XOR<PortfolioCreateWithoutPortfolioProminentProjectsInput, PortfolioUncheckedCreateWithoutPortfolioProminentProjectsInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutPortfolioProminentProjectsInput
    connect?: PortfolioWhereUniqueInput
  }

  export type PortfolioProminentProjectImageCreateNestedManyWithoutPortfolioProminentProjectInput = {
    create?: XOR<PortfolioProminentProjectImageCreateWithoutPortfolioProminentProjectInput, PortfolioProminentProjectImageUncheckedCreateWithoutPortfolioProminentProjectInput> | PortfolioProminentProjectImageCreateWithoutPortfolioProminentProjectInput[] | PortfolioProminentProjectImageUncheckedCreateWithoutPortfolioProminentProjectInput[]
    connectOrCreate?: PortfolioProminentProjectImageCreateOrConnectWithoutPortfolioProminentProjectInput | PortfolioProminentProjectImageCreateOrConnectWithoutPortfolioProminentProjectInput[]
    createMany?: PortfolioProminentProjectImageCreateManyPortfolioProminentProjectInputEnvelope
    connect?: PortfolioProminentProjectImageWhereUniqueInput | PortfolioProminentProjectImageWhereUniqueInput[]
  }

  export type PortfolioProminentProjectImageUncheckedCreateNestedManyWithoutPortfolioProminentProjectInput = {
    create?: XOR<PortfolioProminentProjectImageCreateWithoutPortfolioProminentProjectInput, PortfolioProminentProjectImageUncheckedCreateWithoutPortfolioProminentProjectInput> | PortfolioProminentProjectImageCreateWithoutPortfolioProminentProjectInput[] | PortfolioProminentProjectImageUncheckedCreateWithoutPortfolioProminentProjectInput[]
    connectOrCreate?: PortfolioProminentProjectImageCreateOrConnectWithoutPortfolioProminentProjectInput | PortfolioProminentProjectImageCreateOrConnectWithoutPortfolioProminentProjectInput[]
    createMany?: PortfolioProminentProjectImageCreateManyPortfolioProminentProjectInputEnvelope
    connect?: PortfolioProminentProjectImageWhereUniqueInput | PortfolioProminentProjectImageWhereUniqueInput[]
  }

  export type PortfolioUpdateOneRequiredWithoutPortfolioProminentProjectsNestedInput = {
    create?: XOR<PortfolioCreateWithoutPortfolioProminentProjectsInput, PortfolioUncheckedCreateWithoutPortfolioProminentProjectsInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutPortfolioProminentProjectsInput
    upsert?: PortfolioUpsertWithoutPortfolioProminentProjectsInput
    connect?: PortfolioWhereUniqueInput
    update?: XOR<XOR<PortfolioUpdateToOneWithWhereWithoutPortfolioProminentProjectsInput, PortfolioUpdateWithoutPortfolioProminentProjectsInput>, PortfolioUncheckedUpdateWithoutPortfolioProminentProjectsInput>
  }

  export type PortfolioProminentProjectImageUpdateManyWithoutPortfolioProminentProjectNestedInput = {
    create?: XOR<PortfolioProminentProjectImageCreateWithoutPortfolioProminentProjectInput, PortfolioProminentProjectImageUncheckedCreateWithoutPortfolioProminentProjectInput> | PortfolioProminentProjectImageCreateWithoutPortfolioProminentProjectInput[] | PortfolioProminentProjectImageUncheckedCreateWithoutPortfolioProminentProjectInput[]
    connectOrCreate?: PortfolioProminentProjectImageCreateOrConnectWithoutPortfolioProminentProjectInput | PortfolioProminentProjectImageCreateOrConnectWithoutPortfolioProminentProjectInput[]
    upsert?: PortfolioProminentProjectImageUpsertWithWhereUniqueWithoutPortfolioProminentProjectInput | PortfolioProminentProjectImageUpsertWithWhereUniqueWithoutPortfolioProminentProjectInput[]
    createMany?: PortfolioProminentProjectImageCreateManyPortfolioProminentProjectInputEnvelope
    set?: PortfolioProminentProjectImageWhereUniqueInput | PortfolioProminentProjectImageWhereUniqueInput[]
    disconnect?: PortfolioProminentProjectImageWhereUniqueInput | PortfolioProminentProjectImageWhereUniqueInput[]
    delete?: PortfolioProminentProjectImageWhereUniqueInput | PortfolioProminentProjectImageWhereUniqueInput[]
    connect?: PortfolioProminentProjectImageWhereUniqueInput | PortfolioProminentProjectImageWhereUniqueInput[]
    update?: PortfolioProminentProjectImageUpdateWithWhereUniqueWithoutPortfolioProminentProjectInput | PortfolioProminentProjectImageUpdateWithWhereUniqueWithoutPortfolioProminentProjectInput[]
    updateMany?: PortfolioProminentProjectImageUpdateManyWithWhereWithoutPortfolioProminentProjectInput | PortfolioProminentProjectImageUpdateManyWithWhereWithoutPortfolioProminentProjectInput[]
    deleteMany?: PortfolioProminentProjectImageScalarWhereInput | PortfolioProminentProjectImageScalarWhereInput[]
  }

  export type PortfolioProminentProjectImageUncheckedUpdateManyWithoutPortfolioProminentProjectNestedInput = {
    create?: XOR<PortfolioProminentProjectImageCreateWithoutPortfolioProminentProjectInput, PortfolioProminentProjectImageUncheckedCreateWithoutPortfolioProminentProjectInput> | PortfolioProminentProjectImageCreateWithoutPortfolioProminentProjectInput[] | PortfolioProminentProjectImageUncheckedCreateWithoutPortfolioProminentProjectInput[]
    connectOrCreate?: PortfolioProminentProjectImageCreateOrConnectWithoutPortfolioProminentProjectInput | PortfolioProminentProjectImageCreateOrConnectWithoutPortfolioProminentProjectInput[]
    upsert?: PortfolioProminentProjectImageUpsertWithWhereUniqueWithoutPortfolioProminentProjectInput | PortfolioProminentProjectImageUpsertWithWhereUniqueWithoutPortfolioProminentProjectInput[]
    createMany?: PortfolioProminentProjectImageCreateManyPortfolioProminentProjectInputEnvelope
    set?: PortfolioProminentProjectImageWhereUniqueInput | PortfolioProminentProjectImageWhereUniqueInput[]
    disconnect?: PortfolioProminentProjectImageWhereUniqueInput | PortfolioProminentProjectImageWhereUniqueInput[]
    delete?: PortfolioProminentProjectImageWhereUniqueInput | PortfolioProminentProjectImageWhereUniqueInput[]
    connect?: PortfolioProminentProjectImageWhereUniqueInput | PortfolioProminentProjectImageWhereUniqueInput[]
    update?: PortfolioProminentProjectImageUpdateWithWhereUniqueWithoutPortfolioProminentProjectInput | PortfolioProminentProjectImageUpdateWithWhereUniqueWithoutPortfolioProminentProjectInput[]
    updateMany?: PortfolioProminentProjectImageUpdateManyWithWhereWithoutPortfolioProminentProjectInput | PortfolioProminentProjectImageUpdateManyWithWhereWithoutPortfolioProminentProjectInput[]
    deleteMany?: PortfolioProminentProjectImageScalarWhereInput | PortfolioProminentProjectImageScalarWhereInput[]
  }

  export type PortfolioProminentProjectCreateNestedOneWithoutPortfolioProminentProjectImagesInput = {
    create?: XOR<PortfolioProminentProjectCreateWithoutPortfolioProminentProjectImagesInput, PortfolioProminentProjectUncheckedCreateWithoutPortfolioProminentProjectImagesInput>
    connectOrCreate?: PortfolioProminentProjectCreateOrConnectWithoutPortfolioProminentProjectImagesInput
    connect?: PortfolioProminentProjectWhereUniqueInput
  }

  export type PortfolioProminentProjectUpdateOneRequiredWithoutPortfolioProminentProjectImagesNestedInput = {
    create?: XOR<PortfolioProminentProjectCreateWithoutPortfolioProminentProjectImagesInput, PortfolioProminentProjectUncheckedCreateWithoutPortfolioProminentProjectImagesInput>
    connectOrCreate?: PortfolioProminentProjectCreateOrConnectWithoutPortfolioProminentProjectImagesInput
    upsert?: PortfolioProminentProjectUpsertWithoutPortfolioProminentProjectImagesInput
    connect?: PortfolioProminentProjectWhereUniqueInput
    update?: XOR<XOR<PortfolioProminentProjectUpdateToOneWithWhereWithoutPortfolioProminentProjectImagesInput, PortfolioProminentProjectUpdateWithoutPortfolioProminentProjectImagesInput>, PortfolioProminentProjectUncheckedUpdateWithoutPortfolioProminentProjectImagesInput>
  }

  export type PortfolioCreateNestedOneWithoutPortfolioCustomerFeedbacksInput = {
    create?: XOR<PortfolioCreateWithoutPortfolioCustomerFeedbacksInput, PortfolioUncheckedCreateWithoutPortfolioCustomerFeedbacksInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutPortfolioCustomerFeedbacksInput
    connect?: PortfolioWhereUniqueInput
  }

  export type PortfolioUpdateOneRequiredWithoutPortfolioCustomerFeedbacksNestedInput = {
    create?: XOR<PortfolioCreateWithoutPortfolioCustomerFeedbacksInput, PortfolioUncheckedCreateWithoutPortfolioCustomerFeedbacksInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutPortfolioCustomerFeedbacksInput
    upsert?: PortfolioUpsertWithoutPortfolioCustomerFeedbacksInput
    connect?: PortfolioWhereUniqueInput
    update?: XOR<XOR<PortfolioUpdateToOneWithWhereWithoutPortfolioCustomerFeedbacksInput, PortfolioUpdateWithoutPortfolioCustomerFeedbacksInput>, PortfolioUncheckedUpdateWithoutPortfolioCustomerFeedbacksInput>
  }

  export type PortfolioCreateNestedOneWithoutPortfolioAboutSectionInput = {
    create?: XOR<PortfolioCreateWithoutPortfolioAboutSectionInput, PortfolioUncheckedCreateWithoutPortfolioAboutSectionInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutPortfolioAboutSectionInput
    connect?: PortfolioWhereUniqueInput
  }

  export type PortfolioUpdateOneWithoutPortfolioAboutSectionNestedInput = {
    create?: XOR<PortfolioCreateWithoutPortfolioAboutSectionInput, PortfolioUncheckedCreateWithoutPortfolioAboutSectionInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutPortfolioAboutSectionInput
    upsert?: PortfolioUpsertWithoutPortfolioAboutSectionInput
    disconnect?: PortfolioWhereInput | boolean
    delete?: PortfolioWhereInput | boolean
    connect?: PortfolioWhereUniqueInput
    update?: XOR<XOR<PortfolioUpdateToOneWithWhereWithoutPortfolioAboutSectionInput, PortfolioUpdateWithoutPortfolioAboutSectionInput>, PortfolioUncheckedUpdateWithoutPortfolioAboutSectionInput>
  }

  export type PortfolioCreateNestedOneWithoutPortfolioWorkExperiencesInput = {
    create?: XOR<PortfolioCreateWithoutPortfolioWorkExperiencesInput, PortfolioUncheckedCreateWithoutPortfolioWorkExperiencesInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutPortfolioWorkExperiencesInput
    connect?: PortfolioWhereUniqueInput
  }

  export type PortfolioUpdateOneRequiredWithoutPortfolioWorkExperiencesNestedInput = {
    create?: XOR<PortfolioCreateWithoutPortfolioWorkExperiencesInput, PortfolioUncheckedCreateWithoutPortfolioWorkExperiencesInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutPortfolioWorkExperiencesInput
    upsert?: PortfolioUpsertWithoutPortfolioWorkExperiencesInput
    connect?: PortfolioWhereUniqueInput
    update?: XOR<XOR<PortfolioUpdateToOneWithWhereWithoutPortfolioWorkExperiencesInput, PortfolioUpdateWithoutPortfolioWorkExperiencesInput>, PortfolioUncheckedUpdateWithoutPortfolioWorkExperiencesInput>
  }

  export type PortfolioCreateNestedOneWithoutPortfolioSkillsInput = {
    create?: XOR<PortfolioCreateWithoutPortfolioSkillsInput, PortfolioUncheckedCreateWithoutPortfolioSkillsInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutPortfolioSkillsInput
    connect?: PortfolioWhereUniqueInput
  }

  export type PortfolioUpdateOneRequiredWithoutPortfolioSkillsNestedInput = {
    create?: XOR<PortfolioCreateWithoutPortfolioSkillsInput, PortfolioUncheckedCreateWithoutPortfolioSkillsInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutPortfolioSkillsInput
    upsert?: PortfolioUpsertWithoutPortfolioSkillsInput
    connect?: PortfolioWhereUniqueInput
    update?: XOR<XOR<PortfolioUpdateToOneWithWhereWithoutPortfolioSkillsInput, PortfolioUpdateWithoutPortfolioSkillsInput>, PortfolioUncheckedUpdateWithoutPortfolioSkillsInput>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ProfileWorkExperienceCreateWithoutUserInput = {
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileWorkExperienceUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileWorkExperienceCreateOrConnectWithoutUserInput = {
    where: ProfileWorkExperienceWhereUniqueInput
    create: XOR<ProfileWorkExperienceCreateWithoutUserInput, ProfileWorkExperienceUncheckedCreateWithoutUserInput>
  }

  export type ProfileWorkExperienceCreateManyUserInputEnvelope = {
    data: ProfileWorkExperienceCreateManyUserInput | ProfileWorkExperienceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileAchievementCreateWithoutUserInput = {
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileAchievementUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileAchievementCreateOrConnectWithoutUserInput = {
    where: ProfileAchievementWhereUniqueInput
    create: XOR<ProfileAchievementCreateWithoutUserInput, ProfileAchievementUncheckedCreateWithoutUserInput>
  }

  export type ProfileAchievementCreateManyUserInputEnvelope = {
    data: ProfileAchievementCreateManyUserInput | ProfileAchievementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileProminentWorkCreateWithoutUserInput = {
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    wage?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileProminentWorkUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    wage?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileProminentWorkCreateOrConnectWithoutUserInput = {
    where: ProfileProminentWorkWhereUniqueInput
    create: XOR<ProfileProminentWorkCreateWithoutUserInput, ProfileProminentWorkUncheckedCreateWithoutUserInput>
  }

  export type ProfileProminentWorkCreateManyUserInputEnvelope = {
    data: ProfileProminentWorkCreateManyUserInput | ProfileProminentWorkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileWorkExperienceUpsertWithWhereUniqueWithoutUserInput = {
    where: ProfileWorkExperienceWhereUniqueInput
    update: XOR<ProfileWorkExperienceUpdateWithoutUserInput, ProfileWorkExperienceUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileWorkExperienceCreateWithoutUserInput, ProfileWorkExperienceUncheckedCreateWithoutUserInput>
  }

  export type ProfileWorkExperienceUpdateWithWhereUniqueWithoutUserInput = {
    where: ProfileWorkExperienceWhereUniqueInput
    data: XOR<ProfileWorkExperienceUpdateWithoutUserInput, ProfileWorkExperienceUncheckedUpdateWithoutUserInput>
  }

  export type ProfileWorkExperienceUpdateManyWithWhereWithoutUserInput = {
    where: ProfileWorkExperienceScalarWhereInput
    data: XOR<ProfileWorkExperienceUpdateManyMutationInput, ProfileWorkExperienceUncheckedUpdateManyWithoutUserInput>
  }

  export type ProfileWorkExperienceScalarWhereInput = {
    AND?: ProfileWorkExperienceScalarWhereInput | ProfileWorkExperienceScalarWhereInput[]
    OR?: ProfileWorkExperienceScalarWhereInput[]
    NOT?: ProfileWorkExperienceScalarWhereInput | ProfileWorkExperienceScalarWhereInput[]
    id?: IntFilter<"ProfileWorkExperience"> | number
    userId?: IntFilter<"ProfileWorkExperience"> | number
    name?: StringFilter<"ProfileWorkExperience"> | string
    description?: StringNullableFilter<"ProfileWorkExperience"> | string | null
    from?: DateTimeFilter<"ProfileWorkExperience"> | Date | string
    to?: DateTimeNullableFilter<"ProfileWorkExperience"> | Date | string | null
    createdAt?: DateTimeFilter<"ProfileWorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileWorkExperience"> | Date | string
  }

  export type ProfileAchievementUpsertWithWhereUniqueWithoutUserInput = {
    where: ProfileAchievementWhereUniqueInput
    update: XOR<ProfileAchievementUpdateWithoutUserInput, ProfileAchievementUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileAchievementCreateWithoutUserInput, ProfileAchievementUncheckedCreateWithoutUserInput>
  }

  export type ProfileAchievementUpdateWithWhereUniqueWithoutUserInput = {
    where: ProfileAchievementWhereUniqueInput
    data: XOR<ProfileAchievementUpdateWithoutUserInput, ProfileAchievementUncheckedUpdateWithoutUserInput>
  }

  export type ProfileAchievementUpdateManyWithWhereWithoutUserInput = {
    where: ProfileAchievementScalarWhereInput
    data: XOR<ProfileAchievementUpdateManyMutationInput, ProfileAchievementUncheckedUpdateManyWithoutUserInput>
  }

  export type ProfileAchievementScalarWhereInput = {
    AND?: ProfileAchievementScalarWhereInput | ProfileAchievementScalarWhereInput[]
    OR?: ProfileAchievementScalarWhereInput[]
    NOT?: ProfileAchievementScalarWhereInput | ProfileAchievementScalarWhereInput[]
    id?: IntFilter<"ProfileAchievement"> | number
    userId?: IntFilter<"ProfileAchievement"> | number
    name?: StringFilter<"ProfileAchievement"> | string
    description?: StringNullableFilter<"ProfileAchievement"> | string | null
    from?: DateTimeFilter<"ProfileAchievement"> | Date | string
    to?: DateTimeNullableFilter<"ProfileAchievement"> | Date | string | null
    createdAt?: DateTimeFilter<"ProfileAchievement"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileAchievement"> | Date | string
  }

  export type ProfileProminentWorkUpsertWithWhereUniqueWithoutUserInput = {
    where: ProfileProminentWorkWhereUniqueInput
    update: XOR<ProfileProminentWorkUpdateWithoutUserInput, ProfileProminentWorkUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileProminentWorkCreateWithoutUserInput, ProfileProminentWorkUncheckedCreateWithoutUserInput>
  }

  export type ProfileProminentWorkUpdateWithWhereUniqueWithoutUserInput = {
    where: ProfileProminentWorkWhereUniqueInput
    data: XOR<ProfileProminentWorkUpdateWithoutUserInput, ProfileProminentWorkUncheckedUpdateWithoutUserInput>
  }

  export type ProfileProminentWorkUpdateManyWithWhereWithoutUserInput = {
    where: ProfileProminentWorkScalarWhereInput
    data: XOR<ProfileProminentWorkUpdateManyMutationInput, ProfileProminentWorkUncheckedUpdateManyWithoutUserInput>
  }

  export type ProfileProminentWorkScalarWhereInput = {
    AND?: ProfileProminentWorkScalarWhereInput | ProfileProminentWorkScalarWhereInput[]
    OR?: ProfileProminentWorkScalarWhereInput[]
    NOT?: ProfileProminentWorkScalarWhereInput | ProfileProminentWorkScalarWhereInput[]
    id?: IntFilter<"ProfileProminentWork"> | number
    userId?: IntFilter<"ProfileProminentWork"> | number
    name?: StringFilter<"ProfileProminentWork"> | string
    description?: StringNullableFilter<"ProfileProminentWork"> | string | null
    from?: DateTimeFilter<"ProfileProminentWork"> | Date | string
    to?: DateTimeNullableFilter<"ProfileProminentWork"> | Date | string | null
    wage?: IntNullableFilter<"ProfileProminentWork"> | number | null
    createdAt?: DateTimeFilter<"ProfileProminentWork"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileProminentWork"> | Date | string
  }

  export type UserCreateWithoutProfileWorkExperiencesInput = {
    name?: string | null
    avatar?: string | null
    role?: number
    phone?: string | null
    gender?: number | null
    email?: string | null
    biography?: string | null
    address?: string | null
    occupation?: string | null
    facebookLink?: string | null
    instagramLink?: string | null
    youtubeLink?: string | null
    tiktokLink?: string | null
    avatarPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profileAchievements?: ProfileAchievementCreateNestedManyWithoutUserInput
    profileProminentWorks?: ProfileProminentWorkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileWorkExperiencesInput = {
    id?: number
    name?: string | null
    avatar?: string | null
    role?: number
    phone?: string | null
    gender?: number | null
    email?: string | null
    biography?: string | null
    address?: string | null
    occupation?: string | null
    facebookLink?: string | null
    instagramLink?: string | null
    youtubeLink?: string | null
    tiktokLink?: string | null
    avatarPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profileAchievements?: ProfileAchievementUncheckedCreateNestedManyWithoutUserInput
    profileProminentWorks?: ProfileProminentWorkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileWorkExperiencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileWorkExperiencesInput, UserUncheckedCreateWithoutProfileWorkExperiencesInput>
  }

  export type UserUpsertWithoutProfileWorkExperiencesInput = {
    update: XOR<UserUpdateWithoutProfileWorkExperiencesInput, UserUncheckedUpdateWithoutProfileWorkExperiencesInput>
    create: XOR<UserCreateWithoutProfileWorkExperiencesInput, UserUncheckedCreateWithoutProfileWorkExperiencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileWorkExperiencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileWorkExperiencesInput, UserUncheckedUpdateWithoutProfileWorkExperiencesInput>
  }

  export type UserUpdateWithoutProfileWorkExperiencesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileAchievements?: ProfileAchievementUpdateManyWithoutUserNestedInput
    profileProminentWorks?: ProfileProminentWorkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileWorkExperiencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileAchievements?: ProfileAchievementUncheckedUpdateManyWithoutUserNestedInput
    profileProminentWorks?: ProfileProminentWorkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProfileAchievementsInput = {
    name?: string | null
    avatar?: string | null
    role?: number
    phone?: string | null
    gender?: number | null
    email?: string | null
    biography?: string | null
    address?: string | null
    occupation?: string | null
    facebookLink?: string | null
    instagramLink?: string | null
    youtubeLink?: string | null
    tiktokLink?: string | null
    avatarPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profileWorkExperiences?: ProfileWorkExperienceCreateNestedManyWithoutUserInput
    profileProminentWorks?: ProfileProminentWorkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileAchievementsInput = {
    id?: number
    name?: string | null
    avatar?: string | null
    role?: number
    phone?: string | null
    gender?: number | null
    email?: string | null
    biography?: string | null
    address?: string | null
    occupation?: string | null
    facebookLink?: string | null
    instagramLink?: string | null
    youtubeLink?: string | null
    tiktokLink?: string | null
    avatarPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profileWorkExperiences?: ProfileWorkExperienceUncheckedCreateNestedManyWithoutUserInput
    profileProminentWorks?: ProfileProminentWorkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileAchievementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileAchievementsInput, UserUncheckedCreateWithoutProfileAchievementsInput>
  }

  export type UserUpsertWithoutProfileAchievementsInput = {
    update: XOR<UserUpdateWithoutProfileAchievementsInput, UserUncheckedUpdateWithoutProfileAchievementsInput>
    create: XOR<UserCreateWithoutProfileAchievementsInput, UserUncheckedCreateWithoutProfileAchievementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileAchievementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileAchievementsInput, UserUncheckedUpdateWithoutProfileAchievementsInput>
  }

  export type UserUpdateWithoutProfileAchievementsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileWorkExperiences?: ProfileWorkExperienceUpdateManyWithoutUserNestedInput
    profileProminentWorks?: ProfileProminentWorkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileAchievementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileWorkExperiences?: ProfileWorkExperienceUncheckedUpdateManyWithoutUserNestedInput
    profileProminentWorks?: ProfileProminentWorkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProfileProminentWorksInput = {
    name?: string | null
    avatar?: string | null
    role?: number
    phone?: string | null
    gender?: number | null
    email?: string | null
    biography?: string | null
    address?: string | null
    occupation?: string | null
    facebookLink?: string | null
    instagramLink?: string | null
    youtubeLink?: string | null
    tiktokLink?: string | null
    avatarPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profileWorkExperiences?: ProfileWorkExperienceCreateNestedManyWithoutUserInput
    profileAchievements?: ProfileAchievementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileProminentWorksInput = {
    id?: number
    name?: string | null
    avatar?: string | null
    role?: number
    phone?: string | null
    gender?: number | null
    email?: string | null
    biography?: string | null
    address?: string | null
    occupation?: string | null
    facebookLink?: string | null
    instagramLink?: string | null
    youtubeLink?: string | null
    tiktokLink?: string | null
    avatarPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profileWorkExperiences?: ProfileWorkExperienceUncheckedCreateNestedManyWithoutUserInput
    profileAchievements?: ProfileAchievementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileProminentWorksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileProminentWorksInput, UserUncheckedCreateWithoutProfileProminentWorksInput>
  }

  export type UserUpsertWithoutProfileProminentWorksInput = {
    update: XOR<UserUpdateWithoutProfileProminentWorksInput, UserUncheckedUpdateWithoutProfileProminentWorksInput>
    create: XOR<UserCreateWithoutProfileProminentWorksInput, UserUncheckedCreateWithoutProfileProminentWorksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileProminentWorksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileProminentWorksInput, UserUncheckedUpdateWithoutProfileProminentWorksInput>
  }

  export type UserUpdateWithoutProfileProminentWorksInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileWorkExperiences?: ProfileWorkExperienceUpdateManyWithoutUserNestedInput
    profileAchievements?: ProfileAchievementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileProminentWorksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokLink?: NullableStringFieldUpdateOperationsInput | string | null
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileWorkExperiences?: ProfileWorkExperienceUncheckedUpdateManyWithoutUserNestedInput
    profileAchievements?: ProfileAchievementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PortfolioProminentProjectCreateWithoutPortfolioInput = {
    description: string
    role: string
    company: string
    detail?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioProminentProjectImages?: PortfolioProminentProjectImageCreateNestedManyWithoutPortfolioProminentProjectInput
  }

  export type PortfolioProminentProjectUncheckedCreateWithoutPortfolioInput = {
    id?: number
    description: string
    role: string
    company: string
    detail?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioProminentProjectImages?: PortfolioProminentProjectImageUncheckedCreateNestedManyWithoutPortfolioProminentProjectInput
  }

  export type PortfolioProminentProjectCreateOrConnectWithoutPortfolioInput = {
    where: PortfolioProminentProjectWhereUniqueInput
    create: XOR<PortfolioProminentProjectCreateWithoutPortfolioInput, PortfolioProminentProjectUncheckedCreateWithoutPortfolioInput>
  }

  export type PortfolioProminentProjectCreateManyPortfolioInputEnvelope = {
    data: PortfolioProminentProjectCreateManyPortfolioInput | PortfolioProminentProjectCreateManyPortfolioInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioCustomerFeedbackCreateWithoutPortfolioInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioCustomerFeedbackUncheckedCreateWithoutPortfolioInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioCustomerFeedbackCreateOrConnectWithoutPortfolioInput = {
    where: PortfolioCustomerFeedbackWhereUniqueInput
    create: XOR<PortfolioCustomerFeedbackCreateWithoutPortfolioInput, PortfolioCustomerFeedbackUncheckedCreateWithoutPortfolioInput>
  }

  export type PortfolioCustomerFeedbackCreateManyPortfolioInputEnvelope = {
    data: PortfolioCustomerFeedbackCreateManyPortfolioInput | PortfolioCustomerFeedbackCreateManyPortfolioInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioAboutSectionCreateWithoutPortfolioInput = {
    avatar: string
    overview: string
    detail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioAboutSectionUncheckedCreateWithoutPortfolioInput = {
    id?: number
    avatar: string
    overview: string
    detail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioAboutSectionCreateOrConnectWithoutPortfolioInput = {
    where: PortfolioAboutSectionWhereUniqueInput
    create: XOR<PortfolioAboutSectionCreateWithoutPortfolioInput, PortfolioAboutSectionUncheckedCreateWithoutPortfolioInput>
  }

  export type PortfolioWorkExperienceCreateWithoutPortfolioInput = {
    role: string
    company: string
    image: string
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioWorkExperienceUncheckedCreateWithoutPortfolioInput = {
    id?: number
    role: string
    company: string
    image: string
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioWorkExperienceCreateOrConnectWithoutPortfolioInput = {
    where: PortfolioWorkExperienceWhereUniqueInput
    create: XOR<PortfolioWorkExperienceCreateWithoutPortfolioInput, PortfolioWorkExperienceUncheckedCreateWithoutPortfolioInput>
  }

  export type PortfolioWorkExperienceCreateManyPortfolioInputEnvelope = {
    data: PortfolioWorkExperienceCreateManyPortfolioInput | PortfolioWorkExperienceCreateManyPortfolioInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioSkillCreateWithoutPortfolioInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioSkillUncheckedCreateWithoutPortfolioInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioSkillCreateOrConnectWithoutPortfolioInput = {
    where: PortfolioSkillWhereUniqueInput
    create: XOR<PortfolioSkillCreateWithoutPortfolioInput, PortfolioSkillUncheckedCreateWithoutPortfolioInput>
  }

  export type PortfolioSkillCreateManyPortfolioInputEnvelope = {
    data: PortfolioSkillCreateManyPortfolioInput | PortfolioSkillCreateManyPortfolioInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioProminentProjectUpsertWithWhereUniqueWithoutPortfolioInput = {
    where: PortfolioProminentProjectWhereUniqueInput
    update: XOR<PortfolioProminentProjectUpdateWithoutPortfolioInput, PortfolioProminentProjectUncheckedUpdateWithoutPortfolioInput>
    create: XOR<PortfolioProminentProjectCreateWithoutPortfolioInput, PortfolioProminentProjectUncheckedCreateWithoutPortfolioInput>
  }

  export type PortfolioProminentProjectUpdateWithWhereUniqueWithoutPortfolioInput = {
    where: PortfolioProminentProjectWhereUniqueInput
    data: XOR<PortfolioProminentProjectUpdateWithoutPortfolioInput, PortfolioProminentProjectUncheckedUpdateWithoutPortfolioInput>
  }

  export type PortfolioProminentProjectUpdateManyWithWhereWithoutPortfolioInput = {
    where: PortfolioProminentProjectScalarWhereInput
    data: XOR<PortfolioProminentProjectUpdateManyMutationInput, PortfolioProminentProjectUncheckedUpdateManyWithoutPortfolioInput>
  }

  export type PortfolioProminentProjectScalarWhereInput = {
    AND?: PortfolioProminentProjectScalarWhereInput | PortfolioProminentProjectScalarWhereInput[]
    OR?: PortfolioProminentProjectScalarWhereInput[]
    NOT?: PortfolioProminentProjectScalarWhereInput | PortfolioProminentProjectScalarWhereInput[]
    id?: IntFilter<"PortfolioProminentProject"> | number
    portfolioId?: IntFilter<"PortfolioProminentProject"> | number
    description?: StringFilter<"PortfolioProminentProject"> | string
    role?: StringFilter<"PortfolioProminentProject"> | string
    company?: StringFilter<"PortfolioProminentProject"> | string
    detail?: StringNullableFilter<"PortfolioProminentProject"> | string | null
    from?: DateTimeFilter<"PortfolioProminentProject"> | Date | string
    to?: DateTimeNullableFilter<"PortfolioProminentProject"> | Date | string | null
    createdAt?: DateTimeFilter<"PortfolioProminentProject"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioProminentProject"> | Date | string
  }

  export type PortfolioCustomerFeedbackUpsertWithWhereUniqueWithoutPortfolioInput = {
    where: PortfolioCustomerFeedbackWhereUniqueInput
    update: XOR<PortfolioCustomerFeedbackUpdateWithoutPortfolioInput, PortfolioCustomerFeedbackUncheckedUpdateWithoutPortfolioInput>
    create: XOR<PortfolioCustomerFeedbackCreateWithoutPortfolioInput, PortfolioCustomerFeedbackUncheckedCreateWithoutPortfolioInput>
  }

  export type PortfolioCustomerFeedbackUpdateWithWhereUniqueWithoutPortfolioInput = {
    where: PortfolioCustomerFeedbackWhereUniqueInput
    data: XOR<PortfolioCustomerFeedbackUpdateWithoutPortfolioInput, PortfolioCustomerFeedbackUncheckedUpdateWithoutPortfolioInput>
  }

  export type PortfolioCustomerFeedbackUpdateManyWithWhereWithoutPortfolioInput = {
    where: PortfolioCustomerFeedbackScalarWhereInput
    data: XOR<PortfolioCustomerFeedbackUpdateManyMutationInput, PortfolioCustomerFeedbackUncheckedUpdateManyWithoutPortfolioInput>
  }

  export type PortfolioCustomerFeedbackScalarWhereInput = {
    AND?: PortfolioCustomerFeedbackScalarWhereInput | PortfolioCustomerFeedbackScalarWhereInput[]
    OR?: PortfolioCustomerFeedbackScalarWhereInput[]
    NOT?: PortfolioCustomerFeedbackScalarWhereInput | PortfolioCustomerFeedbackScalarWhereInput[]
    id?: IntFilter<"PortfolioCustomerFeedback"> | number
    portfolioId?: IntFilter<"PortfolioCustomerFeedback"> | number
    createdAt?: DateTimeFilter<"PortfolioCustomerFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioCustomerFeedback"> | Date | string
  }

  export type PortfolioAboutSectionUpsertWithoutPortfolioInput = {
    update: XOR<PortfolioAboutSectionUpdateWithoutPortfolioInput, PortfolioAboutSectionUncheckedUpdateWithoutPortfolioInput>
    create: XOR<PortfolioAboutSectionCreateWithoutPortfolioInput, PortfolioAboutSectionUncheckedCreateWithoutPortfolioInput>
    where?: PortfolioAboutSectionWhereInput
  }

  export type PortfolioAboutSectionUpdateToOneWithWhereWithoutPortfolioInput = {
    where?: PortfolioAboutSectionWhereInput
    data: XOR<PortfolioAboutSectionUpdateWithoutPortfolioInput, PortfolioAboutSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type PortfolioAboutSectionUpdateWithoutPortfolioInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioAboutSectionUncheckedUpdateWithoutPortfolioInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioWorkExperienceUpsertWithWhereUniqueWithoutPortfolioInput = {
    where: PortfolioWorkExperienceWhereUniqueInput
    update: XOR<PortfolioWorkExperienceUpdateWithoutPortfolioInput, PortfolioWorkExperienceUncheckedUpdateWithoutPortfolioInput>
    create: XOR<PortfolioWorkExperienceCreateWithoutPortfolioInput, PortfolioWorkExperienceUncheckedCreateWithoutPortfolioInput>
  }

  export type PortfolioWorkExperienceUpdateWithWhereUniqueWithoutPortfolioInput = {
    where: PortfolioWorkExperienceWhereUniqueInput
    data: XOR<PortfolioWorkExperienceUpdateWithoutPortfolioInput, PortfolioWorkExperienceUncheckedUpdateWithoutPortfolioInput>
  }

  export type PortfolioWorkExperienceUpdateManyWithWhereWithoutPortfolioInput = {
    where: PortfolioWorkExperienceScalarWhereInput
    data: XOR<PortfolioWorkExperienceUpdateManyMutationInput, PortfolioWorkExperienceUncheckedUpdateManyWithoutPortfolioInput>
  }

  export type PortfolioWorkExperienceScalarWhereInput = {
    AND?: PortfolioWorkExperienceScalarWhereInput | PortfolioWorkExperienceScalarWhereInput[]
    OR?: PortfolioWorkExperienceScalarWhereInput[]
    NOT?: PortfolioWorkExperienceScalarWhereInput | PortfolioWorkExperienceScalarWhereInput[]
    id?: IntFilter<"PortfolioWorkExperience"> | number
    portfolioId?: IntFilter<"PortfolioWorkExperience"> | number
    role?: StringFilter<"PortfolioWorkExperience"> | string
    company?: StringFilter<"PortfolioWorkExperience"> | string
    image?: StringFilter<"PortfolioWorkExperience"> | string
    from?: DateTimeFilter<"PortfolioWorkExperience"> | Date | string
    to?: DateTimeNullableFilter<"PortfolioWorkExperience"> | Date | string | null
    createdAt?: DateTimeFilter<"PortfolioWorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioWorkExperience"> | Date | string
  }

  export type PortfolioSkillUpsertWithWhereUniqueWithoutPortfolioInput = {
    where: PortfolioSkillWhereUniqueInput
    update: XOR<PortfolioSkillUpdateWithoutPortfolioInput, PortfolioSkillUncheckedUpdateWithoutPortfolioInput>
    create: XOR<PortfolioSkillCreateWithoutPortfolioInput, PortfolioSkillUncheckedCreateWithoutPortfolioInput>
  }

  export type PortfolioSkillUpdateWithWhereUniqueWithoutPortfolioInput = {
    where: PortfolioSkillWhereUniqueInput
    data: XOR<PortfolioSkillUpdateWithoutPortfolioInput, PortfolioSkillUncheckedUpdateWithoutPortfolioInput>
  }

  export type PortfolioSkillUpdateManyWithWhereWithoutPortfolioInput = {
    where: PortfolioSkillScalarWhereInput
    data: XOR<PortfolioSkillUpdateManyMutationInput, PortfolioSkillUncheckedUpdateManyWithoutPortfolioInput>
  }

  export type PortfolioSkillScalarWhereInput = {
    AND?: PortfolioSkillScalarWhereInput | PortfolioSkillScalarWhereInput[]
    OR?: PortfolioSkillScalarWhereInput[]
    NOT?: PortfolioSkillScalarWhereInput | PortfolioSkillScalarWhereInput[]
    id?: IntFilter<"PortfolioSkill"> | number
    portfolioId?: IntFilter<"PortfolioSkill"> | number
    name?: StringFilter<"PortfolioSkill"> | string
    createdAt?: DateTimeFilter<"PortfolioSkill"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioSkill"> | Date | string
  }

  export type PortfolioCreateWithoutPortfolioProminentProjectsInput = {
    name: string
    skillDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackCreateNestedManyWithoutPortfolioInput
    portfolioAboutSection?: PortfolioAboutSectionCreateNestedOneWithoutPortfolioInput
    portfolioWorkExperiences?: PortfolioWorkExperienceCreateNestedManyWithoutPortfolioInput
    portfolioSkills?: PortfolioSkillCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutPortfolioProminentProjectsInput = {
    id?: number
    name: string
    skillDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackUncheckedCreateNestedManyWithoutPortfolioInput
    portfolioAboutSection?: PortfolioAboutSectionUncheckedCreateNestedOneWithoutPortfolioInput
    portfolioWorkExperiences?: PortfolioWorkExperienceUncheckedCreateNestedManyWithoutPortfolioInput
    portfolioSkills?: PortfolioSkillUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioCreateOrConnectWithoutPortfolioProminentProjectsInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutPortfolioProminentProjectsInput, PortfolioUncheckedCreateWithoutPortfolioProminentProjectsInput>
  }

  export type PortfolioProminentProjectImageCreateWithoutPortfolioProminentProjectInput = {
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioProminentProjectImageUncheckedCreateWithoutPortfolioProminentProjectInput = {
    id?: number
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioProminentProjectImageCreateOrConnectWithoutPortfolioProminentProjectInput = {
    where: PortfolioProminentProjectImageWhereUniqueInput
    create: XOR<PortfolioProminentProjectImageCreateWithoutPortfolioProminentProjectInput, PortfolioProminentProjectImageUncheckedCreateWithoutPortfolioProminentProjectInput>
  }

  export type PortfolioProminentProjectImageCreateManyPortfolioProminentProjectInputEnvelope = {
    data: PortfolioProminentProjectImageCreateManyPortfolioProminentProjectInput | PortfolioProminentProjectImageCreateManyPortfolioProminentProjectInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioUpsertWithoutPortfolioProminentProjectsInput = {
    update: XOR<PortfolioUpdateWithoutPortfolioProminentProjectsInput, PortfolioUncheckedUpdateWithoutPortfolioProminentProjectsInput>
    create: XOR<PortfolioCreateWithoutPortfolioProminentProjectsInput, PortfolioUncheckedCreateWithoutPortfolioProminentProjectsInput>
    where?: PortfolioWhereInput
  }

  export type PortfolioUpdateToOneWithWhereWithoutPortfolioProminentProjectsInput = {
    where?: PortfolioWhereInput
    data: XOR<PortfolioUpdateWithoutPortfolioProminentProjectsInput, PortfolioUncheckedUpdateWithoutPortfolioProminentProjectsInput>
  }

  export type PortfolioUpdateWithoutPortfolioProminentProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    skillDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackUpdateManyWithoutPortfolioNestedInput
    portfolioAboutSection?: PortfolioAboutSectionUpdateOneWithoutPortfolioNestedInput
    portfolioWorkExperiences?: PortfolioWorkExperienceUpdateManyWithoutPortfolioNestedInput
    portfolioSkills?: PortfolioSkillUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutPortfolioProminentProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    skillDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackUncheckedUpdateManyWithoutPortfolioNestedInput
    portfolioAboutSection?: PortfolioAboutSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    portfolioWorkExperiences?: PortfolioWorkExperienceUncheckedUpdateManyWithoutPortfolioNestedInput
    portfolioSkills?: PortfolioSkillUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioProminentProjectImageUpsertWithWhereUniqueWithoutPortfolioProminentProjectInput = {
    where: PortfolioProminentProjectImageWhereUniqueInput
    update: XOR<PortfolioProminentProjectImageUpdateWithoutPortfolioProminentProjectInput, PortfolioProminentProjectImageUncheckedUpdateWithoutPortfolioProminentProjectInput>
    create: XOR<PortfolioProminentProjectImageCreateWithoutPortfolioProminentProjectInput, PortfolioProminentProjectImageUncheckedCreateWithoutPortfolioProminentProjectInput>
  }

  export type PortfolioProminentProjectImageUpdateWithWhereUniqueWithoutPortfolioProminentProjectInput = {
    where: PortfolioProminentProjectImageWhereUniqueInput
    data: XOR<PortfolioProminentProjectImageUpdateWithoutPortfolioProminentProjectInput, PortfolioProminentProjectImageUncheckedUpdateWithoutPortfolioProminentProjectInput>
  }

  export type PortfolioProminentProjectImageUpdateManyWithWhereWithoutPortfolioProminentProjectInput = {
    where: PortfolioProminentProjectImageScalarWhereInput
    data: XOR<PortfolioProminentProjectImageUpdateManyMutationInput, PortfolioProminentProjectImageUncheckedUpdateManyWithoutPortfolioProminentProjectInput>
  }

  export type PortfolioProminentProjectImageScalarWhereInput = {
    AND?: PortfolioProminentProjectImageScalarWhereInput | PortfolioProminentProjectImageScalarWhereInput[]
    OR?: PortfolioProminentProjectImageScalarWhereInput[]
    NOT?: PortfolioProminentProjectImageScalarWhereInput | PortfolioProminentProjectImageScalarWhereInput[]
    id?: IntFilter<"PortfolioProminentProjectImage"> | number
    portfolioProminentProjectId?: IntFilter<"PortfolioProminentProjectImage"> | number
    image?: StringFilter<"PortfolioProminentProjectImage"> | string
    createdAt?: DateTimeFilter<"PortfolioProminentProjectImage"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioProminentProjectImage"> | Date | string
  }

  export type PortfolioProminentProjectCreateWithoutPortfolioProminentProjectImagesInput = {
    description: string
    role: string
    company: string
    detail?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolio: PortfolioCreateNestedOneWithoutPortfolioProminentProjectsInput
  }

  export type PortfolioProminentProjectUncheckedCreateWithoutPortfolioProminentProjectImagesInput = {
    id?: number
    portfolioId: number
    description: string
    role: string
    company: string
    detail?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioProminentProjectCreateOrConnectWithoutPortfolioProminentProjectImagesInput = {
    where: PortfolioProminentProjectWhereUniqueInput
    create: XOR<PortfolioProminentProjectCreateWithoutPortfolioProminentProjectImagesInput, PortfolioProminentProjectUncheckedCreateWithoutPortfolioProminentProjectImagesInput>
  }

  export type PortfolioProminentProjectUpsertWithoutPortfolioProminentProjectImagesInput = {
    update: XOR<PortfolioProminentProjectUpdateWithoutPortfolioProminentProjectImagesInput, PortfolioProminentProjectUncheckedUpdateWithoutPortfolioProminentProjectImagesInput>
    create: XOR<PortfolioProminentProjectCreateWithoutPortfolioProminentProjectImagesInput, PortfolioProminentProjectUncheckedCreateWithoutPortfolioProminentProjectImagesInput>
    where?: PortfolioProminentProjectWhereInput
  }

  export type PortfolioProminentProjectUpdateToOneWithWhereWithoutPortfolioProminentProjectImagesInput = {
    where?: PortfolioProminentProjectWhereInput
    data: XOR<PortfolioProminentProjectUpdateWithoutPortfolioProminentProjectImagesInput, PortfolioProminentProjectUncheckedUpdateWithoutPortfolioProminentProjectImagesInput>
  }

  export type PortfolioProminentProjectUpdateWithoutPortfolioProminentProjectImagesInput = {
    description?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioUpdateOneRequiredWithoutPortfolioProminentProjectsNestedInput
  }

  export type PortfolioProminentProjectUncheckedUpdateWithoutPortfolioProminentProjectImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    portfolioId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCreateWithoutPortfolioCustomerFeedbacksInput = {
    name: string
    skillDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioProminentProjects?: PortfolioProminentProjectCreateNestedManyWithoutPortfolioInput
    portfolioAboutSection?: PortfolioAboutSectionCreateNestedOneWithoutPortfolioInput
    portfolioWorkExperiences?: PortfolioWorkExperienceCreateNestedManyWithoutPortfolioInput
    portfolioSkills?: PortfolioSkillCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutPortfolioCustomerFeedbacksInput = {
    id?: number
    name: string
    skillDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioProminentProjects?: PortfolioProminentProjectUncheckedCreateNestedManyWithoutPortfolioInput
    portfolioAboutSection?: PortfolioAboutSectionUncheckedCreateNestedOneWithoutPortfolioInput
    portfolioWorkExperiences?: PortfolioWorkExperienceUncheckedCreateNestedManyWithoutPortfolioInput
    portfolioSkills?: PortfolioSkillUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioCreateOrConnectWithoutPortfolioCustomerFeedbacksInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutPortfolioCustomerFeedbacksInput, PortfolioUncheckedCreateWithoutPortfolioCustomerFeedbacksInput>
  }

  export type PortfolioUpsertWithoutPortfolioCustomerFeedbacksInput = {
    update: XOR<PortfolioUpdateWithoutPortfolioCustomerFeedbacksInput, PortfolioUncheckedUpdateWithoutPortfolioCustomerFeedbacksInput>
    create: XOR<PortfolioCreateWithoutPortfolioCustomerFeedbacksInput, PortfolioUncheckedCreateWithoutPortfolioCustomerFeedbacksInput>
    where?: PortfolioWhereInput
  }

  export type PortfolioUpdateToOneWithWhereWithoutPortfolioCustomerFeedbacksInput = {
    where?: PortfolioWhereInput
    data: XOR<PortfolioUpdateWithoutPortfolioCustomerFeedbacksInput, PortfolioUncheckedUpdateWithoutPortfolioCustomerFeedbacksInput>
  }

  export type PortfolioUpdateWithoutPortfolioCustomerFeedbacksInput = {
    name?: StringFieldUpdateOperationsInput | string
    skillDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioProminentProjects?: PortfolioProminentProjectUpdateManyWithoutPortfolioNestedInput
    portfolioAboutSection?: PortfolioAboutSectionUpdateOneWithoutPortfolioNestedInput
    portfolioWorkExperiences?: PortfolioWorkExperienceUpdateManyWithoutPortfolioNestedInput
    portfolioSkills?: PortfolioSkillUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutPortfolioCustomerFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    skillDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioProminentProjects?: PortfolioProminentProjectUncheckedUpdateManyWithoutPortfolioNestedInput
    portfolioAboutSection?: PortfolioAboutSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    portfolioWorkExperiences?: PortfolioWorkExperienceUncheckedUpdateManyWithoutPortfolioNestedInput
    portfolioSkills?: PortfolioSkillUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioCreateWithoutPortfolioAboutSectionInput = {
    name: string
    skillDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioProminentProjects?: PortfolioProminentProjectCreateNestedManyWithoutPortfolioInput
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackCreateNestedManyWithoutPortfolioInput
    portfolioWorkExperiences?: PortfolioWorkExperienceCreateNestedManyWithoutPortfolioInput
    portfolioSkills?: PortfolioSkillCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutPortfolioAboutSectionInput = {
    id?: number
    name: string
    skillDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioProminentProjects?: PortfolioProminentProjectUncheckedCreateNestedManyWithoutPortfolioInput
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackUncheckedCreateNestedManyWithoutPortfolioInput
    portfolioWorkExperiences?: PortfolioWorkExperienceUncheckedCreateNestedManyWithoutPortfolioInput
    portfolioSkills?: PortfolioSkillUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioCreateOrConnectWithoutPortfolioAboutSectionInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutPortfolioAboutSectionInput, PortfolioUncheckedCreateWithoutPortfolioAboutSectionInput>
  }

  export type PortfolioUpsertWithoutPortfolioAboutSectionInput = {
    update: XOR<PortfolioUpdateWithoutPortfolioAboutSectionInput, PortfolioUncheckedUpdateWithoutPortfolioAboutSectionInput>
    create: XOR<PortfolioCreateWithoutPortfolioAboutSectionInput, PortfolioUncheckedCreateWithoutPortfolioAboutSectionInput>
    where?: PortfolioWhereInput
  }

  export type PortfolioUpdateToOneWithWhereWithoutPortfolioAboutSectionInput = {
    where?: PortfolioWhereInput
    data: XOR<PortfolioUpdateWithoutPortfolioAboutSectionInput, PortfolioUncheckedUpdateWithoutPortfolioAboutSectionInput>
  }

  export type PortfolioUpdateWithoutPortfolioAboutSectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    skillDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioProminentProjects?: PortfolioProminentProjectUpdateManyWithoutPortfolioNestedInput
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackUpdateManyWithoutPortfolioNestedInput
    portfolioWorkExperiences?: PortfolioWorkExperienceUpdateManyWithoutPortfolioNestedInput
    portfolioSkills?: PortfolioSkillUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutPortfolioAboutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    skillDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioProminentProjects?: PortfolioProminentProjectUncheckedUpdateManyWithoutPortfolioNestedInput
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackUncheckedUpdateManyWithoutPortfolioNestedInput
    portfolioWorkExperiences?: PortfolioWorkExperienceUncheckedUpdateManyWithoutPortfolioNestedInput
    portfolioSkills?: PortfolioSkillUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioCreateWithoutPortfolioWorkExperiencesInput = {
    name: string
    skillDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioProminentProjects?: PortfolioProminentProjectCreateNestedManyWithoutPortfolioInput
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackCreateNestedManyWithoutPortfolioInput
    portfolioAboutSection?: PortfolioAboutSectionCreateNestedOneWithoutPortfolioInput
    portfolioSkills?: PortfolioSkillCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutPortfolioWorkExperiencesInput = {
    id?: number
    name: string
    skillDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioProminentProjects?: PortfolioProminentProjectUncheckedCreateNestedManyWithoutPortfolioInput
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackUncheckedCreateNestedManyWithoutPortfolioInput
    portfolioAboutSection?: PortfolioAboutSectionUncheckedCreateNestedOneWithoutPortfolioInput
    portfolioSkills?: PortfolioSkillUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioCreateOrConnectWithoutPortfolioWorkExperiencesInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutPortfolioWorkExperiencesInput, PortfolioUncheckedCreateWithoutPortfolioWorkExperiencesInput>
  }

  export type PortfolioUpsertWithoutPortfolioWorkExperiencesInput = {
    update: XOR<PortfolioUpdateWithoutPortfolioWorkExperiencesInput, PortfolioUncheckedUpdateWithoutPortfolioWorkExperiencesInput>
    create: XOR<PortfolioCreateWithoutPortfolioWorkExperiencesInput, PortfolioUncheckedCreateWithoutPortfolioWorkExperiencesInput>
    where?: PortfolioWhereInput
  }

  export type PortfolioUpdateToOneWithWhereWithoutPortfolioWorkExperiencesInput = {
    where?: PortfolioWhereInput
    data: XOR<PortfolioUpdateWithoutPortfolioWorkExperiencesInput, PortfolioUncheckedUpdateWithoutPortfolioWorkExperiencesInput>
  }

  export type PortfolioUpdateWithoutPortfolioWorkExperiencesInput = {
    name?: StringFieldUpdateOperationsInput | string
    skillDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioProminentProjects?: PortfolioProminentProjectUpdateManyWithoutPortfolioNestedInput
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackUpdateManyWithoutPortfolioNestedInput
    portfolioAboutSection?: PortfolioAboutSectionUpdateOneWithoutPortfolioNestedInput
    portfolioSkills?: PortfolioSkillUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutPortfolioWorkExperiencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    skillDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioProminentProjects?: PortfolioProminentProjectUncheckedUpdateManyWithoutPortfolioNestedInput
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackUncheckedUpdateManyWithoutPortfolioNestedInput
    portfolioAboutSection?: PortfolioAboutSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    portfolioSkills?: PortfolioSkillUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioCreateWithoutPortfolioSkillsInput = {
    name: string
    skillDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioProminentProjects?: PortfolioProminentProjectCreateNestedManyWithoutPortfolioInput
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackCreateNestedManyWithoutPortfolioInput
    portfolioAboutSection?: PortfolioAboutSectionCreateNestedOneWithoutPortfolioInput
    portfolioWorkExperiences?: PortfolioWorkExperienceCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutPortfolioSkillsInput = {
    id?: number
    name: string
    skillDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioProminentProjects?: PortfolioProminentProjectUncheckedCreateNestedManyWithoutPortfolioInput
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackUncheckedCreateNestedManyWithoutPortfolioInput
    portfolioAboutSection?: PortfolioAboutSectionUncheckedCreateNestedOneWithoutPortfolioInput
    portfolioWorkExperiences?: PortfolioWorkExperienceUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioCreateOrConnectWithoutPortfolioSkillsInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutPortfolioSkillsInput, PortfolioUncheckedCreateWithoutPortfolioSkillsInput>
  }

  export type PortfolioUpsertWithoutPortfolioSkillsInput = {
    update: XOR<PortfolioUpdateWithoutPortfolioSkillsInput, PortfolioUncheckedUpdateWithoutPortfolioSkillsInput>
    create: XOR<PortfolioCreateWithoutPortfolioSkillsInput, PortfolioUncheckedCreateWithoutPortfolioSkillsInput>
    where?: PortfolioWhereInput
  }

  export type PortfolioUpdateToOneWithWhereWithoutPortfolioSkillsInput = {
    where?: PortfolioWhereInput
    data: XOR<PortfolioUpdateWithoutPortfolioSkillsInput, PortfolioUncheckedUpdateWithoutPortfolioSkillsInput>
  }

  export type PortfolioUpdateWithoutPortfolioSkillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    skillDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioProminentProjects?: PortfolioProminentProjectUpdateManyWithoutPortfolioNestedInput
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackUpdateManyWithoutPortfolioNestedInput
    portfolioAboutSection?: PortfolioAboutSectionUpdateOneWithoutPortfolioNestedInput
    portfolioWorkExperiences?: PortfolioWorkExperienceUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutPortfolioSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    skillDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioProminentProjects?: PortfolioProminentProjectUncheckedUpdateManyWithoutPortfolioNestedInput
    portfolioCustomerFeedbacks?: PortfolioCustomerFeedbackUncheckedUpdateManyWithoutPortfolioNestedInput
    portfolioAboutSection?: PortfolioAboutSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    portfolioWorkExperiences?: PortfolioWorkExperienceUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type ProfileWorkExperienceCreateManyUserInput = {
    id?: number
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileAchievementCreateManyUserInput = {
    id?: number
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileProminentWorkCreateManyUserInput = {
    id?: number
    name: string
    description?: string | null
    from: Date | string
    to?: Date | string | null
    wage?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileWorkExperienceUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileWorkExperienceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileWorkExperienceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileAchievementUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileAchievementUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileAchievementUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileProminentWorkUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wage?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileProminentWorkUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wage?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileProminentWorkUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wage?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioProminentProjectCreateManyPortfolioInput = {
    id?: number
    description: string
    role: string
    company: string
    detail?: string | null
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioCustomerFeedbackCreateManyPortfolioInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioWorkExperienceCreateManyPortfolioInput = {
    id?: number
    role: string
    company: string
    image: string
    from: Date | string
    to?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioSkillCreateManyPortfolioInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioProminentProjectUpdateWithoutPortfolioInput = {
    description?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioProminentProjectImages?: PortfolioProminentProjectImageUpdateManyWithoutPortfolioProminentProjectNestedInput
  }

  export type PortfolioProminentProjectUncheckedUpdateWithoutPortfolioInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioProminentProjectImages?: PortfolioProminentProjectImageUncheckedUpdateManyWithoutPortfolioProminentProjectNestedInput
  }

  export type PortfolioProminentProjectUncheckedUpdateManyWithoutPortfolioInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCustomerFeedbackUpdateWithoutPortfolioInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCustomerFeedbackUncheckedUpdateWithoutPortfolioInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCustomerFeedbackUncheckedUpdateManyWithoutPortfolioInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioWorkExperienceUpdateWithoutPortfolioInput = {
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioWorkExperienceUncheckedUpdateWithoutPortfolioInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioWorkExperienceUncheckedUpdateManyWithoutPortfolioInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioSkillUpdateWithoutPortfolioInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioSkillUncheckedUpdateWithoutPortfolioInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioSkillUncheckedUpdateManyWithoutPortfolioInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioProminentProjectImageCreateManyPortfolioProminentProjectInput = {
    id?: number
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioProminentProjectImageUpdateWithoutPortfolioProminentProjectInput = {
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioProminentProjectImageUncheckedUpdateWithoutPortfolioProminentProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioProminentProjectImageUncheckedUpdateManyWithoutPortfolioProminentProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}