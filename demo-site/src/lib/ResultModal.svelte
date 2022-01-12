<script lang="ts">
  import type path from 'path/posix'

  export let message:
    | {
        details: ParsedApcCert | null
        status: string
      }
    | {
        error: string
      }

  interface ParsedApcCert {
    fullName: string
    issueDate: Date
    expiryDate: Date
    practiceScope: string
    conditions: string | null
  }
</script>

<div class="container">
  {#if 'error' in message}
  <div class="error-message">
    {message.error}
  </div>
  {:else if message.details !== null}
    <table>
      <tr>
        <th> key </th>
        <th> value </th>
      </tr>
      {#each Object.keys(message.details) as key}
        <tr>
          <td>{key}</td>
          <td>{message.details[key]}</td>
        </tr>
      {/each}
    </table>
  {:else}
  <div class="error-message">
    Certificate did not match any known Physioboard APC certificates. Make sure you upload the original APC certificate that was sent to you electronically.
  </div>
  {/if}
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    table {
      border-spacing: 0;
      $table-border-color: rgb(58, 58, 58);

      tr {
        th {
          text-align: left;
          background-color: #efefef;
        }
        th,
        td {
          padding: 5px;
          border-top: 1px solid $table-border-color;
        }
        &:nth-child(odd) {
          background-color: rgb(245, 245, 245);
        }

        td:nth-child(even) {
          text-transform: capitalize;
        }
      }
      border-bottom: 1px solid $table-border-color;
      border-left: 1px solid $table-border-color;
      border-right: 1px solid $table-border-color;
    }
    .error-message {
        padding: 1rem;
    }
  }
</style>
