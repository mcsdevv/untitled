
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model MetricsWarm
 * 
 */
export type MetricsWarm = {
  id: number
  timestamp: Date | null
  query: string
  neonLatency: number
  supabaseLatency: number
  planetscaleLatency: number
}

/**
 * Model MetricsCold
 * 
 */
export type MetricsCold = {
  id: number
  timestamp: Date | null
  query: string
  neonLatency: number
  supabaseLatency: number
  planetscaleLatency: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MetricsWarms
 * const metricsWarms = await prisma.metricsWarm.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more MetricsWarms
   * const metricsWarms = await prisma.metricsWarm.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.metricsWarm`: Exposes CRUD operations for the **MetricsWarm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetricsWarms
    * const metricsWarms = await prisma.metricsWarm.findMany()
    * ```
    */
  get metricsWarm(): Prisma.MetricsWarmDelegate<GlobalReject>;

  /**
   * `prisma.metricsCold`: Exposes CRUD operations for the **MetricsCold** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetricsColds
    * const metricsColds = await prisma.metricsCold.findMany()
    * ```
    */
  get metricsCold(): Prisma.MetricsColdDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.7.1
   * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    MetricsWarm: 'MetricsWarm',
    MetricsCold: 'MetricsCold'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model MetricsWarm
   */


  export type AggregateMetricsWarm = {
    _count: MetricsWarmCountAggregateOutputType | null
    _avg: MetricsWarmAvgAggregateOutputType | null
    _sum: MetricsWarmSumAggregateOutputType | null
    _min: MetricsWarmMinAggregateOutputType | null
    _max: MetricsWarmMaxAggregateOutputType | null
  }

  export type MetricsWarmAvgAggregateOutputType = {
    id: number | null
    neonLatency: number | null
    supabaseLatency: number | null
    planetscaleLatency: number | null
  }

  export type MetricsWarmSumAggregateOutputType = {
    id: number | null
    neonLatency: number | null
    supabaseLatency: number | null
    planetscaleLatency: number | null
  }

  export type MetricsWarmMinAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    query: string | null
    neonLatency: number | null
    supabaseLatency: number | null
    planetscaleLatency: number | null
  }

  export type MetricsWarmMaxAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    query: string | null
    neonLatency: number | null
    supabaseLatency: number | null
    planetscaleLatency: number | null
  }

  export type MetricsWarmCountAggregateOutputType = {
    id: number
    timestamp: number
    query: number
    neonLatency: number
    supabaseLatency: number
    planetscaleLatency: number
    _all: number
  }


  export type MetricsWarmAvgAggregateInputType = {
    id?: true
    neonLatency?: true
    supabaseLatency?: true
    planetscaleLatency?: true
  }

  export type MetricsWarmSumAggregateInputType = {
    id?: true
    neonLatency?: true
    supabaseLatency?: true
    planetscaleLatency?: true
  }

  export type MetricsWarmMinAggregateInputType = {
    id?: true
    timestamp?: true
    query?: true
    neonLatency?: true
    supabaseLatency?: true
    planetscaleLatency?: true
  }

  export type MetricsWarmMaxAggregateInputType = {
    id?: true
    timestamp?: true
    query?: true
    neonLatency?: true
    supabaseLatency?: true
    planetscaleLatency?: true
  }

  export type MetricsWarmCountAggregateInputType = {
    id?: true
    timestamp?: true
    query?: true
    neonLatency?: true
    supabaseLatency?: true
    planetscaleLatency?: true
    _all?: true
  }

  export type MetricsWarmAggregateArgs = {
    /**
     * Filter which MetricsWarm to aggregate.
     * 
    **/
    where?: MetricsWarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricsWarms to fetch.
     * 
    **/
    orderBy?: Enumerable<MetricsWarmOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MetricsWarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricsWarms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricsWarms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetricsWarms
    **/
    _count?: true | MetricsWarmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricsWarmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricsWarmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricsWarmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricsWarmMaxAggregateInputType
  }

  export type GetMetricsWarmAggregateType<T extends MetricsWarmAggregateArgs> = {
        [P in keyof T & keyof AggregateMetricsWarm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetricsWarm[P]>
      : GetScalarType<T[P], AggregateMetricsWarm[P]>
  }




  export type MetricsWarmGroupByArgs = {
    where?: MetricsWarmWhereInput
    orderBy?: Enumerable<MetricsWarmOrderByWithAggregationInput>
    by: Array<MetricsWarmScalarFieldEnum>
    having?: MetricsWarmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricsWarmCountAggregateInputType | true
    _avg?: MetricsWarmAvgAggregateInputType
    _sum?: MetricsWarmSumAggregateInputType
    _min?: MetricsWarmMinAggregateInputType
    _max?: MetricsWarmMaxAggregateInputType
  }


  export type MetricsWarmGroupByOutputType = {
    id: number
    timestamp: Date | null
    query: string
    neonLatency: number
    supabaseLatency: number
    planetscaleLatency: number
    _count: MetricsWarmCountAggregateOutputType | null
    _avg: MetricsWarmAvgAggregateOutputType | null
    _sum: MetricsWarmSumAggregateOutputType | null
    _min: MetricsWarmMinAggregateOutputType | null
    _max: MetricsWarmMaxAggregateOutputType | null
  }

  type GetMetricsWarmGroupByPayload<T extends MetricsWarmGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MetricsWarmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricsWarmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricsWarmGroupByOutputType[P]>
            : GetScalarType<T[P], MetricsWarmGroupByOutputType[P]>
        }
      >
    >


  export type MetricsWarmSelect = {
    id?: boolean
    timestamp?: boolean
    query?: boolean
    neonLatency?: boolean
    supabaseLatency?: boolean
    planetscaleLatency?: boolean
  }


  export type MetricsWarmGetPayload<S extends boolean | null | undefined | MetricsWarmArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MetricsWarm :
    S extends undefined ? never :
    S extends { include: any } & (MetricsWarmArgs | MetricsWarmFindManyArgs)
    ? MetricsWarm 
    : S extends { select: any } & (MetricsWarmArgs | MetricsWarmFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof MetricsWarm ? MetricsWarm[P] : never
  } 
      : MetricsWarm


  type MetricsWarmCountArgs = Merge<
    Omit<MetricsWarmFindManyArgs, 'select' | 'include'> & {
      select?: MetricsWarmCountAggregateInputType | true
    }
  >

  export interface MetricsWarmDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one MetricsWarm that matches the filter.
     * @param {MetricsWarmFindUniqueArgs} args - Arguments to find a MetricsWarm
     * @example
     * // Get one MetricsWarm
     * const metricsWarm = await prisma.metricsWarm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MetricsWarmFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MetricsWarmFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MetricsWarm'> extends True ? Prisma__MetricsWarmClient<MetricsWarmGetPayload<T>> : Prisma__MetricsWarmClient<MetricsWarmGetPayload<T> | null, null>

    /**
     * Find one MetricsWarm that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MetricsWarmFindUniqueOrThrowArgs} args - Arguments to find a MetricsWarm
     * @example
     * // Get one MetricsWarm
     * const metricsWarm = await prisma.metricsWarm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MetricsWarmFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MetricsWarmFindUniqueOrThrowArgs>
    ): Prisma__MetricsWarmClient<MetricsWarmGetPayload<T>>

    /**
     * Find the first MetricsWarm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsWarmFindFirstArgs} args - Arguments to find a MetricsWarm
     * @example
     * // Get one MetricsWarm
     * const metricsWarm = await prisma.metricsWarm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MetricsWarmFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MetricsWarmFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MetricsWarm'> extends True ? Prisma__MetricsWarmClient<MetricsWarmGetPayload<T>> : Prisma__MetricsWarmClient<MetricsWarmGetPayload<T> | null, null>

    /**
     * Find the first MetricsWarm that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsWarmFindFirstOrThrowArgs} args - Arguments to find a MetricsWarm
     * @example
     * // Get one MetricsWarm
     * const metricsWarm = await prisma.metricsWarm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MetricsWarmFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MetricsWarmFindFirstOrThrowArgs>
    ): Prisma__MetricsWarmClient<MetricsWarmGetPayload<T>>

    /**
     * Find zero or more MetricsWarms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsWarmFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetricsWarms
     * const metricsWarms = await prisma.metricsWarm.findMany()
     * 
     * // Get first 10 MetricsWarms
     * const metricsWarms = await prisma.metricsWarm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricsWarmWithIdOnly = await prisma.metricsWarm.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MetricsWarmFindManyArgs>(
      args?: SelectSubset<T, MetricsWarmFindManyArgs>
    ): PrismaPromise<Array<MetricsWarmGetPayload<T>>>

    /**
     * Create a MetricsWarm.
     * @param {MetricsWarmCreateArgs} args - Arguments to create a MetricsWarm.
     * @example
     * // Create one MetricsWarm
     * const MetricsWarm = await prisma.metricsWarm.create({
     *   data: {
     *     // ... data to create a MetricsWarm
     *   }
     * })
     * 
    **/
    create<T extends MetricsWarmCreateArgs>(
      args: SelectSubset<T, MetricsWarmCreateArgs>
    ): Prisma__MetricsWarmClient<MetricsWarmGetPayload<T>>

    /**
     * Create many MetricsWarms.
     *     @param {MetricsWarmCreateManyArgs} args - Arguments to create many MetricsWarms.
     *     @example
     *     // Create many MetricsWarms
     *     const metricsWarm = await prisma.metricsWarm.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MetricsWarmCreateManyArgs>(
      args?: SelectSubset<T, MetricsWarmCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a MetricsWarm.
     * @param {MetricsWarmDeleteArgs} args - Arguments to delete one MetricsWarm.
     * @example
     * // Delete one MetricsWarm
     * const MetricsWarm = await prisma.metricsWarm.delete({
     *   where: {
     *     // ... filter to delete one MetricsWarm
     *   }
     * })
     * 
    **/
    delete<T extends MetricsWarmDeleteArgs>(
      args: SelectSubset<T, MetricsWarmDeleteArgs>
    ): Prisma__MetricsWarmClient<MetricsWarmGetPayload<T>>

    /**
     * Update one MetricsWarm.
     * @param {MetricsWarmUpdateArgs} args - Arguments to update one MetricsWarm.
     * @example
     * // Update one MetricsWarm
     * const metricsWarm = await prisma.metricsWarm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MetricsWarmUpdateArgs>(
      args: SelectSubset<T, MetricsWarmUpdateArgs>
    ): Prisma__MetricsWarmClient<MetricsWarmGetPayload<T>>

    /**
     * Delete zero or more MetricsWarms.
     * @param {MetricsWarmDeleteManyArgs} args - Arguments to filter MetricsWarms to delete.
     * @example
     * // Delete a few MetricsWarms
     * const { count } = await prisma.metricsWarm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MetricsWarmDeleteManyArgs>(
      args?: SelectSubset<T, MetricsWarmDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetricsWarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsWarmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetricsWarms
     * const metricsWarm = await prisma.metricsWarm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MetricsWarmUpdateManyArgs>(
      args: SelectSubset<T, MetricsWarmUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one MetricsWarm.
     * @param {MetricsWarmUpsertArgs} args - Arguments to update or create a MetricsWarm.
     * @example
     * // Update or create a MetricsWarm
     * const metricsWarm = await prisma.metricsWarm.upsert({
     *   create: {
     *     // ... data to create a MetricsWarm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetricsWarm we want to update
     *   }
     * })
    **/
    upsert<T extends MetricsWarmUpsertArgs>(
      args: SelectSubset<T, MetricsWarmUpsertArgs>
    ): Prisma__MetricsWarmClient<MetricsWarmGetPayload<T>>

    /**
     * Count the number of MetricsWarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsWarmCountArgs} args - Arguments to filter MetricsWarms to count.
     * @example
     * // Count the number of MetricsWarms
     * const count = await prisma.metricsWarm.count({
     *   where: {
     *     // ... the filter for the MetricsWarms we want to count
     *   }
     * })
    **/
    count<T extends MetricsWarmCountArgs>(
      args?: Subset<T, MetricsWarmCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricsWarmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetricsWarm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsWarmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetricsWarmAggregateArgs>(args: Subset<T, MetricsWarmAggregateArgs>): PrismaPromise<GetMetricsWarmAggregateType<T>>

    /**
     * Group by MetricsWarm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsWarmGroupByArgs} args - Group by arguments.
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
      T extends MetricsWarmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricsWarmGroupByArgs['orderBy'] }
        : { orderBy?: MetricsWarmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MetricsWarmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricsWarmGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MetricsWarm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MetricsWarmClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MetricsWarm base type for findUnique actions
   */
  export type MetricsWarmFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the MetricsWarm
     * 
    **/
    select?: MetricsWarmSelect | null
    /**
     * Filter, which MetricsWarm to fetch.
     * 
    **/
    where: MetricsWarmWhereUniqueInput
  }

  /**
   * MetricsWarm: findUnique
   */
  export interface MetricsWarmFindUniqueArgs extends MetricsWarmFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MetricsWarm findUniqueOrThrow
   */
  export type MetricsWarmFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MetricsWarm
     * 
    **/
    select?: MetricsWarmSelect | null
    /**
     * Filter, which MetricsWarm to fetch.
     * 
    **/
    where: MetricsWarmWhereUniqueInput
  }


  /**
   * MetricsWarm base type for findFirst actions
   */
  export type MetricsWarmFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the MetricsWarm
     * 
    **/
    select?: MetricsWarmSelect | null
    /**
     * Filter, which MetricsWarm to fetch.
     * 
    **/
    where?: MetricsWarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricsWarms to fetch.
     * 
    **/
    orderBy?: Enumerable<MetricsWarmOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetricsWarms.
     * 
    **/
    cursor?: MetricsWarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricsWarms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricsWarms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetricsWarms.
     * 
    **/
    distinct?: Enumerable<MetricsWarmScalarFieldEnum>
  }

  /**
   * MetricsWarm: findFirst
   */
  export interface MetricsWarmFindFirstArgs extends MetricsWarmFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MetricsWarm findFirstOrThrow
   */
  export type MetricsWarmFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MetricsWarm
     * 
    **/
    select?: MetricsWarmSelect | null
    /**
     * Filter, which MetricsWarm to fetch.
     * 
    **/
    where?: MetricsWarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricsWarms to fetch.
     * 
    **/
    orderBy?: Enumerable<MetricsWarmOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetricsWarms.
     * 
    **/
    cursor?: MetricsWarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricsWarms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricsWarms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetricsWarms.
     * 
    **/
    distinct?: Enumerable<MetricsWarmScalarFieldEnum>
  }


  /**
   * MetricsWarm findMany
   */
  export type MetricsWarmFindManyArgs = {
    /**
     * Select specific fields to fetch from the MetricsWarm
     * 
    **/
    select?: MetricsWarmSelect | null
    /**
     * Filter, which MetricsWarms to fetch.
     * 
    **/
    where?: MetricsWarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricsWarms to fetch.
     * 
    **/
    orderBy?: Enumerable<MetricsWarmOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetricsWarms.
     * 
    **/
    cursor?: MetricsWarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricsWarms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricsWarms.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MetricsWarmScalarFieldEnum>
  }


  /**
   * MetricsWarm create
   */
  export type MetricsWarmCreateArgs = {
    /**
     * Select specific fields to fetch from the MetricsWarm
     * 
    **/
    select?: MetricsWarmSelect | null
    /**
     * The data needed to create a MetricsWarm.
     * 
    **/
    data: XOR<MetricsWarmCreateInput, MetricsWarmUncheckedCreateInput>
  }


  /**
   * MetricsWarm createMany
   */
  export type MetricsWarmCreateManyArgs = {
    /**
     * The data used to create many MetricsWarms.
     * 
    **/
    data: Enumerable<MetricsWarmCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * MetricsWarm update
   */
  export type MetricsWarmUpdateArgs = {
    /**
     * Select specific fields to fetch from the MetricsWarm
     * 
    **/
    select?: MetricsWarmSelect | null
    /**
     * The data needed to update a MetricsWarm.
     * 
    **/
    data: XOR<MetricsWarmUpdateInput, MetricsWarmUncheckedUpdateInput>
    /**
     * Choose, which MetricsWarm to update.
     * 
    **/
    where: MetricsWarmWhereUniqueInput
  }


  /**
   * MetricsWarm updateMany
   */
  export type MetricsWarmUpdateManyArgs = {
    /**
     * The data used to update MetricsWarms.
     * 
    **/
    data: XOR<MetricsWarmUpdateManyMutationInput, MetricsWarmUncheckedUpdateManyInput>
    /**
     * Filter which MetricsWarms to update
     * 
    **/
    where?: MetricsWarmWhereInput
  }


  /**
   * MetricsWarm upsert
   */
  export type MetricsWarmUpsertArgs = {
    /**
     * Select specific fields to fetch from the MetricsWarm
     * 
    **/
    select?: MetricsWarmSelect | null
    /**
     * The filter to search for the MetricsWarm to update in case it exists.
     * 
    **/
    where: MetricsWarmWhereUniqueInput
    /**
     * In case the MetricsWarm found by the `where` argument doesn't exist, create a new MetricsWarm with this data.
     * 
    **/
    create: XOR<MetricsWarmCreateInput, MetricsWarmUncheckedCreateInput>
    /**
     * In case the MetricsWarm was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MetricsWarmUpdateInput, MetricsWarmUncheckedUpdateInput>
  }


  /**
   * MetricsWarm delete
   */
  export type MetricsWarmDeleteArgs = {
    /**
     * Select specific fields to fetch from the MetricsWarm
     * 
    **/
    select?: MetricsWarmSelect | null
    /**
     * Filter which MetricsWarm to delete.
     * 
    **/
    where: MetricsWarmWhereUniqueInput
  }


  /**
   * MetricsWarm deleteMany
   */
  export type MetricsWarmDeleteManyArgs = {
    /**
     * Filter which MetricsWarms to delete
     * 
    **/
    where?: MetricsWarmWhereInput
  }


  /**
   * MetricsWarm without action
   */
  export type MetricsWarmArgs = {
    /**
     * Select specific fields to fetch from the MetricsWarm
     * 
    **/
    select?: MetricsWarmSelect | null
  }



  /**
   * Model MetricsCold
   */


  export type AggregateMetricsCold = {
    _count: MetricsColdCountAggregateOutputType | null
    _avg: MetricsColdAvgAggregateOutputType | null
    _sum: MetricsColdSumAggregateOutputType | null
    _min: MetricsColdMinAggregateOutputType | null
    _max: MetricsColdMaxAggregateOutputType | null
  }

  export type MetricsColdAvgAggregateOutputType = {
    id: number | null
    neonLatency: number | null
    supabaseLatency: number | null
    planetscaleLatency: number | null
  }

  export type MetricsColdSumAggregateOutputType = {
    id: number | null
    neonLatency: number | null
    supabaseLatency: number | null
    planetscaleLatency: number | null
  }

  export type MetricsColdMinAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    query: string | null
    neonLatency: number | null
    supabaseLatency: number | null
    planetscaleLatency: number | null
  }

  export type MetricsColdMaxAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    query: string | null
    neonLatency: number | null
    supabaseLatency: number | null
    planetscaleLatency: number | null
  }

  export type MetricsColdCountAggregateOutputType = {
    id: number
    timestamp: number
    query: number
    neonLatency: number
    supabaseLatency: number
    planetscaleLatency: number
    _all: number
  }


  export type MetricsColdAvgAggregateInputType = {
    id?: true
    neonLatency?: true
    supabaseLatency?: true
    planetscaleLatency?: true
  }

  export type MetricsColdSumAggregateInputType = {
    id?: true
    neonLatency?: true
    supabaseLatency?: true
    planetscaleLatency?: true
  }

  export type MetricsColdMinAggregateInputType = {
    id?: true
    timestamp?: true
    query?: true
    neonLatency?: true
    supabaseLatency?: true
    planetscaleLatency?: true
  }

  export type MetricsColdMaxAggregateInputType = {
    id?: true
    timestamp?: true
    query?: true
    neonLatency?: true
    supabaseLatency?: true
    planetscaleLatency?: true
  }

  export type MetricsColdCountAggregateInputType = {
    id?: true
    timestamp?: true
    query?: true
    neonLatency?: true
    supabaseLatency?: true
    planetscaleLatency?: true
    _all?: true
  }

  export type MetricsColdAggregateArgs = {
    /**
     * Filter which MetricsCold to aggregate.
     * 
    **/
    where?: MetricsColdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricsColds to fetch.
     * 
    **/
    orderBy?: Enumerable<MetricsColdOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MetricsColdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricsColds from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricsColds.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetricsColds
    **/
    _count?: true | MetricsColdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricsColdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricsColdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricsColdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricsColdMaxAggregateInputType
  }

  export type GetMetricsColdAggregateType<T extends MetricsColdAggregateArgs> = {
        [P in keyof T & keyof AggregateMetricsCold]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetricsCold[P]>
      : GetScalarType<T[P], AggregateMetricsCold[P]>
  }




  export type MetricsColdGroupByArgs = {
    where?: MetricsColdWhereInput
    orderBy?: Enumerable<MetricsColdOrderByWithAggregationInput>
    by: Array<MetricsColdScalarFieldEnum>
    having?: MetricsColdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricsColdCountAggregateInputType | true
    _avg?: MetricsColdAvgAggregateInputType
    _sum?: MetricsColdSumAggregateInputType
    _min?: MetricsColdMinAggregateInputType
    _max?: MetricsColdMaxAggregateInputType
  }


  export type MetricsColdGroupByOutputType = {
    id: number
    timestamp: Date | null
    query: string
    neonLatency: number
    supabaseLatency: number
    planetscaleLatency: number
    _count: MetricsColdCountAggregateOutputType | null
    _avg: MetricsColdAvgAggregateOutputType | null
    _sum: MetricsColdSumAggregateOutputType | null
    _min: MetricsColdMinAggregateOutputType | null
    _max: MetricsColdMaxAggregateOutputType | null
  }

  type GetMetricsColdGroupByPayload<T extends MetricsColdGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MetricsColdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricsColdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricsColdGroupByOutputType[P]>
            : GetScalarType<T[P], MetricsColdGroupByOutputType[P]>
        }
      >
    >


  export type MetricsColdSelect = {
    id?: boolean
    timestamp?: boolean
    query?: boolean
    neonLatency?: boolean
    supabaseLatency?: boolean
    planetscaleLatency?: boolean
  }


  export type MetricsColdGetPayload<S extends boolean | null | undefined | MetricsColdArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MetricsCold :
    S extends undefined ? never :
    S extends { include: any } & (MetricsColdArgs | MetricsColdFindManyArgs)
    ? MetricsCold 
    : S extends { select: any } & (MetricsColdArgs | MetricsColdFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof MetricsCold ? MetricsCold[P] : never
  } 
      : MetricsCold


  type MetricsColdCountArgs = Merge<
    Omit<MetricsColdFindManyArgs, 'select' | 'include'> & {
      select?: MetricsColdCountAggregateInputType | true
    }
  >

  export interface MetricsColdDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one MetricsCold that matches the filter.
     * @param {MetricsColdFindUniqueArgs} args - Arguments to find a MetricsCold
     * @example
     * // Get one MetricsCold
     * const metricsCold = await prisma.metricsCold.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MetricsColdFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MetricsColdFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MetricsCold'> extends True ? Prisma__MetricsColdClient<MetricsColdGetPayload<T>> : Prisma__MetricsColdClient<MetricsColdGetPayload<T> | null, null>

    /**
     * Find one MetricsCold that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MetricsColdFindUniqueOrThrowArgs} args - Arguments to find a MetricsCold
     * @example
     * // Get one MetricsCold
     * const metricsCold = await prisma.metricsCold.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MetricsColdFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MetricsColdFindUniqueOrThrowArgs>
    ): Prisma__MetricsColdClient<MetricsColdGetPayload<T>>

    /**
     * Find the first MetricsCold that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsColdFindFirstArgs} args - Arguments to find a MetricsCold
     * @example
     * // Get one MetricsCold
     * const metricsCold = await prisma.metricsCold.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MetricsColdFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MetricsColdFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MetricsCold'> extends True ? Prisma__MetricsColdClient<MetricsColdGetPayload<T>> : Prisma__MetricsColdClient<MetricsColdGetPayload<T> | null, null>

    /**
     * Find the first MetricsCold that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsColdFindFirstOrThrowArgs} args - Arguments to find a MetricsCold
     * @example
     * // Get one MetricsCold
     * const metricsCold = await prisma.metricsCold.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MetricsColdFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MetricsColdFindFirstOrThrowArgs>
    ): Prisma__MetricsColdClient<MetricsColdGetPayload<T>>

    /**
     * Find zero or more MetricsColds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsColdFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetricsColds
     * const metricsColds = await prisma.metricsCold.findMany()
     * 
     * // Get first 10 MetricsColds
     * const metricsColds = await prisma.metricsCold.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricsColdWithIdOnly = await prisma.metricsCold.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MetricsColdFindManyArgs>(
      args?: SelectSubset<T, MetricsColdFindManyArgs>
    ): PrismaPromise<Array<MetricsColdGetPayload<T>>>

    /**
     * Create a MetricsCold.
     * @param {MetricsColdCreateArgs} args - Arguments to create a MetricsCold.
     * @example
     * // Create one MetricsCold
     * const MetricsCold = await prisma.metricsCold.create({
     *   data: {
     *     // ... data to create a MetricsCold
     *   }
     * })
     * 
    **/
    create<T extends MetricsColdCreateArgs>(
      args: SelectSubset<T, MetricsColdCreateArgs>
    ): Prisma__MetricsColdClient<MetricsColdGetPayload<T>>

    /**
     * Create many MetricsColds.
     *     @param {MetricsColdCreateManyArgs} args - Arguments to create many MetricsColds.
     *     @example
     *     // Create many MetricsColds
     *     const metricsCold = await prisma.metricsCold.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MetricsColdCreateManyArgs>(
      args?: SelectSubset<T, MetricsColdCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a MetricsCold.
     * @param {MetricsColdDeleteArgs} args - Arguments to delete one MetricsCold.
     * @example
     * // Delete one MetricsCold
     * const MetricsCold = await prisma.metricsCold.delete({
     *   where: {
     *     // ... filter to delete one MetricsCold
     *   }
     * })
     * 
    **/
    delete<T extends MetricsColdDeleteArgs>(
      args: SelectSubset<T, MetricsColdDeleteArgs>
    ): Prisma__MetricsColdClient<MetricsColdGetPayload<T>>

    /**
     * Update one MetricsCold.
     * @param {MetricsColdUpdateArgs} args - Arguments to update one MetricsCold.
     * @example
     * // Update one MetricsCold
     * const metricsCold = await prisma.metricsCold.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MetricsColdUpdateArgs>(
      args: SelectSubset<T, MetricsColdUpdateArgs>
    ): Prisma__MetricsColdClient<MetricsColdGetPayload<T>>

    /**
     * Delete zero or more MetricsColds.
     * @param {MetricsColdDeleteManyArgs} args - Arguments to filter MetricsColds to delete.
     * @example
     * // Delete a few MetricsColds
     * const { count } = await prisma.metricsCold.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MetricsColdDeleteManyArgs>(
      args?: SelectSubset<T, MetricsColdDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetricsColds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsColdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetricsColds
     * const metricsCold = await prisma.metricsCold.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MetricsColdUpdateManyArgs>(
      args: SelectSubset<T, MetricsColdUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one MetricsCold.
     * @param {MetricsColdUpsertArgs} args - Arguments to update or create a MetricsCold.
     * @example
     * // Update or create a MetricsCold
     * const metricsCold = await prisma.metricsCold.upsert({
     *   create: {
     *     // ... data to create a MetricsCold
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetricsCold we want to update
     *   }
     * })
    **/
    upsert<T extends MetricsColdUpsertArgs>(
      args: SelectSubset<T, MetricsColdUpsertArgs>
    ): Prisma__MetricsColdClient<MetricsColdGetPayload<T>>

    /**
     * Count the number of MetricsColds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsColdCountArgs} args - Arguments to filter MetricsColds to count.
     * @example
     * // Count the number of MetricsColds
     * const count = await prisma.metricsCold.count({
     *   where: {
     *     // ... the filter for the MetricsColds we want to count
     *   }
     * })
    **/
    count<T extends MetricsColdCountArgs>(
      args?: Subset<T, MetricsColdCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricsColdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetricsCold.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsColdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetricsColdAggregateArgs>(args: Subset<T, MetricsColdAggregateArgs>): PrismaPromise<GetMetricsColdAggregateType<T>>

    /**
     * Group by MetricsCold.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsColdGroupByArgs} args - Group by arguments.
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
      T extends MetricsColdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricsColdGroupByArgs['orderBy'] }
        : { orderBy?: MetricsColdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MetricsColdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricsColdGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MetricsCold.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MetricsColdClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MetricsCold base type for findUnique actions
   */
  export type MetricsColdFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the MetricsCold
     * 
    **/
    select?: MetricsColdSelect | null
    /**
     * Filter, which MetricsCold to fetch.
     * 
    **/
    where: MetricsColdWhereUniqueInput
  }

  /**
   * MetricsCold: findUnique
   */
  export interface MetricsColdFindUniqueArgs extends MetricsColdFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MetricsCold findUniqueOrThrow
   */
  export type MetricsColdFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MetricsCold
     * 
    **/
    select?: MetricsColdSelect | null
    /**
     * Filter, which MetricsCold to fetch.
     * 
    **/
    where: MetricsColdWhereUniqueInput
  }


  /**
   * MetricsCold base type for findFirst actions
   */
  export type MetricsColdFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the MetricsCold
     * 
    **/
    select?: MetricsColdSelect | null
    /**
     * Filter, which MetricsCold to fetch.
     * 
    **/
    where?: MetricsColdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricsColds to fetch.
     * 
    **/
    orderBy?: Enumerable<MetricsColdOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetricsColds.
     * 
    **/
    cursor?: MetricsColdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricsColds from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricsColds.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetricsColds.
     * 
    **/
    distinct?: Enumerable<MetricsColdScalarFieldEnum>
  }

  /**
   * MetricsCold: findFirst
   */
  export interface MetricsColdFindFirstArgs extends MetricsColdFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MetricsCold findFirstOrThrow
   */
  export type MetricsColdFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MetricsCold
     * 
    **/
    select?: MetricsColdSelect | null
    /**
     * Filter, which MetricsCold to fetch.
     * 
    **/
    where?: MetricsColdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricsColds to fetch.
     * 
    **/
    orderBy?: Enumerable<MetricsColdOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetricsColds.
     * 
    **/
    cursor?: MetricsColdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricsColds from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricsColds.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetricsColds.
     * 
    **/
    distinct?: Enumerable<MetricsColdScalarFieldEnum>
  }


  /**
   * MetricsCold findMany
   */
  export type MetricsColdFindManyArgs = {
    /**
     * Select specific fields to fetch from the MetricsCold
     * 
    **/
    select?: MetricsColdSelect | null
    /**
     * Filter, which MetricsColds to fetch.
     * 
    **/
    where?: MetricsColdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricsColds to fetch.
     * 
    **/
    orderBy?: Enumerable<MetricsColdOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetricsColds.
     * 
    **/
    cursor?: MetricsColdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricsColds from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricsColds.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MetricsColdScalarFieldEnum>
  }


  /**
   * MetricsCold create
   */
  export type MetricsColdCreateArgs = {
    /**
     * Select specific fields to fetch from the MetricsCold
     * 
    **/
    select?: MetricsColdSelect | null
    /**
     * The data needed to create a MetricsCold.
     * 
    **/
    data: XOR<MetricsColdCreateInput, MetricsColdUncheckedCreateInput>
  }


  /**
   * MetricsCold createMany
   */
  export type MetricsColdCreateManyArgs = {
    /**
     * The data used to create many MetricsColds.
     * 
    **/
    data: Enumerable<MetricsColdCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * MetricsCold update
   */
  export type MetricsColdUpdateArgs = {
    /**
     * Select specific fields to fetch from the MetricsCold
     * 
    **/
    select?: MetricsColdSelect | null
    /**
     * The data needed to update a MetricsCold.
     * 
    **/
    data: XOR<MetricsColdUpdateInput, MetricsColdUncheckedUpdateInput>
    /**
     * Choose, which MetricsCold to update.
     * 
    **/
    where: MetricsColdWhereUniqueInput
  }


  /**
   * MetricsCold updateMany
   */
  export type MetricsColdUpdateManyArgs = {
    /**
     * The data used to update MetricsColds.
     * 
    **/
    data: XOR<MetricsColdUpdateManyMutationInput, MetricsColdUncheckedUpdateManyInput>
    /**
     * Filter which MetricsColds to update
     * 
    **/
    where?: MetricsColdWhereInput
  }


  /**
   * MetricsCold upsert
   */
  export type MetricsColdUpsertArgs = {
    /**
     * Select specific fields to fetch from the MetricsCold
     * 
    **/
    select?: MetricsColdSelect | null
    /**
     * The filter to search for the MetricsCold to update in case it exists.
     * 
    **/
    where: MetricsColdWhereUniqueInput
    /**
     * In case the MetricsCold found by the `where` argument doesn't exist, create a new MetricsCold with this data.
     * 
    **/
    create: XOR<MetricsColdCreateInput, MetricsColdUncheckedCreateInput>
    /**
     * In case the MetricsCold was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MetricsColdUpdateInput, MetricsColdUncheckedUpdateInput>
  }


  /**
   * MetricsCold delete
   */
  export type MetricsColdDeleteArgs = {
    /**
     * Select specific fields to fetch from the MetricsCold
     * 
    **/
    select?: MetricsColdSelect | null
    /**
     * Filter which MetricsCold to delete.
     * 
    **/
    where: MetricsColdWhereUniqueInput
  }


  /**
   * MetricsCold deleteMany
   */
  export type MetricsColdDeleteManyArgs = {
    /**
     * Filter which MetricsColds to delete
     * 
    **/
    where?: MetricsColdWhereInput
  }


  /**
   * MetricsCold without action
   */
  export type MetricsColdArgs = {
    /**
     * Select specific fields to fetch from the MetricsCold
     * 
    **/
    select?: MetricsColdSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const MetricsColdScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    query: 'query',
    neonLatency: 'neonLatency',
    supabaseLatency: 'supabaseLatency',
    planetscaleLatency: 'planetscaleLatency'
  };

  export type MetricsColdScalarFieldEnum = (typeof MetricsColdScalarFieldEnum)[keyof typeof MetricsColdScalarFieldEnum]


  export const MetricsWarmScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    query: 'query',
    neonLatency: 'neonLatency',
    supabaseLatency: 'supabaseLatency',
    planetscaleLatency: 'planetscaleLatency'
  };

  export type MetricsWarmScalarFieldEnum = (typeof MetricsWarmScalarFieldEnum)[keyof typeof MetricsWarmScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type MetricsWarmWhereInput = {
    AND?: Enumerable<MetricsWarmWhereInput>
    OR?: Enumerable<MetricsWarmWhereInput>
    NOT?: Enumerable<MetricsWarmWhereInput>
    id?: IntFilter | number
    timestamp?: DateTimeNullableFilter | Date | string | null
    query?: StringFilter | string
    neonLatency?: IntFilter | number
    supabaseLatency?: IntFilter | number
    planetscaleLatency?: IntFilter | number
  }

  export type MetricsWarmOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    query?: SortOrder
    neonLatency?: SortOrder
    supabaseLatency?: SortOrder
    planetscaleLatency?: SortOrder
  }

  export type MetricsWarmWhereUniqueInput = {
    id?: number
  }

  export type MetricsWarmOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    query?: SortOrder
    neonLatency?: SortOrder
    supabaseLatency?: SortOrder
    planetscaleLatency?: SortOrder
    _count?: MetricsWarmCountOrderByAggregateInput
    _avg?: MetricsWarmAvgOrderByAggregateInput
    _max?: MetricsWarmMaxOrderByAggregateInput
    _min?: MetricsWarmMinOrderByAggregateInput
    _sum?: MetricsWarmSumOrderByAggregateInput
  }

  export type MetricsWarmScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MetricsWarmScalarWhereWithAggregatesInput>
    OR?: Enumerable<MetricsWarmScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MetricsWarmScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    timestamp?: DateTimeNullableWithAggregatesFilter | Date | string | null
    query?: StringWithAggregatesFilter | string
    neonLatency?: IntWithAggregatesFilter | number
    supabaseLatency?: IntWithAggregatesFilter | number
    planetscaleLatency?: IntWithAggregatesFilter | number
  }

  export type MetricsColdWhereInput = {
    AND?: Enumerable<MetricsColdWhereInput>
    OR?: Enumerable<MetricsColdWhereInput>
    NOT?: Enumerable<MetricsColdWhereInput>
    id?: IntFilter | number
    timestamp?: DateTimeNullableFilter | Date | string | null
    query?: StringFilter | string
    neonLatency?: IntFilter | number
    supabaseLatency?: IntFilter | number
    planetscaleLatency?: IntFilter | number
  }

  export type MetricsColdOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    query?: SortOrder
    neonLatency?: SortOrder
    supabaseLatency?: SortOrder
    planetscaleLatency?: SortOrder
  }

  export type MetricsColdWhereUniqueInput = {
    id?: number
  }

  export type MetricsColdOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    query?: SortOrder
    neonLatency?: SortOrder
    supabaseLatency?: SortOrder
    planetscaleLatency?: SortOrder
    _count?: MetricsColdCountOrderByAggregateInput
    _avg?: MetricsColdAvgOrderByAggregateInput
    _max?: MetricsColdMaxOrderByAggregateInput
    _min?: MetricsColdMinOrderByAggregateInput
    _sum?: MetricsColdSumOrderByAggregateInput
  }

  export type MetricsColdScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MetricsColdScalarWhereWithAggregatesInput>
    OR?: Enumerable<MetricsColdScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MetricsColdScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    timestamp?: DateTimeNullableWithAggregatesFilter | Date | string | null
    query?: StringWithAggregatesFilter | string
    neonLatency?: IntWithAggregatesFilter | number
    supabaseLatency?: IntWithAggregatesFilter | number
    planetscaleLatency?: IntWithAggregatesFilter | number
  }

  export type MetricsWarmCreateInput = {
    timestamp?: Date | string | null
    query: string
    neonLatency: number
    supabaseLatency: number
    planetscaleLatency: number
  }

  export type MetricsWarmUncheckedCreateInput = {
    id?: number
    timestamp?: Date | string | null
    query: string
    neonLatency: number
    supabaseLatency: number
    planetscaleLatency: number
  }

  export type MetricsWarmUpdateInput = {
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    query?: StringFieldUpdateOperationsInput | string
    neonLatency?: IntFieldUpdateOperationsInput | number
    supabaseLatency?: IntFieldUpdateOperationsInput | number
    planetscaleLatency?: IntFieldUpdateOperationsInput | number
  }

  export type MetricsWarmUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    query?: StringFieldUpdateOperationsInput | string
    neonLatency?: IntFieldUpdateOperationsInput | number
    supabaseLatency?: IntFieldUpdateOperationsInput | number
    planetscaleLatency?: IntFieldUpdateOperationsInput | number
  }

  export type MetricsWarmCreateManyInput = {
    id?: number
    timestamp?: Date | string | null
    query: string
    neonLatency: number
    supabaseLatency: number
    planetscaleLatency: number
  }

  export type MetricsWarmUpdateManyMutationInput = {
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    query?: StringFieldUpdateOperationsInput | string
    neonLatency?: IntFieldUpdateOperationsInput | number
    supabaseLatency?: IntFieldUpdateOperationsInput | number
    planetscaleLatency?: IntFieldUpdateOperationsInput | number
  }

  export type MetricsWarmUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    query?: StringFieldUpdateOperationsInput | string
    neonLatency?: IntFieldUpdateOperationsInput | number
    supabaseLatency?: IntFieldUpdateOperationsInput | number
    planetscaleLatency?: IntFieldUpdateOperationsInput | number
  }

  export type MetricsColdCreateInput = {
    timestamp?: Date | string | null
    query: string
    neonLatency: number
    supabaseLatency: number
    planetscaleLatency: number
  }

  export type MetricsColdUncheckedCreateInput = {
    id?: number
    timestamp?: Date | string | null
    query: string
    neonLatency: number
    supabaseLatency: number
    planetscaleLatency: number
  }

  export type MetricsColdUpdateInput = {
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    query?: StringFieldUpdateOperationsInput | string
    neonLatency?: IntFieldUpdateOperationsInput | number
    supabaseLatency?: IntFieldUpdateOperationsInput | number
    planetscaleLatency?: IntFieldUpdateOperationsInput | number
  }

  export type MetricsColdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    query?: StringFieldUpdateOperationsInput | string
    neonLatency?: IntFieldUpdateOperationsInput | number
    supabaseLatency?: IntFieldUpdateOperationsInput | number
    planetscaleLatency?: IntFieldUpdateOperationsInput | number
  }

  export type MetricsColdCreateManyInput = {
    id?: number
    timestamp?: Date | string | null
    query: string
    neonLatency: number
    supabaseLatency: number
    planetscaleLatency: number
  }

  export type MetricsColdUpdateManyMutationInput = {
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    query?: StringFieldUpdateOperationsInput | string
    neonLatency?: IntFieldUpdateOperationsInput | number
    supabaseLatency?: IntFieldUpdateOperationsInput | number
    planetscaleLatency?: IntFieldUpdateOperationsInput | number
  }

  export type MetricsColdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    query?: StringFieldUpdateOperationsInput | string
    neonLatency?: IntFieldUpdateOperationsInput | number
    supabaseLatency?: IntFieldUpdateOperationsInput | number
    planetscaleLatency?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type MetricsWarmCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    query?: SortOrder
    neonLatency?: SortOrder
    supabaseLatency?: SortOrder
    planetscaleLatency?: SortOrder
  }

  export type MetricsWarmAvgOrderByAggregateInput = {
    id?: SortOrder
    neonLatency?: SortOrder
    supabaseLatency?: SortOrder
    planetscaleLatency?: SortOrder
  }

  export type MetricsWarmMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    query?: SortOrder
    neonLatency?: SortOrder
    supabaseLatency?: SortOrder
    planetscaleLatency?: SortOrder
  }

  export type MetricsWarmMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    query?: SortOrder
    neonLatency?: SortOrder
    supabaseLatency?: SortOrder
    planetscaleLatency?: SortOrder
  }

  export type MetricsWarmSumOrderByAggregateInput = {
    id?: SortOrder
    neonLatency?: SortOrder
    supabaseLatency?: SortOrder
    planetscaleLatency?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type MetricsColdCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    query?: SortOrder
    neonLatency?: SortOrder
    supabaseLatency?: SortOrder
    planetscaleLatency?: SortOrder
  }

  export type MetricsColdAvgOrderByAggregateInput = {
    id?: SortOrder
    neonLatency?: SortOrder
    supabaseLatency?: SortOrder
    planetscaleLatency?: SortOrder
  }

  export type MetricsColdMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    query?: SortOrder
    neonLatency?: SortOrder
    supabaseLatency?: SortOrder
    planetscaleLatency?: SortOrder
  }

  export type MetricsColdMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    query?: SortOrder
    neonLatency?: SortOrder
    supabaseLatency?: SortOrder
    planetscaleLatency?: SortOrder
  }

  export type MetricsColdSumOrderByAggregateInput = {
    id?: SortOrder
    neonLatency?: SortOrder
    supabaseLatency?: SortOrder
    planetscaleLatency?: SortOrder
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
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